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
		<Card className="bg-gray-800/50 border-gray-700 h-full flex flex-col min-h-[500px] lg:min-h-full">
			<CardHeader className="pb-4 flex-shrink-0">
				<div className="flex items-center justify-between">
					<CardTitle className="text-white flex items-center gap-2 text-lg lg:text-xl">
						<Eye className="w-4 h-4 lg:w-5 lg:h-5" />
						Live Preview
						<Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
					</CardTitle>
					<Button
						variant="outline"
						size="sm"
						onClick={copyToClipboard}
						className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-medium hover:border-gray-500 text-xs lg:text-sm"
					>
						<Copy className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
						<span className="hidden sm:inline">Copy</span>
					</Button>
				</div>
			</CardHeader>
			<CardContent className="p-0 flex-1 min-h-0">
				<div className="h-full p-2 lg:p-4">
					<div className="h-full bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden">
						<ScrollArea className="h-[400px] lg:max-h-[calc(100vh-250px)] overflow-auto">
							<pre className="text-xs lg:text-sm text-gray-300 whitespace-pre-wrap font-mono p-2 lg:p-4 leading-relaxed">
								{markdownContent}
							</pre>
						</ScrollArea>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}