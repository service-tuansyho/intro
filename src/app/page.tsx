import Link from "next/link"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Sui NFT Marketplace
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              Discover & Trade NFTs on Sui
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              A powerful NFT marketplace built on the Sui blockchain. Create collections, mint unique digital assets, and connect with the Web3 community.
            </p>
            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                Launch App
              </button>
              <button className="rounded-lg border border-slate-500 px-8 py-3 font-semibold text-white hover:border-slate-300 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold mb-16">Core Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Mint NFTs"
              description="Mint NFTs on-chain using the Sui blockchain and import them anywhere via the Sui network."
              icon="✨"
            />
            <FeatureCard
              title="Marketplace"
              description="Browse, buy, and sell NFTs with complete transparency. Real-time listings and instant transactions on Sui."
              icon="🏪"
            />
            <FeatureCard
              title="Collections"
              description="Create curated NFT collections and manage your digital assets. Full control over your collection properties."
              icon="📚"
            />
            <FeatureCard
              title="User Profiles"
              description="Build your Web3 identity with customizable profiles. Showcase your NFT collections and trading history."
              icon="👤"
            />
            <FeatureCard
              title="Wallet Integration"
              description="Seamless Sui wallet integration for secure transactions. Connect with Suiet and other Sui-compatible wallets."
              icon="🔐"
            />
            <FeatureCard
              title="Activity Tracking"
              description="Monitor all NFT activity in real-time. Track sales, transfers, and collection updates at a glance."
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-slate-800/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold mb-16">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <StepCard step={1} title="Connect Wallet" description="Link your Sui wallet to get started with the platform." />
            <StepCard step={2} title="Create Collection" description="Set up your NFT collection with custom metadata and settings." />
            <StepCard step={3} title="Mint NFTs" description="Upload images and mint your digital assets to the Sui blockchain." />
            <StepCard step={4} title="Trade & Sell" description="List NFTs for sale or browse the marketplace for collections to buy." />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold mb-16">Built With Modern Technology</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <TechCard
              tech="Sui Blockchain"
              description="Leverages Sui's high-performance, low-cost infrastructure for fast and secure NFT transactions."
            />
            <TechCard
              tech="Next.js & React"
              description="Modern frontend framework providing excellent performance and seamless user experience."
            />
            <TechCard
              tech="TypeScript"
              description="Type-safe development ensures code reliability and maintainability across the entire application."
            />
            <TechCard
              tech="Tailwind CSS"
              description="Responsive design framework enabling beautiful, consistent UI across all devices and screen sizes."
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-slate-800/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold mb-16">Development Roadmap</h2>
          <div className="space-y-8">
            <RoadmapItem
              phase="Phase 1"
              title="Foundation & Core Features"
              items={[
                "Complete NFT marketplace interface",
                "Collection creation and management",
                "NFT minting functionality",
                "Wallet integration (Suiet)",
              ]}
            />
            <RoadmapItem
              phase="Phase 2"
              title="Enhanced Trading & User Experience"
              items={[
                "Advanced NFT filters and search",
                "User profile customization",
                "Transaction history tracking",
                "Image upload and CDN integration",
                "Batch minting capabilities",
              ]}
            />
            <RoadmapItem
              phase="Phase 3"
              title="Community & Expansion"
              items={[
                "Community features and messaging",
                "NFT rarity rankings",
                "Multi-chain support expansion",
                "DAO governance integration",
                "Advanced analytics dashboard",
              ]}
            />
            <RoadmapItem
              phase="Phase 4"
              title="Enterprise & Growth"
              items={[
                "API for third-party integrations",
                "White-label marketplace solutions",
                "Mobile app development",
                "Advanced royalty management",
                "Cross-chain bridge support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of creators and collectors in the Sui NFT ecosystem.
          </p>
          <Link href="https://app.carnobon.com/" className="rounded-lg bg-blue-600 px-12 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors">
            Launch the Marketplace
          </Link>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t border-slate-700 bg-slate-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition">Create</a></li>
                <li><a href="#" className="hover:text-white transition">Collections</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Discord</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Forum</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Sui NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </main>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 hover:border-blue-500 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}

function StepCard({ step, title, description }: { step: number; title: string; description: string }) {
  return (
    <div className="rounded-lg bg-slate-700/50 p-8 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}

function TechCard({ tech, description }: { tech: string; description: string }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8">
      <h3 className="text-2xl font-semibold mb-3 text-blue-400">{tech}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}

function RoadmapItem({ phase, title, items }: { phase: string; title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold">
          {phase}
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-slate-300">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span className="text-blue-400">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
