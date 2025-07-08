'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { EditorPanel } from '@/components/EditorPanel';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ExportDialog } from '@/components/ExportDialog';
import { Button } from '@/components/ui/button';
import { Download, Github } from 'lucide-react';

export interface ReadmeData {
  header: {
    name: string;
    title: string;
    subtitle: string;
    typingTexts: string[];
    profileImage: string;
    showWavingHand: boolean;
  };
  about: {
    currentWork: string;
    collaboration: string;
    learning: string;
    askAbout: string;
    funFact: string;
    location: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
    telegram: string;
    whatsapp: string;
  };
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    design: string[];
  };
  stats: {
    showGithubStats: boolean;
    showTopLanguages: boolean;
    showStreakStats: boolean;
    showProfileViews: boolean;
    githubUsername: string;
  };
  projects: {
    name: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
  }[];
  additional: {
    resume: string;
    blog: string;
    youtube: string;
    medium: string;
    devto: string;
  };
}

export default function Home() {
  const [readmeData, setReadmeData] = useState<ReadmeData>({
    header: {
      name: '',
      title: '',
      subtitle: '',
      typingTexts: [],
      profileImage: '',
      showWavingHand: true,
    },
    about: {
      currentWork: '',
      collaboration: '',
      learning: '',
      askAbout: '',
      funFact: '',
      location: '',
    },
    contact: {
      email: '',
      phone: '',
      linkedin: '',
      twitter: '',
      portfolio: '',
      telegram: '',
      whatsapp: '',
    },
    skills: {
      languages: [],
      frameworks: [],
      databases: [],
      tools: [],
      design: [],
    },
    stats: {
      showGithubStats: true,
      showTopLanguages: true,
      showStreakStats: true,
      showProfileViews: true,
      githubUsername: '',
    },
    projects: [],
    additional: {
      resume: '',
      blog: '',
      youtube: '',
      medium: '',
      devto: '',
    },
  });

  const [showExportDialog, setShowExportDialog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          <EditorPanel readmeData={readmeData} setReadmeData={setReadmeData} />
          <PreviewPanel readmeData={readmeData} />
        </div>
      </main>

      <div className="fixed bottom-6 right-6 flex gap-3">
        <Button
          onClick={() => setShowExportDialog(true)}
          className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 font-medium hover:border-gray-500"
          size="lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Export README
        </Button>
      </div>

      <ExportDialog
        open={showExportDialog}
        onOpenChange={setShowExportDialog}
        readmeData={readmeData}
      />
    </div>
  );
}