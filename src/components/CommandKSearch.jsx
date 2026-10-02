import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Layers, Cpu, ShieldCheck, Flame, SlidersHorizontal } from 'lucide-react';

export default function CommandKSearch({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  const searchableSpecs = [
    { title: "Controlled Impedance (50Ω / 90Ω / 100Ω)", category: "Capabilities", view: "capabilities", desc: "TDR coupon verified tolerances ±5% to ±10%" },
    { title: "Minimum Trace Width & Spacing (3/3 mil)", category: "Capabilities", view: "capabilities", desc: "0.075mm precision aerospace routing" },
    { title: "Laser Microvia HDI (0.075mm)", category: "Capabilities", view: "capabilities", desc: "Microvia aspect ratio 1:1 blind and buried" },
    { title: "Fuji AIMEX IIIc Modular SMT Line", category: "Plant & Machinery", view: "factory", desc: "120k CPH high-speed 01005 placement" },
    { title: "Panasonic NPM-D3 High-Speed Mounter", category: "Plant & Machinery", view: "factory", desc: "84k CPH dual-lane multi-function SMT" },
    { title: "Nordson Dage Quadra 5 160kV X-Ray", category: "Inspection", view: "factory", desc: "Sub-micron BGA ball voiding and micro-bridging CT inspection" },
    { title: "Koh Young 3D SPI (KY8030-2)", category: "Inspection", view: "factory", desc: "100% 3D solder paste height and volume inspection" },
    { title: "240-Hour Environmental Burn-In Chamber", category: "Testing", view: "factory", desc: "Continuous thermal cycling -40°C to +125°C under electrical load" },
    { title: "AS9100D Rev D Aerospace Quality MS", category: "Certifications", view: "quality", desc: "Aviation, space, and defense certified facility" },
    { title: "ANSI/ESD S20.20-2021 Static Control", category: "Certifications", view: "quality", desc: "Certified ESD cleanroom flooring and grounding" },
    { title: "Instant PCB Quoting Configurator", category: "Quoting", view: "quote", desc: "Self-service calculator with real-time price & lead time" },
    { title: "Skyroot Aerospace Mission Avionics", category: "Flight Heritage", view: "quality", desc: "Sub-orbital launch vehicle telemetry PCBA payload" },
    { title: "Contact Aerospace Desk & Plant HQ", category: "Contact", view: "contact", desc: "+91 91777 02120 / sales@srilinelectronics.com (Hyderabad E-City EMC)" },
    { title: "Schedule Cleanroom Facility Tour & Audit", category: "Contact", view: "contact", desc: "Visit our 25,000 sq ft Class 100,000 facility in Raviryal" },
  ];

  const filtered = query.trim() === ''
    ? searchableSpecs.slice(0, 6)
    : searchableSpecs.filter(s => 
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.category.toLowerCase().includes(query.toLowerCase()) ||
        s.desc.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? onClose() : null; // toggle if managed externally
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input 
            type="text" 
            autoFocus
            placeholder="Type a spec, machine, or standard (e.g. 160kV, 3/3 mil, AS9100D)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none placeholder:text-slate-400"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              No matching specifications found. Try "trace", "layers", "Fuji", or "AS9100D".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  onNavigate(item.view);
                  onClose();
                }}
                className="p-3 rounded-xl hover:bg-red-50/40 cursor-pointer flex items-center justify-between group transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xs text-slate-900 group-hover:text-[#c5283d] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#c5283d] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400 px-4">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-700">ESC</kbd> to close</span>
          <span className="font-mono">SriLin Engineering Index</span>
        </div>

      </div>
    </div>
  );
}
