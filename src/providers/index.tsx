import { ReactNode } from 'react'
import QueryProvider from './queryProvider'
interface ProvidersProps {
	children: ReactNode
}
const Providers: React.FC<ProvidersProps> = ({ children }) => {
	const providers = [QueryProvider]

	return providers.reduceRight((accumulator, CurrentProvider) => {
		return <CurrentProvider>{accumulator}</CurrentProvider>
	}, <>{children}</>)
}

export default Providers
