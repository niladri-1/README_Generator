'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X, Search } from 'lucide-react';
import { ReadmeData } from '@/app/page';
import { useState, useMemo } from 'react';

interface SkillsSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

const skillsDatabase = {
  languages: [
    { name: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white' },
    { name: 'Python', icon: 'https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'Java', icon: 'https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' },
    { name: 'C++', icon: 'https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
    { name: 'C', icon: 'https://img.shields.io/badge/C-%23A8B9CC.svg?style=for-the-badge&logo=c&logoColor=black' },
    { name: 'Go', icon: 'https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white' },
    { name: 'Rust', icon: 'https://img.shields.io/badge/Rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white' },
    { name: 'PHP', icon: 'https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white' },
    { name: 'Ruby', icon: 'https://img.shields.io/badge/Ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white' },
    { name: 'Swift', icon: 'https://img.shields.io/badge/Swift-%23FA7343.svg?style=for-the-badge&logo=swift&logoColor=white' },
    { name: 'Kotlin', icon: 'https://img.shields.io/badge/Kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white' },
  ],
  frameworks: [
    { name: 'React', icon: 'https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black' },
    { name: 'Vue.js', icon: 'https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white' },
    { name: 'Angular', icon: 'https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white' },
    { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white' },
    { name: 'Nuxt.js', icon: 'https://img.shields.io/badge/Nuxt.js-%2300C58E.svg?style=for-the-badge&logo=nuxt.js&logoColor=white' },
    { name: 'Svelte', icon: 'https://img.shields.io/badge/Svelte-%23FF3E00.svg?style=for-the-badge&logo=svelte&logoColor=white' },
    { name: 'Express.js', icon: 'https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white' },
    { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Django', icon: 'https://img.shields.io/badge/Django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white' },
    { name: 'Flask', icon: 'https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white' },
    { name: 'Spring Boot', icon: 'https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white' },
    { name: 'Laravel', icon: 'https://img.shields.io/badge/Laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white' },
  ],
  databases: [
    { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'MySQL', icon: 'https://img.shields.io/badge/MySQL-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'PostgreSQL', icon: 'https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white' },
    { name: 'Redis', icon: 'https://img.shields.io/badge/Redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white' },
    { name: 'SQLite', icon: 'https://img.shields.io/badge/SQLite-%23003B57.svg?style=for-the-badge&logo=sqlite&logoColor=white' },
    { name: 'Firebase', icon: 'https://img.shields.io/badge/Firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black' },
    { name: 'Supabase', icon: 'https://img.shields.io/badge/Supabase-%233ECF8E.svg?style=for-the-badge&logo=supabase&logoColor=white' },
    { name: 'Oracle', icon: 'https://img.shields.io/badge/Oracle-%23F80000.svg?style=for-the-badge&logo=oracle&logoColor=white' },
  ],
  tools: [
    { name: 'Git', icon: 'https://img.shields.io/badge/Git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white' },
    { name: 'Docker', icon: 'https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white' },
    { name: 'Kubernetes', icon: 'https://img.shields.io/badge/Kubernetes-%23326CE5.svg?style=for-the-badge&logo=kubernetes&logoColor=white' },
    { name: 'AWS', icon: 'https://img.shields.io/badge/AWS-%23232F3E.svg?style=for-the-badge&logo=amazon-aws&logoColor=white' },
    { name: 'Azure', icon: 'https://img.shields.io/badge/Azure-%230078D4.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white' },
    { name: 'Google Cloud', icon: 'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white' },
    { name: 'Vercel', icon: 'https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white' },
    { name: 'Netlify', icon: 'https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white' },
    { name: 'VS Code', icon: 'https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
    { name: 'Postman', icon: 'https://img.shields.io/badge/Postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white' },
  ],
  design: [
    { name: 'Figma', icon: 'https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white' },
    { name: 'Adobe XD', icon: 'https://img.shields.io/badge/Adobe%20XD-%23FF26BE.svg?style=for-the-badge&logo=adobe-xd&logoColor=white' },
    { name: 'Sketch', icon: 'https://img.shields.io/badge/Sketch-%23F7B500.svg?style=for-the-badge&logo=sketch&logoColor=black' },
    { name: 'Photoshop', icon: 'https://img.shields.io/badge/Photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe-photoshop&logoColor=white' },
    { name: 'Illustrator', icon: 'https://img.shields.io/badge/Illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe-illustrator&logoColor=white' },
    { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    { name: 'Bootstrap', icon: 'https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' },
    { name: 'Material-UI', icon: 'https://img.shields.io/badge/Material--UI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white' },
  ],
};

export function SkillsSection({ readmeData, setReadmeData }: SkillsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillsDatabase>('languages');

  const updateSkills = (category: string, skills: string[]) => {
    setReadmeData({
      ...readmeData,
      skills: {
        ...readmeData.skills,
        [category]: skills,
      },
    });
  };

  const addSkill = (skillName: string, category: keyof typeof skillsDatabase) => {
    const currentSkills = readmeData.skills[category];
    if (!currentSkills.includes(skillName)) {
      updateSkills(category, [...currentSkills, skillName]);
    }
  };

  const removeSkill = (category: string, index: number) => {
    const currentSkills = readmeData.skills[category as keyof typeof readmeData.skills];
    const newSkills = currentSkills.filter((_, i) => i !== index);
    updateSkills(category, newSkills);
  };

  const filteredSkills = skillsDatabase[activeCategory].filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const memoizedFilteredSkills = useMemo(() => 
    skillsDatabase[activeCategory].filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [activeCategory, searchTerm]
  );

  const skillCategories = [
    { key: 'languages', label: 'Languages' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools' },
    { key: 'design', label: 'Design' },
  ];

  return (
    <div className="space-y-6">
      {/* Skill Browser */}
      <Card className="bg-gray-700/50 border-gray-600">
        <CardHeader>
          <CardTitle className="text-white text-base lg:text-lg">Browse & Add Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 lg:space-y-4">
          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1 lg:gap-2">
            {skillCategories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setActiveCategory(category.key as keyof typeof skillsDatabase)}
                variant={activeCategory === category.key ? "default" : "outline"}
                size="sm"
                className={
                  activeCategory === category.key
                    ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 text-xs lg:text-sm"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 text-xs lg:text-sm"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 lg:w-4 lg:h-4" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${skillCategories.find(c => c.key === activeCategory)?.label.toLowerCase()}...`}
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 pl-8 lg:pl-10 text-sm lg:text-base"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-1 lg:gap-2 max-h-48 lg:max-h-60 overflow-y-auto">
            {memoizedFilteredSkills.map((skill) => {
              const isSelected = readmeData.skills[activeCategory].includes(skill.name);
              return (
                <div
                  key={skill.name}
                  onClick={() => !isSelected && addSkill(skill.name, activeCategory)}
                  className={`p-1.5 lg:p-2 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-green-500 bg-green-500/10 cursor-not-allowed'
                      : 'border-gray-600 hover:border-blue-500 hover:bg-blue-500/10'
                  }`}
                >
                  <div className="flex items-center gap-1 lg:gap-2">
                    <img src={skill.icon} alt={skill.name} className="h-5 lg:h-6" />
                    <span className={`text-xs lg:text-sm ${isSelected ? 'text-green-400' : 'text-white'}`}>
                      {skill.name}
                    </span>
                    {isSelected && (
                      <span className="text-green-400 text-[10px] lg:text-xs ml-auto">✓ Added</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Skills by Category */}
      {skillCategories.map((category) => {
        const categorySkills = readmeData.skills[category.key as keyof typeof readmeData.skills];
        if (categorySkills.length === 0) return null;

        return (
          <div key={category.key} className="space-y-3">
            <Label className="text-white text-sm lg:text-base font-medium">{category.label}</Label>
            <div className="flex flex-wrap gap-1 lg:gap-2">
              {categorySkills.map((skill, index) => {
                const skillData = skillsDatabase[category.key as keyof typeof skillsDatabase]
                  .find(s => s.name === skill);
                
                return (
                  <div key={index} className="relative group">
                    {skillData ? (
                      <img src={skillData.icon} alt={skill} className="h-6 lg:h-8" />
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-gray-700 text-white hover:bg-gray-600 pr-1 text-xs lg:text-sm"
                      >
                        {skill}
                      </Badge>
                    )}
                    <Button
                      onClick={() => removeSkill(category.key, index)}
                      size="sm"
                      variant="ghost"
                      className="absolute -top-1 lg:-top-2 -right-1 lg:-right-2 h-4 w-4 lg:h-5 lg:w-5 p-0 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-2 h-2 lg:w-3 lg:h-3" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}