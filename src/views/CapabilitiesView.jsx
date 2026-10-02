import React, { useState } from 'react';
import CapabilitiesTable from '../components/CapabilitiesTable';
import StackupVisualizer from '../components/StackupVisualizer';
import { 
  SlidersHorizontal, 
  ShieldCheck, 
  Download, 
  Cpu, 
  Layers, 
  CheckCircle, 
  Wrench, 
  ScanLine, 
  Flame, 
  FileText,
  Boxes,
  ArrowRight,
  Sparkles,
  Camera,
  Activity,
  Zap,
  Terminal,
  Database
} from 'lucide-react';
import { SERVICES, OEM_PRODUCTS, TEST_ENGINEERING_LABVIEW } from '../data/srilineData';

export default function CapabilitiesView({ onNavigateToQuote }) {
  const [activePillar, setActivePillar] = useState('all');

  const PILLARS = [
    { id: 'all', name: 'All Capabilities' },
    { id: 'assembly', name: 'Assembly & SMT' },
    { id: 'testing', name: 'Testing & QA' },
    { id: 'integration', name: 'Box Build & Coating' },
    { id: 'engineering', name: 'Design & DFM' },
  ];

  const filteredServices = activePillar === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => {
        if (activePillar === 'assembly') return s.category === 'Assembly';
        if (activePillar === 'testing') return s.category === 'Quality';
        if (activePillar === 'integration') return s.category === 'Protection' || s.category === 'Wiring' || s.category === 'Box Build';
        if (activePillar === 'engineering') return s.category === 'Engineering' || s.category === 'Design';
        return true;
      });

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospace Header Tag */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200 text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-mono">
            <span className="font-bold text-slate-900">SRILIN ENGINEERING SPECS</span>
            <span>/</span>
            <span>IPC-6012 CLASS 3</span>
            <span>/</span>
            <span className="text-[#c5283d] font-semibold">TOLERANCE SPECIFICATIONS & 4-PILLAR SERVICES</span>
          </div>
          <button 
            onClick={onNavigateToQuote}
            className="text-[#c5283d] bg-red-50 hover:bg-red-100 font-bold px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          >
            Launch Instant Estimator →
          </button>
        </div>

        {/* 1. Header Intro */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider mb-2">
            <span>FULL LIFECYCLE ESDM & EMS CAPABILITIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Manufacturing Tolerances & Engineering Services
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            From embedded hardware schematic design and high-density 01005 SMT placement to 160kV X-Ray inspection and 240-hour environmental thermal burn-in, explore SriLin's complete technical envelope.
          </p>
        </div>

        {/* 2. 4 Engineering Pillars Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8">
          {PILLARS.map(p => (
            <button
              key={p.id}
              onClick={() => setActivePillar(p.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activePillar === p.id
                  ? 'bg-[#c5283d] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map(service => (
            <div 
              key={service.id}
              className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#c5283d]">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <p className="text-[11px] text-slate-500 leading-normal border-t border-slate-200/80 pt-3">
                  {service.fullDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 mt-4 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 text-[11px]">
                  Turnaround: <strong className="text-slate-900">{service.turnaround}</strong>
                </span>

                <button 
                  onClick={onNavigateToQuote}
                  className="font-bold text-[#c5283d] hover:underline flex items-center cursor-pointer"
                >
                  <span>Quote Service</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PROPRIETARY OEM HARDWARE: AI ADAS + DMS CAMERA */}
        <div id="adas" className="my-14 bg-gradient-to-br from-[#070e1e] to-[#0f1f3d] rounded-2xl text-white p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#c5283d] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  In-House OEM Innovation
                </span>
                <span className="bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded">
                  {OEM_PRODUCTS[0].badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {OEM_PRODUCTS[0].name}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {OEM_PRODUCTS[0].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {OEM_PRODUCTS[0].features.map((f, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 text-xs space-y-0.5">
                    <span className="text-cyan-400 font-mono font-bold text-[11px] block">{f.label}</span>
                    <span className="text-slate-300 text-[11px] leading-tight block">{f.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNavigateToQuote}
                  className="px-5 py-2.5 bg-[#c5283d] hover:bg-[#a71d2a] text-white text-xs font-bold rounded-xl transition-all shadow-md inline-flex items-center space-x-1.5 active:scale-95 cursor-pointer"
                >
                  <span>Inquire for OEM Fleet Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-slate-400 text-xs font-mono">
                  Fabricated & Assembled at Hyderabad E-City EMC
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 p-2 shadow-2xl">
                <img 
                  src={OEM_PRODUCTS[0].image} 
                  alt="AI ADAS + DMS Camera Hardware"
                  className="w-full h-72 sm:h-80 object-cover rounded-lg"
                />
              </div>
              <div className="mt-3 p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-center">
                <div className="text-xs font-bold text-white">Dual Vision Sensor Core</div>
                <div className="text-[11px] text-slate-400 font-mono">1080P Forward ADAS + 720P 940nm IR Cabin DMS</div>
              </div>
            </div>
          </div>
        </div>

        {/* TEST ENGINEERING DIVISION: NATIONAL INSTRUMENTS LABVIEW & PXI (ATE) */}
        <div id="labview" className="my-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider mb-2">
              <Activity className="w-4 h-4 text-[#c5283d]" />
              <span>TEST ENGINEERING DIVISION // FUNCTIONAL QUALIFICATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {TEST_ENGINEERING_LABVIEW.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {TEST_ENGINEERING_LABVIEW.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEST_ENGINEERING_LABVIEW.capabilities.map((c, i) => (
              <div key={i} className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-slate-300 transition-all">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-[#c5283d] flex items-center justify-center font-bold text-xs font-mono">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 mt-3 text-[11px] font-mono text-emerald-700 font-semibold flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Automated</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Tabular Tolerances Matrix */}
        <div className="my-14 border-t border-slate-200 pt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block mb-1">
                Precision Limits & Design Guidelines
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                IPC-6012 Class 3 Tolerance Matrix
              </h2>
            </div>
            <a 
              href="mailto:engineering@srilinelectronics.com?subject=DFM%20DRU%20Download"
              className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-300 inline-flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Altium & KiCad .DRU Rules</span>
            </a>
          </div>

          <CapabilitiesTable />
        </div>

        {/* 4. Interactive Layer Stackup & Controlled Impedance */}
        <div className="my-14 border-t border-slate-200 pt-12">
          <StackupVisualizer layers={4} solderMask="Green" />
        </div>

      </div>
    </div>
  );
}
