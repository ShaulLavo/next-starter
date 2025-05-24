'use client'

import { FileIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

interface CodeBlockProps {
	code: string
	language: string
	filename: string
	lightTheme: string
	darkTheme: string
	height?: string
}

export function CodeBlock({
	code,
	language,
	filename,
	lightTheme,
	darkTheme,
	height = 'auto'
}: CodeBlockProps) {
	const { theme, systemTheme } = useTheme()
	const [highlighted, setHighlighted] = useState('')

	useEffect(() => {
		const currentTheme = theme === 'system' ? systemTheme : theme
		const selectedTheme = currentTheme === 'dark' ? darkTheme : lightTheme

		async function highlightCode() {
			const highlightedCode = await codeToHtml(code, {
				lang: language,
				theme: selectedTheme
			})
			setHighlighted(highlightedCode)
		}

		highlightCode()
	}, [theme, systemTheme, code, language, lightTheme, darkTheme])

	const renderCode = (code: string, highlighted: string) => {
		if (highlighted) {
			return (
				<div
					className="overflow-auto bg-background font-mono text-xs [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
					style={{ height: height === 'auto' ? 'auto' : height }}
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
			)
		} else {
			return (
				<pre
					className="overflow-auto break-all bg-background p-4 font-mono text-xs text-foreground"
					style={{ height: height === 'auto' ? 'auto' : height }}
				>
					{code}
				</pre>
			)
		}
	}

	return (
		<div className="mx-auto w-full max-w-5xl">
			<div className="relative w-full overflow-hidden rounded-xl border border-border">
				<div className="flex items-center bg-accent p-2 text-sm text-foreground">
					<FileIcon className="mr-2 h-4 w-4" />
					{filename}
				</div>
				{renderCode(code, highlighted)}
			</div>
		</div>
	)
}
