import { ReactNode } from 'react'
import QueryProvider from './queryProvider'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
	children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<QueryProvider>
			<ThemeProvider
				storageKey="theme"
				attribute="class"
				defaultTheme="system"
				enableSystem
			>
				{children}
			</ThemeProvider>
		</QueryProvider>
	)
}

export default Providers
