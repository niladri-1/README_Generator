'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ReadmeData } from '@/app/page';

interface ContactSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function ContactSection({ readmeData, setReadmeData }: ContactSectionProps) {
  const updateContact = (field: string, value: string) => {
    setReadmeData({
      ...readmeData,
      contact: {
        ...readmeData.contact,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
        <div>
          <Label htmlFor="email" className="text-white text-sm lg:text-base">Email</Label>
          <Input
            id="email"
            type="email"
            value={readmeData.contact.email}
            onChange={(e) => updateContact('email', e.target.value)}
            placeholder="your.email@example.com"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-white text-sm lg:text-base">Phone</Label>
          <Input
            id="phone"
            value={readmeData.contact.phone}
            onChange={(e) => updateContact('phone', e.target.value)}
            placeholder="+1234567890"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="linkedin" className="text-white text-sm lg:text-base">LinkedIn</Label>
          <Input
            id="linkedin"
            value={readmeData.contact.linkedin}
            onChange={(e) => updateContact('linkedin', e.target.value)}
            placeholder="linkedin.com/in/username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="twitter" className="text-white text-sm lg:text-base">Twitter</Label>
          <Input
            id="twitter"
            value={readmeData.contact.twitter}
            onChange={(e) => updateContact('twitter', e.target.value)}
            placeholder="twitter.com/username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="portfolio" className="text-white text-sm lg:text-base">Portfolio</Label>
          <Input
            id="portfolio"
            value={readmeData.contact.portfolio}
            onChange={(e) => updateContact('portfolio', e.target.value)}
            placeholder="https://yourportfolio.com"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div>
          <Label htmlFor="telegram" className="text-white text-sm lg:text-base">Telegram</Label>
          <Input
            id="telegram"
            value={readmeData.contact.telegram}
            onChange={(e) => updateContact('telegram', e.target.value)}
            placeholder="t.me/username"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>

        <div className="lg:col-span-2">
          <Label htmlFor="whatsapp" className="text-white text-sm lg:text-base">WhatsApp</Label>
          <Input
            id="whatsapp"
            value={readmeData.contact.whatsapp}
            onChange={(e) => updateContact('whatsapp', e.target.value)}
            placeholder="wa.me/1234567890"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
}