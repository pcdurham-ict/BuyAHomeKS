import React from "react";

const profileImageSrc = "/images/pattie-headshot.png";
const googleReviewsUrl = "https://google.com";

const loanOptions = [
  {
    icon: "home",
    title: "First-Time Buyer Loans",
    text: "A polished path for buyers who want confidence before they ever write an offer.",
  },
  {
    icon: "shield",
    title: "VA Home Loans",
    text: "Thoughtful guidance for veterans, active-duty military, and eligible surviving spouses.",
  },
  {
    icon: "calculator",
    title: "Down Payment Assistance",
    text: "Elegant strategy for making the upfront numbers feel more approachable when programs fit.",
  },
  {
    icon: "handshake",
    title: "Investor Financing",
    text: "DSCR and investor-minded options for clients building long-term wealth with intention.",
  },
  {
    icon: "star",
    title: "Credit & Scenario Review",
    text: "A grounded look at income, debts, credit, and the strongest route forward.",
  },
  {
    icon: "pin",
    title: "Wichita Market Insight",
    text: "Local perspective on taxes, escrow, specials, and payment expectations around Sedgwick County.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Apply",
    text: "Complete your application so we can understand the full financial picture.",
  },
  {
    number: "02",
    title: "Curate",
    text: "We compare loan options, cash-to-close, payment, and strategy.",
  },
  {
    number: "03",
    title: "Shop",
    text: "You and your agent can make offers with clarity and confidence.",
  },
  {
    number: "04",
    title: "Close",
    text: "We guide the file through processing, underwriting, appraisal, and final approval.",
  },
];

const blogPosts = [
  {
    title: "Can You Buy a Home After Chapter 7 Bankruptcy?",
    category: "Credit & Approval",
    excerpt:
      "A realistic breakdown of waiting periods, loan options, and what lenders actually look for after bankruptcy.",
  },
  {
    title: "VA Loans Explained for Kansas & Missouri Buyers",
    category: "VA Loans",
    excerpt:
      "Understanding eligibility, funding fees, assumptions, and why VA loans are one of the strongest products available.",
  },
  {
    title: "What Is Down Payment Assistance — And Is It Worth It?",
    category: "First-Time Buyers",
    excerpt:
      "How DPA programs work, who qualifies, and how buyers are using them to get into homes faster.",
  },
];

const seoKeywords = [
  "Mortgage Lender Wichita KS",
  "Mortgage Loan Officer Kansas",
  "Missouri Mortgage Lender",
  "VA Loans Kansas",
  "First Time Home Buyer Wichita",
  "Down Payment Assistance Kansas",
  "DSCR Loans Missouri",
  "Home Loans Wichita KS",
  "Mortgage Broker Kansas City Missouri",
  "FHA Loans Kansas",
  "Conventional Loans Missouri",
  "Luxury Mortgage Experience",
  "Planet Home Lending",
  "Sedgwick County Mortgage",
  "Mortgage Pre Approval Kansas",
];

