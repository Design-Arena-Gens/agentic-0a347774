"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      features: [
        "Up to 1,000 users",
        "Basic analytics",
        "Email support",
        "1 team member",
        "API access",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10,000 users",
        "Advanced analytics",
        "Priority support",
        "5 team members",
        "API access",
        "Custom integrations",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited users",
        "Enterprise analytics",
        "24/7 phone support",
        "Unlimited team members",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      recommended: false,
    },
  ];

  const costBreakdown = [
    {
      tier: "Budget Tier",
      cost: "$15-30/month",
      description: "Perfect for testing and MVP",
      services: [
        "Vercel Hobby (Free) or Pro ($20/mo)",
        "Supabase Free tier",
        "Stripe (2.9% + $0.30 per transaction)",
      ],
      advantages: [
        "Zero upfront cost",
        "Scale as you grow",
        "No credit card needed initially",
        "Full production features",
      ],
      limitations: [
        "500MB database storage",
        "100GB bandwidth",
        "Good for ~1-100 users",
      ],
    },
    {
      tier: "Startup Tier",
      cost: "$50-100/month",
      description: "For growing businesses with paying customers",
      services: [
        "Vercel Pro ($20/mo)",
        "Supabase Pro ($25/mo)",
        "Stripe (2.9% + $0.30 per transaction)",
        "Custom domain + SSL (included)",
      ],
      advantages: [
        "8GB database storage",
        "Unlimited bandwidth",
        "Daily backups",
        "Email support",
        "99.9% uptime SLA",
        "Good for 100-10K users",
      ],
      limitations: [
        "Manual scaling needed",
        "Standard support only",
      ],
    },
    {
      tier: "Professional Tier",
      cost: "$200-500/month",
      description: "For established SaaS with steady revenue",
      services: [
        "Vercel Pro ($20/mo)",
        "Supabase Pro + Compute ($25-200/mo)",
        "Stripe (2.9% + $0.30 per transaction)",
        "Monitoring service ($20-50/mo)",
        "Email service like SendGrid ($15-50/mo)",
      ],
      advantages: [
        "32GB+ database storage",
        "Dedicated compute resources",
        "Point-in-time recovery",
        "Priority support",
        "Advanced monitoring",
        "Good for 10K-100K users",
      ],
      limitations: [
        "Higher commitment",
        "More complex management",
      ],
    },
    {
      tier: "Enterprise Tier",
      cost: "$1000+/month",
      description: "For large-scale operations",
      services: [
        "Vercel Enterprise (custom pricing)",
        "Supabase Enterprise (custom pricing)",
        "Stripe (negotiated rates)",
        "Dedicated infrastructure",
        "Custom SLA agreements",
      ],
      advantages: [
        "Unlimited everything",
        "Dedicated support team",
        "Custom integrations",
        "99.99% uptime SLA",
        "Advanced security features",
        "Good for 100K+ users",
      ],
      limitations: [
        "Significant investment",
        "Annual contracts often required",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">SaaS Starter</h1>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Pitch */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Build Your SaaS Empire
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Complete subscription platform with payments, database, and user management.
            Start free, scale as you grow.
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Plan
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  plan.recommended
                    ? "ring-4 ring-indigo-600 transform scale-105"
                    : ""
                }`}
              >
                {plan.recommended && (
                  <div className="bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.recommended
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            What It Costs to Build This
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real costs from free to enterprise. Choose based on your revenue and growth stage.
          </p>

          <div className="space-y-8">
            {costBreakdown.map((tier, index) => (
              <div
                key={tier.tier}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {tier.tier}
                    </h4>
                    <p className="text-gray-600 mt-1">{tier.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-indigo-600">
                      {tier.cost}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Services Included:
                    </h5>
                    <ul className="space-y-1">
                      {tier.services.map((service) => (
                        <li key={service} className="text-sm text-gray-700">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      ✅ Advantages:
                    </h5>
                    <ul className="space-y-1">
                      {tier.advantages.map((advantage) => (
                        <li key={advantage} className="text-sm text-green-700">
                          • {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      ⚠️ Limitations:
                    </h5>
                    <ul className="space-y-1">
                      {tier.limitations.map((limitation) => (
                        <li key={limitation} className="text-sm text-orange-700">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process to Create This */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            How to Build This in 7 Steps
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">1</div>
              <h4 className="text-xl font-bold mb-2">Set Up Database (Supabase)</h4>
              <p className="text-white/90">
                Create free Supabase account → New project → Copy API keys.
                Create tables for users, subscriptions, and your data. Enable Row Level Security.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: 30 minutes | Cost: Free
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">2</div>
              <h4 className="text-xl font-bold mb-2">Set Up Payments (Stripe)</h4>
              <p className="text-white/90">
                Create Stripe account → Get API keys → Create products with prices.
                Set up subscription plans. No monthly fee, just 2.9% + $0.30 per transaction.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: 45 minutes | Cost: Free (pay per transaction)
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">3</div>
              <h4 className="text-xl font-bold mb-2">Deploy to Vercel</h4>
              <p className="text-white/90">
                Push code to GitHub → Import to Vercel → Add environment variables.
                Auto-deploys on every push. Includes SSL and global CDN.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: 15 minutes | Cost: Free (Hobby) or $20/mo (Pro)
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">4</div>
              <h4 className="text-xl font-bold mb-2">Connect Authentication</h4>
              <p className="text-white/90">
                Use Supabase Auth for login/signup. Supports email, Google, GitHub, magic links.
                Built-in password reset and email verification.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: 1 hour | Cost: Included in Supabase
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">5</div>
              <h4 className="text-xl font-bold mb-2">Build Your Core Features</h4>
              <p className="text-white/90">
                Create your unique value proposition. Add dashboards, tools, or services
                that solve your customers' problems. This is what they pay for.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: Variable (2-8 weeks) | Cost: Your time
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">6</div>
              <h4 className="text-xl font-bold mb-2">Add Stripe Webhooks</h4>
              <p className="text-white/90">
                Handle subscription events (payment success, cancellation, etc).
                Update user permissions automatically. Critical for subscription business.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: 2 hours | Cost: Free
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">7</div>
              <h4 className="text-xl font-bold mb-2">Launch & Market</h4>
              <p className="text-white/90">
                Get your first 10 customers manually. Use feedback to improve.
                Scale marketing once product-market fit is proven.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Time: Ongoing | Cost: $0-500/mo marketing budget
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-3">💡</div>
              <h4 className="text-xl font-bold mb-2">Pro Tip: Start Free</h4>
              <p className="text-white/90">
                Begin with Vercel Hobby ($0) + Supabase Free ($0). Only upgrade when you
                hit limits or get paying customers. Test your idea before spending money.
              </p>
              <div className="mt-3 text-sm bg-white/20 rounded p-2">
                Total to start: $0 | Upgrade when profitable
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            How to Make Money From This
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-green-700 mb-3">
                💰 Revenue Example (100 customers)
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>10 Basic ($9/mo)</span>
                  <span className="font-semibold">$90/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>70 Pro ($29/mo)</span>
                  <span className="font-semibold">$2,030/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Enterprise ($99/mo)</span>
                  <span className="font-semibold">$1,980/mo</span>
                </div>
                <div className="border-t-2 border-green-300 mt-2 pt-2 flex justify-between text-lg">
                  <span className="font-bold">Gross Revenue</span>
                  <span className="font-bold text-green-600">$4,100/mo</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                📊 Net Profit (100 customers)
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Gross Revenue</span>
                  <span className="font-semibold">$4,100</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Stripe fees (3%)</span>
                  <span>-$123</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Infrastructure</span>
                  <span>-$75</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Tools & services</span>
                  <span>-$50</span>
                </div>
                <div className="border-t-2 border-blue-300 mt-2 pt-2 flex justify-between text-lg">
                  <span className="font-bold">Net Profit</span>
                  <span className="font-bold text-blue-600">$3,852/mo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6">
            <h4 className="text-xl font-bold text-orange-700 mb-3">
              🚀 Growth Strategy to Win More Money
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li>✓ <strong>Months 1-3:</strong> Get first 10 customers manually (Reddit, Twitter, direct outreach)</li>
              <li>✓ <strong>Months 4-6:</strong> Build in public, share metrics, grow to 50 customers</li>
              <li>✓ <strong>Months 7-12:</strong> Scale with paid ads once you know customer acquisition cost</li>
              <li>✓ <strong>Year 2+:</strong> Add annual plans (20% discount), enterprise features, partnerships</li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What's Included in This Stack
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔐",
                title: "User Authentication",
                desc: "Email/password, social login, magic links, password reset",
              },
              {
                icon: "💳",
                title: "Stripe Payments",
                desc: "Subscriptions, one-time payments, invoices, tax handling",
              },
              {
                icon: "📊",
                title: "PostgreSQL Database",
                desc: "Relational database with real-time updates and backups",
              },
              {
                icon: "🔒",
                title: "Row Level Security",
                desc: "Database-level security so users only see their data",
              },
              {
                icon: "📧",
                title: "Email Notifications",
                desc: "Transactional emails for signup, payments, updates",
              },
              {
                icon: "📈",
                title: "Analytics Ready",
                desc: "Track user behavior, revenue, churn, and growth",
              },
              {
                icon: "🌐",
                title: "Custom Domain",
                desc: "Use your own domain with automatic SSL certificates",
              },
              {
                icon: "⚡",
                title: "Edge Network",
                desc: "Global CDN for fast loading worldwide",
              },
              {
                icon: "🔄",
                title: "Auto Deployments",
                desc: "Push code and go live in 30 seconds",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your SaaS?
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Start with $0 investment. Scale when you're profitable. This exact template is ready to deploy.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-4 rounded-lg hover:bg-indigo-700 transition font-semibold text-lg">
            Deploy Now - Free
          </button>
        </div>
      </div>
    </div>
  );
}
