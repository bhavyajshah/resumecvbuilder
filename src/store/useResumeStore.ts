import { create } from 'zustand';
import { ResumeData, ResumeTemplate } from '../types';
import { defaultTemplate } from '../templates/default';

interface ResumeStore {
  activeTemplate: ResumeTemplate;
  resumeData: ResumeData;
  setTemplate: (template: ResumeTemplate) => void;
  updateResumeData: (data: Partial<ResumeData>) => void;
  addEducation: (education: Omit<Education, 'id'>) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  removeEducation: (id: string) => void;
  removeExperience: (id: string) => void;
}

const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
};

export const useResumeStore = create<ResumeStore>((set) => ({
  activeTemplate: defaultTemplate,
  resumeData: initialResumeData,
  setTemplate: (template) => set({ activeTemplate: template }),
  updateResumeData: (data) =>
    set((state) => ({
      resumeData: { ...state.resumeData, ...data },
    })),
  addEducation: (education) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: [
          ...state.resumeData.education,
          { ...education, id: crypto.randomUUID() },
        ],
      },
    })),
  addExperience: (experience) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        experience: [
          ...state.resumeData.experience,
          { ...experience, id: crypto.randomUUID() },
        ],
      },
    })),
  removeEducation: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        education: state.resumeData.education.filter((edu) => edu.id !== id),
      },
    })),
  removeExperience: (id) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        experience: state.resumeData.experience.filter((exp) => exp.id !== id),
      },
    })),
}));