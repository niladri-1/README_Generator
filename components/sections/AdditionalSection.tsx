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
    <div className="space-y-4 lg:space-y-6">
      <div className="space-y-3 lg:space-y-4">
        <div>
          <Label htmlFor="resume" className="text-white text-sm lg:text-base">Resume URL</Label>
          <Input
            id="resume"
            value={readmeData.additional.resume}
            onChange={(e) => updateAdditional('resume', e.target.value)}
            placeholder="https://drive.google.com/file/d/your-resume"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="blog" className="text-white text-sm lg:text-base">Blog URL</Label>
          <Input
            id="blog"
            value={readmeData.additional.blog}
            onChange={(e) => updateAdditional('blog', e.target.value)}
            placeholder="https://yourblog.com"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="youtube" className="text-white text-sm lg:text-base">YouTube Channel</Label>
          <Input
            id="youtube"
            value={readmeData.additional.youtube}
            onChange={(e) => updateAdditional('youtube', e.target.value)}
            placeholder="https://youtube.com/@yourchannel"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="medium" className="text-white text-sm lg:text-base">Medium Profile</Label>
          <Input
            id="medium"
            value={readmeData.additional.medium}
            onChange={(e) => updateAdditional('medium', e.target.value)}
            placeholder="https://medium.com/@username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="devto" className="text-white text-sm lg:text-base">Dev.to Profile</Label>
          <Input
            id="devto"
            value={readmeData.additional.devto}
            onChange={(e) => updateAdditional('devto', e.target.value)}
            placeholder="https://dev.to/username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
}