'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { generateReadmeMarkdown } from '@/lib/generateReadme';
import { ReadmeData } from '@/app/page';
import { Copy, Download } from 'lucide-react';
import { toast } from 'sonner';
import { useCallback } from 'react';

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  readmeData: ReadmeData;
}

export function ExportDialog({ open, onOpenChange, readmeData }: ExportDialogProps) {
  const markdownContent = generateReadmeMarkdown(readmeData);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(markdownContent);
    toast.success('README content copied to clipboard!');
  }, [markdownContent]);

  const downloadFile = useCallback(() => {
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('README.md file downloaded!');
  }, [markdownContent]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] lg:max-h-[80vh] bg-gray-800 border-gray-700 mx-auto">
        <DialogHeader>
          <DialogTitle className="text-white text-lg lg:text-xl">Export README</DialogTitle>
          <DialogDescription className="text-gray-400 text-sm lg:text-base">
            Copy the generated README markdown or download it as a file.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 lg:space-y-4">
          <Textarea
            value={markdownContent}
            readOnly
            className="min-h-[300px] lg:min-h-[400px] bg-gray-900 border-gray-600 text-gray-300 font-mono text-xs lg:text-sm"
          />

          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 justify-end">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-medium hover:border-gray-500 text-sm lg:text-base"
            >
              <Copy className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
              Copy to Clipboard
            </Button>
            <Button
              onClick={downloadFile}
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-medium hover:border-gray-500 text-sm lg:text-base"
            >
              <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
              Download File
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}