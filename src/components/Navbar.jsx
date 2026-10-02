import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Phone, 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  Layers, 
  Cpu, 
  Boxes, 
  Flame, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Building2, 
  FileCheck, 
  MapPin, 
  CheckCircle2, 
  Microscope, 
  Wrench, 
  ExternalLink,
  Camera,
  Users
} from 'lucide-react';
import { COMPANY_INFO, CURRENCIES } from '../data/srilineData';

export default function Navbar({ 
  currency = 'INR', 
  setCurrency, 
  onOpenRfqModal, 
  onOpenSearch, 
  cartCount = 0 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTopNotice, setShowTopNotice] = useState(true);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus and smooth scroll to top on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const isRouteActive = (paths) => {
    return paths.some(p => location.pathname === p);
  };

  const handleNavClick = (path) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. TIER 1: AEROSPACE STATUS & PROMOTIONS STRIP (JLCPCB Utility Bar Benchmark) */}
      <div 
        className={`bg-[#070e1e] text-slate-300 text-[11px] px-4 border-b border-slate-800 transition-all duration-300 ease-in-out ${
          showTopNotice && !isScrolled 
            ? 'max-h-12 opacity-100 py-1.5' 
            : 'max-h-0 opacity-0 py-0 overflow-hidden border-none'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Telemetry */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-400 font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
              ISO-8 Cleanroom Live • 200,000 CPH Capacity • Hyderabad E-City
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-amber-300 font-mono">
              100% Domestic EMS • 18% GST Input Tax Credit • Zero Port Clearance Bottlenecks
            </span>
          </div>

          {/* Right Quick Controls */}
          <div className="flex items-center space-x-4 text-slate-400 font-mono text-[11px]">
            <Link 
              to="/quality" 
              className="hidden md:flex items-center space-x-1 hover:text-white transition-colors active:scale-95"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>AS9100D Rev D</span>
            </Link>

            <Link 
              to="/contact" 
              className="hidden sm:flex items-center space-x-1 hover:text-white transition-colors active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c5283d]" />
              <span>Contact Desk</span>
            </Link>

            <a 
              href="tel:+919177702120" 
              className="hidden sm:flex items-center space-x-1 hover:text-white transition-colors active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 91777 02120</span>
            </a>

            {/* Currency Selector */}
            <div className="flex items-center space-x-1 bg-slate-900/90 px-2 py-0.5 rounded text-white border border-slate-700">
              <Globe className="w-3 h-3 text-cyan-400" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-white font-semibold text-[11px] focus:outline-none cursor-pointer"
                aria-label="Select Currency"
              >
                {Object.keys(CURRENCIES).map((c) => (
                  <option key={c} value={c} className="bg-slate-900 text-white">
                    {CURRENCIES[c].label}
                  </option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => setShowTopNotice(false)} 
              className="text-slate-500 hover:text-slate-300 cursor-pointer ml-1 active:scale-90 transition-transform"
              aria-label="Close Notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. TIER 2: PRIMARY ACTION NAVBAR (JLCPCB 4-Pillar Layout, Fixed Height 64px, Noble Breathing Room) */}
      <nav 
        className={`bg-white/95 backdrop-blur-md transition-all duration-200 border-b h-16 ${
          isScrolled 
            ? 'shadow-md border-slate-200/90' 
            : 'border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          
          {/* Left: Authentic SriLin Brand Identity */}
          <div className="flex items-center space-x-8 shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group active:scale-[0.98] transition-transform select-none"
              onClick={() => handleNavClick('/')}
            >
              <img 
                src="/images/srilin/srilin-logo.png" 
                alt="SriLin Electronics — Perfection Reinvented"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <div className="hidden xl:flex flex-col pl-3 border-l border-slate-200">
                <span className="text-[10px] font-mono font-extrabold text-[#c5283d] uppercase tracking-wider leading-none">
                  PERFECTION REINVENTED
                </span>
                <span className="text-[9px] font-mono text-emerald-700 font-bold leading-none mt-0.5">
                  ● AS9100D & ISO 9001
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Menu Links (JLCPCB Clean Structure with whitespace-nowrap & Full-Height Tabs) */}
          <div className="hidden lg:flex items-center space-x-7 h-full text-[13.5px] font-semibold whitespace-nowrap">
            
            {/* 1. Products & Services Mega-Menu Trigger */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`h-full flex items-center space-x-1.5 px-1 font-semibold transition-colors cursor-pointer select-none active:scale-[0.97] whitespace-nowrap ${
                  activeDropdown === 'products' || isRouteActive(['/quote', '/parts'])
                    ? 'text-[#c5283d] font-bold'
                    : 'text-slate-800 hover:text-[#c5283d]'
                }`}
              >
                <Menu className="w-4 h-4 text-slate-500 group-hover:text-[#c5283d]" />
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'products' ? 'rotate-180 text-[#c5283d]' : 'text-slate-400'
                }`} />
              </button>

              {/* Bottom Active Indicator Line (Pinned to bottom of navbar) */}
              {(activeDropdown === 'products' || isRouteActive(['/quote', '/parts'])) && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#c5283d] rounded-full transition-all"></div>
              )}

              {/* MEGA-MENU DROPDOWN PANEL (JLCPCB Multicolumn Layout) */}
              {activeDropdown === 'products' && (
                <div 
                  className="absolute left-0 -ml-12 top-full pt-1 z-50 w-[840px] animate-dropdown"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-12 gap-6 ring-1 ring-black/5">
                    
                    {/* Col 1: PCB Services (4 cols) */}
                    <div className="col-span-4 space-y-3 border-r border-slate-100 pr-4">
                      <div className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>PCB Fabrication</span>
                        <span className="text-[9px] bg-red-100 text-[#c5283d] px-1.5 py-0.5 rounded font-bold">24h Express</span>
                      </div>
                      <div className="space-y-1">
                        <Link 
                          to="/quote" 
                          onClick={() => handleNavClick('/quote')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            FR4
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              Standard Rigid PCB
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">1 to 32 Layers • High-Tg FR-4</div>
                          </div>
                        </Link>

                        <Link 
                          to="/quote" 
                          onClick={() => handleNavClick('/quote')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            FPC
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              Flexible & Rigid-Flex
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">Polyimide core • Dynamic flex</div>
                          </div>
                        </Link>

                        <Link 
                          to="/capabilities" 
                          onClick={() => handleNavClick('/capabilities')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            RF
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              High-Frequency / RF PCB
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">Rogers 4350B • Teflon substrates</div>
                          </div>
                        </Link>

                        <Link 
                          to="/capabilities" 
                          onClick={() => handleNavClick('/capabilities')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            MCP
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              Metal Core & Aluminum
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">380W Copper • 1W-3W AL Core</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Col 2: Assembly & SMT (4 cols) */}
                    <div className="col-span-4 space-y-3 border-r border-slate-100 pr-4">
                      <div className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>SMT Assembly</span>
                        <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">200k CPH</span>
                      </div>
                      <div className="space-y-1">
                        <Link 
                          to="/quote" 
                          onClick={() => handleNavClick('/quote')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-[#c5283d] flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            SMT
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              Turnkey SMT Assembly
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">Full turnkey BOM • 01005 passives</div>
                          </div>
                        </Link>

                        <Link 
                          to="/parts" 
                          onClick={() => handleNavClick('/parts')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            740k
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              SMT Parts Library
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">In-stock bonded reels catalog</div>
                          </div>
                        </Link>

                        <Link 
                          to="/quote" 
                          onClick={() => handleNavClick('/quote')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            STN
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              Laser SMT Stencils
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">Electropolished • ±0.003mm</div>
                          </div>
                        </Link>

                        <Link 
                          to="/capabilities" 
                          onClick={() => handleNavClick('/capabilities')}
                          className="flex items-start space-x-3 p-2 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#c5283d] group-hover:text-white transition-colors">
                            BOX
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                              Box Build & Wire Harness
                            </div>
                            <div className="text-[11px] text-slate-500 font-normal">Electromechanical integration</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Col 3: OEM Hardware, NI Automated Testing & Instant Tools (4 cols) */}
                    <div className="col-span-4 flex flex-col justify-between space-y-3">
                      <div className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>OEM & Engineering Systems</span>
                        <span className="text-[9px] bg-red-100 text-[#c5283d] px-1.5 py-0.5 rounded font-bold">In-House</span>
                      </div>

                      {/* AI ADAS + DMS Camera Spotlight */}
                      <Link 
                        to="/capabilities" 
                        onClick={() => handleNavClick('/capabilities')}
                        className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700/80 hover:border-cyan-400 transition-all group block active:scale-[0.98] shadow-sm"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                          <span className="flex items-center space-x-1.5">
                            <Camera className="w-3.5 h-3.5 text-cyan-400" />
                            <span>AI ADAS + DMS Camera (OEM)</span>
                          </span>
                          <span className="text-[9px] bg-cyan-950 text-cyan-300 border border-cyan-700/50 px-1.5 py-0.2 rounded font-mono">1080P IR</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1 leading-snug font-normal">
                          Dual-sensor automotive smart camera with edge AI NPU, driver monitoring & 4G GPS telemetry.
                        </p>
                      </Link>

                      {/* NI LabVIEW Automated Test Systems */}
                      <Link 
                        to="/capabilities" 
                        onClick={() => handleNavClick('/capabilities')}
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group block active:scale-[0.98]"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          <span>NI LabVIEW Automated Test Benches</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c5283d] group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Custom PXI/ATE test fixtures with 100% automated functional qualification & serial logging.
                        </p>
                      </Link>

                      {/* Instant Quoting Tool */}
                      <Link 
                        to="/quote" 
                        onClick={() => handleNavClick('/quote')}
                        className="p-2.5 rounded-xl bg-red-50/60 border border-red-200 hover:border-[#c5283d] transition-all group block active:scale-[0.98]"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-[#c5283d]">
                          <span>Instant Quoting Engine & DFM</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug font-normal">
                          Instant multi-currency calculations with real-time process capability scoring.
                        </p>
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 2. Capabilities (Direct Route Link) */}
            <div className="relative h-full flex items-center">
              <NavLink 
                to="/capabilities" 
                onClick={() => handleNavClick('/capabilities')}
                className={({ isActive }) => 
                  `h-full flex items-center px-1 font-semibold transition-colors cursor-pointer select-none active:scale-[0.97] whitespace-nowrap ${
                    isActive 
                      ? 'text-[#c5283d] font-bold' 
                      : 'text-slate-800 hover:text-[#c5283d]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Capabilities</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#c5283d] rounded-full transition-all"></div>
                    )}
                  </>
                )}
              </NavLink>
            </div>

            {/* 3. Plant & Cleanroom Dropdown Trigger */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('plant')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'plant' ? null : 'plant')}
                className={`h-full flex items-center space-x-1.5 px-1 font-semibold transition-colors cursor-pointer select-none active:scale-[0.97] whitespace-nowrap ${
                  activeDropdown === 'plant' || location.pathname === '/factory'
                    ? 'text-[#c5283d] font-bold'
                    : 'text-slate-800 hover:text-[#c5283d]'
                }`}
              >
                <span className="whitespace-nowrap">Plant & Cleanroom</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'plant' ? 'rotate-180 text-[#c5283d]' : 'text-slate-400'
                }`} />
              </button>

              {/* Bottom Active Indicator Line */}
              {(activeDropdown === 'plant' || location.pathname === '/factory') && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#c5283d] rounded-full transition-all"></div>
              )}

              {/* Plant Dropdown Menu */}
              {activeDropdown === 'plant' && (
                <div 
                  className="absolute left-0 top-full pt-1 z-50 w-72 animate-dropdown"
                  onMouseEnter={() => handleMouseEnter('plant')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1 ring-1 ring-black/5">
                    <Link 
                      to="/factory" 
                      onClick={() => handleNavClick('/factory')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Building2 className="w-4 h-4 text-[#c5283d] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Cleanroom Telemetry
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Live ISO-8 environmental status</div>
                      </div>
                    </Link>

                    <Link 
                      to="/factory" 
                      onClick={() => handleNavClick('/factory')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Cpu className="w-4 h-4 text-cyan-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          SMT Machinery Fleet
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">200k CPH Fuji & Panasonic lines</div>
                      </div>
                    </Link>

                    <Link 
                      to="/factory" 
                      onClick={() => handleNavClick('/factory')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Microscope className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          160kV X-Ray & 3D AOI
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Sub-micron BGA void inspection</div>
                      </div>
                    </Link>

                    <Link 
                      to="/factory" 
                      onClick={() => handleNavClick('/factory')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Hyderabad Fabcity Campus
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">25k operational + 214k expansion</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. About Us Dropdown Trigger */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className={`h-full flex items-center space-x-1.5 px-1 font-semibold transition-colors cursor-pointer select-none active:scale-[0.97] whitespace-nowrap ${
                  activeDropdown === 'about' || location.pathname === '/quality'
                    ? 'text-[#c5283d] font-bold'
                    : 'text-slate-800 hover:text-[#c5283d]'
                }`}
              >
                <span className="whitespace-nowrap">About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-[#c5283d]' : 'text-slate-400'
                }`} />
              </button>

              {/* Bottom Active Indicator Line */}
              {(activeDropdown === 'about' || location.pathname === '/quality') && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#c5283d] rounded-full transition-all"></div>
              )}

              {/* About Us Dropdown Menu */}
              {activeDropdown === 'about' && (
                <div 
                  className="absolute left-0 top-full pt-1 z-50 w-80 animate-dropdown"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1 ring-1 ring-black/5">
                    <Link 
                      to="/quality" 
                      onClick={() => handleNavClick('/quality')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Award className="w-4 h-4 text-[#c5283d] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Corporate Heritage
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Founded 2017 in Fabcity Hyderabad</div>
                      </div>
                    </Link>

                    <Link 
                      to="/quality" 
                      onClick={() => handleNavClick('/quality')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Users className="w-4 h-4 text-cyan-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Executive Leadership Team
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Akhil Nandepu (MD & CEO), Board Advisors</div>
                      </div>
                    </Link>

                    <Link 
                      to="/quality" 
                      onClick={() => handleNavClick('/quality')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Building2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Milestones & Honeywell Alliances
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Tri-Party Agreement, 6X Expansion, MoUs</div>
                      </div>
                    </Link>

                    <Link 
                      to="/quality" 
                      onClick={() => handleNavClick('/quality')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          AS9100D & ISO Quality
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Aerospace certifications & standards</div>
                      </div>
                    </Link>

                    <Link 
                      to="/quality" 
                      onClick={() => handleNavClick('/quality')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Client Testimonials
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">FICOSA, Pixcellence, Skyroot</div>
                      </div>
                    </Link>

                    <Link 
                      to="/quality" 
                      onClick={() => handleNavClick('/quality')}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 group transition-all active:scale-[0.98]"
                    >
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#c5283d] transition-colors">
                          Careers & Openings
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">Join our cleanroom engineering team</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Contact Us (Direct Route Link) */}
            <div className="relative h-full flex items-center">
              <NavLink 
                to="/contact" 
                onClick={() => handleNavClick('/contact')}
                className={({ isActive }) => 
                  `h-full flex items-center px-1 font-semibold transition-colors cursor-pointer select-none active:scale-[0.97] whitespace-nowrap ${
                    isActive 
                      ? 'text-[#c5283d] font-bold' 
                      : 'text-slate-800 hover:text-[#c5283d]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="whitespace-nowrap">Contact Us</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#c5283d] rounded-full transition-all"></div>
                    )}
                  </>
                )}
              </NavLink>
            </div>

          </div>

          {/* Right Action Controls (Clean High-Velocity Hierarchy: Search + BOM Cart + Solitary Primary CTA) */}
          <div className="flex items-center space-x-3 shrink-0">
            
            {/* Quick Search */}
            <button 
              onClick={onOpenSearch}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full text-xs font-semibold transition-all active:scale-95 cursor-pointer"
              title="Search specifications (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden md:inline px-1.5 py-0.2 bg-white border border-slate-300 rounded font-mono text-[9px] text-slate-500">⌘K</kbd>
            </button>

            {/* Active BOM / Quote Cart Pill Drawer Trigger */}
            <button 
              onClick={onOpenRfqModal}
              className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold cursor-pointer transition-all active:scale-95"
              title="Active BOM & Quote Cart Drawer"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden xl:inline text-slate-600">BOM</span>
              {cartCount > 0 ? (
                <span className="bg-[#c5283d] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-none animate-pulse">
                  {cartCount}
                </span>
              ) : (
                <span className="text-slate-400 font-mono text-[10px]">0</span>
              )}
            </button>

            {/* Instant Quote Primary Action Button in SriLin Red (solitary clear primary CTA) */}
            <Link
              to="/quote"
              onClick={() => handleNavClick('/quote')}
              className="px-5 py-2 rounded-full bg-[#c5283d] hover:bg-[#a71d2a] active:scale-95 text-white text-xs font-bold shadow-sm hover:shadow-md transition-all flex items-center space-x-1.5 cursor-pointer shadow-red-500/20"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer with Accordion Dropdowns */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 text-sm font-semibold animate-dropdown shadow-xl">
            <NavLink 
              to="/" 
              end 
              onClick={() => handleNavClick('/')}
              className="block w-full py-2 text-slate-800 border-b border-slate-100 active:text-[#c5283d]"
            >
              Home
            </NavLink>

            {/* Mobile Products Accordion */}
            <div className="border-b border-slate-100 py-2">
              <button 
                onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
                className="flex items-center justify-between w-full text-slate-800 py-1"
              >
                <span>Products & SMT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileAccordion === 'products' && (
                <div className="pl-3 pt-2 space-y-2 text-xs text-slate-600 font-normal">
                  <Link to="/quote" onClick={() => handleNavClick('/quote')} className="block py-1 hover:text-[#c5283d]">Standard Rigid PCB (FR-4)</Link>
                  <Link to="/quote" onClick={() => handleNavClick('/quote')} className="block py-1 hover:text-[#c5283d]">Turnkey SMT Assembly</Link>
                  <Link to="/parts" onClick={() => handleNavClick('/parts')} className="block py-1 hover:text-[#c5283d]">SMT Parts Library (740k+)</Link>
                  <Link to="/quote" onClick={() => handleNavClick('/quote')} className="block py-1 hover:text-[#c5283d]">Laser SMT Stencils</Link>
                  <Link to="/capabilities" onClick={() => handleNavClick('/capabilities')} className="block py-1 hover:text-[#c5283d]">Flex & High-Frequency RF</Link>
                  <Link to="/capabilities" onClick={() => handleNavClick('/capabilities')} className="block py-1 text-[#c5283d] font-semibold hover:underline">AI ADAS + DMS Camera (OEM)</Link>
                  <Link to="/capabilities" onClick={() => handleNavClick('/capabilities')} className="block py-1 text-cyan-700 font-semibold hover:underline">NI LabVIEW Automated Test Systems</Link>
                </div>
              )}
            </div>

            <NavLink 
              to="/capabilities" 
              onClick={() => handleNavClick('/capabilities')}
              className="block w-full py-2 text-slate-800 border-b border-slate-100 active:text-[#c5283d]"
            >
              Manufacturing Capabilities & Stackup
            </NavLink>

            <NavLink 
              to="/factory" 
              onClick={() => handleNavClick('/factory')}
              className="block w-full py-2 text-slate-800 border-b border-slate-100 active:text-[#c5283d]"
            >
              Cleanroom Plant & 200k CPH Fleet
            </NavLink>

            <NavLink 
              to="/quality" 
              onClick={() => handleNavClick('/quality')}
              className="block w-full py-2 text-slate-800 border-b border-slate-100 active:text-[#c5283d]"
            >
              About SriLin & AS9100D Certifications
            </NavLink>

            <NavLink 
              to="/contact" 
              onClick={() => handleNavClick('/contact')}
              className="block w-full py-2 text-[#c5283d] font-bold border-b border-slate-100"
            >
              Contact Us & Plant Visits
            </NavLink>

            <div className="pt-2 flex items-center space-x-2">
              <Link 
                to="/quote" 
                onClick={() => handleNavClick('/quote')}
                className="w-full text-center py-2.5 rounded-xl bg-[#c5283d] hover:bg-[#a71d2a] text-white text-xs font-bold active:scale-95 transition-transform"
              >
                Instant Online Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
