export default function CoursesPage() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold">Executive Coaching & Writing</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Outcome-focused training tailored to your next meeting, presentation, or negotiation.
          </p>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-10 grid gap-8">
          <div>
            <h2 className="text-2xl font-medium">1:1 Executive Coaching</h2>
            <p className="mt-2 text-gray-600">
              Sharpen delivery for investor meetings, board presentations, negotiations, and interviews.
              Work with real materials: your deck, emails, and talking points.
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-medium">Executive Writing</h2>
            <p className="mt-2 text-gray-600">
              Concise, clear writing for executives: key emails, memos, and decks. Edit for structure, tone,
              and brevity.
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-medium">Assessment & Plan</h2>
            <p className="mt-2 text-gray-600">
              A brief diagnostic to define goals and milestones. Tailored plan aligned to your calendar.
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-medium">Who It’s For</h2>
            <p className="mt-2 text-gray-600">
              Executives, founders, and senior managers who communicate in high-stakes settings.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-xl border border-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Book Assessment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
