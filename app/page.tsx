import PortfolioView from "@/src/components/PortfolioView";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[var(--accent-text-on)] transition-colors duration-300">
      <PortfolioView />
    </main>
  );
}
