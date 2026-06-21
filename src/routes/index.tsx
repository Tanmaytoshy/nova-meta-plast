import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Sparkles, Layers, Zap, ShieldCheck, Cpu, Clock, Users,
  Wrench, Heart, CheckCircle2, Factory, Lightbulb, Cog, Microscope,
  Truck, PaintBucket, Stamp, ScanLine, Mail, Phone, MapPin,
  Linkedin, Twitter, Facebook, Instagram, Menu, X,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import coatingImg from "@/assets/service-coating.jpg";
import foilingImg from "@/assets/service-foiling.jpg";
import laserImg from "@/assets/service-laser.jpg";
import switchesImg from "@/assets/gallery-switches.jpg";
import facilityImg from "@/assets/gallery-facility.jpg";
import qcImg from "@/assets/gallery-qc.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Meta Plast — Precision Finishing for Premium Switch Components" },
      {
        name: "description",
        content:
          "Nova Meta Plast delivers advanced Color Coating, Hot Foil Stamping, and Laser Marking for plastic switch components — a trusted manufacturing partner for OEMs and electrical brands.",
      },
      { name: "keywords", content: "Plastic Switch Finishing, Color Coating Services, Hot Foil Stamping, Laser Marking Services, Switch Component Decoration, Industrial Finishing Solutions, Electrical Switch Manufacturing, Plastic Component Coating" },
      { property: "og:title", content: "Nova Meta Plast — Precision. Finish. Innovation." },
      { property: "og:description", content: "Advanced Color Coating, Hot Foil Stamping & Laser Marking for premium plastic switch components." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nova Meta Plast" },
      { name: "twitter:description", content: "Precision finishing for premium switch components." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nova Meta Plast",
          slogan: "Precision. Finish. Innovation.",
          description:
            "Specialists in decorative finishing of plastic switch components — Color Coating, Hot Foil Stamping, and Laser Marking.",
          url: "/",
          logo: "/favicon.ico",
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@novametaplast.com",
            contactType: "Sales",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: PaintBucket,
    title: "Color Coating",
    desc: "Premium-quality coating solutions that deliver excellent finish, durability, color consistency, and long-lasting performance.",
    features: ["Smooth Surface Finish", "Superior Durability", "Color Consistency", "Quality-Controlled Process"],
    image: coatingImg,
  },
  {
    icon: Stamp,
    title: "Hot Foil Stamping",
    desc: "Decorative metallic, matte, and premium foil finishes that enhance aesthetics and strengthen brand identity.",
    features: ["Metallic Effects", "Matte Finishes", "Decorative Branding", "Premium Appearance"],
    image: foilingImg,
  },
  {
    icon: ScanLine,
    title: "Laser Marking",
    desc: "Accurate and permanent marking for logos, symbols, text, and backlit switch designs with industry-leading consistency.",
    features: ["Precision Marking", "Permanent Engraving", "Backlit Icons", "High Consistency"],
    image: laserImg,
  },
];

