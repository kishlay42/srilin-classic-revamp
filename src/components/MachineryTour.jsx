import React, { useState } from 'react';
import { 
  Cpu, 
  ScanLine, 
  Flame, 
  ShieldCheck, 
  Check, 
  Building2,
  ArrowRight
} from 'lucide-react';
import { MACHINERY_DATA, COMPANY_INFO } from '../data/srilineData';

export default function MachineryTour() {
  const [selectedMachine, setSelectedMachine] = useState(0);
  const machine = MACHINERY_DATA[selectedMachine];

  return (
    <section id="machinery-section" className="py-20 bg-[#f7f8fa] text-slate-800 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold text-[#c5283d] uppercase tracking-wider mb-2">
              E-City EMC Hyderabad Cleanroom Facility
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              200,000 CPH SMT Machinery & Inspection Floor
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Tour our automated Class 100,000 cleanroom plant featuring Japanese high-speed pick-and-place lines, Korean 3D optical inspection, and American 160kV X-Ray systems.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ANSI/ESD S20.20 Static Control Floor</span>
          </div>
        </div>

        {/* Machine Tabs (Clean Pills) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8">
          {MACHINERY_DATA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMachine(idx)}
              className={`shrink-0 px-4 py-2.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                selectedMachine === idx
                  ? 'bg-[#c5283d] border-[#c5283d] text-white shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {item.name.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Active Machine Spotlight (Clean White Card) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Machine Photo */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-md border border-slate-200">
            <img 
              src={machine.image} 
              alt={machine.name}
              className="w-full h-80 sm:h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c5283d] text-white">
                {machine.type}
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                {machine.name}
              </h3>
            </div>
          </div>

          {/* Machine Specs */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-4 rounded-xl bg-[#f7f8fa] border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Speed & Throughput Capacity
              </span>
              <p className="text-lg font-black text-[#c5283d] font-mono">
                {machine.capacity}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f7f8fa] border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Dimensional & Pitch Capabilities
              </span>
              <p className="text-sm font-semibold text-slate-800">
                {machine.capability}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f7f8fa] border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Aerospace Engineering Advantage
              </span>
              <p className="text-sm text-slate-600">
                {machine.highlight}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% First-Pass Yield</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>IPC-A-610 Class 3 Standards</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Barcoded Lot Traceability</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
