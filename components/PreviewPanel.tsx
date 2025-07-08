'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Eye, Copy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateReadmeMarkdown } from '@/lib/generateReadme';
import { ReadmeData } from '@/app/page';
import { toast } from 'sonner';
import { useCallback, useMemo } from 'react';

interface PreviewPanelProps {
	readmeData: ReadmeData;
}

export function PreviewPanel({ readmeData }: PreviewPanelProps) {
	const markdownContent = useMemo(() => generateReadmeMarkdown(readmeData), [readmeData]);

	const copyToClipboard = useCallback(() => {
		navigator.clipboard.writeText(markdownContent);
		toast.success('README copied to clipboard!');
	}, [markdownContent]);

	return (
		<Card className="bg-gray-800/50 border-gray-700 h-full flex flex-col">
			<CardHeader className="pb-4 flex-shrink-0">
				<div className="flex items-center justify-between">
					<CardTitle className="text-white flex items-center gap-2">
						<Eye className="w-5 h-5" />
						Live Preview
						<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
					</CardTitle>
					<Button
						variant="outline"
						size="sm"
						onClick={copyToClipboard}
						className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-medium hover:border-gray-500"
					>
						<Copy className="w-4 h-4 mr-2" />
						Copy
					</Button>
				</div>
			</CardHeader>
			<CardContent className="p-0 flex-1 min-h-0">
				<div className="h-full p-4">
					<div className="h-full bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
						<ScrollArea className="max-h-[calc(100vh-250px)] overflow-auto">
							<pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono p-4 leading-relaxed">
								{markdownContent}
							</pre>
						</ScrollArea>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
