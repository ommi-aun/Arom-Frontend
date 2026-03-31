import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-32 sm:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-50 blur-3xl opacity-70" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-50 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
          <span className="flex h-2 w-2 rounded-full bg-violet-500" />
          Now in Public Beta — Try for free
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Think smarter with{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            AI that understands
          </span>{" "}
          you
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
          Arom AI is your intelligent assistant for research, writing, coding,
          and more. Powered by state-of-the-art language models to help you
          accomplish more, faster.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/chat"
            className="w-full rounded-xl bg-violet-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-violet-700 transition-colors sm:w-auto"
          >
            Start Chatting Free →
          </Link>
          <Link
            href="#how-it-works"
            className="w-full rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors sm:w-auto"
          >
            See How It Works
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-6 text-sm text-gray-500">
          No credit card required · Free plan available · Cancel anytime
        </p>

        {/* Hero image / Chat preview */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 shadow-2xl shadow-violet-100">
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-500">arom.ai/chat</span>
          </div>
          <div className="bg-white p-6 text-left">
            {/* Conversation preview */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600">
                  U
                </div>
                <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3 text-sm text-gray-800 max-w-md">
                  Can you help me write a product description for a new
                  eco-friendly water bottle?
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  A
                </div>
                <div className="rounded-2xl rounded-tl-none bg-violet-50 px-4 py-3 text-sm text-gray-800 max-w-xl">
                  <p className="font-medium text-violet-700 mb-1">
                    Arom AI ✨
                  </p>
                  <p>
                    Absolutely! Here&apos;s a compelling product description for
                    your eco-friendly water bottle:
                  </p>
                  <p className="mt-2 italic text-gray-600">
                    &quot;Stay hydrated, stay sustainable. Our BPA-free water
                    bottle is crafted from 100% recycled ocean plastic,
                    featuring double-wall insulation that keeps drinks cold for
                    24 hours...&quot;
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-violet-500">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                    Generating more options...
                  </div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <span className="flex-1 text-sm text-gray-400">
                Ask Arom anything...
              </span>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                <svg
                  className="h-4 w-4 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
