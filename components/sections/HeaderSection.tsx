'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { ReadmeData } from '@/app/page';
import { useCallback } from 'react';

interface HeaderSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function HeaderSection({ readmeData, setReadmeData }: HeaderSectionProps) {
  const updateHeader = (field: string, value: any) => {
    setReadmeData({
      ...readmeData,
      header: {
        ...readmeData.header,
        [field]: value,
      },
    });
  };

  const addTypingText = useCallback(() => {
    updateHeader('typingTexts', [...readmeData.header.typingTexts, '']);
  }, [readmeData.header.typingTexts, updateHeader]);

  const removeTypingText = useCallback((index: number) => {
    const newTexts = readmeData.header.typingTexts.filter((_, i) => i !== index);
    updateHeader('typingTexts', newTexts);
  }, [readmeData.header.typingTexts, updateHeader]);

  const updateTypingText = useCallback((index: number, value: string) => {
    const newTexts = [...readmeData.header.typingTexts];
    newTexts[index] = value;
    updateHeader('typingTexts', newTexts);
  }, [readmeData.header.typingTexts, updateHeader]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">Name *</Label>
          <Input
            id="name"
            value={readmeData.header.name}
            onChange={(e) => updateHeader('name', e.target.value)}
            placeholder="Your Full Name"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="title" className="text-white">Title</Label>
          <Input
            id="title"
            value={readmeData.header.title}
            onChange={(e) => updateHeader('title', e.target.value)}
            placeholder="e.g., Full Stack Developer"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div>
          <Label htmlFor="subtitle" className="text-white">Subtitle</Label>
          <Textarea
            id="subtitle"
            value={readmeData.header.subtitle}
            onChange={(e) => updateHeader('subtitle', e.target.value)}
            placeholder="Brief description about yourself"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            rows={2}
          />
        </div>

        <div>
          <Label htmlFor="profileImage" className="text-white">Profile Image URL</Label>
          <Input
            id="profileImage"
            value={readmeData.header.profileImage}
            onChange={(e) => updateHeader('profileImage', e.target.value)}
            placeholder="https://github.com/username.png"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="waving-hand"
            checked={readmeData.header.showWavingHand}
            onCheckedChange={(checked) => updateHeader('showWavingHand', checked)}
          />
          <Label htmlFor="waving-hand" className="text-white">Show waving hand emoji</Label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-white">Typing Animation Texts</Label>
          <Button
            onClick={addTypingText}
            size="sm"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>

        {readmeData.header.typingTexts.map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={text}
              onChange={(e) => updateTypingText(index, e.target.value)}
              placeholder={`Typing text ${index + 1}`}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button
              onClick={() => removeTypingText(index)}
              size="sm"
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}