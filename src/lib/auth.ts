import { db } from './db';
import { z } from 'zod';
import { hash, compare } from 'bcrypt';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = loginSchema.extend({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
});

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export async function login({ email, password }: LoginData) {
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  
  if (!user) {
    throw new AuthError('Invalid email or password');
  }

  const isValid = await compare(password, user.password_hash);
  if (!isValid) {
    throw new AuthError('Invalid email or password');
  }

  return { id: user.id, email: user.email };
}

export async function register({ email, password, fullName }: RegisterData) {
  const exists = db.prepare('SELECT 1 FROM users WHERE email = ?').get(email);
  if (exists) {
    throw new AuthError('Email already registered');
  }

  const passwordHash = await hash(password, 10);
  const userId = crypto.randomUUID();

  db.transaction(() => {
    db.prepare(
      'INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)'
    ).run(userId, email, passwordHash);

    db.prepare(
      'INSERT INTO profiles (id, user_id, full_name) VALUES (?, ?, ?)'
    ).run(crypto.randomUUID(), userId, fullName);
  })();

  return { id: userId, email };
}