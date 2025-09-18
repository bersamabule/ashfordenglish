import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Bespoke, intensive English coaching for high‑stakes communication
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            PIK & PIK2 — private, executive‑focused training. NDA on request.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-5 py-2.5 rounded-xl border border-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Book Assessment
          </Link>
        </div>
      </section>
      <section className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-12 grid gap-6 md:grid-cols-3">
          <div className="p-4 border rounded-xl">
            <h2 className="text-xl font-medium">Personalised to your next meeting</h2>
            <p className="mt-2 text-gray-600">Work with your deck, emails, and talking points.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <h2 className="text-xl font-medium">Executive presence & clarity</h2>
            <p className="mt-2 text-gray-600">Improve structure, tone, and confidence in delivery.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <h2 className="text-xl font-medium">Confidential, punctual, discreet</h2>
            <p className="mt-2 text-gray-600">Private sessions in PIK & PIK2. NDA available.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
