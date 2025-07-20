'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeaderSection } from '@/components/sections/HeaderSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AdditionalSection } from '@/components/sections/AdditionalSection';
import { ReadmeData } from '@/app/page';
import { User, Info, Mail, Code, BarChart3, FolderOpen, Plus } from 'lucide-react';

interface EditorPanelProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function EditorPanel({ readmeData, setReadmeData }: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState('header');

  const tabs = [
    { id: 'header', label: 'Header', icon: User },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'additional', label: 'Additional', icon: Plus },
  ];

  return (
    <Card className="bg-gray-800/50 border-gray-700 h-full min-h-[500px] lg:min-h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-white flex items-center gap-2 text-lg lg:text-xl">
          <Code className="w-4 h-4 lg:w-5 lg:h-5" />
          README Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-60px)] lg:h-[calc(100%-80px)]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsList className="grid grid-cols-7 bg-gray-900/50 mx-2 lg:mx-4 mt-2 lg:mt-4 mb-0 h-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-gray-700 data-[state=active]:text-white text-gray-400 flex flex-col items-center gap-0.5 lg:gap-1 p-1 lg:p-2 text-xs"
                >
                  <Icon className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="text-[10px] lg:text-xs hidden sm:block">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <ScrollArea className="h-[calc(100%-50px)] lg:h-[calc(100%-60px)] px-2 lg:px-4">
            <div className="py-2 lg:py-4 space-y-4 lg:space-y-6">
              <TabsContent value="header" className="mt-0">
                <HeaderSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>

              <TabsContent value="about" className="mt-0">
                <AboutSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>

              <TabsContent value="contact" className="mt-0">
                <ContactSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>

              <TabsContent value="skills" className="mt-0">
                <SkillsSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>

              <TabsContent value="stats" className="mt-0">
                <StatsSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>

              <TabsContent value="projects" className="mt-0">
                <ProjectsSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>

              <TabsContent value="additional" className="mt-0">
                <AdditionalSection readmeData={readmeData} setReadmeData={setReadmeData} />
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
}