import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Map, AlertCircle, Wifi, Cpu, Smartphone, Gauge } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Download, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SpitiShield AI Landing Page
 * Design: Tactical Cyberpunk Minimalism
 * - Deep Space Black (#050505) background
 * - Survival Orange (#FF5722) accents
 * - Satellite Blue (#2196F3) secondary
 * - Glassmorphic cards with tactical HUD aesthetic
 */

const colors = {
  bg: "#050505",
  fg: "#F5F5F5",
  secondary: "#FF5722",
  accent: "#2196F3",
  card: "#1A1A1A",
  border: "#2D2D2D",
  muted: "#3F3F3F",
  mutedFg: "#B0B0B0",
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authStage, setAuthStage] = useState<"idle" | "scanning" | "granted">("idle");
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const previewImages = [
    { src: "previews/preview-5.jpg", title: "Survival Tactical", desc: "Premium survival OS branding" },
    { src: "previews/preview-1.jpg", title: "Location Discovery", desc: "Tactical GPS & Mesh node triangulation" },
    { src: "previews/preview-2.jpg", title: "Survival AI", desc: "Local inference brain for zero-signal reasoning" },
    { src: "previews/preview-3.jpg", title: "Local Mesh", desc: "P2P community safety network" },
    { src: "previews/preview-4.jpg", title: "Emergency SOS", desc: "High-frequency audio & satellite mesh beacon" },
  ];

  const nextPreview = () => setCurrentPreviewIndex((prev) => (prev + 1) % previewImages.length);
  const prevPreview = () => setCurrentPreviewIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: colors.bg, color: colors.fg, overflow: "hidden" }}>
      {/* Navigation */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "rgba(5, 5, 5, 0.8)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${colors.border}` }}>
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div style={{ width: "32px", height: "32px", backgroundColor: colors.secondary, borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: colors.fg, fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "0.875rem" }}>S</span>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem" }}>SpitiShield AI</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" style={{ fontSize: "0.875rem", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary} onMouseLeave={(e) => e.currentTarget.style.color = colors.fg}>Features</a>
            <a href="#architecture" style={{ fontSize: "0.875rem", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary} onMouseLeave={(e) => e.currentTarget.style.color = colors.fg}>Architecture</a>
            <a href="#documentation" style={{ fontSize: "0.875rem", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary} onMouseLeave={(e) => e.currentTarget.style.color = colors.fg}>Documentation</a>
            <a href="#api" style={{ fontSize: "0.875rem", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary} onMouseLeave={(e) => e.currentTarget.style.color = colors.fg}>API</a>
            <a href="#roadmap" style={{ fontSize: "0.875rem", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.secondary} onMouseLeave={(e) => e.currentTarget.style.color = colors.fg}>Roadmap</a>
            <Button 
              onClick={() => { setIsAuthOpen(true); setAuthStage("idle"); }}
              style={{ backgroundColor: colors.secondary, color: colors.bg, fontWeight: "bold" }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: "relative", paddingTop: "128px", paddingBottom: "80px", overflow: "hidden" }}>
        {/* Background image with parallax */}
        <div 
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/103826472/mdZ2xjbCC9DSJokf87vqqG/hero-himalayan-peaks-2XmmXZW4efuWH525BtebW2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.15,
          }}
        />

        {/* Topographic grid overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "linear-gradient(rgba(255, 87, 34, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 87, 34, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }} />

        <div className="container relative z-10" style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "64px", alignItems: "center" }}>
          <div>
            <div style={{ animation: "slide-up 0.6s ease-out forwards", marginBottom: "24px" }}>
              <div style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "rgba(255, 87, 34, 0.1)", border: "1px solid rgba(255, 87, 34, 0.3)", borderRadius: "0.5rem", marginBottom: "16px" }}>
                <span style={{ color: colors.secondary, fontFamily: "var(--font-display)", fontWeight: "600", fontSize: "0.875rem" }}>🏔️ 4,270m+ Altitude Resilience</span>
              </div>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "3.75rem", lineHeight: 1.2, marginBottom: "24px", animation: "slide-up 0.6s ease-out forwards 0.1s both" }}>
              Resilient Intelligence for the High Himalayas
            </h1>

            <p style={{ fontSize: "1.125rem", color: colors.mutedFg, marginBottom: "32px", animation: "slide-up 0.6s ease-out forwards 0.2s both" }}>
              SpitiShield AI is a hybrid survival operating system that bridges cloud-based intelligence with zero-signal mountain resilience. Offline-first medical triage, tactical terrain mapping, and adaptive AI that works when connectivity fails.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px", animation: "slide-up 0.6s ease-out forwards 0.3s both" }}>
              <Button 
                onClick={() => setIsPreviewOpen(true)}
                style={{ backgroundColor: colors.secondary, color: colors.bg, padding: "24px 32px", fontSize: "1rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px", width: "fit-content" }}
              >
                Explore the System <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Key metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", animation: "slide-up 0.6s ease-out forwards 0.4s both" }}>
              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "16px" }}>
                <div style={{ fontSize: "1.5rem", fontFamily: "var(--font-display)", fontWeight: "bold", color: colors.secondary }}>100%</div>
                <div style={{ fontSize: "0.875rem", color: colors.mutedFg }}>Offline Capable</div>
              </div>
              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "16px" }}>
                <div style={{ fontSize: "1.5rem", fontFamily: "var(--font-display)", fontWeight: "bold", color: colors.accent }}>4270m+</div>
                <div style={{ fontSize: "0.875rem", color: colors.mutedFg }}>Tested Altitude</div>
              </div>
              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "16px" }}>
                <div style={{ fontSize: "1.5rem", fontFamily: "var(--font-display)", fontWeight: "bold", color: colors.secondary }}>0ms</div>
                <div style={{ fontSize: "0.875rem", color: colors.mutedFg }}>Latency (Local)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Video Phone Mockup */}
          <div style={{ animation: "fade-in 1s ease-out forwards 0.5s both" }}>
            <div style={{
              position: "relative",
              width: "300px",
              height: "600px",
              backgroundColor: "#000",
              borderRadius: "40px",
              border: `8px solid ${colors.card}`,
              boxShadow: `0 0 50px ${colors.secondary}33`,
              overflow: "hidden",
              margin: "0 auto"
            }}>
              {/* Notch */}
              <div style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "120px",
                height: "18px",
                backgroundColor: colors.card,
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                zIndex: 10
              }} />

              {/* Video Embed */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NZhMcO30xjU?autoplay=1&mute=1&loop=1&playlist=NZhMcO30xjU&controls=0&rel=0&modestbranding=1"
                title="Tactical Briefing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></iframe>
              
              {/* Survival Accents */}
              <div style={{ position: "absolute", right: "-10px", top: "100px", width: "4px", height: "40px", backgroundColor: colors.secondary, borderRadius: "2px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}` }}>
        <div className="container">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "16px" }}>Core Features</h2>
            <p style={{ color: colors.mutedFg, fontSize: "1.125rem", maxWidth: "672px" }}>
              Three pillars of survival intelligence designed for the harshest environments on Earth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {/* Feature 1: Satellite-Mesh Hybrid */}
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px", cursor: "pointer", transition: "all 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(26, 26, 26, 0.8)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(26, 26, 26, 0.6)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(255, 87, 34, 0.2)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Zap style={{ width: "24px", height: "24px", color: colors.secondary }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "12px" }}>🛰️ Satellite-Mesh Hybrid AI</h3>
              <p style={{ color: colors.mutedFg, marginBottom: "16px" }}>
                Seamlessly transitions between Gemini 1.5 Flash (cloud) and local survival brain. Detects connectivity in real-time and adapts intelligence layer automatically.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: colors.secondary, fontSize: "0.875rem", fontWeight: "600" }}>
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Feature 2: Terrain Mapping */}
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px", cursor: "pointer", transition: "all 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(26, 26, 26, 0.8)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(26, 26, 26, 0.6)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(33, 150, 243, 0.2)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <Map style={{ width: "24px", height: "24px", color: colors.accent }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "12px" }}>🗺️ Reactive Terrain Mapping</h3>
              <p style={{ color: colors.mutedFg, marginBottom: "16px" }}>
                High-resolution satellite tiles via ESRI & Google. Mesh radar visualizes emergency nodes, hospitals, fuel points. Live route manifest tracks altitude telemetry.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: colors.secondary, fontSize: "0.875rem", fontWeight: "600" }}>
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Feature 3: Auto-Rescue */}
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px", cursor: "pointer", transition: "all 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(26, 26, 26, 0.8)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(26, 26, 26, 0.6)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(255, 87, 34, 0.2)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <AlertCircle style={{ width: "24px", height: "24px", color: colors.secondary }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "12px" }}>⚡ Auto-Rescue Flows</h3>
              <p style={{ color: colors.mutedFg, marginBottom: "16px" }}>
                Pre-configured automation for AMS, low-power SOS, and emergency medical triage. Tactical decision trees guide explorers through critical moments.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: colors.secondary, fontSize: "0.875rem", fontWeight: "600" }}>
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Feature showcase images */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "16px", overflow: "hidden" }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/103826472/mdZ2xjbCC9DSJokf87vqqG/feature-satellite-mesh-2kN3Dg2vqALNSyi6fKdZMj.webp"
                alt="Satellite Mesh Network"
                style={{ width: "100%", height: "256px", objectFit: "cover", borderRadius: "0.375rem" }}
              />
            </div>
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "16px", overflow: "hidden" }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/103826472/mdZ2xjbCC9DSJokf87vqqG/feature-emergency-triage-b5Z7ThxaBKDv82SNezoC4L.webp"
                alt="Emergency Triage HUD"
                style={{ width: "100%", height: "256px", objectFit: "cover", borderRadius: "0.375rem" }}
              />
            </div>
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "16px", overflow: "hidden" }}>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/103826472/mdZ2xjbCC9DSJokf87vqqG/feature-offline-resilience-LgG8c2FW7Qwqcn3DnSd75L.webp"
                alt="Offline Resilience"
                style={{ width: "100%", height: "256px", objectFit: "cover", borderRadius: "0.375rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Offline Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}`, backgroundColor: "rgba(63, 63, 63, 0.05)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "48px" }}>Why SpitiShield Dominates Offline</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(255, 87, 34, 0.2)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Wifi style={{ width: "24px", height: "24px", color: colors.secondary }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem" }}>The "4270m" Test</h3>
              <p style={{ color: colors.mutedFg }}>
                Most AI apps fail the moment they lose signal. SpitiShield was built <em>for</em> the blackout—not as an afterthought.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(33, 150, 243, 0.2)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Gauge style={{ width: "24px", height: "24px", color: colors.accent }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem" }}>Context-Aware Safety</h3>
              <p style={{ color: colors.mutedFg }}>
                It's not just a chat app—it's a map and a medic that knows exactly where you are on the mountain.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(255, 87, 34, 0.2)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Cpu style={{ width: "24px", height: "24px", color: colors.secondary }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem" }}>Low-Latency Reality</h3>
              <p style={{ color: colors.mutedFg }}>
                Direct REST protocols and local SQLite deliver faster answers than traditional cloud-only apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}` }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "16px" }}>Technical Architecture</h2>
          <p style={{ color: colors.mutedFg, fontSize: "1.125rem", marginBottom: "48px", maxWidth: "672px" }}>
            Built for developers and hackathon judges. A stack designed for resilience at altitude.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "12px", color: colors.secondary }}>Frontend</h3>
                <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>React Native (Expo) with NativeWind (Tailwind CSS) for responsive, native-feeling UI across iOS and Android.</p>
              </div>

              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "12px", color: colors.secondary }}>Navigation</h3>
                <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>Expo Router with typed routes for predictable, type-safe navigation throughout the app.</p>
              </div>

              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "12px", color: colors.secondary }}>Persistence</h3>
                <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>SQLite for emergency database + SecureStore for API protocols. Survives power loss and network failures.</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "12px", color: colors.accent }}>Networking</h3>
                <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>NetInfo monitors real-time connectivity. Automatic fallback to local brain when signal drops.</p>
              </div>

              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "12px", color: colors.accent }}>Intelligence</h3>
                <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>Google Generative AI (Gemini 1.5 Flash) via direct REST + local search algorithms for offline reasoning.</p>
              </div>

              <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "12px", color: colors.accent }}>Mapping</h3>
                <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>ESRI & Google satellite tiles with offline tile caching. Topographic overlays for terrain analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}`, backgroundColor: "rgba(63, 63, 63, 0.05)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "16px" }}>Product Roadmap</h2>
          <p style={{ color: colors.mutedFg, fontSize: "1.125rem", marginBottom: "48px", maxWidth: "672px" }}>
            From Genesis to Hardware Link—a three-phase climb to full ecosystem integration.
          </p>

          <div style={{ marginBottom: "48px" }}>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/103826472/mdZ2xjbCC9DSJokf87vqqG/roadmap-phases-TDgeViGLHzjr9yLqmL8GCx.webp"
              alt="Product Roadmap"
              style={{ width: "100%", borderRadius: "0.5rem" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {/* Phase 1 */}
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px", borderLeft: `4px solid ${colors.accent}` }}>
              <div style={{ display: "inline-block", padding: "4px 12px", backgroundColor: "rgba(33, 150, 243, 0.2)", borderRadius: "0.25rem", color: colors.accent, fontSize: "0.75rem", fontWeight: "600", marginBottom: "16px" }}>PHASE 1 - CURRENT</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "16px" }}>Genesis</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.accent, marginTop: "4px" }}>✓</span>
                  <span>Stable Hybrid AI Assistant</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.accent, marginTop: "4px" }}>✓</span>
                  <span>Offline Route Manifest Sync</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.accent, marginTop: "4px" }}>✓</span>
                  <span>Tactical Satellite Mapping HUD</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.accent, marginTop: "4px" }}>✓</span>
                  <span>Secure Protocol Storage</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px", borderLeft: `4px solid ${colors.secondary}` }}>
              <div style={{ display: "inline-block", padding: "4px 12px", backgroundColor: "rgba(255, 87, 34, 0.2)", borderRadius: "0.25rem", color: colors.secondary, fontSize: "0.75rem", fontWeight: "600", marginBottom: "16px" }}>PHASE 2 - NEXT 3 MONTHS</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "16px" }}>Mesh Grid</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>P2P Discovery via BLE</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Tile Caching for Routes</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Voice SOS Commands</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Decentralized Network</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px", borderLeft: `4px solid ${colors.secondary}` }}>
              <div style={{ display: "inline-block", padding: "4px 12px", backgroundColor: "rgba(255, 87, 34, 0.2)", borderRadius: "0.25rem", color: colors.secondary, fontSize: "0.75rem", fontWeight: "600", marginBottom: "16px" }}>PHASE 3 - NEXT 6 MONTHS</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "16px" }}>Hardware Link</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Sensor Integration (O2/HR)</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Automated AMS Detection</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Solar Charging Prediction</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: colors.secondary, marginTop: "4px" }}>→</span>
                  <span>Full Ecosystem Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}` }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "16px" }}>System Documentation</h2>
          <p style={{ color: colors.mutedFg, fontSize: "1.125rem", marginBottom: "48px", maxWidth: "672px" }}>
            The definitive guide to operating SpitiShield AI in high-altitude environments.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "24px", color: colors.secondary }}>1. Deployment</h3>
              <pre style={{ backgroundColor: colors.bg, padding: "16px", borderRadius: "0.5rem", fontSize: "0.875rem", color: colors.accent, overflowX: "auto", marginBottom: "24px" }}>
                <code>{`git clone https://github.com/rajk14/spritishied-ai.git
