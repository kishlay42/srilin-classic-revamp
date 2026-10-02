import React, { useState } from 'react';
import { SlidersHorizontal, Search, CheckCircle, Info, ShieldCheck } from 'lucide-react';
import { CAPABILITIES_MATRIX } from '../data/srilineData';

export default function CapabilitiesTable() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMatrix = CAPABILITIES_MATRIX.filter(item => 
    item.parameter.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.advanced.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="capabilities-section" className="py-20 bg-white text-slate-800 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Engineering Design Rules & Tolerances</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Manufacturing Capabilities & Precision Tolerances
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Compare SriLin standard fast-turn prototype limits against our advanced AS9100D aerospace and defense production tolerances.
            </p>
          </div>

          {/* Quick Search Filter */}
          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input 
              type="text"
              placeholder="Search design rules (e.g. trace, via)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-brand-blue focus:bg-white"
            />
          </div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px] font-bold">
                <th className="py-3.5 px-6">Manufacturing Parameter</th>
                <th className="py-3.5 px-6">Standard Prototype Fab</th>
                <th className="py-3.5 px-6 bg-blue-50/50 text-brand-blue border-l border-r border-blue-100">
                  Advanced Aerospace / Defense
                </th>
                <th className="py-3.5 px-4 text-center">Unit / Metric</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-6 font-bold text-slate-900 flex items-center space-x-2">
                    <span>{row.parameter}</span>
                  </td>
                  <td className="py-3.5 px-6 text-slate-600 font-medium">
                    {row.standard}
                  </td>
                  <td className="py-3.5 px-6 font-semibold text-slate-900 bg-blue-50/30 border-l border-r border-blue-100">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{row.advanced}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center text-slate-400 font-mono text-xs">
                    {row.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote Assurance */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 gap-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span>Need tighter tolerances or custom dielectric stackup? Contact our CAM team for custom DFM sign-off.</span>
          </div>
          <a href="mailto:rfq@srilinelectronics.com" className="font-bold text-brand-blue hover:underline">
            Request Custom DFM Review →
          </a>
        </div>

      </div>
    </section>
  );
}
