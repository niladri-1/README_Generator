'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ReadmeData } from '@/app/page';

interface StatsSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function StatsSection({ readmeData, setReadmeData }: StatsSectionProps) {
  const updateStats = (field: string, value: any) => {
    setReadmeData({
      ...readmeData,
      stats: {
        ...readmeData.stats,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <div>
        <Label htmlFor="githubUsername" className="text-white text-sm lg:text-base">GitHub Username *</Label>
        <Input
          id="githubUsername"
          value={readmeData.stats.githubUsername}
          onChange={(e) => updateStats('githubUsername', e.target.value)}
          placeholder="username (not full URL)"
          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
        />
      </div>

      <div className="space-y-3 lg:space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="github-stats"
            checked={readmeData.stats.showGithubStats}
            onCheckedChange={(checked) => updateStats('showGithubStats', checked)}
          />
          <Label htmlFor="github-stats" className="text-white text-sm lg:text-base">Show GitHub Stats</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="top-languages"
            checked={readmeData.stats.showTopLanguages}
            onCheckedChange={(checked) => updateStats('showTopLanguages', checked)}
          />
          <Label htmlFor="top-languages" className="text-white text-sm lg:text-base">Show Top Languages</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="streak-stats"
            checked={readmeData.stats.showStreakStats}
            onCheckedChange={(checked) => updateStats('showStreakStats', checked)}
          />
          <Label htmlFor="streak-stats" className="text-white text-sm lg:text-base">Show Streak Stats</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="profile-views"
            checked={readmeData.stats.showProfileViews}
            onCheckedChange={(checked) => updateStats('showProfileViews', checked)}
          />
          <Label htmlFor="profile-views" className="text-white text-sm lg:text-base">Show Profile Views Counter</Label>
        </div>
      </div>
    </div>
  );
}