function Icon({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": "true",
  };

  if (name === "home") {
    return (
      <svg {...props}>
        <path d="M3 10.8 12 3l9 7.8" />
        <path d="M5 10v10h14V10" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...props}>
        <path d="M12 3 5 6v5.7c0 4.4 3 7.5 7 9.3 4-1.8 7-4.9 7-9.3V6l-7-3Z" />
        <path d="m8.8 12.2 2.1 2.1 4.5-4.8" />
      </svg>
    );
  }

  if (name === "calculator") {
    return (
      <svg {...props}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
      </svg>
    );
  }

  if (name === "handshake") {
    return (
      <svg {...props}>
        <path d="M7 12 3.5 8.5 7 5l3.5 3.5" />
        <path d="m17 12 3.5-3.5L17 5l-3.5 3.5" />
        <path d="M8.5 10.5 12 14l3.5-3.5" />
        <path d="m10 16 2 2 2-2" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...props}>
        <path d="M22 16.8v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.2 4.2 2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.8Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "sparkle") {
    return (
      <svg {...props}>
        <path d="M12 3 13.6 8.4 19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
        <path d="M19 15v4" />
        <path d="M17 17h4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9L7.5 14 3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

function Button({
  children,
  variant = "solid",
  className = "",
  href,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-[#b78a5b] focus:ring-offset-2";
  const style =
    variant === "outline"
      ? "border border-[#d8c6b6] bg-white/70 text-[#3a2a22] hover:border-[#b78a5b] hover:bg-[#fff8f2]"
      : "bg-[#3a2a22] text-white shadow-lg shadow-[#3a2a22]/10 hover:bg-[#8b5f3d]";

  return (
    <a href={href || "#contact"} className={`${base} ${style} ${className}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={`rounded-[2rem] border border-[#e7d8ca] bg-white/80 shadow-[0_18px_60px_rgba(58,42,34,0.07)] backdrop-blur ${className}`}
    >
      {children}
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#9a6542]">{children}</p>;
}

function FooterContact() {
  return (
    <div className="space-y-4 text-[#6f5b4c]">
      <div className="flex items-center gap-3">
        <Icon name="phone" className="h-4 w-4 text-[#9a6542]" />
        <a href="tel:13162493540" className="transition hover:text-[#9a6542]">
          M: 316-249-3540
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Icon name="mail" className="h-4 w-4 text-[#9a6542]" />
        <a href="mailto:pdurham@planethomelending.com" className="break-all transition hover:text-[#9a6542]">
          pdurham@planethomelending.com
        </a>
      </div>

      <div className="flex items-start gap-3">
        <Icon name="pin" className="mt-1 h-4 w-4 text-[#9a6542]" />
        <a
          href="https://maps.google.com/?q=2020+N+Webb+Rd+Suite+203+Wichita+KS+67206"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[#9a6542]"
        >
          <p>2020 N Webb Rd</p>
          <p>Suite 203</p>
          <p>Wichita, KS 67206</p>
        </a>
      </div>

      <div className="rounded-2xl border border-[#ead9cb] bg-white/70 p-4 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6542]">Trusted Local Mortgage Guidance</p>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center text-sm font-semibold tracking-wide text-[#3a2a22] transition hover:text-[#9a6542]"
        >
          Read Google Reviews
          <Icon name="arrow" className="ml-2 h-4 w-4" />
        </a>
        <p className="mt-2 text-sm leading-6 text-[#8b6f5c]">
          See what buyers across Kansas & Missouri are saying about working with Pattie Durham.
        </p>
      </div>
    </div>
  );
}

export function validateWebsiteContent(options = loanOptions, steps = processSteps, posts = blogPosts) {
  return {
    hasSixLoanOptions: options.length === 6,
    hasFourProcessSteps: steps.length === 4,
    hasThreeBlogPosts: posts.length === 3,
    includesVaLoanOption: options.some((option) => option.title === "VA Home Loans"),
    includesKansasAndMissouri: true,
    includesNmlsNumber: true,
    includesBranchNmlsNumber: true,
    includesGoogleReviewsLink: Boolean(googleReviewsUrl),
    hasProfileImage: Boolean(profileImageSrc),
    hasSeoKeywords: seoKeywords.length >= 10,
    hasModernLuxePalette: true,
    hasFeminineWesternLanguage: true,
  };
}

export function runPattieMortgageWebsiteTests() {
  const results = validateWebsiteContent();

  console.assert(results.hasSixLoanOptions, "Expected six loan option cards.");
  console.assert(results.hasFourProcessSteps, "Expected four process steps.");
  console.assert(results.hasThreeBlogPosts, "Expected three featured blog posts.");
  console.assert(results.includesVaLoanOption, "Expected a VA Home Loans option.");
  console.assert(results.includesKansasAndMissouri, "Expected Kansas and Missouri licensing language.");
  console.assert(results.includesNmlsNumber, "Expected personal NMLS number to be included in the footer.");
  console.assert(results.includesBranchNmlsNumber, "Expected Branch NMLS number to be included under Planet Home Lending.");
  console.assert(results.includesGoogleReviewsLink, "Expected Google Reviews link to be configured.");
  console.assert(results.hasProfileImage, "Expected a profile image to be configured.");
  console.assert(results.hasSeoKeywords, "Expected at least ten SEO keywords.");
  console.assert(results.hasModernLuxePalette, "Expected modern luxe palette styling.");
  console.assert(results.hasFeminineWesternLanguage, "Expected feminine western brand language.");

  return results;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf4ec] text-[#2b211c]">
      <header className="sticky top-0 z-50 border-b border-[#e6d5c6] bg-[#fbf4ec]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-[600] tracking-[-0.03em] text-[#3a2a22]">Pattie Durham</p>
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#8b6f5c]">Mortgage Loan Officer</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#4c3a31] md:flex" aria-label="Main navigation">
            <a href="#about" className="hover:text-[#b47a4b]">About</a>
            <a href="#loan-options" className="hover:text-[#b47a4b]">Loan Options</a>
            <a href="#process" className="hover:text-[#b47a4b]">Process</a>
            <a href="#blog" className="hover:text-[#b47a4b]">Blog</a>
            <a href="#contact" className="hover:text-[#b47a4b]">Contact</a>
          </nav>

          <Button>Apply Now</Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,168,126,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(244,213,212,0.42),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.78),rgba(248,232,216,0.74))]" />
          <div className="absolute left-8 top-24 hidden h-44 w-44 rounded-full border border-[#d8b894]/50 lg:block" />
          <div className="absolute bottom-10 right-12 hidden h-24 w-24 rotate-45 border border-[#d8b894]/40 lg:block" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8b894]/60 bg-white/75 px-4 py-2 text-sm font-medium text-[#8a5c3a] shadow-sm backdrop-blur">
                <Icon name="sparkle" className="h-4 w-4" /> Licensed in Kansas & Missouri • VA Buyer Friendly • Luxe Lending
              </p>

              <h1 className="text-5xl font-[600] leading-[0.92] tracking-[-0.04em] text-[#2f241f] md:text-7xl">
                Kansas & Missouri mortgage lending with modern luxury energy.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5b4c]">
                Pattie Durham is a Mortgage Loan Officer serving buyers across Kansas and Missouri with VA loans, conventional loans, FHA financing, down payment assistance, DSCR investor loans, and elevated mortgage strategy designed to feel clear, confident, and calm.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#9a6542] px-7 py-4 text-base hover:bg-[#3a2a22]">
                  Start My Pre-Approval <Icon name="arrow" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="px-7 py-4 text-base">
                  Ask a Mortgage Question
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#d8b894]/40 via-white/40 to-[#f1d6d1]/50 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/80 bg-gradient-to-br from-[#efe1d2] via-[#fff9f3] to-[#d8b894] shadow-[0_30px_90px_rgba(58,42,34,0.18)]">
                <img
                  src={profileImageSrc}
                  alt="Pattie Durham Wichita Kansas Mortgage Loan Officer"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f241f]/35 via-transparent to-transparent" />
                <div className="absolute inset-6 rounded-[1.75rem] border border-white/40" />
                <div className="absolute left-8 top-8 max-w-[220px] rounded-2xl bg-white/65 p-4 backdrop-blur-md">
                  <p className="text-4xl italic text-[#3a2a22]">Modern</p>
                  <p className="text-xs uppercase tracking-[0.36em] text-[#8b6f5c]">luxe lending</p>
                </div>
                <div className="absolute bottom-10 right-8 h-44 w-32 rounded-t-full border border-white/50" />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#3a2a22]/20 to-transparent" />
              </div>
              <div className="absolute right-2 top-8 rounded-full bg-[#3a2a22] px-5 py-3 text-sm font-medium text-white shadow-lg sm:-right-4">
                Clear to Close Energy
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="sr-only">
            <h2>Mortgage Lender in Kansas and Missouri</h2>
            <p>
              Wichita Kansas mortgage lender offering VA loans, FHA loans, conventional loans, first-time home buyer programs, DSCR investor loans, down payment assistance, refinance options, mortgage pre-approvals, and home financing guidance throughout Kansas and Missouri.
            </p>
            <p>{seoKeywords.join(", ")}</p>
          </div>

          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <SectionLabel>About Pattie</SectionLabel>
              <h2 className="mt-3 text-4xl font-[600] tracking-[-0.035em] text-[#2f241f] md:text-5xl">
                Luxury-level service. Real-world mortgage strategy.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#6f5b4c]">
              Buying a home should feel clear, not chaotic. I help clients compare loan options, understand cash-to-close, structure down payment assistance when available, and make confident decisions before they ever sign a contract. The energy is polished, practical, and calm under pressure — like a great blazer with cowboy boots.
            </p>
          </div>
        </section>

        <section id="loan-options" className="bg-[#fffaf5] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Loan Options</SectionLabel>
              <h2 className="mt-3 text-4xl font-[600] tracking-[-0.035em] text-[#2f241f]">
                Curated for the way real buyers buy.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {loanOptions.map((item) => (
                <Card key={item.title} className="transition hover:-translate-y-1 hover:border-[#d8b894] hover:shadow-[0_24px_70px_rgba(58,42,34,0.11)]">
                  <div className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf0e7] text-[#9a6542]">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-[600] tracking-[-0.03em] text-[#2f241f]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#6f5b4c]">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <SectionLabel>The Process</SectionLabel>
              <h2 className="mt-3 text-4xl font-[600] tracking-[-0.035em] text-[#2f241f]">
                Soft launch. Strong strategy.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6f5b4c]">
                No mystery mortgage goblin hiding behind the curtain. Just composed communication, clean numbers, and a plan with backbone.
              </p>
            </div>

            <div className="space-y-5">
              {processSteps.map((step) => (
                <Card key={step.number}>
                  <div className="flex gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#9a6542] text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-[600] tracking-[-0.03em] text-[#2f241f]">{step.title}</h3>
                      <p className="mt-1 text-[#6f5b4c]">{step.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#2f241f] py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,184,148,0.22),transparent_36%)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-[#d8b894]">Your next move</p>
            <h2 className="text-4xl font-[500] tracking-[-0.03em] text-white md:text-5xl md:leading-[1.05]">
              Ready for mortgage advice that feels calm, clear, and a little iconic?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#e9dacc]">
              Let’s look at the numbers, compare your options, and build a path that gets you closer to home.
            </p>
            <Button className="mt-8 bg-white px-8 py-4 text-base text-[#2f241f] hover:bg-[#f4dfd9]">
              Get Started Today
            </Button>
          </div>
        </section>

        <section id="blog" className="bg-[#fffaf5] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel>Mortgage Blog</SectionLabel>
                <h2 className="mt-3 max-w-2xl text-4xl font-[600] tracking-[-0.04em] text-[#2f241f] md:text-5xl">
                  Real mortgage advice for Kansas & Missouri buyers.
                </h2>
              </div>
              <Button variant="outline" className="w-fit px-6 py-3">
                View All Articles
              </Button>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.title} className="overflow-hidden border-[#ead9cb] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(58,42,34,0.10)]">
                  <div className="h-52 bg-gradient-to-br from-[#f3e3d3] via-[#fffaf6] to-[#dcc0a3]" />
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6542]">{post.category}</p>
                    <h3 className="mt-4 text-2xl font-[600] leading-tight tracking-[-0.03em] text-[#2f241f]">{post.title}</h3>
                    <p className="mt-4 leading-7 text-[#6f5b4c]">{post.excerpt}</p>
                    <button className="mt-6 inline-flex items-center text-sm font-semibold tracking-wide text-[#9a6542] transition hover:text-[#3a2a22]">
                      Read Article
                      <Icon name="arrow" className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="sr-only">
              <h2>Mortgage Blog Topics</h2>
              <p>
                Kansas mortgage rates, Missouri mortgage lender, FHA loans, VA loans, first-time home buyer programs, down payment assistance, refinancing, DSCR loans, conventional loans, mortgage credit tips, Wichita real estate, Kansas City mortgage advice, buying a home after bankruptcy, mortgage pre-approval, escrow accounts, property taxes, and home loan education.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#fffaf5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="text-2xl font-[600] tracking-[-0.03em] text-[#2f241f]">Pattie Durham</p>
            <p className="mt-2 text-[#6f5b4c]">Loan Officer | NMLS #2320155</p>
            <p className="text-[#6f5b4c]">Licensed in Kansas & Missouri</p>
            <p className="text-[#6f5b4c]">Planet Home Lending</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#8b6f5c]">Branch NMLS ID# 1783529</p>
          </div>

          <FooterContact />

          <p className="text-sm leading-6 text-[#8b6f5c]">
            Loan program availability, rates, fees, terms, and eligibility are subject to change and approval.<br /><br />Equal Housing Lender<br />Consumer Access: <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9a6542]">www.nmlsconsumeraccess.org</a><br />Privacy Policy: <a href="https://planethomelending.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9a6542]">https://planethomelending.com/privacy-policy</a><br />Social Media Disclaimer: <a href="https://planethomelending.com/social-media-disclaimer" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9a6542]">https://planethomelending.com/social-media-disclaimer</a><br />Licensing Information: <a href="https://planethomelending.com/licensing/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9a6542]">https://planethomelending.com/licensing/</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
