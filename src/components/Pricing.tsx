import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Arom AI.",
    features: [
      "50 messages per day",
      "Access to Arom Base model",
      "Basic writing & coding assistance",
      "Chat history (7 days)",
    ],
    cta: "Get Started Free",
    href: "/chat",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "per month",
    description: "For individuals who need more power.",
    features: [
      "Unlimited messages",
      "Access to Arom Pro model",
      "Advanced reasoning & analysis",
      "Priority response times",
      "Chat history (unlimited)",
      "Export to PDF & Markdown",
    ],
    cta: "Start Pro Trial",
    href: "/chat",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$50",
    period: "per user / month",
    description: "Collaborate with your whole team.",
    features: [
      "Everything in Pro",
      "Team workspaces",
      "Shared conversation history",
      "Admin controls & permissions",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    href: "/chat",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start for free. Upgrade as you grow. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                plan.highlighted
                  ? "border-violet-600 bg-violet-600 text-white shadow-violet-200 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlighted ? "text-violet-200" : "text-gray-500"}`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm ${plan.highlighted ? "text-violet-200" : "text-gray-600"}`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 h-5 w-5 shrink-0 ${plan.highlighted ? "text-violet-200" : "text-violet-600"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-violet-100" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-violet-600 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
