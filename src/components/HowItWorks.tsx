const steps = [
  {
    step: "01",
    title: "Sign up for free",
    description:
      "Create your account in seconds — no credit card required. Get instant access to Arom AI with our generous free tier.",
  },
  {
    step: "02",
    title: "Start a conversation",
    description:
      "Ask anything in plain language. Arom understands context, nuance, and follow-up questions just like a human would.",
  },
  {
    step: "03",
    title: "Refine and iterate",
    description:
      "Ask follow-up questions, request edits, or try different approaches. Arom learns from your conversation to give better answers.",
  },
  {
    step: "04",
    title: "Export and share",
    description:
      "Copy results, export to markdown or PDF, or share conversation links with your team. Integrate into your workflow seamlessly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            How It Works
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting started with Arom AI is simple. Follow these steps to start
            unlocking the power of AI for your work.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
          {steps.map((item, index) => (
            <div key={item.step} className="relative flex gap-6">
              {/* Step number */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-4 hidden h-full w-px bg-violet-200 sm:block" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