const processSteps = [
  { icon: Layers, title: "Component Preparation", desc: "Inspection, cleaning, and fixturing of incoming plastic parts." },
  { icon: Sparkles, title: "Surface Treatment", desc: "Primer and adhesion treatment for flawless coating bond." },
  { icon: PaintBucket, title: "Color Coating", desc: "Controlled spray application with consistent thickness and tone." },
  { icon: Stamp, title: "Hot Foil Stamping", desc: "Heated dies transfer metallic and decorative foils." },
  { icon: ScanLine, title: "Laser Marking", desc: "High-precision marking of icons, text, and backlit symbols." },
  { icon: Microscope, title: "Quality Inspection", desc: "Multi-stage QC with visual, dimensional, and adhesion tests." },
  { icon: Truck, title: "Final Dispatch", desc: "Protective packaging and on-time delivery to your facility." },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every component undergoes strict quality checks." },
  { icon: Cpu, title: "Advanced Technology", desc: "Modern machinery and precision manufacturing." },
  { icon: Clock, title: "Timely Delivery", desc: "Reliable schedules and commitment to deadlines." },
  { icon: Users, title: "Experienced Team", desc: "Skilled professionals focused on excellence." },
  { icon: Wrench, title: "Custom Solutions", desc: "Finishing tailored to your specifications." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Long-term partnerships built on trust." },
];

const industries = [
  "Electrical Switch Manufacturers",
  "Electronic Product Manufacturers",
  "OEM Brands",
  "Consumer Electronics",
  "Smart Home Products",
  "Industrial Electrical Components",
];

const galleryItems = [
  { src: coatingImg, label: "Color Coating", span: "row-span-2" },
  { src: foilingImg, label: "Hot Foil Stamping", span: "" },
  { src: laserImg, label: "Laser Marking", span: "" },
  { src: switchesImg, label: "Finished Components", span: "col-span-2" },
  { src: facilityImg, label: "Production Facility", span: "col-span-2" },
  { src: qcImg, label: "Quality Inspection", span: "row-span-2" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[oklch(0.16_0.05_255_/_0.85)] backdrop-blur-xl">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2.5 text-white">
            <span className="grid place-items-center h-9 w-9 rounded-md bg-gradient-to-br from-accent to-[oklch(0.78_0.15_220)] shadow-[0_0_20px_oklch(0.68_0.18_245/0.5)]">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display font-semibold tracking-tight">Nova Meta Plast</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/75">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-all hover:shadow-[var(--shadow-glow)]">
              Request Quote <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2" aria-label="Menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[oklch(0.16_0.05_255)]">
            <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-3 text-white/85">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-1.5">{l.label}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden text-white pt-16">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Plastic switch components on a precision coating line" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.88 }} />
          <div className="absolute inset-0 bg-grid opacity-50" />
        </div>
        <div className="container-px mx-auto max-w-7xl py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <span className="relative grid place-items-center h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Industrial Finishing Specialists
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Precision Finishing for{" "}
              <span className="text-gradient-electric">Premium Switch</span> Components
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              Enhancing plastic switch components through advanced Color Coating, Hot Foil Stamping,
              and Laser Marking solutions — engineered for the world&apos;s leading electrical brands.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-white hover:shadow-[var(--shadow-glow)] transition-all">
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all">
                Contact Us
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
              {[
                { k: "15+", v: "Years Expertise" },
                { k: "50M+", v: "Components Finished" },
                { k: "99.6%", v: "Quality Pass Rate" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl sm:text-3xl font-display font-semibold text-white">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/55">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 lg:py-32 bg-background">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img src={facilityImg} alt="Nova Meta Plast facility" className="w-full h-full object-cover aspect-[4/5]" width={1280} height={1600} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 sm:-right-10 hidden sm:block">
              <div className="rounded-xl bg-card border border-border shadow-[var(--shadow-elevated)] px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-lg bg-gradient-to-br from-accent to-[oklch(0.78_0.15_220)] text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Certified Process</div>
                    <div className="text-sm font-semibold text-foreground">ISO-Grade Quality Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">About Nova Meta Plast</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              A trusted finishing partner for the electrical industry.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Nova Meta Plast specializes in decorative finishing solutions for plastic switch components
              used in electrical and electronic products. With expertise in Color Coating, Hot Foil
              Stamping, and Precision Laser Marking, we help brands enhance product appearance,
              durability, and functionality while maintaining the highest quality standards.
            </p>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Our commitment to precision, consistency, timely delivery, and customer satisfaction has
              made us a trusted manufacturing partner for businesses seeking premium finishing solutions.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Factory, l: "In-house Production" },
                { icon: Lightbulb, l: "Engineering Expertise" },
                { icon: ShieldCheck, l: "Stringent QC" },
              ].map((i) => (
                <div key={i.l} className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-3">
                  <i.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{i.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Services</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Three core capabilities. One uncompromising standard.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From foundation coatings to micron-level laser detail, every step is engineered for repeatability and longevity.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/40 hover:shadow-[var(--shadow-elevated)] transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" width={1024} height={1024} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
                  <div className="absolute top-4 left-4 grid place-items-center h-11 w-11 rounded-lg bg-white/95 backdrop-blur text-navy-deep shadow-lg">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-24 lg:py-32 bg-[oklch(0.16_0.05_255)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-px mx-auto max-w-7xl relative">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Process</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Our Manufacturing Process
            </h2>
            <p className="mt-4 text-white/65 text-lg">
              A seven-stage pipeline engineered for precision, consistency, and traceability.
            </p>
          </div>
          <ol className="mt-16 relative">
            <div className="absolute left-5 lg:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/15 to-accent/60" aria-hidden />
            <div className="space-y-10 lg:space-y-16">
              {processSteps.map((step, i) => {
                const left = i % 2 === 0;
                return (
                  <li key={step.title} className="relative grid lg:grid-cols-2 gap-6 items-center">
                    <div className={`hidden lg:block ${left ? "order-1" : "order-2"}`} />
                    <div className={`relative pl-16 lg:pl-0 ${left ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}`}>
                      <div className={`absolute top-1 left-0 lg:left-auto ${left ? "lg:-left-7" : "lg:-right-7"} grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-accent to-[oklch(0.78_0.15_220)] text-white shadow-[var(--shadow-glow)] ring-4 ring-[oklch(0.16_0.05_255)]`}>
                        <step.icon className="h-4 w-4" />
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] text-accent">Step {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="mt-1 text-2xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-white/65 max-w-md lg:max-w-none lg:inline-block">{step.desc}</p>
                    </div>
                  </li>
                );
              })}
            </div>
          </ol>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Why Choose Us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Built on precision. Delivered with trust.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Six reasons leading electrical brands choose Nova Meta Plast as their finishing partner.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {whyChoose.map((c) => (
              <div key={c.title} className="group relative bg-card p-8 hover:bg-secondary/60 transition-colors">
                <div className="grid place-items-center h-12 w-12 rounded-lg bg-secondary text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Industries</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Industries we serve</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Specialized finishing solutions trusted across electrical and electronics manufacturing.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((name, i) => (
              <div key={name} className="group flex items-center gap-4 rounded-xl bg-card border border-border px-5 py-5 hover:border-accent/50 hover:-translate-y-0.5 transition-all">
                <div className="grid place-items-center h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-navy to-navy-deep text-white text-xs font-display font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-sm sm:text-base font-medium text-foreground">{name}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 lg:py-32 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Gallery</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Inside our production floor</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A closer look at the processes, machinery, and finished components.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
            {galleryItems.map((g) => (
              <figure key={g.label} className={`group relative overflow-hidden rounded-xl ${g.span}`}>
                <img src={g.src} alt={g.label} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent">Process</div>
                  <div className="text-base sm:text-lg font-semibold">{g.label}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 lg:py-32 bg-[oklch(0.16_0.05_255)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="container-px mx-auto max-w-7xl relative grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Contact</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Let&apos;s build better products together.
            </h2>
            <p className="mt-5 text-white/70 text-lg max-w-lg">
              Share your requirement and our team will get back within 24 hours with a tailored finishing proposal.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                { icon: Mail, label: "info@novametaplast.com" },
                { icon: Phone, label: "+91 00000 00000" },
                { icon: MapPin, label: "Manufacturing Hub, India" },
              ].map((c) => (
                <li key={c.label} className="flex items-center gap-4">
                  <div className="grid place-items-center h-11 w-11 rounded-lg bg-white/5 border border-white/10 text-accent">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <span className="text-white/85">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }}
            className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur p-6 sm:p-8 shadow-[var(--shadow-elevated)]"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Company Name" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone Number" name="phone" type="tel" />
            </div>
            <div className="mt-4">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Requirement</label>
              <textarea
                name="requirement"
                rows={5}
                required
                placeholder="Tell us about your switch components and finishing needs…"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
              />
            </div>
            <button type="submit" className="mt-6 group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-white hover:shadow-[var(--shadow-glow)] transition-all">
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.12_0.04_255)] text-white/70 border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-white">
              <span className="grid place-items-center h-9 w-9 rounded-md bg-gradient-to-br from-accent to-[oklch(0.78_0.15_220)]">
                <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display font-semibold tracking-tight">Nova Meta Plast</span>
            </div>
            <p className="mt-4 text-sm">Precision. Finish. Innovation.</p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid place-items-center h-9 w-9 rounded-md border border-white/10 hover:border-accent hover:text-accent transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Quick Links" items={[
            { label: "About", href: "#about" },
            { label: "Process", href: "#process" },
            { label: "Industries", href: "#industries" },
            { label: "Gallery", href: "#gallery" },
          ]} />
          <FooterCol title="Services" items={[
            { label: "Color Coating", href: "#services" },
            { label: "Hot Foil Stamping", href: "#services" },
            { label: "Laser Marking", href: "#services" },
            { label: "Custom Finishing", href: "#contact" },
          ]} />
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />info@novametaplast.com</li>
              <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />+91 00000 00000</li>
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />Manufacturing Hub, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/45">
            <p>© {new Date().getFullYear()} Nova Meta Plast. All rights reserved.</p>
            <p>Plastic Switch Finishing · Color Coating · Hot Foil Stamping · Laser Marking</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
      />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}><a href={i.href} className="hover:text-accent transition-colors">{i.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
