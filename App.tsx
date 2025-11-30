import React, { useRef } from "react";
import { GeneratedImage } from "./components/GeneratedImage";
import { Paperform } from "./components/Paperform";
import { ArrowDown, Star, Shield, BookOpen, Users, Bell } from "lucide-react";

const LOGO_URL =
  "https://missrodeoamerica.com/wp-content/webp-express/webp-images/uploads/2023/12/New-MRA-logo.png.webp";

const App: React.FC = () => {
  const signupRef = useRef<HTMLDivElement>(null);

  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans text-rodeo-dark selection:bg-rodeo-gold selection:text-white">
      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/queen-1.png"
            alt="Rodeo Queen with Flag"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-rodeo-dark"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in space-y-8">
          <img
            src={LOGO_URL}
            alt="Miss Rodeo America Logo"
            className="h-24 md:h-32 mb-6 drop-shadow-2xl"
          />

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-wide drop-shadow-lg">
            You’ve Arrived at the Next Evolution of Rodeo Royalty
          </h1>

          <p className="text-lg md:text-xl text-rodeo-tan/90 max-w-2xl font-light leading-relaxed">
            A modern, unified resource designed to support, elevate, and
            celebrate the individuals and programs who represent the very best
            of rodeo royalty.
          </p>

          <button
            onClick={scrollToSignup}
            className="mt-8 px-8 py-4 bg-rodeo-gold text-white font-semibold rounded-full uppercase tracking-widest hover:bg-white hover:text-rodeo-gold transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.5)] transform hover:scale-105"
          >
            Join the Evolution
          </button>
        </div>

        <div className="absolute bottom-10 z-10 text-white/50 animate-bounce">
          <ArrowDown size={32} />
        </div>
      </header>

      {/* --- INTRODUCTION --- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-rodeo-brown font-bold">
              Building on a Legacy of Strength
            </h2>
            <div className="w-20 h-1 bg-rodeo-gold"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The role of rodeo royalty has always been rooted in excellence.
              What we are creating builds upon that foundation — combining
              decades of experience, industry knowledge, and real-world
              observation with a more forward-facing approach to communication,
              connection, and support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              This is not a replacement for what has come before. It is the
              natural evolution of it.
            </p>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="/miss-rodeo-america.webp"
              alt="Miss Rodeo America"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- VALUE PROP / FEATURES --- */}
      <section className="py-24 bg-rodeo-tan relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-rodeo-brown mb-6">
              A Central Resource for the Entire Royalty Community
            </h2>
            <p className="text-gray-600">
              The goal is simple: to create a single place where royalty
              programs, coordinators, contestants, and titleholders can access
              the guidance and information needed to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-rodeo-gold/20 hover:border-rodeo-gold"
              >
                <div className="mb-6 p-4 bg-rodeo-tan w-fit rounded-full text-rodeo-brown">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-rodeo-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="italic font-serif text-xl text-rodeo-brown">
              "Everything being developed is designed with purpose, intention,
              and respect for the tradition behind it."
            </p>
          </div>
        </div>
      </section>

      {/* --- EARLY ACCESS SECTION --- */}
      <section className="py-20 bg-rodeo-brown text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-rodeo-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rodeo-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/hat.png"
              alt="Cowgirl Hat"
              className="w-full h-[400px] object-cover rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-rodeo-gold">
              Why Your Early Access Matters
            </h2>
            <p className="text-rodeo-tan/80 leading-relaxed">
              The resources and tools coming to this platform are currently
              being prepared — and you are among the first to be invited to stay
              informed as they become available.
            </p>
            <p className="text-rodeo-tan/80 leading-relaxed">
              Your early interest creates momentum. It demonstrates the
              industry’s enthusiasm for what lies ahead. A strong beginning
              builds a strong future.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Early access to new tools and resources",
                "Updates on upcoming releases",
                "Invitations to new opportunities",
                "A first look at elite support materials",
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  <Star className="w-4 h-4 text-rodeo-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- SIGNUP SECTION --- */}
      <section
        ref={signupRef}
        className="py-24 bg-gradient-to-b from-white to-rodeo-tan/30"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-rodeo-dark font-bold">
              Join the First Wave
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You carry the legacy of rodeo royalty. This platform is being
              designed to support that legacy — with clarity, connection, and
              tools built for the future.
            </p>
            <p className="font-semibold text-rodeo-gold">
              No cost. No obligation. Simply a place reserved for you in what
              comes next.
            </p>
          </div>

          <div className="mt-10">
            <Paperform />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-rodeo-dark text-rodeo-tan py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src={LOGO_URL}
              alt="MRA Logo Small"
              className="h-12 opacity-80 grayscale hover:grayscale-0 transition-all"
            />
            <span className="font-serif text-lg tracking-wide">
              Rodeo Royalty Evolution
            </span>
          </div>
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Miss Rodeo America, Inc. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for feature grid
const features = [
  {
    title: "Clear, Accessible Resources",
    description:
      "Centralized guidance documentation and handbooks available at your fingertips.",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Modern Tools",
    description:
      "Digital solutions designed to simplify program management and strengthen operations.",
    icon: <Shield size={24} />,
  },
  {
    title: "Growth & Education",
    description:
      "Opportunities for continued learning and professional development for all stakeholders.",
    icon: <Star size={24} />,
  },
  {
    title: "Community Connection",
    description:
      "Updates and announcements that keep every stakeholder connected and informed.",
    icon: <Users size={24} />,
  },
  {
    title: "Professional Standards",
    description:
      "Materials that reflect the professionalism and standards rodeo royalty is known for.",
    icon: <Shield size={24} />, // Reusing shield or could use another icon
  },
  {
    title: "Real-Time Updates",
    description:
      "Be the first to know about changes, events, and new opportunities.",
    icon: <Bell size={24} />,
  },
];

export default App;
