import WheatGerminationChart from './components/wheat-germination-chart';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[radial-gradient(circle_at_20%_20%,#fef3c7_0%,#f8fafc_45%,#e2e8f0_100%)] px-4 py-6 md:px-10 md:py-10">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 rounded-3xl border border-amber-200/70 bg-white/85 p-4 shadow-[0_20px_70px_-30px_rgba(120,53,15,0.45)] backdrop-blur-sm md:p-8">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-amber-950 md:text-4xl">
          Wheat Germination
        </h1>
        <WheatGerminationChart />
      </section>
    </main>
  );
}