npm install
npx expo start`}</code>
              </pre>
              <p style={{ color: colors.mutedFg, fontSize: "0.875rem" }}>Ensure Node.js 18+ and Expo Go are installed on your workstation and mobile device.</p>
            </div>

            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.125rem", marginBottom: "24px", color: colors.secondary }}>2. Core Protocols</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: colors.secondary, fontWeight: "bold" }}>ALPHA:</span>
                  <span>Hybrid sync engine. Monitors signal dBs to switch between Gemini Cloud and Local Brain.</span>
                </li>
                <li style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: colors.secondary, fontWeight: "bold" }}>OMEGA:</span>
                  <span>Emergency broadcast trigger. Sends compressed telemetry via any available mesh node.</span>
                </li>
                <li style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: colors.secondary, fontWeight: "bold" }}>SIGMA:</span>
                  <span>Terrain tile caching. Pre-fetches 1:50,000 scale maps for the active route manifest.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section id="api-reference" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}`, backgroundColor: "rgba(63, 63, 63, 0.05)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "16px" }}>API Reference</h2>
          <p style={{ color: colors.mutedFg, fontSize: "1.125rem", marginBottom: "48px", maxWidth: "672px" }}>
            Tactical endpoints for integrating with the SpitiShield ecosystem.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ padding: "4px 8px", backgroundColor: "#4CAF50", color: "white", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "bold" }}>POST</span>
                <code style={{ fontSize: "1rem", color: colors.accent }}>/v1/triage/analyze</code>
              </div>
              <p style={{ color: colors.mutedFg, fontSize: "0.875rem", marginBottom: "16px" }}>Submit patient symptoms and vitals for tactical medical triage. Returns a priority-coded action plan.</p>
              <div style={{ backgroundColor: colors.bg, padding: "12px", borderRadius: "0.25rem" }}>
                <code style={{ fontSize: "0.75rem", color: colors.secondary }}>{`{ "symptoms": ["shortness of breath", "nausea"], "altitude": 4270 }`}</code>
              </div>
            </div>

            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ padding: "4px 8px", backgroundColor: "#2196F3", color: "white", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "bold" }}>GET</span>
                <code style={{ fontSize: "1rem", color: colors.accent }}>/v1/terrain/tiles</code>
              </div>
              <p style={{ color: colors.mutedFg, fontSize: "0.875rem", marginBottom: "16px" }}>Fetches cached topographic tiles for specific GPS coordinates. Optimized for low-bandwidth satellite links.</p>
            </div>

            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ padding: "4px 8px", backgroundColor: "#F44336", color: "white", borderRadius: "0.25rem", fontSize: "0.75rem", fontWeight: "bold" }}>POST</span>
                <code style={{ fontSize: "1rem", color: colors.accent }}>/v1/system/sos</code>
              </div>
              <p style={{ color: colors.mutedFg, fontSize: "0.875rem", marginBottom: "16px" }}>Initiates the OMEGA protocol. Broadcasts emergency beacon and locks system into high-contrast rescue mode.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}`, backgroundImage: "linear-gradient(to bottom, rgba(63, 63, 63, 0.05), #050505)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "24px" }}>Ready to Conquer the Heights?</h2>
          <p style={{ color: colors.mutedFg, fontSize: "1.125rem", marginBottom: "32px", maxWidth: "672px", marginLeft: "auto", marginRight: "auto" }}>
            SpitiShield AI is the survival system for explorers who refuse to compromise on intelligence, even when the world goes dark.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
            <Button 
              onClick={() => setIsDownloadOpen(true)}
              style={{ backgroundColor: colors.secondary, color: colors.bg, padding: "24px 32px", fontSize: "1rem", fontWeight: "600", width: "fit-content", margin: "0 auto" }}
            >
              Download Now
            </Button>
          </div>

          <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
            <DialogContent style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}`, color: colors.fg, maxWidth: "400px" }}>
              <DialogHeader>
                <DialogTitle style={{ fontFamily: "var(--font-display)", fontWeight: "bold", color: colors.secondary, display: "flex", alignItems: "center", gap: "8px" }}>
                  <Download className="w-5 h-5" /> Download SpitiShield
                </DialogTitle>
                <DialogDescription style={{ color: colors.mutedFg }}>
                  Scan the QR code below to install the mobile application via Expo or use the direct link.
                </DialogDescription>
              </DialogHeader>
              
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", padding: "20px 0" }}>
                <div style={{ padding: "16px", backgroundColor: "white", borderRadius: "0.75rem", boxShadow: `0 0 20px ${colors.secondary}33` }}>
                  <img 
                    src="qr-code.png" 
                    alt="Expo Build QR Code" 
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "600", color: colors.mutedFg, textTransform: "uppercase", letterSpacing: "0.05em" }}>Direct Link</span>
                  <a 
                    href="https://expo.dev/accounts/rajsinha/projects/spitishield-mobile/builds/e66d1ef3-1d6c-4eac-9d0b-412167ddd85d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      padding: "12px 16px", 
                      backgroundColor: "rgba(255, 255, 255, 0.05)", 
                      border: `1px solid ${colors.border}`,
                      borderRadius: "0.5rem",
                      color: colors.accent,
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.borderColor = colors.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)"; e.currentTarget.style.borderColor = colors.border; }}
                  >
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "240px" }}>
                      expo.dev/.../spitishield-mobile
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Legal & Support Section */}
      <section id="legal-support" style={{ paddingTop: "80px", paddingBottom: "80px", borderTop: `1px solid ${colors.border}` }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "2.25rem", marginBottom: "48px" }}>Legal Protocols & Contact</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "16px", color: colors.secondary }}>Privacy Policy</h3>
              <p style={{ color: colors.mutedFg, fontSize: "0.875rem", lineHeight: 1.6 }}>
                SpitiShield AI operates on a <strong>Zero-Signal Privacy</strong> model. When in offline mode, no data leaves your device. Gemini API keys are encrypted locally via SecureStore. We do not track GPS telemetry unless OMEGA protocol is manually triggered.
              </p>
            </div>

            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "16px", color: colors.secondary }}>Terms of Service</h3>
              <p style={{ color: colors.mutedFg, fontSize: "0.875rem", lineHeight: 1.6 }}>
                This is a survival assistant, not a replacement for professional rescue services. By using SpitiShield, you acknowledge that automated triage is advisory. The software is provided "as is" under the MIT license.
              </p>
            </div>

            <div style={{ backdropFilter: "blur(10px)", background: "rgba(26, 26, 26, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.5rem", padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "16px", color: colors.secondary }}>Contact Command</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <p><strong>HQ Email:</strong> hq@spitishield.ai</p>
                <p><strong>Mesh ID:</strong> SPITI-HQ-ALPHA-01</p>
                <p><strong>GitHub:</strong> rajk14/spritishied-ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ borderTop: `1px solid ${colors.border}`, paddingTop: "48px", paddingBottom: "48px", backgroundColor: "rgba(63, 63, 63, 0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", marginBottom: "32px" }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", marginBottom: "16px" }}>Product</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li><a href="#" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Features</a></li>
                <li><a href="#roadmap" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", marginBottom: "16px" }}>Developers</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li><a href="#documentation" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Documentation</a></li>
                <li><a href="#api-reference" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>API Reference</a></li>
                <li><a href="https://github.com/rajk14/spritishied-ai" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", marginBottom: "16px" }}>Community</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li><a href="#" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Discord</a></li>
                <li><a href="#" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Twitter</a></li>
                <li><a href="#" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: "bold", marginBottom: "16px" }}>Legal</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.875rem", color: colors.mutedFg }}>
                <li><a href="#legal-support" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Privacy</a></li>
                <li><a href="#legal-support" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Terms</a></li>
                <li><a href="#legal-support" style={{ cursor: "pointer", transition: "color 0.3s", color: "inherit" }} onMouseEnter={(e) => e.currentTarget.style.color = colors.fg} onMouseLeave={(e) => e.currentTarget.style.color = colors.mutedFg}>Contact</a></li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: "32px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", justifyContent: "space-between", fontSize: "0.875rem", color: colors.mutedFg }}>
            <p>&copy; 2026 SpitiShield AI. All rights reserved.</p>
            <p>Shielding the Explorer. Powering the Journey.</p>
          </div>
        </div>
      </footer>

      {/* System Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backdropFilter: "blur(20px)"
            }}
          >
            <button 
              onClick={() => setIsPreviewOpen(false)}
              style={{ position: "absolute", top: "32px", right: "32px", color: "white", padding: "8px", borderRadius: "full", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer" }}
            >
              <X className="w-6 h-6" />
            </button>

            <div style={{ width: "100%", maxWidth: "1200px", display: "grid", gridTemplateColumns: "1fr auto", gap: "64px", alignItems: "center" }}>
              {/* Image Container */}
              <div style={{ position: "relative", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPreviewIndex}
                    src={previewImages[currentPreviewIndex].src}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ maxHeight: "100%", borderRadius: "2rem", boxShadow: `0 0 50px ${colors.secondary}33`, border: `4px solid ${colors.card}` }}
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
                  <button onClick={prevPreview} style={{ background: "rgba(0,0,0,0.5)", border: `1px solid ${colors.border}`, color: "white", padding: "12px", borderRadius: "full", cursor: "pointer" }}>
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextPreview} style={{ background: "rgba(0,0,0,0.5)", border: `1px solid ${colors.border}`, color: "white", padding: "12px", borderRadius: "full", cursor: "pointer" }}>
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Info Sidebar */}
              <div style={{ width: "400px" }}>
                <motion.div
                  key={`info-${currentPreviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div style={{ color: colors.secondary, fontFamily: "var(--font-display)", fontSize: "0.875rem", fontWeight: "bold", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Module 0{currentPreviewIndex + 1}
                  </div>
                  <h2 style={{ fontSize: "3rem", fontFamily: "var(--font-display)", fontWeight: "bold", marginBottom: "24px" }}>
                    {previewImages[currentPreviewIndex].title}
                  </h2>
                  <p style={{ fontSize: "1.25rem", color: colors.mutedFg, lineHeight: 1.6, marginBottom: "48px" }}>
                    {previewImages[currentPreviewIndex].desc}
                  </p>
                  
                  <div style={{ display: "flex", gap: "8px" }}>
                    {previewImages.map((_, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          width: i === currentPreviewIndex ? "32px" : "8px", 
                          height: "8px", 
                          borderRadius: "4px", 
                          backgroundColor: i === currentPreviewIndex ? colors.secondary : colors.muted,
                          transition: "all 0.3s"
                        }} 
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Auth Modal */}
      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent style={{ backgroundColor: colors.bg, border: `1px solid ${colors.secondary}66`, color: colors.fg, maxWidth: "400px", padding: "24px" }}>
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: colors.secondary, animation: "pulse 2s infinite" }} />
              Operator Authorization
            </DialogTitle>
            <DialogDescription style={{ color: colors.mutedFg }}>
              Initialize tactical link with SpitiShield Command.
            </DialogDescription>
          </DialogHeader>

          <div style={{ padding: "20px 0" }}>
            {authStage === "idle" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: colors.mutedFg }}>Operator Code</label>
                  <input 
                    defaultValue="OP-SPITI-7742"
                    readOnly
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "0.25rem", padding: "12px", color: colors.fg, outline: "none" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: colors.mutedFg }}>Access Key</label>
                  <input 
                    type="password"
                    defaultValue="DEMO-ACCESS-KEY"
                    readOnly
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${colors.border}`, borderRadius: "0.25rem", padding: "12px", color: colors.fg, outline: "none" }}
                  />
                </div>
                <Button 
                  onClick={() => {
                    setAuthStage("scanning");
                    setTimeout(() => setAuthStage("granted"), 2500);
                  }}
                  style={{ backgroundColor: colors.secondary, color: colors.bg, padding: "12px", fontWeight: "bold", marginTop: "12px" }}
                >
                  Request Authorization
                </Button>
              </div>
            )}

            {authStage === "scanning" && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", padding: "40px 0" }}>
                <div style={{ position: "relative", width: "80px", height: "80px" }}>
                  <div style={{ position: "absolute", inset: 0, border: `2px solid ${colors.secondary}`, borderRadius: "50%", animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
                  <div style={{ position: "absolute", inset: 0, border: `4px solid ${colors.secondary}`, borderRadius: "50%", borderTopColor: "transparent", animation: "spin 1s linear infinite" }} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1rem", fontWeight: "bold", color: colors.secondary, marginBottom: "4px" }}>Biometric Scan Active</div>
                  <div style={{ fontSize: "0.75rem", color: colors.mutedFg }}>Verifying operator credentials...</div>
                </div>
              </div>
            )}

            {authStage === "granted" && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", padding: "40px 0" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(76, 175, 80, 0.1)", border: "2px solid #4CAF50", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#4CAF50", marginBottom: "8px" }}>Access Granted</div>
                  <div style={{ fontSize: "0.875rem", color: colors.mutedFg }}>Welcome back, Operator. Initializing HUD...</div>
                </div>
                <Button 
                  onClick={() => setIsAuthOpen(false)}
                  style={{ backgroundColor: "#4CAF50", color: colors.bg, padding: "12px 24px", fontWeight: "bold" }}
                >
                  Enter Command Center
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
