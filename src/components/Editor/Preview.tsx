import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import html2pdf from 'html2pdf.js';
import { Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const Preview: React.FC = () => {
  const { activeTemplate, resumeData } = useResumeStore();

  const generatePreview = () => {
    let content = activeTemplate.content;
    const { personalInfo, education, experience, skills } = resumeData;

    // Replace personal info placeholders
    Object.entries(personalInfo).forEach(([key, value]) => {
      content = content.replace(`\${${key}}`, value);
    });

    // Generate education section
    const educationHtml = education
      .map(
        (edu) => `
        <div class="mb-4">
          <div class="font-bold">${edu.institution}</div>
          <div>${edu.degree} in ${edu.field}</div>
          <div>${edu.startDate} - ${edu.endDate}</div>
          <div>${edu.description}</div>
        </div>
      `
      )
      .join('');
    content = content.replace('${education}', educationHtml);

    // Generate experience section
    const experienceHtml = experience
      .map(
        (exp) => `
        <div class="mb-4">
          <div class="font-bold">${exp.company}</div>
          <div>${exp.position}</div>
          <div>${exp.startDate} - ${exp.endDate}</div>
          <div>${exp.description}</div>
          <ul class="list-disc ml-4">
            ${exp.achievements.map((achievement) => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
      `
      )
      .join('');
    content = content.replace('${experience}', experienceHtml);

    // Generate skills section
    const skillsHtml = `<div>${skills.join(', ')}</div>`;
    content = content.replace('${skills}', skillsHtml);

    return content;
  };

  const handleExport = () => {
    const content = generatePreview();
    const element = document.createElement('div');
    element.innerHTML = content;

    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h2 className="text-xl lg:text-2xl font-bold">Preview</h2>
        <Button onClick={handleExport} icon={Download}>
          Export PDF
        </Button>
      </div>
      <div
        className="preview-container overflow-x-auto"
        style={{
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            width: '210mm',
            maxWidth: '100%',
            margin: '0 auto',
            transform: 'scale(var(--preview-scale, 1))',
            transformOrigin: 'top center',
          }}
          dangerouslySetInnerHTML={{ __html: generatePreview() }}
        />
      </div>
    </Card>
  );
};