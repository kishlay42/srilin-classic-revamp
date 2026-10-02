import React, { useState } from 'react';
import { 
  FileUp, 
  SearchCheck, 
  Truck, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';

export default function SmartOrderingSection({ onJumpToQuote }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Upload PCB Files",
      desc: "Upload your Gerber files (RS-274X), Bill of Materials (BOM), and Centroid (CPL) data to receive instant quotes for PCB, components, and turnkey cleanroom assembly.",
      badge: "All uploads are secure and confidential.",
      previewTitle: "Automated Pre-Flight CAD/CAM Inspection",
      previewSub: "SriLin DFM engine analyzes minimum trace width, drill clearance, and annular rings in under 3 seconds.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Review PCB Components",
      desc: "Our automated BOM tool checks component availability against authorized global franchise distributors (Mouser, Digi-Key, Arrow) with real-time pricing and verified lifecycle status.",
      badge: "Counterfeit-free franchise components only.",
      previewTitle: "Automated Bill-of-Materials Cross-Reference",
      previewSub: "Substitutes suggested for obsolete or long lead-time ICs with Certificate of Conformance (CoC).",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Order & Track",
      desc: "Follow your order step-by-step through our E-City Hyderabad manufacturing floor. From solder paste printing and 3D SPI to 200k CPH SMT pick-and-place and 160kV X-Ray inspection.",
      badge: "Live cleanroom production milestones.",
      previewTitle: "24/7 Digital Production Tracking",
      previewSub: "Visual production checkpoints updated live at each Fuji/Panasonic machine station.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "04",
      title: "Get Your Boards",
      desc: "Vacuum-sealed ESD packaging with humidity indicator cards and comprehensive quality inspection reports (AOI/X-Ray/Burn-In). Fast worldwide delivery via DHL and FedEx.",
      badge: "AS9100D Certificate of Conformance included.",
      previewTitle: "Aerospace Flight-Ready Quality Delivery",
      previewSub: "Full batch traceability records archived for 10 years in compliance with aviation standards.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-12">
          Smart PCB & PCBA Ordering
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 4-Step Accordion (Exact JLCPCB Format from Screenshot 03) */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div 
                  key={idx}
                  className={`border-b border-slate-200 pb-5 transition-all cursor-pointer ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-black text-slate-900 font-mono">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-slate-400 font-bold text-lg">
                      {isActive ? <Minus className="w-5 h-5 text-[#0066ff]" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </div>

                  {isActive && (
                    <div className="mt-3 pl-8 text-xs text-slate-600 leading-relaxed space-y-3 animate-in fade-in duration-200">
                      <p>{step.desc}</p>
                      
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{step.badge}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4">
              <button
                onClick={onJumpToQuote}
                className="px-8 py-3 bg-[#0066ff] hover:bg-[#0052cc] text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Step Preview Interactive Mockup Graphic (Screenshot 03) */}
          <div className="lg:col-span-7 bg-[#f7f8fa] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].previewTitle}
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0066ff] text-white">
                  Step {steps[activeStep].number} in Action
                </span>
                <h4 className="text-lg font-bold text-white mt-1.5">
                  {steps[activeStep].previewTitle}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-lg">
                  {steps[activeStep].previewSub}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
