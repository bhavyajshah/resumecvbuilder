import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { FormField } from '../ui/FormField';

export const PersonalInfoForm: React.FC = () => {
  const { resumeData, updateResumeData } = useResumeStore();
  const { personalInfo } = resumeData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateResumeData({
      personalInfo: {
        ...personalInfo,
        [name]: value,
      },
    });
  };

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="First Name"
          name="firstName"
          value={personalInfo.firstName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={personalInfo.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <FormField
        label="Email"
        name="email"
        type="email"
        value={personalInfo.email}
        onChange={handleChange}
        required
      />

      <FormField
        label="Phone"
        name="phone"
        type="tel"
        value={personalInfo.phone}
        onChange={handleChange}
        required
      />

      <FormField
        label="Address"
        name="address"
        value={personalInfo.address}
        onChange={handleChange}
      />

      <FormField
        label="Professional Summary"
        name="summary"
        value={personalInfo.summary}
        onChange={handleChange}
        multiline
        rows={4}
      />
    </form>
  );
};