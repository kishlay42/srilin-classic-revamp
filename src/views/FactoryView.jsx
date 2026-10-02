import React, { useState } from 'react';
import MachineryTour from '../components/MachineryTour';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Zap, 
  Layers, 
  Cpu, 
  ScanLine, 
  Flame, 
  Truck, 
  Clock, 
  Plane, 
  ArrowRight,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO, MACHINERY_DATA, CERTIFICATIONS } from '../data/srilineData';

export default function FactoryView({ onNavigateToQuote }) {
  const [activeTab, setActiveTab] = useState('machinery'); // 'machinery', 'telemetry', 'workflow', 'logistics'
  const [activeGalleryImg, setActiveGalleryImg] = useState(0);

  const GALLERY_IMAGES = [
    {
      src: '/images/srilin/srilin-header1.webp',
      title: 'Automated 200k CPH SMT Placement Lines',
      subtitle: 'Fuji AIMEX IIIc & Panasonic NPM-D3 dual-lane lines with 01005 passives & 0.3mm BGA capability'
    },
    {
      src: '/images/srilin/srilin-header2.webp',
      title: 'Class 100,000 / ISO-8 Cleanroom Plant Floor',
      subtitle: 'Positive pressure HEPA filtration with ANSI/ESD S20.20-2021 dissipative static flooring'
    },
    {
      src: '/images/srilin/srilin-header3.webp',
      title: 'Precision Inspection & 160kV X-Ray Suites',
      subtitle: 'Koh Young 3D SPI and Nordson Dage Quadra 5 3D CT computed tomography for space flight hardware'
    }
  ];

  const WORKFLOW_ZONES = [
    {
      step: "01",
      title: "Intake & Moisture Mitigation",
      desc: "Barcoded lot intake, counterfeit component verification, and MSL dry-bake cabinets with <1% RH nitrogen storage.",
      icon: "ShieldCheck"
    },
    {
      step: "02",
      title: "Laser Solder Stencil & 3D SPI",
      desc: "High-precision stencil printing followed by 100% Koh Young 3D solder paste height and volume inspection.",
      icon: "Layers"
    },
    {
      step: "03",
      title: "High-Speed SMT Placement",
      desc: "Dual-gantry Fuji & Panasonic placement up to 200,000 CPH with real-time vacuum optical checks.",
      icon: "Cpu"
    },
    {
      step: "04",
      title: "13-Zone Nitrogen Reflow",
      desc: "Heller 1809 MK5 nitrogen inert atmosphere (<50 ppm O2) with calibrated KIC thermal profile monitoring.",
      icon: "Flame"
    },
    {
      step: "05",
      title: "3D AOI & 160kV X-Ray CT",
      desc: "Automated optical defect recognition and high-voltage X-ray imaging for BGA solder joint micro-voiding.",
      icon: "ScanLine"
    },
    {
      step: "06",
      title: "Robotic Selective Conformal Coating",
      desc: "Automated spray application of acrylic, silicone, or polyurethane films with UV blacklight inspection.",
      icon: "Award"
    },
    {
      step: "07",
      title: "Thermal Burn-In Screening",
      desc: "Continuous -40°C to +125°C thermal cycling up to 240 hours under load to eliminate infant mortality.",
      icon: "Zap"
    },
    {
      step: "08",
      title: "Box Build System Integration",
      desc: "Full CNC enclosure assembly, cable wire harnessing, NI LabVIEW functional test, and defense-ready packaging.",
      icon: "Building2"
    }
  ];

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospace Header Tag */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-mono">
            <span className="font-bold text-slate-900">SRILIN CLEANROOM AUDIT</span>
            <span>/</span>
            <span>E-CITY EMC HYDERABAD</span>
            <span>/</span>
            <span className="text-emerald-600 font-semibold">ISO 8 / CLASS 100,000 ACTIVE</span>
          </div>
          <button 
            onClick={onNavigateToQuote}
            className="text-[#c5283d] bg-red-50 hover:bg-red-100 font-bold px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          >
            Configure Production Batch →
          </button>
        </div>

        {/* 1. Hero Facility Showcase */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#070e1e] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>HYDERABAD SOUTHERN MANUFACTURING CORRIDOR // EST. 2017</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                25,000 Sqft Cleanroom Campus with 214,000 Sqft Expansion
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Situated in E-City EMC (Formerly Fabcity), Hyderabad — just 15 minutes from Rajiv Gandhi International Airport and air cargo terminal. Operating dual automated SMT lines with 200,000 CPH throughput and IPC-A-610 Class 3 flight certification.
              </p>

              {/* Plant Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Line Capacity</span>
                  <div className="text-lg font-black text-white font-mono mt-0.5">{COMPANY_INFO.lineCapacity}</div>
                  <span className="text-[10px] text-emerald-400">High-speed dual lane</span>
                </div>

                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Placement Accuracy</span>
                  <div className="text-lg font-black text-white font-mono mt-0.5">±0.025 mm</div>
                  <span className="text-[10px] text-cyan-400 font-mono">CpK ≥ 1.00 (3σ)</span>
                </div>

                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Campus Footprint</span>
                  <div className="text-lg font-black text-white font-mono mt-0.5">239k Sqft</div>
                  <span className="text-[10px] text-amber-400 font-semibold">25k op + 214k exp</span>
                </div>

                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Air Cargo Transit</span>
                  <div className="text-lg font-black text-white font-mono mt-0.5">15 Mins</div>
                  <span className="text-[10px] text-slate-300 font-semibold">RGI Airport Hub</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Plant Photo Carousel */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-4/3 bg-slate-800">
                <img 
                  src={GALLERY_IMAGES[activeGalleryImg].src} 
                  alt={GALLERY_IMAGES[activeGalleryImg].title}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c5283d] text-white">
                    Facility Zone 0{activeGalleryImg + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">
                    {GALLERY_IMAGES[activeGalleryImg].title}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                    {GALLERY_IMAGES[activeGalleryImg].subtitle}
                  </p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center space-x-2 mt-3">
                {GALLERY_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveGalleryImg(i)}
                    className={`flex-1 h-1.5 rounded-full transition-all cursor-pointer ${
                      activeGalleryImg === i ? 'bg-[#c5283d] w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`View photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2. Primary Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 mb-8 overflow-x-auto scrollbar-none">
          {[
            { id: 'machinery', label: 'SMT Machinery Fleet (200k CPH)', icon: Cpu },
            { id: 'telemetry', label: 'Cleanroom & ESD Telemetry', icon: ShieldCheck },
            { id: 'workflow', label: '8-Zone Production Workflow', icon: Layers },
            { id: 'logistics', label: 'Hyderabad Logistics & Advantage', icon: Plane },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#c5283d] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Machinery Tour */}
        {activeTab === 'machinery' && (
          <div className="animate-fadeIn">
            <MachineryTour />
          </div>
        )}

        {/* Tab 2: Cleanroom & ESD Telemetry */}
        {activeTab === 'telemetry' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block mb-1">
                    LIVE SENSOR TELEMETRY & ENVIRONMENTAL LOGGING
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    ISO-8 Cleanroom & ANSI/ESD S20.20 Telemetry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                    Every cubic meter of our Hyderabad cleanroom is monitored 24/7 with automated alarms, positive-pressure HEPA filtration, and continuous ground dissipation verification.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>ALL ENCLOSURES OPTIMAL</span>
                </div>
              </div>

              {/* 4 Sensor Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
                    <span>PARTICLE COUNT</span>
                    <span className="text-emerald-600">● 99.97% HEPA</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-mono mt-2">&lt; 3,520,000 / m³</div>
                  <span className="text-xs font-semibold text-slate-500">ISO 14644-1 Class 8 Active</span>
                  <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[28%]"></div>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
                    <span>TEMPERATURE</span>
                    <span className="text-emerald-600">● STABLE</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-mono mt-2">22.4°C</div>
                  <span className="text-xs font-semibold text-slate-500">Tolerance: 22°C ± 2°C</span>
                  <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full w-[52%]"></div>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
                    <span>RELATIVE HUMIDITY</span>
                    <span className="text-emerald-600">● CONTROLLED</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-mono mt-2">46.2% RH</div>
                  <span className="text-xs font-semibold text-slate-500">Tolerance: 45% ± 5% RH</span>
                  <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full w-[46%]"></div>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono font-bold">
                    <span>STATIC VOLTAGE</span>
                    <span className="text-emerald-600">● &lt; 50V</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-mono mt-2">38 Volts</div>
                  <span className="text-xs font-semibold text-slate-500">ANSI/ESD S20.20-2021 Safe</span>
                  <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[19%]"></div>
                  </div>
                </div>
              </div>

              {/* Technical Safeguards Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-xs text-slate-900 mb-1">MSD Level 1-6 Nitrogen Cabinets</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Ultra-dry nitrogen storage chambers maintained at &lt; 1% RH prevent micro-crack delamination and popcorn defects during SMT reflow.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-xs text-slate-900 mb-1">Continuous Operator Grounding</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Conductive epoxy flooring combined with continuous resistance wrist strap monitors ensure zero electrostatic build-up across all line personnel.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-xs text-slate-900 mb-1">IEC 61340-5-1 Certified Protocol</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    All tools, feeders, component reels, and transport carts are certified static dissipative, preventing latent gate-oxide breakdown in sensitive silicon.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: 8-Zone Production Workflow */}
        {activeTab === 'workflow' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block mb-1">
                FROM SILICON INTAKE TO FLIGHT READY PACKAGING
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                8-Zone Cleanroom Manufacturing Workflow
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Every circuit board passes through eight sequentially verified production zones with 100% computerized lot traceability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {WORKFLOW_ZONES.map(z => (
                <div 
                  key={z.step}
                  className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black font-mono text-[#c5283d]">{z.step}</span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">ZONE {z.step}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1.5">{z.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{z.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center space-x-1.5 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Barcoded Lot Traceable</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Hyderabad Strategic Advantage */}
        {activeTab === 'logistics' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block mb-1">
                  STRATEGIC AEROSPACE & DEFENSE CORRIDOR
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
                  Why Manufacturing in Hyderabad EMC Wins
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  SriLin is anchored in Fabcity (E-City EMC), Hyderabad — India's premier southern electronics manufacturing corridor. The campus is co-located near defense laboratories (DRDO, RCI), aerospace primes (Skyroot, Dhruva Space), and international logistics terminals.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-xs">
                      18%
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">18% Domestic GST Input Tax Credit</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Indian enterprises and startups recoup 100% of GST as input credit, avoiding the dead customs duty and tariff overheads of foreign imports.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-xs">
                      0h
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">Zero Customs Clearances Delays</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Eliminates the 5 to 14-day international customs holds, demurrage charges, and freight broker bottlenecks typical of offshore fab houses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold text-xs">
                      214k
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">214,000 Sqft Expansion Ready On Campus</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Dedicated production clusters can be commissioned immediately for high-volume defense offset contracts without greenfield land acquisition.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 p-8 bg-[#070e1e] text-white rounded-3xl border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">FACILITY DISCLOSURE</span>
                <h4 className="text-xl font-bold text-white">Plant Address & Logistics</h4>
                <p className="text-xs text-slate-300 mt-2 font-mono leading-relaxed">
                  {COMPANY_INFO.plantLocation}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">RGI Airport Distance:</span>
                  <span className="font-bold text-white">15 Minutes (12 km)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Air Cargo Hub:</span>
                  <span className="font-bold text-white">Direct Dedicated Highway</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Defense Audit Access:</span>
                  <span className="font-bold text-emerald-400">Cleared for AS9100D</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Power Redundancy:</span>
                  <span className="font-bold text-white">Dual 33kV Substations</span>
                </div>
              </div>

              <button
                onClick={onNavigateToQuote}
                className="w-full bg-[#c5283d] hover:bg-[#a71d2a] text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer shadow-red-500/20"
              >
                <span>Schedule a Plant Audit or Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* 3. Bottom Instant Estimator Banner */}
        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              READY FOR AEROSPACE SMT RUNS?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Test SriLin's 200k CPH Cleanroom Precision Today
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Upload your Gerber and BOM to our self-service calculator. Instant automated quotation, DFM pre-flight validation, and delivery in 24 to 48 hours.
            </p>
          </div>

          <button
            onClick={onNavigateToQuote}
            className="shrink-0 bg-[#c5283d] hover:bg-[#a71d2a] text-white px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center space-x-2 cursor-pointer shadow-red-500/20"
          >
            <span>Launch Instant Estimator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
