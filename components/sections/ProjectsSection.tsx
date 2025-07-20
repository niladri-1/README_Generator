'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Github, ExternalLink } from 'lucide-react';
import { ReadmeData } from '@/app/page';
import { useState, useCallback } from 'react';

interface ProjectsSectionProps {
  readmeData: ReadmeData;
  setReadmeData: (data: ReadmeData) => void;
}

export function ProjectsSection({ readmeData, setReadmeData }: ProjectsSectionProps) {
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    tech: '',
    github: '',
    demo: '',
  });

  const addProject = useCallback(() => {
    if (newProject.name.trim()) {
      const project = {
        ...newProject,
        tech: newProject.tech.split(',').map(t => t.trim()).filter(t => t),
      };
      setReadmeData({
        ...readmeData,
        projects: [...readmeData.projects, project],
      });
      setNewProject({
        name: '',
        description: '',
        tech: '',
        github: '',
        demo: '',
      });
    }
  }, [newProject, readmeData, setReadmeData]);

  const removeProject = useCallback((index: number) => {
    const newProjects = readmeData.projects.filter((_, i) => i !== index);
    setReadmeData({
      ...readmeData,
      projects: newProjects,
    });
  }, [readmeData, setReadmeData]);

  return (
    <div className="space-y-6">
      <Card className="bg-gray-700/50 border-gray-600">
        <CardHeader>
          <CardTitle className="text-white text-base lg:text-lg">Add New Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 lg:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="projectName" className="text-white text-sm lg:text-base">Project Name *</Label>
              <Input
                id="projectName"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                placeholder="My Awesome Project"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
              />
            </div>

            <div>
              <Label htmlFor="projectTech" className="text-white text-sm lg:text-base">Technologies (comma-separated)</Label>
              <Input
                id="projectTech"
                value={newProject.tech}
                onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                placeholder="React, Node.js, MongoDB"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="projectDescription" className="text-white text-sm lg:text-base">Description</Label>
            <Textarea
              id="projectDescription"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Brief description of your project"
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="projectGithub" className="text-white text-sm lg:text-base">GitHub URL</Label>
              <Input
                id="projectGithub"
                value={newProject.github}
                onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                placeholder="https://github.com/username/repo"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
              />
            </div>

            <div>
              <Label htmlFor="projectDemo" className="text-white text-sm lg:text-base">Live Demo URL</Label>
              <Input
                id="projectDemo"
                value={newProject.demo}
                onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
                placeholder="https://myproject.com"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm lg:text-base"
              />
            </div>
          </div>

          <Button
            onClick={addProject}
            className="w-full bg-blue-600 hover:bg-blue-700 text-sm lg:text-base"
          >
            <Plus className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
            Add Project
          </Button>
        </CardContent>
      </Card>

      {readmeData.projects.length > 0 && (
        <div className="space-y-3 lg:space-y-4">
          <Label className="text-white text-base lg:text-lg">Your Projects</Label>
          {readmeData.projects.map((project, index) => (
            <Card key={index} className="bg-gray-700/50 border-gray-600">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-sm lg:text-base">{project.name}</CardTitle>
                  <Button
                    onClick={() => removeProject(index)}
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white flex-shrink-0"
                  >
                    <X className="w-3 h-3 lg:w-4 lg:h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {project.description && (
                  <p className="text-gray-300 text-xs lg:text-sm mb-3">{project.description}</p>
                )}
                
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1 lg:gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-600 text-white text-[10px] lg:text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-1 lg:gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 text-xs lg:text-sm">
                      <Github className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                      <span className="hidden sm:inline">Code</span>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 text-xs lg:text-sm">
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                      <span className="hidden sm:inline">Demo</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}