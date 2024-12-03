import React from 'react';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';
import type { Profile, Experience, Education, Skill } from '../../lib/types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface CVExportProps {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

export function CVExport({ profile, experiences, education, skills }: CVExportProps) {
  const exportAsPDF = async () => {
    const element = document.getElementById('cv-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
      
      pdf.save(`${profile.fullName.toLowerCase().replace(/\s+/g, '-')}-cv.pdf`);
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
  };

  const exportAsJSON = () => {
    const data = {
      profile,
      experiences,
      education,
      skills,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.fullName.toLowerCase().replace(/\s+/g, '-')}-cv.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-4">
      <Button onClick={exportAsPDF} className="flex items-center gap-2">
        <Download size={16} />
        Export as PDF
      </Button>
      <Button onClick={exportAsJSON} variant="secondary" className="flex items-center gap-2">
        <Download size={16} />
        Export as JSON
      </Button>
    </div>
  );
}