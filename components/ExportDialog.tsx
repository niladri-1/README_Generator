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
      <DialogContent className="max-w-4xl max-h-[80vh] bg-gray-800 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">Export README</DialogTitle>
          <DialogDescription className="text-gray-400">
            Copy the generated README markdown or download it as a file.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Textarea
            value={markdownContent}
            readOnly
            className="min-h-[400px] bg-gray-900 border-gray-600 text-gray-300 font-mono text-sm"
          />

          <div className="flex gap-3 justify-end">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-medium hover:border-gray-500"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy to Clipboard
            </Button>
            <Button
              onClick={downloadFile}
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-medium hover:border-gray-500"
            >
              <Download className="w-4 h-4 mr-2" />
              Download File
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}