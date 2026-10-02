import React, { useState } from 'react';
import { 
  Cpu, 
  Boxes, 
  Layers, 
  Rocket, 
  Factory, 
  Truck, 
  CircuitBoard, 
  Cable, 
  ShieldAlert, 
  ScanLine, 
  Flame, 
  FileCheck, 
  Wrench, 
  Plane,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/srilineData';

const ICON_MAP = {
  Cpu,
  Boxes,
  Layers,
  Rocket,
  Factory,
  Truck,
  CircuitBoard,
  Cable,
  ShieldAlert,
  ScanLine,
  Flame,
  FileCheck,
  Wrench,
  Plane
};

export default function ServicesGrid({ onSelectServiceForQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Assembly', 'Integration', 'Fabrication', 'Quality', 'Engineering', 'Aerospace'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services-section" className="py-20 bg-slate-50 text-slate-900 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Lifecycle Electronics Manufacturing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            14 Comprehensive EMS Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            From single-board quick-turn R&D prototypes to mission-critical aerospace flight hardware, explore SriLin's turnkey capabilities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat} {cat === 'All' ? `(${SERVICES.length})` : ''}
            </button>
          ))}
        </div>

        {/* 14 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Cpu;

            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1 text-brand-blue" />
                    <span>{service.turnaround}</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForQuote(service.category === 'Fabrication' ? 'pcb' : service.category === 'Integration' ? 'boxbuild' : 'pcba')}
                    className="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-blue-dark group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Instant Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
