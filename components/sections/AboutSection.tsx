'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ReadmeData } from '@/app/page';

interface AboutSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function AboutSection({ readmeData, setReadmeData }: AboutSectionProps) {
  const updateAbout = (field: string, value: string) => {
    setReadmeData({
      ...readmeData,
      about: {
        ...readmeData.about,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="space-y-3 lg:space-y-4">
        <div>
          <Label htmlFor="currentWork" className="text-white text-sm lg:text-base">Currently working on</Label>
          <Input
            id="currentWork"
            value={readmeData.about.currentWork}
            onChange={(e) => updateAbout('currentWork', e.target.value)}
            placeholder="e.g., Building awesome web applications"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="collaboration" className="text-white text-sm lg:text-base">Looking to collaborate on</Label>
          <Input
            id="collaboration"
            value={readmeData.about.collaboration}
            onChange={(e) => updateAbout('collaboration', e.target.value)}
            placeholder="e.g., Open source projects"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="learning" className="text-white text-sm lg:text-base">Currently learning</Label>
          <Input
            id="learning"
            value={readmeData.about.learning}
            onChange={(e) => updateAbout('learning', e.target.value)}
            placeholder="e.g., Machine Learning and AI"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="askAbout" className="text-white text-sm lg:text-base">Ask me about</Label>
          <Input
            id="askAbout"
            value={readmeData.about.askAbout}
            onChange={(e) => updateAbout('askAbout', e.target.value)}
            placeholder="e.g., Web Development, React, Node.js"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="funFact" className="text-white text-sm lg:text-base">Fun fact</Label>
          <Textarea
            id="funFact"
            value={readmeData.about.funFact}
            onChange={(e) => updateAbout('funFact', e.target.value)}
            placeholder="Something interesting about you"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="location" className="text-white text-sm lg:text-base">Location</Label>
          <Input
            id="location"
            value={readmeData.about.location}
            onChange={(e) => updateAbout('location', e.target.value)}
            placeholder="e.g., San Francisco, CA"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
}