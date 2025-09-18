export default function ContactPage() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Book an assessment via WhatsApp or email. Sessions are private and discreet.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="https://wa.me/6281321267709"
              aria-label="WhatsApp Ashford English"
              className="block p-4 border rounded-xl hover:bg-gray-50"
            >
              <div className="font-medium">WhatsApp</div>
              <div className="text-gray-600">+62 813-2126-7709</div>
            </a>
            <a
              href="mailto:andrew@ashfordenglish.com"
              aria-label="Email Ashford English"
              className="block p-4 border rounded-xl hover:bg-gray-50"
            >
              <div className="font-medium">Email</div>
              <div className="text-gray-600">andrew@ashfordenglish.com</div>
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm text-gray-500">Hours</div>
              <div className="font-medium">Mon–Fri, 08:00–18:00</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Service Area</div>
              <div className="font-medium">PIK & PIK2 · North Jakarta</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Confidentiality</div>
              <div className="font-medium">NDA available on request</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
