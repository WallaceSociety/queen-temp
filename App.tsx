import React, { useRef } from "react";
import { Paperform } from "./components/Paperform";
import { ArrowDown, Crown, Users, Heart, Handshake, Sparkles } from "lucide-react";

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
      <header className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
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

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-wide drop-shadow-lg">
            Stay Connected to the Heart of Rodeo Royalty
          </h1>

          <button
            onClick={scrollToSignup}
            className="mt-8 px-8 py-4 bg-rodeo-gold text-white font-semibold rounded-full uppercase tracking-widest hover:bg-white hover:text-rodeo-gold transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.5)] transform hover:scale-105"
          >
            Join the Network
          </button>
        </div>

        <div className="absolute bottom-10 z-10 text-white/50 animate-bounce">
          <ArrowDown size={32} />
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Across the country, royalty programs play an essential role in representing the sport of rodeo — from small hometown celebrations to long-standing state titles. Each program, each titleholder, and each coordinator contributes to the legacy that makes rodeo royalty unique.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            To ensure we can communicate clearly and directly with every corner of the royalty world, we are building a single, unified contact list for all who participate in or support royalty programs.
          </p>
          
          <p className="text-lg md:text-xl text-rodeo-brown font-semibold leading-relaxed">
            No matter your title, your experience, or your affiliation, we invite you to join this network.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            By signing up, you'll be among the first to receive news, information, and opportunities as they are released. This is simply a way for us to stay connected with you — and for you to stay connected with the broader royalty community.
          </p>
        </div>
      </section>

      {/* --- WHO SHOULD JOIN --- */}
      <section className="py-20 bg-rodeo-tan">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-rodeo-brown font-bold text-center mb-12">
            Who Should Join?
          </h2>
          
          <p className="text-lg text-gray-700 text-center mb-10">
            Everyone who plays any role in rodeo royalty, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="p-3 bg-rodeo-gold/10 rounded-full text-rodeo-gold flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">
                  {item.text}
                </p>
              </div>
            ))}
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
              Join Now
            </h2>
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
          </div>
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} National Rodeo Royalty Council. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const audiences = [
  {
    text: "Current or aspiring rodeo queens",
    icon: <Crown size={24} />,
  },
  {
    text: "Local, regional, or state royalty coordinators and committee members",
    icon: <Users size={24} />,
  },
  {
    text: "Rodeo committees with royalty involvement",
    icon: <Handshake size={24} />,
  },
  {
    text: "Sponsors, supporters, and individuals connected to Royalty Programs",
    icon: <Heart size={24} />,
  },
  {
    text: "Anyone with an interest in the future of rodeo royalty",
    icon: <Sparkles size={24} />,
  },
];

export default App;
