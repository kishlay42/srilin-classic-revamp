import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Box, 
  Maximize2, 
  TrendingUp, 
  SlidersHorizontal,
  Flame,
  Zap,
  Radio,
  FileCode,
  Check
} from 'lucide-react';
import { CHIP_CATEGORIES, CHIPS_DATA } from '../data/chipsData';

export default function InteractiveChipSelector({ currency = 'INR', onNavigateToQuote, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedChipId, setSelectedChipId] = useState('stm32h753');
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'smt', 'apps'
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Filter chips
  const filteredChips = selectedCategory === 'all' 
    ? CHIPS_DATA 
    : CHIPS_DATA.filter(c => c.category === selectedCategory);

  // Active chip
  const activeChip = CHIPS_DATA.find(c => c.id === selectedChipId) || CHIPS_DATA[0];

  // Currency pricing helper
  const formatPrice = (chip) => {
    if (currency === 'USD') return `$${chip.basePriceUSD.toFixed(2)}`;
    if (currency === 'EUR') return `€${chip.basePriceEUR.toFixed(2)}`;
    return `₹${chip.basePriceINR.toLocaleString('en-IN')}`;
  };

  const handleAddChipToBom = () => {
    setAddedAnimation(true);
    if (onAddToCart) {
      onAddToCart(activeChip);
    }
    setTimeout(() => {
      setAddedAnimation(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c5283d] animate-ping"></span>
              <span>SRILIN SMT COMPONENT VAULT // 740,000+ IN-STOCK CHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Interactive SMT Chip & Silicon Explorer
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Choose any silicon component below to inspect live Hyderabad bonded warehouse stock, package pinouts, solder stencil apertures, and 160kV X-Ray verification profiles.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#c5283d] border border-red-200">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Automated 200k CPH SMT Feed
            </span>
          </div>
        </div>

        {/* 1. Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {CHIP_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c5283d] text-white shadow-xs ring-2 ring-[#c5283d]/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 2. Main 2-Column Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selectable Chip Cards */}
          <div className="lg:col-span-4 space-y-2.5 max-h-[640px] overflow-y-auto pr-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
              Select Component ({filteredChips.length} Available)
            </div>

            {filteredChips.map(chip => {
              const isSelected = chip.id === activeChip.id;
              return (
                <div
                  key={chip.id}
                  onClick={() => setSelectedChipId(chip.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left relative ${
                    isSelected
                      ? 'bg-red-50/40 border-[#c5283d] shadow-md ring-1 ring-[#c5283d]'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-xs'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#c5283d] rounded-r"></div>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm font-bold text-slate-900 group-hover:text-[#c5283d]">
                          {chip.partNumber}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 font-medium">
                        {chip.manufacturer} • {chip.categoryName}
                      </div>
                    </div>

                    <span className="text-xs font-mono font-black text-[#c5283d]">
                      {formatPrice(chip)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-200/60 text-[11px]">
                    <span className="inline-flex items-center font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {chip.package} ({chip.pitch})
                    </span>

                    <span className="inline-flex items-center text-emerald-700 font-semibold font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                      {chip.stock.toLocaleString()} In Stock
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Chip Deep Dive Card */}
          <div className="lg:col-span-8 bg-[#f8fafc] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
            
            {/* Top Serial & Status Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#c5283d] flex items-center justify-center font-black">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
                      {activeChip.partNumber}
                    </h3>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Bonded Stock
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {activeChip.manufacturer} — {activeChip.categoryName}
                  </p>
                </div>
              </div>

              {/* Price & Stock Pill */}
              <div className="text-right">
                <div className="text-xs text-slate-400 font-mono">Unit Price (SMT Ready)</div>
                <div className="text-2xl font-black text-slate-900 font-mono">
                  {formatPrice(activeChip)}
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold">
                  {activeChip.stock.toLocaleString()} units in Hyderabad Vault
                </div>
              </div>
            </div>

            {/* Middle Section: Visual Chip Image + Key Specs Overview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 items-center">
              
              {/* Left Side: Silicon Macro Image */}
              <div className="md:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-inner group">
                <img 
                  src={activeChip.image} 
                  alt={activeChip.partNumber}
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                  <span className="bg-slate-900/90 px-2 py-0.5 rounded border border-white/20">
                    {activeChip.package}
                  </span>
                  <span className="bg-blue-600/90 px-2 py-0.5 rounded">
                    Pitch: {activeChip.pitch}
                  </span>
                </div>
              </div>

              {/* Right Side: Key Parametric Highlights */}
              <div className="md:col-span-7 space-y-2.5">
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {activeChip.description}
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">Speed / Core</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">{activeChip.speed}</span>
                    <span className="text-[10px] text-slate-500 block truncate">{activeChip.core}</span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">Operating Voltage</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">{activeChip.voltage}</span>
                    <span className="text-[10px] text-slate-500 block truncate">{activeChip.tempRange.split(' ')[0]}</span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">Package Dimensions</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">{activeChip.dimensions}</span>
                    <span className="text-[10px] text-slate-500 block">{activeChip.pins} Total Terminations</span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">Quality Screening</span>
                    <span className="text-xs font-bold text-emerald-700 block truncate font-mono">AS9100D Rev D</span>
                    <span className="text-[10px] text-slate-500 block truncate">100% X-Ray Verified</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Tabbed Engineering Details */}
            <div className="border-t border-slate-200 pt-5">
              <div className="flex items-center space-x-2 mb-4">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    activeTab === 'specs'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Technical Specifications
                </button>
                <button
                  onClick={() => setActiveTab('smt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    activeTab === 'smt'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  SMT Assembly & Stencil Rules
                </button>
                <button
                  onClick={() => setActiveTab('apps')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    activeTab === 'apps'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Verified Applications
                </button>
              </div>

              {/* Tab Content: Specs */}
              {activeTab === 'specs' && (
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="font-bold text-slate-500 block mb-1">On-Chip Interfaces:</span>
                      <div className="flex flex-wrap gap-1">
                        {activeChip.interfaces.map((intf, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-mono px-2 py-0.5 rounded">
                            {intf}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-slate-500 block mb-1">Environmental & Screening:</span>
                      <p className="text-slate-700 font-mono text-[11px]">
                        {activeChip.screening}
                      </p>
                      <p className="text-slate-500 text-[10px] mt-1">
                        Thermal Range: {activeChip.tempRange}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: SMT Assembly */}
              {activeTab === 'smt' && (
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2 text-slate-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Feeder:</strong> {activeChip.feederType}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Stencil Foil:</strong> {activeChip.solderStencil}</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2 text-slate-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>SMT Nozzle:</strong> {activeChip.nozzleType}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Inspection:</strong> {activeChip.xrayInspection}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Applications */}
              {activeTab === 'apps' && (
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs">
                  <span className="font-bold text-slate-500 block mb-2">SriLin Certified Flight & Industrial Missions:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeChip.applications.map((app, i) => (
                      <div key={i} className="flex items-center space-x-2 text-slate-800 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5283d]"></span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Direct Conversion CTA Actions */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Moisture Sensitivity: <strong className="text-slate-800 font-mono">MSL 3 (Bake-free within 168h)</strong>
              </div>

              <div className="flex items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleAddChipToBom}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    addedAnimation 
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to SMT BOM!</span>
                    </>
                  ) : (
                    <>
                      <Box className="w-3.5 h-3.5 text-[#c5283d]" />
                      <span>Add to SMT BOM</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onNavigateToQuote && onNavigateToQuote(activeChip.id)}
                  className="bg-[#c5283d] hover:bg-[#a71d2a] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-red-500/20"
                >
                  <span>Configure Assembly with this Chip</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
