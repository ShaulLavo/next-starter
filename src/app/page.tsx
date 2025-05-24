import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	Database,
	Zap,
	Shield,
	FolderSyncIcon as Sync,
	Code2,
	Github,
	Play,
	WifiOff,
	ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-black text-white relative overflow-hidden">
			{/* Subtle background grid */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

			{/* Header */}
			<header className="border-b border-gray-800/50 backdrop-blur-sm relative z-10">
				<div className="container mx-auto px-4 py-4">
					<nav className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="w-6 h-6 bg-gradient-to-br from-white to-gray-300 rounded-sm shadow-lg"></div>
							<span className="text-lg font-light tracking-wide">
								localstack
							</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<Link
								href="#features"
								className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wide"
							>
								features
							</Link>
							<Link
								href="#stack"
								className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wide"
							>
								stack
							</Link>
							<Link
								href="/demo"
								className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wide"
							>
								demo
							</Link>
							<Button
								variant="ghost"
								size="sm"
								className="text-gray-400 hover:text-white group"
							>
								<Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
								github
							</Button>
						</div>
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<section className="py-32 md:py-40 relative z-10">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl">
						<div className="space-y-8">
							<h1 className="text-5xl md:text-7xl font-extralight leading-[0.9] tracking-tight">
								apps that work
								<br />
								<span className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent">
									without the internet
								</span>
							</h1>

							<div className="space-y-4">
								<p className="text-xl md:text-2xl text-gray-400 font-extralight tracking-wide">
									next.js + hono + drizzle + betterauth
								</p>
								<p className="text-lg text-gray-500 font-light">
									local sql + real-time sync + zero latency
								</p>
							</div>

							<div className="flex items-center gap-6 pt-8">
								<Link href="/demo" prefetch>
									<Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-base font-light tracking-wide group">
										<Play className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
										try demo
									</Button>
								</Link>
								<Button
									variant="ghost"
									className="text-gray-400 hover:text-white px-8 py-3 text-base font-light group"
								>
									read docs
									<ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
								</Button>
							</div>

							{/* Enhanced status indicators */}
							<div className="flex items-center gap-12 pt-12 text-sm">
								<div className="flex items-center gap-3 group cursor-default">
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
									<span className="text-gray-500 group-hover:text-gray-300 transition-colors">
										works offline
									</span>
								</div>
								<div className="flex items-center gap-3 group cursor-default">
									<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.5s]"></div>
									<span className="text-gray-500 group-hover:text-gray-300 transition-colors">
										syncs online
									</span>
								</div>
								<div className="flex items-center gap-3 group cursor-default">
									<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse [animation-delay:1s]"></div>
									<span className="text-gray-500 group-hover:text-gray-300 transition-colors">
										sub-ms queries
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section
				id="features"
				className="py-24 border-t border-gray-800/30 relative z-10"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-extralight mb-16 text-gray-400 tracking-wide">
						why local-first
					</h2>

					<div className="grid md:grid-cols-3 gap-12">
						<div className="space-y-6 group">
							<WifiOff className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-500" />
							<h3 className="text-xl font-light tracking-wide">
								offline by default
							</h3>
							<p className="text-gray-400 leading-relaxed font-light">
								your app works without internet. data lives locally, syncs when
								connected.
							</p>
						</div>

						<div className="space-y-6 group">
							<Zap className="w-7 h-7 text-gray-400 group-hover:text-yellow-400 transition-colors duration-500" />
							<h3 className="text-xl font-light tracking-wide">
								instant everything
							</h3>
							<p className="text-gray-400 leading-relaxed font-light">
								no loading spinners. queries run against local sqlite in
								microseconds.
							</p>
						</div>

						<div className="space-y-6 group">
							<Sync className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors duration-500" />
							<h3 className="text-xl font-light tracking-wide">
								conflict-free sync
							</h3>
							<p className="text-gray-400 leading-relaxed font-light">
								automatic merging. multiple devices, multiple users, zero
								conflicts.
							</p>
						</div>

						<div className="space-y-6 group">
							<Database className="w-7 h-7 text-gray-400 group-hover:text-green-400 transition-colors duration-500" />
							<h3 className="text-xl font-light tracking-wide">
								sql in the browser
							</h3>
							<p className="text-gray-400 leading-relaxed font-light">
								full sqlite with drizzle orm. complex queries, joins,
								transactions.
							</p>
						</div>

						<div className="space-y-6 group">
							<Shield className="w-7 h-7 text-gray-400 group-hover:text-red-400 transition-colors duration-500" />
							<h3 className="text-xl font-light tracking-wide">
								secure by design
							</h3>
							<p className="text-gray-400 leading-relaxed font-light">
								betterauth handles everything. sessions, permissions,
								encryption.
							</p>
						</div>

						<div className="space-y-6 group">
							<Code2 className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-500" />
							<h3 className="text-xl font-light tracking-wide">great dx</h3>
							<p className="text-gray-400 leading-relaxed font-light">
								type-safe end-to-end. hot reload. zero config. just works.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section
				id="stack"
				className="py-24 border-t border-gray-800/30 relative z-10"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-extralight mb-16 text-gray-400 tracking-wide">
						the stack
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card className="bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/80 backdrop-blur-sm group">
							<CardHeader className="pb-6">
								<CardTitle className="text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all">
									next.js 15
								</CardTitle>
								<CardDescription className="text-gray-400 font-light leading-relaxed">
									react server components, app router, streaming
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/80 backdrop-blur-sm group">
							<CardHeader className="pb-6">
								<CardTitle className="text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all">
									hono
								</CardTitle>
								<CardDescription className="text-gray-400 font-light leading-relaxed">
									ultrafast web framework for the edge
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/80 backdrop-blur-sm group">
							<CardHeader className="pb-6">
								<CardTitle className="text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all">
									drizzle orm
								</CardTitle>
								<CardDescription className="text-gray-400 font-light leading-relaxed">
									type-safe sql toolkit, zero runtime overhead
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/80 backdrop-blur-sm group">
							<CardHeader className="pb-6">
								<CardTitle className="text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all">
									betterauth
								</CardTitle>
								<CardDescription className="text-gray-400 font-light leading-relaxed">
									modern auth for typescript, zero config
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/80 backdrop-blur-sm group">
							<CardHeader className="pb-6">
								<CardTitle className="text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all">
									sqlite wasm
								</CardTitle>
								<CardDescription className="text-gray-400 font-light leading-relaxed">
									full sql database running in the browser
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:bg-gray-900/80 backdrop-blur-sm group">
							<CardHeader className="pb-6">
								<CardTitle className="text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all">
									sync engine
								</CardTitle>
								<CardDescription className="text-gray-400 font-light leading-relaxed">
									conflict-free replicated data types (crdts)
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Enhanced metrics */}
			<section className="py-24 border-t border-gray-800/30 relative z-10">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-12 text-center">
						<div className="group cursor-default">
							<div className="text-4xl md:text-5xl font-extralight mb-3 group-hover:scale-110 transition-transform duration-500">
								{'<1ms'}
							</div>
							<div className="text-gray-500 text-sm tracking-wider uppercase">
								query time
							</div>
						</div>
						<div className="group cursor-default">
							<div className="text-4xl md:text-5xl font-extralight mb-3 group-hover:scale-110 transition-transform duration-500">
								100%
							</div>
							<div className="text-gray-500 text-sm tracking-wider uppercase">
								offline
							</div>
						</div>
						<div className="group cursor-default">
							<div className="text-4xl md:text-5xl font-extralight mb-3 group-hover:scale-110 transition-transform duration-500">
								0kb
							</div>
							<div className="text-gray-500 text-sm tracking-wider uppercase">
								network deps
							</div>
						</div>
						<div className="group cursor-default">
							<div className="text-4xl md:text-5xl font-extralight mb-3 group-hover:scale-110 transition-transform duration-500">
								∞
							</div>
							<div className="text-gray-500 text-sm tracking-wider uppercase">
								scalability
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced CTA */}
			<section className="py-32 border-t border-gray-800/30 relative z-10">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl">
						<h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
							ready to build?
						</h2>
						<p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
							get started with the template or check out the docs.
						</p>
						<div className="flex gap-6">
							<Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base font-light tracking-wide">
								get started
							</Button>
							<Button
								variant="ghost"
								className="text-gray-400 hover:text-white px-8 py-4 text-base font-light group"
							>
								<Github className="w-4 h-4 mr-3 group-hover:rotate-12 transition-transform" />
								view source
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced footer */}
			<footer className="border-t border-gray-800/30 py-12 relative z-10">
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center text-sm text-gray-500">
						<div className="font-light tracking-wide">localstack</div>
						<div className="font-light">built for the local-first future</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
