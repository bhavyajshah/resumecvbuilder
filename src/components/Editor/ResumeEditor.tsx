import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { PersonalInfoForm } from './PersonalInfoForm';
import { EducationForm } from './EducationForm';
import { ExperienceForm } from './ExperienceForm';
import { Preview } from './Preview';
import { Card } from '../ui/Card';
import { Eye, User, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';

type Section = 'personal' | 'education' | 'experience' | 'preview';

export const ResumeEditor: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('personal');
  const { resumeData } = useResumeStore();

  const renderMobileNav = () => (
    <div className="flex overflow-x-auto gap-2 p-4 bg-white shadow-sm lg:hidden">
      <Button
        variant={activeSection === 'personal' ? 'primary' : 'ghost'}
        onClick={() => setActiveSection('personal')}
        icon={User}
        size="sm"
      >
        Personal
      </Button>
      <Button
        variant={activeSection === 'education' ? 'primary' : 'ghost'}
        onClick={() => setActiveSection('education')}
        icon={GraduationCap}
        size="sm"
      >
        Education
      </Button>
      <Button
        variant={activeSection === 'experience' ? 'primary' : 'ghost'}
        onClick={() => setActiveSection('experience')}
        icon={Briefcase}
        size="sm"
      >
        Experience
      </Button>
      <Button
        variant={activeSection === 'preview' ? 'primary' : 'ghost'}
        onClick={() => setActiveSection('preview')}
        icon={Eye}
        size="sm"
      >
        Preview
      </Button>
    </div>
  );

  const renderMobileSection = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <Card>
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
            <PersonalInfoForm />
          </Card>
        );
      case 'education':
        return (
          <Card>
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <EducationForm />
          </Card>
        );
      case 'experience':
        return (
          <Card>
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <ExperienceForm />
          </Card>
        );
      case 'preview':
        return <Preview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderMobileNav()}
      
      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <PersonalInfoForm />
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <EducationForm />
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <ExperienceForm />
            </Card>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <Preview />
          </div>
        </div>

        <div className="lg:hidden">
          {renderMobileSection()}
        </div>
      </div>
    </div>
  );
};