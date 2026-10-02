import React, { useState } from 'react';
import { Layers, ShieldAlert, Cpu, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function StackupVisualizer({ layers = 4, solderMask = 'Green' }) {
  const [activeLayerTab, setActiveLayerTab] = useState(layers);

  // Sync internal state if prop changes
  React.useEffect(() => {
    setActiveLayerTab(layers);
  }, [layers]);

  // Solder mask color mapping
  const maskColors = {
    'Green': '#15803d',
    'Matte Black': '#18181b',
    'Royal Blue': '#1d4ed8',
    'Signal Red': '#b91c1c',
    'Signal Yellow': '#ca8a04',
    'Crisp White': '#f8fafc',
    'Aerospace Purple': '#6b21a8'
  };

  const currentMaskHex = maskColors[solderMask] || '#15803d';

  // Build stackup schema based on layers
  const getStackupLayers = (count) => {
    const list = [];
    list.push({ type: 'silkscreen', name: 'Top Silkscreen (Legend)', thickness: '0.015 mm', color: '#f1f5f9' });
    list.push({ type: 'soldermask', name: `Top Solder Mask (${solderMask})`, thickness: '0.020 mm', color: currentMaskHex });
    list.push({ type: 'copper', name: 'L1: Top Copper (Signal / RF Microstrip)', thickness: '0.035 mm (1 oz)', color: '#d97706' });

    if (count === 2) {
      list.push({ type: 'core', name: 'FR-4 High-Tg Dielectric Core (εr = 4.4)', thickness: '1.450 mm', color: '#cbd5e1' });
      list.push({ type: 'copper', name: 'L2: Bottom Copper (Ground / Signal)', thickness: '0.035 mm (1 oz)', color: '#d97706' });
    } else if (count === 4) {
      list.push({ type: 'prepreg', name: 'Prepreg 2116 / 7628 Dielectric (εr = 4.2)', thickness: '0.210 mm', color: '#94a3b8' });
      list.push({ type: 'copper', name: 'L2: Inner Layer 2 (Solid Ground Plane)', thickness: '0.035 mm (1 oz)', color: '#b45309' });
      list.push({ type: 'core', name: 'FR-4 High-Tg Core (εr = 4.4)', thickness: '1.000 mm', color: '#cbd5e1' });
      list.push({ type: 'copper', name: 'L3: Inner Layer 3 (Power Plane VCC)', thickness: '0.035 mm (1 oz)', color: '#b45309' });
      list.push({ type: 'prepreg', name: 'Prepreg 2116 / 7628 Dielectric (εr = 4.2)', thickness: '0.210 mm', color: '#94a3b8' });
      list.push({ type: 'copper', name: 'L4: Bottom Copper (Signal / Ground)', thickness: '0.035 mm (1 oz)', color: '#d97706' });
    } else if (count >= 6) {
      list.push({ type: 'prepreg', name: 'Prepreg 1080 High-Speed (εr = 3.9)', thickness: '0.120 mm', color: '#94a3b8' });
      list.push({ type: 'copper', name: 'L2: Inner Layer 2 (GND Reference)', thickness: '0.035 mm (1 oz)', color: '#b45309' });
      list.push({ type: 'core', name: 'FR-4 High-Tg Core (εr = 4.4)', thickness: '0.400 mm', color: '#cbd5e1' });
      list.push({ type: 'copper', name: 'L3: Inner Layer 3 (High-Speed Diff Signal)', thickness: '0.035 mm (1 oz)', color: '#d97706' });
      list.push({ type: 'prepreg', name: 'Prepreg 2116 Dielectric (εr = 4.2)', thickness: '0.180 mm', color: '#94a3b8' });
      list.push({ type: 'copper', name: 'L4: Inner Layer 4 (Split Power Rails)', thickness: '0.035 mm (1 oz)', color: '#b45309' });
      list.push({ type: 'core', name: 'FR-4 High-Tg Core (εr = 4.4)', thickness: '0.400 mm', color: '#cbd5e1' });
      list.push({ type: 'copper', name: 'L5: Inner Layer 5 (GND Plane)', thickness: '0.035 mm (1 oz)', color: '#b45309' });
      list.push({ type: 'prepreg', name: 'Prepreg 1080 High-Speed (εr = 3.9)', thickness: '0.120 mm', color: '#94a3b8' });
      list.push({ type: 'copper', name: `L${count}: Bottom Copper (Signal)`, thickness: '0.035 mm (1 oz)', color: '#d97706' });
    } else {
      // 1 layer
      list.push({ type: 'core', name: 'FR-4 Substrate Core', thickness: '1.500 mm', color: '#cbd5e1' });
    }

    list.push({ type: 'soldermask', name: `Bottom Solder Mask (${solderMask})`, thickness: '0.020 mm', color: currentMaskHex });
    list.push({ type: 'silkscreen', name: 'Bottom Silkscreen (Legend)', thickness: '0.015 mm', color: '#f1f5f9' });
    return list;
  };

  const stack = getStackupLayers(activeLayerTab);

  return (
    <section className="py-16 bg-[#071328] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Dielectric Engineering & Signal Integrity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Interactive Layer Stackup & Impedance Visualizer
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Inspect dielectric layer thicknesses, prepreg cores, and controlled impedance tolerances (50Ω single-ended & 90/100Ω differential pairs) verified by IPC-2141 standards.
            </p>
          </div>

          {/* Layer Selector Tabs */}
          <div className="flex items-center space-x-1.5 mt-6 md:mt-0 bg-slate-900 p-1.5 rounded-xl border border-slate-700">
            {[2, 4, 6, 8].map((l) => (
              <button
                key={l}
                onClick={() => setActiveLayerTab(l)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeLayerTab === l
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {l} Layers
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Cross-Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Stackup Graphic Representation */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider text-cyan-400">
                Cross-Section Schematic: {activeLayerTab}-Layer High-Tg Build
              </span>
              <span className="font-mono text-slate-400">Total Nominal: ~1.60 mm</span>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              {stack.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg transition-transform hover:scale-[1.01] cursor-pointer"
                  style={{ 
                    backgroundColor: item.type === 'copper' 
                      ? '#78350f' 
                      : item.type === 'soldermask' 
                      ? item.color 
                      : item.type === 'silkscreen' 
                      ? '#334155' 
                      : item.type === 'prepreg'
                      ? '#1e293b'
                      : '#0f172a',
                    borderLeft: `4px solid ${item.color}`
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-300">
                      {item.type}
                    </span>
                    <span className="font-semibold text-slate-100 text-xs">{item.name}</span>
                  </div>
                  <span className="text-slate-300 text-xs shrink-0">{item.thickness}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentMaskHex }}></span>
                <span>Active Solder Mask: <strong className="text-white">{solderMask}</strong></span>
              </div>
              <span>IPC-4101D / 21 Certified Prepreg</span>
            </div>
          </div>

          {/* Controlled Impedance & DFM Engineering Specs */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-5">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase mb-3">
                <Activity className="w-4 h-4" />
                <span>Simulated Controlled Impedance</span>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Single-Ended Microstrip (50Ω)</div>
                    <div className="text-[11px] text-slate-400">Trace: 5.2 mil | Clearance: 6.0 mil</div>
                  </div>
                  <span className="font-mono font-bold text-cyan-400 text-sm">50.2 Ω ± 7%</span>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Differential Pair (90Ω USB/Ethernet)</div>
                    <div className="text-[11px] text-slate-400">Trace: 4.5 mil | Spacing: 5.0 mil</div>
                  </div>
                  <span className="font-mono font-bold text-emerald-400 text-sm">90.4 Ω ± 6%</span>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Differential Pair (100Ω PCIe/LVDS)</div>
                    <div className="text-[11px] text-slate-400">Trace: 4.0 mil | Spacing: 6.5 mil</div>
                  </div>
                  <span className="font-mono font-bold text-amber-400 text-sm">99.8 Ω ± 5%</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>TDR Testing Coupon Verification</span>
              </div>
              <p>
                Every high-speed multi-layer panel fabricated at SriLin includes a coupon inspected with Time-Domain Reflectometry (TDR) to ensure high-frequency flight reliability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
