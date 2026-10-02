import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Truck,
  CheckCircle, 
  Network, 
  Boxes, 
  Flame, 
  Award, 
  Star, 
  FileCheck, 
  ChevronRight, 
  Sparkles,
  Download,
  Box,
  Wrench,
  Check,
  Building2,
  Lock,
  Maximize2
} from 'lucide-react';
import CanvasPCBVisualizer from '../components/CanvasPCBVisualizer';
import InteractiveChipSelector from '../components/InteractiveChipSelector';
import { CLIENT_LOGOS, COMPANY_INFO } from '../data/srilineData';

export default function HomeView({ 
  quickQuoteParams, 
  setQuickQuoteParams, 
  onNavigateToQuote, 
  onNavigateTo,
  currency = 'INR',
  onAddToCart
}) {
  // Quick Quote Embedded Hero Tabs: 'pcb', 'pcba', 'stencil', 'flex'
  const [heroQuoteTab, setHeroQuoteTab] = useState('pcb');

  // Exploded hardware solution tab
  const [activeSolutionTab, setActiveSolutionTab] = useState('avionics');

  const HARDWARE_SOLUTIONS = {
    avionics: {
      title: "Satellite Avionics On-Board Computer (OBC)",
      subtitle: "AS9100D Rev D / Space-Grade Class 3 Flight Hardware",
      layers: "12-Layer Rigid-Flex Hybrid",
      substrate: "Isola 370HR + Polyimide Flex Core",
      chip: "AMD Xilinx Artix-7 Space-Tolerant FPGA + STM32H753 MCU",
      enclosure: "Mil-Spec CNC Machined 6061-T6 Aluminum Anodized Housing",
      turnaround: "48-Hour Turnkey SMT & 160kV X-Ray Inspection",
      image: "/images/all-in-one-banner.webp",
      componentsCount: 486,
      thermalRating: "-55°C to +125°C Flight Operational"
    },
    radar: {
      title: "DRDO Active Phased Array Radar Transceiver",
      subtitle: "Ultra-Low Phase Noise RF Front-End Subsystem",
      layers: "8-Layer High-Frequency Hybrid",
      substrate: "Rogers RO4350B LoPro + High-Tg FR-4 Core",
      chip: "Analog Devices AD9361 BBCZ Agile Transceiver (70MHz - 6GHz)",
      enclosure: "Hermetically Sealed Nickel-Plated Brass Cavity Enclosure",
      turnaround: "72-Hour Precision SMT with 3D AOI & Oblique X-Ray",
      image: "/images/rf-pcb.webp",
      componentsCount: 312,
      thermalRating: "-40°C to +85°C RF Calibrated"
    },
    bms: {
      title: "High-Voltage Electric Mobility BMS Controller",
      subtitle: "ISO 26262 ASIL-D Automotive Functional Safety",
      layers: "6-Layer Heavy Copper 3oz",
      substrate: "High Thermal Conductivity Aluminum / Heavy Copper FR-4",
      chip: "TI ISO1042 Isolated CAN-FD + Dual Current Sensing ASICs",
      enclosure: "Flame-Retardant UL94-V0 Polycarbonate Enclosure",
      turnaround: "24-Hour Automated High-Volume SMT Line Feed",
      image: "/images/metal-core-pcb.webp",
      componentsCount: 198,
      thermalRating: "AEC-Q100 Grade 1 Qualified"
    },
    adas: {
      title: "AI ADAS + DMS Edge Vision Camera System",
      subtitle: "AEC-Q100 / Proprietary SriLin OEM Automotive Hardware",
      layers: "8-Layer High-Density HDI Microvia",
      substrate: "High-Tg Shengyi S1000-2M Core",
      chip: "Automotive Quad-Core ARM + 2.0 TOPS AI NPU + 4G LTE/GPS",
      enclosure: "IP67 Automotive Die-Cast Aluminum Enclosure with IR Lens",
      turnaround: "Series Turnkey Production at Hyderabad Cleanroom",
      image: "https://res.cloudinary.com/dgyf0afim/image/upload/v1727786432/xwhgfbqwesxb6u8rjgqf.jpg",
      componentsCount: 384,
      thermalRating: "-40°C to +105°C Automotive Grade"
    }
  };

  const currentSolution = HARDWARE_SOLUTIONS[activeSolutionTab];

  // Price calculation helper
  const getHeroPrice = () => {
    let base = 166; // INR
    if (heroQuoteTab === 'pcba') base = 660;
    if (heroQuoteTab === 'stencil') base = 450;
    if (heroQuoteTab === 'flex') base = 980;

    if (currency === 'USD') return `$${(base / 83.5).toFixed(2)}`;
    if (currency === 'EUR') return `€${(base / 90.0).toFixed(2)}`;
    return `₹${base.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white">
      
      {/* 1. COMPACT HERO SECTION (520px-560px Desktop Height, 100% Visible Above The Fold) */}
      <section className="relative bg-gradient-to-br from-[#060b18] via-[#091226] to-[#0d1d3d] text-white py-8 sm:py-10 border-b border-slate-800 overflow-hidden">
        
        {/* Subtle high-tech grid background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (58% / Col 1-7): Value Proposition + Embedded Multi-Tab Quick Quote Box */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Monospace Serial Tag */}
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>SRI-SYS-2026 // HYDERABAD E-CITY EMC // AS9100D REV D & ISO 9001:2015</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                High-Precision PCB Fab & Turnkey SMT Assembly
              </h1>

              {/* Concise value statement */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                India's premier aerospace EMS. 200,000 CPH automated lines, 160kV X-Ray verification, and 740k+ bonded components with <strong>18% domestic GST input credit</strong> and zero import clearance delays.
              </p>

              {/* EMBEDDED COMPACT MULTI-TAB QUICK QUOTE BOX (JLCPCB Hero Core Feature) */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-white/20 space-y-3">
                
                {/* Product Selection Tabs */}
                <div className="flex items-center space-x-1 border-b border-slate-200 pb-2.5 text-xs font-bold">
                  {[
                    { id: 'pcb', label: 'Standard PCB', badge: 'From $2' },
                    { id: 'pcba', label: 'Turnkey SMT', badge: '200k CPH' },
                    { id: 'stencil', label: 'SMT Stencil', badge: '±0.003mm' },
                    { id: 'flex', label: 'Flexible PCB', badge: 'Polyimide' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setHeroQuoteTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center space-x-1.5 cursor-pointer ${
                        heroQuoteTab === tab.id
                          ? 'bg-[#c5283d] text-white shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                        heroQuoteTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {tab.badge}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Direct Quoting Parameter Inputs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  
                  {/* Layers */}
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 font-mono font-bold block">LAYERS</span>
                    <select
                      value={quickQuoteParams.layers}
                      onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, layers: Number(e.target.value) })}
                      className="w-full bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer mt-0.5"
                    >
                      <option value={1}>1 Layer</option>
                      <option value={2}>2 Layers</option>
                      <option value={4}>4 Layers</option>
                      <option value={6}>6 Layers</option>
                      <option value={8}>8 Layers</option>
                      <option value={12}>12 Layers</option>
                    </select>
                  </div>

                  {/* Dimensions */}
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 font-mono font-bold block">DIMENSIONS (MM)</span>
                    <div className="flex items-center font-bold text-slate-900 mt-0.5">
                      <input 
                        type="number"
                        min="10"
                        max="500"
                        value={quickQuoteParams.lengthMm}
                        onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, lengthMm: Number(e.target.value) })}
                        className="w-10 bg-transparent text-center focus:outline-none"
                      />
                      <span className="text-slate-400 px-1">×</span>
                      <input 
                        type="number"
                        min="10"
                        max="500"
                        value={quickQuoteParams.widthMm}
                        onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, widthMm: Number(e.target.value) })}
                        className="w-10 bg-transparent text-center focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 font-mono font-bold block">QUANTITY</span>
                    <select
                      value={quickQuoteParams.quantity}
                      onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, quantity: Number(e.target.value) })}
                      className="w-full bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer mt-0.5"
                    >
                      <option value={5}>5 pcs</option>
                      <option value={10}>10 pcs</option>
                      <option value={25}>25 pcs</option>
                      <option value={50}>50 pcs</option>
                      <option value={100}>100 pcs</option>
                      <option value={500}>500 pcs</option>
                    </select>
                  </div>

                  {/* Live Estimated Price Pill */}
                  <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 flex flex-col justify-center">
                    <span className="text-[9px] font-mono text-emerald-700 font-bold block">STARTING PRICE</span>
                    <div className="text-base font-black font-mono leading-none mt-0.5">
                      {getHeroPrice()}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Strip */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
                  <div className="flex items-center space-x-2 text-slate-500 font-mono text-[11px]">
                    <span className="flex items-center text-emerald-700 font-semibold">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      24h Express Turnaround
                    </span>
                    <span>•</span>
                    <span>Free DFM Pre-Flight Check</span>
                  </div>

                  <button
                    onClick={onNavigateToQuote}
                    className="bg-[#c5283d] hover:bg-[#a71d2a] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer shadow-red-500/20"
                  >
                    <span>Add Gerber & Get Instant Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

            {/* Right Column (42% / Col 8-12): Interactive 3D Canvas PCB Inspection Engine */}
            <div className="lg:col-span-5">
              <CanvasPCBVisualizer 
                solderMask={quickQuoteParams.solderMask}
                onSelectComponent={(c) => console.log('Selected component:', c)}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP (JLCPCB 4-Column Layout with Indian Advantage) */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#c5283d] shrink-0">
                <Cpu className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Rapid Fab & SMT Assembly</h4>
                <p className="text-xs text-slate-500 mt-0.5">As fast as 24-48 hours express</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#e6a100] shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Aerospace Flight Rigor</h4>
                <p className="text-xs text-slate-500 mt-0.5">AS9100D Rev D & 100% 160kV X-Ray</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <Truck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Zero Customs Bottlenecks</h4>
                <p className="text-xs text-slate-500 mt-0.5">Domestic Hyderabad cleanroom dispatch</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Award className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">18% GST Input Credit</h4>
                <p className="text-xs text-slate-500 mt-0.5">Full domestic tax deduction for Indian OEMs</p>
              </div>
            </div>

          </div>

          {/* Authentic Strategic Partnerships & Growth Milestone Strip */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#c5283d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                6X
              </div>
              <div>
                <span className="font-bold text-slate-900 block">6X Growth Milestone FY25-26</span>
                <span className="text-slate-600 text-[11px]">SMT capacity doubled to 200,000 CPH in E-City EMC</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                HW
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Honeywell Partner Tri-Party Deal</span>
                <span className="text-slate-600 text-[11px]">Turnkey manufacturing with INP Tech & Creative NewTech</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                OEM
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Proprietary AI ADAS+DMS Camera</span>
                <span className="text-slate-600 text-[11px]">In-house edge AI automotive vision hardware</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ALL-IN-ONE ELECTRONICS SOLUTIONS (Product Cards with Rich WebP Renders) */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block mb-1">
                Integrated ESDM Manufacturing Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                All-in-One Electronics & Mechanical Solutions
              </h2>
            </div>
            <button 
              onClick={() => onNavigateTo('capabilities')}
              className="mt-3 sm:mt-0 text-xs font-bold text-[#c5283d] hover:underline flex items-center cursor-pointer"
            >
              <span>Explore All Specifications & Tolerances</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Standard & Advanced Rigid PCB */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/rigid-pcb.webp" 
                    alt="Standard Rigid PCB"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    1 - 32 Layers
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  Standard & Advanced Rigid PCB
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  High-Tg FR-4, controlled impedance ±5%, 3/3 mil trace/space, free POFV on 6+ layers.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>From ₹166 ($2.00) / 5 pcs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Flexible & Rigid-Flex PCB */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/flex-pcb.webp" 
                    alt="Flexible & Rigid-Flex PCB"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#c5283d] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    Adhesive-Free Polyimide
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  Flexible & Rigid-Flex PCB
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  1-8 layer flex with stainless steel, FR-4, or 3M stiffeners for aerospace avionics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>Instant Flex Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Metal Core & Aluminum PCB */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/metal-core-pcb.webp" 
                    alt="Metal Core PCB"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    380W Copper / 1W Al
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  Metal Core & Heavy Copper
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Superior thermal conductivity for power electronics, LED arrays, and EV battery management.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>Explore Thermal PCBs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: High-Frequency RF (Rogers/Teflon) */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/rf-pcb.webp" 
                    alt="High Frequency RF PCB"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    Rogers 4350B / Teflon
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  High-Frequency RF & Microwave
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Low Dk/Df substrates up to 77 GHz for radar, satellite transceivers, and microwave antennas.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>RF Hybrid Stackups</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 5: Turnkey SMT & THT Assembly */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/pcba-smt.webp" 
                    alt="Turnkey SMT Assembly"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    200,000 CPH SMT
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  Turnkey PCB Assembly (PCBA)
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  01005 chips, 0.3mm BGA pitch, selective soldering, conformal coating, 24h express dispatch.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>From ₹660 ($8.00) Build</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 6: Laser-Cut SMT Stencil */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/smt-stencil.webp" 
                    alt="High Precision SMT Stencil"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    ±0.003mm Precision
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  Laser-Cut SMT Stencil
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  304 HTA stainless steel, electropolished, nano-coated for clean paste release on fine-pitch BGAs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>Framed / Non-Framed</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 7: Expert PCB Layout & DFM */}
            <div 
              onClick={() => onNavigateTo('capabilities')}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/pcb-layout.webp" 
                    alt="Expert PCB Layout Service"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-indigo-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    Up to 50 Layers
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  PCB Layout & High-Speed Routing
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Supports 100k+ pins, DDR5, PCIe Gen5, blind/buried microvias, and IPC-2221 compliance.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>Review DFM Rules</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 8: CNC Machining & 3D Enclosures */}
            <div 
              onClick={onNavigateToQuote}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-red-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                  <img 
                    src="/images/cnc-machining.webp" 
                    alt="Precision CNC Machining & Enclosures"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm font-mono">
                    5-Axis CNC & SLA
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#c5283d] transition-colors mb-1">
                  CNC Machining & Enclosures
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Aluminum 6061/7075 enclosures, heatsinks, resin & metal 3D printing for electronic chassis.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-[#c5283d]">
                <span>Custom Enclosure Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE INTERACTIVE CHIP & SILICON EXPLORER (740,000+ Components in Hyderabad Vault) */}
      <InteractiveChipSelector 
        currency={currency}
        onNavigateToQuote={onNavigateToQuote}
        onAddToCart={onAddToCart}
      />

      {/* 5. EXPLODED HARDWARE ASSEMBLY BENCHMARK (All-in-One Mechanical & Electronics Integration) */}
      <section className="py-20 bg-[#070e1e] text-white overflow-hidden relative border-b border-slate-800">
        
        {/* Background circuit grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                <span>FULL-SYSTEM HARDWARE INTEGRATION // EXPLODED ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Turnkey Hardware: Silicon, PCB & Enclosure
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                From bare silicon die placement to multi-axis CNC machined chassis, SriLin delivers unified mechatronic manufacturing without multi-vendor friction.
              </p>
            </div>

            {/* Solution Selector Buttons */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveSolutionTab('avionics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSolutionTab === 'avionics'
                    ? 'bg-[#c5283d] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Satellite Avionics
              </button>
              <button
                onClick={() => setActiveSolutionTab('radar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSolutionTab === 'radar'
                    ? 'bg-[#c5283d] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Radar Transceiver
              </button>
              <button
                onClick={() => setActiveSolutionTab('adas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSolutionTab === 'adas'
                    ? 'bg-[#c5283d] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AI ADAS Camera (OEM)
              </button>
              <button
                onClick={() => setActiveSolutionTab('bms')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSolutionTab === 'bms'
                    ? 'bg-[#c5283d] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EV High-Voltage BMS
              </button>
            </div>
          </div>

          {/* Exploded View Card */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Image Render */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
              <img 
                src={currentSolution.image} 
                alt={currentSolution.title}
                className="w-full h-80 sm:h-96 object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute top-4 left-4 bg-red-600/90 text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded border border-white/20">
                {currentSolution.thermalRating}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-cyan-300 bg-slate-950/80 p-2.5 rounded border border-cyan-500/20">
                {currentSolution.componentsCount} SMT Placements • 100% 160kV X-Ray Void Checked
              </div>
            </div>

            {/* Spec Breakdown */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider block">
                  {currentSolution.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {currentSolution.title}
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-start space-x-3">
                  <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Substrate & Layer Stackup</span>
                    <span className="text-sm font-bold text-white">{currentSolution.layers} — {currentSolution.substrate}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-start space-x-3">
                  <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Core Processing & SMT Silicon</span>
                    <span className="text-sm font-bold text-white">{currentSolution.chip}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-start space-x-3">
                  <Box className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Mechanical Enclosure & Heatsink</span>
                    <span className="text-sm font-bold text-white">{currentSolution.enclosure}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <div className="text-xs font-mono text-emerald-400 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  <span>{currentSolution.turnaround}</span>
                </div>

                <button
                  onClick={onNavigateToQuote}
                  className="bg-[#c5283d] hover:bg-[#a71d2a] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer shadow-red-500/20"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. AUTHENTIC SRILIN CLEANROOM & HERITAGE (Preserving Original Site About Us + Photos) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Original Factory Facility Image */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img 
                src="/images/srilin/srilin-about-us.png" 
                alt="SriLin Electronics Manufacturing Facility Hyderabad"
                className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono font-bold bg-[#c5283d] px-2 py-0.5 rounded uppercase tracking-wider">
                  E-City EMC Hyderabad Cleanroom
                </span>
                <h4 className="text-base font-bold mt-1">
                  25,000 sq.ft Operational ESD Cleanroom
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Expandable to 214,000 sq.ft reserve campus for high-volume defense electronics.
                </p>
              </div>
            </div>

            {/* Right: Authentic Company Narrative & Accreditations */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider">
                <span>ESTABLISHED 2017 // HYDERABAD ESDM CENTER</span>
              </div>

              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                SriLin Electronics Private Limited
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                SriLin Electronics Pvt Ltd is an ISO 9001:2015, AS9100D, ANSI/ESD S20.20-2021 & IEC 61340-5-1 certified Premier Electronics System Design & Manufacturing Services (ESDM/EMS) company located in E-City EMC (Formerly Fabcity), Hyderabad, India.
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                We provide Embedded Design, High-Speed SMT Mounting, product integration, testing & box build services. Manufactured in our Class 100,000 (ISO-8) cleanroom to meet world-wide aerospace quality standards with zero defect tolerance.
              </p>

              {/* Accreditations Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block">AEROSPACE</span>
                  <span className="text-xs font-bold text-[#c5283d] font-mono">AS9100D</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block">QUALITY</span>
                  <span className="text-xs font-bold text-slate-800 font-mono">ISO 9001:2015</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block">STATIC CONTROL</span>
                  <span className="text-xs font-bold text-slate-800 font-mono">ANSI ESD S20.20</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block">STANDARD</span>
                  <span className="text-xs font-bold text-slate-800 font-mono">IEC 61340-5-1</span>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  onClick={() => onNavigateTo('quality')}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Company History & Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigateTo('factory')}
                  className="border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  <span>Machinery Floor Tour</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. CUSTOMER USE CASES & INDUSTRIAL PARTNERS (JLCPCB Showcase with Real Images) */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block mb-1">
                Global Provenance & Trust
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Trusted by Pioneering Engineering Teams
              </h2>
            </div>
            <button 
              onClick={() => onNavigateTo('quality')} 
              className="text-xs font-bold text-[#c5283d] hover:underline cursor-pointer"
            >
              View All Case Studies &gt;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Case 1: Skyroot / Space Flight */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-100 overflow-hidden relative">
                <img 
                  src="/images/case-raspberry-pi.webp" 
                  alt="Embedded Compute Cluster"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold text-[#c5283d] uppercase">Launch Vehicle Telemetry</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  Skyroot Aerospace Flight Computers
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  "SriLin assembled our launch vehicle telemetry and power distribution modules with 01005 passives and 0.4mm pitch BGAs. 100% 160kV X-Ray verification passed all vibration screening."
                </p>
              </div>
            </div>

            {/* Case 2: Siemens Industrial Automation */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-100 overflow-hidden relative">
                <img 
                  src="/images/case-siemens.webp" 
                  alt="Industrial Automation Control Systems"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase">Industrial Automation</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  Ruggedized PLC & Fieldbus Gateways
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Selective conformal coating (Humiseal 1B31) with thermal shock screening (-40°C to +85°C) for zero-failure automation lines.
                </p>
              </div>
            </div>

            {/* Case 3: Power Electronics & Home Automation */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-100 overflow-hidden relative">
                <img 
                  src="/images/case-midea.webp" 
                  alt="Smart Energy & Climate Control"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold text-amber-600 uppercase">Power Electronics</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  Inverter Motor Drive & Thermal Management
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Heavy 3oz copper trace routing and aluminum core substrate dissipation for high-efficiency brushless DC motor controllers.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
