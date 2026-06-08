export const metadata = {
  title: 'User Guide — mainnet_sui',
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">User Guide</h1>
        <p className="text-slate-300 mb-6">
          A concise user guide for the main features of the Sui NFT application: browsing the marketplace, connecting a wallet, buying/selling, creating collections, and minting NFTs.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <ol className="list-decimal ml-6 text-slate-300">
            <li>Open the app: click <span className="font-semibold">Launch App</span> in the navbar or visit the homepage.</li>
            <li>Connect your Sui wallet (Suiet or compatible) by clicking the <span className="font-semibold">Connect Wallet</span> button.</li>
            <li>Browse collections and NFTs on the <span className="font-semibold">Explore</span> page.</li>
            <li>To buy: open an NFT detail page, click <span className="font-semibold">Buy</span>, and confirm the transaction in your wallet.</li>
            <li>To sell: go to your NFT management page, select an NFT to list, set a price, and confirm via your wallet.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Connecting a Wallet</h2>
          <p className="text-slate-300">Basic steps:</p>
          <ul className="list-disc ml-6 text-slate-300">
            <li>Install the Suiet extension (or another Sui-compatible wallet) in your browser.</li>
            <li>Click <span className="font-semibold">Connect Wallet</span> on the website.</li>
            <li>Select the account and approve the connection when prompted by your wallet.</li>
            <li>Once connected, your wallet address and balance will appear in the UI.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Buying an NFT (Buyer)</h2>
          <ol className="list-decimal ml-6 text-slate-300">
            <li>Browse or search for the NFT you want to buy.</li>
            <li>On the NFT detail page, review price, owner, and metadata.</li>
            <li>Click <span className="font-semibold">Buy</span> or <span className="font-semibold">Accept Offer</span>.</li>
            <li>Confirm the transaction in your wallet (check gas fee and recipient address).</li>
            <li>After success, the NFT will be transferred to your wallet.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Minting an NFT (Creator)</h2>
          <p className="text-slate-300">Main steps to create and mint an NFT:</p>
          <ol className="list-decimal ml-6 text-slate-300">
            <li>Prepare your asset (image/media) and metadata (title, description, attributes).</li>
            <li>Create a collection if needed and configure ownership/royalties.</li>
            <li>Open the <span className="font-semibold">Mint</span> page, upload files, and enter metadata.</li>
            <li>Choose network (testnet/mainnet). If you are new, use testnet first.</li>
            <li>Click <span className="font-semibold">Mint</span> and confirm the transaction in your wallet.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Managing Collections & Profile</h2>
          <ul className="list-disc ml-6 text-slate-300">
            <li>Open your Profile to view all NFTs you own.</li>
            <li>In a Collection page you can edit collection info, manage items, and configure listings.</li>
            <li>Use transaction history to track minting, sales, and transfers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Safety & Tips</h2>
          <ul className="list-disc ml-6 text-slate-300">
            <li>Only connect your wallet to trusted websites.</li>
            <li>Always verify contract addresses and transaction fees before confirming.</li>
            <li>Never share your seed phrase or private key with anyone.</li>
            <li>Test on testnet before performing mainnet transactions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
          <div className="text-slate-300">
            <p className="mb-2"><strong>Q:</strong> I don&apos;t see a Connect Wallet button?</p>
            <p className="mb-4">A: Make sure your wallet extension is installed and the page has permission. Try reloading the page.</p>

            <p className="mb-2"><strong>Q:</strong> My transaction failed?</p>
            <p className="mb-4">A: Check your SUI balance, gas estimate, and network status; retry and inspect the error message in your wallet.</p>
          </div>
        </section>

        <div className="mt-8 text-slate-400 text-sm">
          <p>If you&apos;d like, I can:</p>
          <ul className="list-disc ml-6">
            <li>Add step-by-step screenshots for each flow.</li>
            <li>Create deeper tutorials for minting or listing workflows.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
