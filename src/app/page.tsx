export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-white">
      <div className="max-w-xl text-center p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h1 className="text-3xl font-semibold">Ashford English</h1>
        <p className="mt-3 text-gray-600">
          Bespoke, intensive English training for adults in PIK, North Jakarta.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-5 py-2.5 rounded-xl border border-gray-900 hover:bg-gray-900 hover:text-white transition"
        >
          Book an Assessment
        </a>
      </div>
    </main>
  );
}
