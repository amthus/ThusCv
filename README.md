# **ThusCv - Créateur de CV Professionnels**

**ThusCv** est une application moderne et riche en fonctionnalités qui aide les professionnels à créer des CV impressionnants en toute simplicité. Construite avec React, TypeScript, et Tailwind CSS, elle offre une expérience utilisateur fluide pour la création, la gestion et l'exportation de CV professionnels.

## **Fonctionnalités**

### **Authentification**
- Authentification sécurisée par email et mot de passe
- Routes protégées pour garantir la sécurité des données utilisateur
- Sessions persistantes pour une expérience sans interruption

### **Gestion de Profil**
- Création de profil complète et détaillée
- Suivi de l’expérience professionnelle
- Parcours éducatif
- Compétences et expertises
- Suivi en temps réel de la complétion du profil

### **Modèles de CV**
1. **Modèle Moderne**
   - Design épuré et contemporain
   - Mise en valeur de la hiérarchie visuelle
   - Idéal pour les professionnels créatifs

2. **Modèle Minimaliste**
   - Mise en page simple et élégante
   - Accent sur le contenu
   - Parfait pour les postes académiques et de recherche

3. **Modèle Professionnel**
   - Style traditionnel et professionnel
   - Mise en page structurée
   - Idéal pour les postes en entreprise

### **Options d'Exportation**
- Exportation en PDF de haute qualité
- Exportation des données en format JSON pour sauvegarde et portabilité
- Plusieurs options de modèles pour répondre à vos besoins

### **Suivi de l'Avancement du Profil**
- Indicateur visuel de progression
- Liste de contrôle pour la complétion des sections
- Guide étape par étape pour remplir le profil

## **Stack Technique**

- **Frontend** : React avec TypeScript
- **Stylisation** : Tailwind CSS
- **Formulaires** : React Hook Form avec validation Zod
- **Base de Données** : SQLite avec better-sqlite3
- **Génération de PDF** : html2canvas et jsPDF
- **Icônes** : Lucide React

## **Démarrer le Projet**

1. Clonez le dépôt :  
   `git clone https://github.com/votre-utilisateur/thuscv.git`
2. Installez les dépendances :  
   `npm install`
3. Démarrez le serveur de développement :  
   `npm run dev`

## **Structure du Projet**

```
src/
├── components/
│   ├── auth/         # Composants d'authentification
│   ├── cv/           # Modèles de CV et exportation
│   ├── layout/       # Composants de mise en page
│   ├── profile/      # Gestion des profils
│   └── ui/           # Composants UI réutilisables
├── lib/
│   ├── context/      # Contexte React
│   ├── db.ts         # Configuration de la base de données
│   ├── types.ts      # Types TypeScript
│   └── utils.ts      # Fonctions utilitaires
└── pages/            # Pages de routes
```

## **Ajouter de Nouvelles Fonctionnalités**

1. Créez de nouveaux composants dans les répertoires appropriés.
2. Mettez à jour les types dans `src/lib/types.ts`.
3. Ajoutez de nouvelles routes dans `src/App.tsx`.
4. Mettez à jour le schéma de la base de données dans `src/lib/db.ts`.

## **Contribuer au Projet**

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité.
3. Soumettez une pull request.

## **Licence**

Ce projet est sous la licence MIT.

---

## **Mes Coordonnées**

- **Email** : [ametekpemalthus16@gmail.com](mailto:ametekpemalthus16@gmail.com)
- **LinkedIn** : [Mon Profil LinkedIn](https://www.linkedin.com/in/malthus-ametepe/)

