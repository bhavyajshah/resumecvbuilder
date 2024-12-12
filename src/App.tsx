import React from 'react';
import { ResumeEditor } from './components/Editor/ResumeEditor';
import { FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
          </div>
        </div>
      </header>
      <ResumeEditor />
    </div>
  );
}

export default App;