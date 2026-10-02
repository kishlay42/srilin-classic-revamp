import React from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Layers, 
  Truck,
  CheckCircle,
  Network
} from 'lucide-react';

export default function Hero({ quickQuoteParams, setQuickQuoteParams, onJumpToQuote }) {
  return (
    <div className="relative pt-24 md:pt-28 bg-white">
      
      {/* 1. HERO HERO BANNER (Authentic JLCPCB Look from Screenshot 01) */}
      <section id="hero" className="relative h-[480px] sm:h-[520px] lg:h-[560px] flex items-center overflow-hidden bg-slate-900">
        
        {/* Background Cleanroom Factory Image with Blue Vignette */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="SriLin Cleanroom Automated SMT Line"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Subtitle Line */}
          <div className="text-sm sm:text-base text-slate-200 font-normal tracking-wide mb-3 flex items-center space-x-2">
            <span>Journey of Limitless Precision</span>
            <span className="text-cyan-400 font-bold">—</span>
            <span className="text-cyan-300 font-semibold">AS9100D Certified Aerospace EMS</span>
          </div>

          {/* Headline Display */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mb-10">
            PCB Manufacturing & Assembly
          </h1>

          {/* 2. THE AUTHENTIC JLCPCB HORIZONTAL QUICK CALCULATOR BAR (Screenshot 01) */}
          <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-2.5 max-w-4xl border border-white/20 backdrop-blur-md inline-flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            
            {/* Calculator Icon Pill */}
            <div className="hidden sm:flex items-center justify-center w-11 h-11 bg-slate-100 rounded-lg text-slate-600 shrink-0">
              <Calculator className="w-5 h-5 text-slate-700" />
            </div>

            {/* Layer Dropdown */}
            <div className="relative flex-1 sm:w-44">
              <select
                value={quickQuoteParams.layers}
                onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, layers: Number(e.target.value) })}
                className="w-full bg-[#f2f4f7] hover:bg-[#ebedf0] text-slate-800 text-sm font-semibold rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0066ff] cursor-pointer"
                aria-label="Layer Count"
              >
                <option value={1}>1 Layer</option>
                <option value={2}>2 Layers</option>
                <option value={4}>4 Layers</option>
                <option value={6}>6 Layers</option>
                <option value={8}>8 Layers</option>
                <option value={10}>10 Layers</option>
                <option value={12}>12 Layers</option>
                <option value={16}>16 Layers</option>
              </select>
              <span className="absolute right-3 top-3 text-slate-400 pointer-events-none text-xs">▼</span>
            </div>

            {/* Dimension Inputs (L x W mm) */}
            <div className="flex items-center bg-[#f2f4f7] rounded-lg px-3 py-1.5 flex-1 sm:w-56 border border-transparent focus-within:border-[#0066ff] focus-within:bg-white transition-colors">
              <input 
                type="number" 
                min="10" 
                max="600"
                value={quickQuoteParams.lengthMm}
                onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, lengthMm: Number(e.target.value) })}
                className="w-16 bg-transparent text-slate-900 text-sm font-bold text-center focus:outline-none"
                placeholder="100"
                aria-label="Length mm"
              />
              <span className="text-slate-400 font-bold px-1.5">×</span>
              <input 
                type="number" 
                min="10" 
                max="600"
                value={quickQuoteParams.widthMm}
                onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, widthMm: Number(e.target.value) })}
                className="w-16 bg-transparent text-slate-900 text-sm font-bold text-center focus:outline-none"
                placeholder="100"
                aria-label="Width mm"
              />
              <span className="text-slate-500 text-xs font-semibold ml-auto">mm</span>
            </div>

            {/* Quantity Dropdown */}
            <div className="relative flex-1 sm:w-36">
              <select
                value={quickQuoteParams.quantity}
                onChange={(e) => setQuickQuoteParams({ ...quickQuoteParams, quantity: Number(e.target.value) })}
                className="w-full bg-[#f2f4f7] hover:bg-[#ebedf0] text-slate-800 text-sm font-semibold rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0066ff] cursor-pointer"
                aria-label="Quantity"
              >
                <option value={5}>5 pcs</option>
                <option value={10}>10 pcs</option>
                <option value={25}>25 pcs</option>
                <option value={50}>50 pcs</option>
                <option value={100}>100 pcs</option>
                <option value={500}>500 pcs</option>
                <option value={1000}>1000 pcs</option>
              </select>
              <span className="absolute right-3 top-3 text-slate-400 pointer-events-none text-xs">▼</span>
            </div>

            {/* Get Instant Quote Button (Solid JLCPCB Blue) */}
            <button
              onClick={onJumpToQuote}
              className="bg-[#0066ff] hover:bg-[#0052cc] active:scale-[0.98] text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-1.5 shrink-0 cursor-pointer"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Carousel Progress Indicators (JLCPCB benchmark from screenshot 01) */}
          <div className="flex items-center space-x-2 mt-8">
            <div className="w-12 h-1 bg-white rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>

        </div>
      </section>

      {/* 3. VALUE PROPOSITION STRIP (Exact JLCPCB Layout from Screenshot 02) */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] shrink-0">
                <Cpu className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Rapid Fab & Assembly</h4>
                <p className="text-xs text-slate-500 mt-0.5">As fast as 24-48 hours express</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Guaranteed Quality</h4>
                <p className="text-xs text-slate-500 mt-0.5">99.8% aerospace flight quality rate</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] shrink-0">
                <Truck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Fast Global Delivery</h4>
                <p className="text-xs text-slate-500 mt-0.5">DHL/FedEx express from Hyderabad EMC</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066ff] shrink-0">
                <Network className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">Tailored Solutions</h4>
                <p className="text-xs text-slate-500 mt-0.5">Design-R&D-Launch-Flight Mission</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
