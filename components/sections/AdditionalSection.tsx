'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ReadmeData } from '@/app/page';

interface AdditionalSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function AdditionalSection({ readmeData, setReadmeData }: AdditionalSectionProps) {
  const updateAdditional = (field: string, value: string) => {
    setReadmeData({
      ...readmeData,
      additional: {
        ...readmeData.additional,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="resume" className="text-white">Resume URL</Label>
          <Input
            id="resume"
            value={readmeData.additional.resume}
            onChange={(e) => updateAdditional('resume', e.target.value)}
            placeholder="https://drive.google.com/file/d/your-resume"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="blog" className="text-white">Blog URL</Label>
          <Input
            id="blog"
            value={readmeData.additional.blog}
            onChange={(e) => updateAdditional('blog', e.target.value)}
            placeholder="https://yourblog.com"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="youtube" className="text-white">YouTube Channel</Label>
          <Input
            id="youtube"
            value={readmeData.additional.youtube}
            onChange={(e) => updateAdditional('youtube', e.target.value)}
            placeholder="https://youtube.com/@yourchannel"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="medium" className="text-white">Medium Profile</Label>
          <Input
            id="medium"
            value={readmeData.additional.medium}
            onChange={(e) => updateAdditional('medium', e.target.value)}
            placeholder="https://medium.com/@username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="devto" className="text-white">Dev.to Profile</Label>
          <Input
            id="devto"
            value={readmeData.additional.devto}
            onChange={(e) => updateAdditional('devto', e.target.value)}
            placeholder="https://dev.to/username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}