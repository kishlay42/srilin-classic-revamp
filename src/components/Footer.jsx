import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Award,
  Globe,
  Cpu,
  Layers,
  FileCheck,
  Building2,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/srilineData';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070e1e] text-slate-400 text-xs border-t border-slate-800 relative">
      
      {/* Upper Footer: Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info with EXACT AUTHENTIC LOGO */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 inline-block shadow-md">
                <img 
                  src="/images/srilin/srilin-logo.png" 
                  alt="SriLin Electronics" 
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            <div className="text-[11px] font-mono font-extrabold text-[#e6a100] tracking-widest uppercase">
              SriLin™ — PERFECTION REINVENTED
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier ISO 9001:2015, AS9100D, ANSI/ESD S20.20-2021 & IEC 61340-5-1 certified Electronics System Design & Manufacturing Services (ESDM/EMS) center. Operating 200,000 CPH high-speed SMT lines in Hyderabad's E-City EMC for aerospace, defense, and demanding industrial applications.
            </p>

            <div className="space-y-2 pt-2 text-slate-300 font-sans">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#c5283d] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">
                  PLOT: S-1/P/D, E-City EMC, Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana - 501359
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone} (Defense & Technical Desk)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a 
                  href="https://wa.me/919177702120?text=Hello%20SriLin%20Electronics%20Engineering%20Desk,%20I%20would%20like%20to%20inquire%20about%20Turnkey%20SMT%20Manufacturing."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold shadow-xs active:scale-95 transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Engineering Desk (+91 91777 02120)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Self-Service Configurator & Quoting */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Online Quoting
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link to="/quote" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Standard Rigid PCB
                </Link>
              </li>
              <li>
                <Link to="/quote" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Turnkey SMT Assembly
                </Link>
              </li>
              <li>
                <Link to="/parts" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
                  <span>SMT Component Library</span>
                  <span className="text-[9px] bg-emerald-900/60 text-emerald-400 px-1.5 py-0.2 rounded font-mono font-bold">740k</span>
                </Link>
              </li>
              <li>
                <Link to="/quote" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Laser-Cut SMT Stencils
                </Link>
              </li>
              <li>
                <Link to="/quote" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Flexible & Rigid-Flex PCB
                </Link>
              </li>
              <li>
                <Link to="/quote" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  CNC Machined Enclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Engineering */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link to="/capabilities" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Embedded Hardware Design
                </Link>
              </li>
              <li>
                <Link to="/capabilities" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  High-Speed PCBA Capabilities
                </Link>
              </li>
              <li>
                <Link to="/capabilities" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Koh Young 3D SPI & AOI Testing
                </Link>
              </li>
              <li>
                <Link to="/capabilities" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  Nordson 160kV X-Ray Void Check
                </Link>
              </li>
              <li>
                <Link to="/capabilities" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  240h Environmental Stress Burn-In
                </Link>
              </li>
              <li>
                <Link to="/capabilities" onClick={scrollToTop} className="hover:text-cyan-400 transition-colors">
                  DFM & DFA Pre-Flight Checking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Infrastructure & Certifications */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Accreditations & Plant
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-center space-x-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>AS9100D Rev D (Aero/Defense)</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 Quality MS</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>ANSI/ESD S20.20-2021 Static</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>IEC 61340-5-1 Certified</span>
              </li>
              <li>
                <Link to="/factory" onClick={scrollToTop} className="text-cyan-300 hover:underline flex items-center space-x-1 mt-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>ISO 8 Cleanroom Floor Tour</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-amber-400 hover:underline flex items-center space-x-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Plant Directions & Audits</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Corporate Legal Disclosure from Original Site */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 px-4 sm:px-6 lg:px-8 text-[10px] text-slate-400 leading-relaxed max-w-7xl mx-auto">
        <p>
          "SRILIN ELECTRONICS PRIVATE LIMITED", is a registered company under the Companies Act, 2013 (18 of 2013). Registered Office & EMS Cleanroom Plant: PLOT: S-1/P/D, E-City EMC, Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana - 501359.
        </p>
      </div>

      {/* Lower Footer: Copyright & Navigation */}
      <div className="border-t border-slate-900 bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} SriLin Electronics Private Limited. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-white text-[#c5283d] font-bold">Contact Us</Link>
            <span>•</span>
            <Link to="/quality" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <Link to="/quote" className="hover:text-white">Mutual NDA Form</Link>
            <span>•</span>
            <span className="text-cyan-400">SRI-SYS-2026 // HYDERABAD // AS9100D</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#c5283d] hover:bg-[#a71d2a] text-white p-3 rounded-full shadow-2xl transition-all cursor-pointer shadow-red-500/30"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Persistent Floating WhatsApp Direct Launcher (Bottom Left) */}
      <a
        href="https://wa.me/919177702120?text=Hello%20SriLin%20Electronics%20Engineering%20Desk,%20I%20would%20like%20to%20request%20an%20instant%20technical%20quote%20for%20Turnkey%20SMT%20Assembly."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white p-3 rounded-full shadow-2xl transition-all cursor-pointer shadow-emerald-500/30 flex items-center space-x-2 group pr-4"
        title="Direct WhatsApp with Engineering Desk"
      >
        <WhatsAppIcon className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-bold text-white tracking-wide">
          WhatsApp Desk
        </span>
      </a>

    </footer>
  );
}
