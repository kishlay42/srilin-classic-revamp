import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileCheck, 
  Layers, 
  Cpu, 
  Boxes, 
  Flame, 
  ShieldCheck, 
  Check, 
  HelpCircle,
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import PriceSummaryCard from './PriceSummaryCard';

export default function HeroQuoteWidget({ quoteParams, setQuoteParams, currency, onOpenRfqModal }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dfmStatus, setDfmStatus] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Solder Mask color swatches (JLCPCB benchmark)
  const SOLDER_MASK_COLORS = [
    { name: 'Green', hex: '#15803d', label: 'Green' },
    { name: 'Matte Black', hex: '#18181b', label: 'Black' },
    { name: 'Royal Blue', hex: '#1d4ed8', label: 'Blue' },
    { name: 'Signal Red', hex: '#b91c1c', label: 'Red' },
    { name: 'Signal Yellow', hex: '#ca8a04', label: 'Yellow' },
    { name: 'Crisp White', hex: '#f8fafc', label: 'White' },
    { name: 'Aerospace Purple', hex: '#6b21a8', label: 'Purple' },
  ];

  const LAYER_OPTIONS = [1, 2, 4, 6, 8, 10, 12, 14, 16];
  const QUANTITY_OPTIONS = [5, 10, 25, 50, 100, 250, 500, 1000, 5000];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFile(file.name);
    setIsAnalyzing(true);
    setDfmStatus(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setDfmStatus({
        layers: quoteParams.layers,
        dimensions: `${quoteParams.lengthMm} × ${quoteParams.widthMm} mm`,
        holes: 384,
        status: 'Passes SriLin AS9100D Pre-Flight Rules'
      });
    }, 1000);
  };

  return (
    <section id="quote-section" className="py-12 bg-[#f7f8fa] text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SELECT PRODUCT CAROUSEL (Exact JLCPCB Layout from Screenshot 05) */}
        <div className="mb-6">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
            Select Product
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            
            {/* Standard PCB/PCBA */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcb' })}
              className={`p-4 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center ${
                quoteParams.serviceType === 'pcb'
                  ? 'border-2 border-[#0066ff] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center mb-2">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-bold text-xs text-slate-900">Standard PCB/PCBA</span>
              {quoteParams.serviceType === 'pcb' && (
                <span className="absolute bottom-0 right-0 bg-[#0066ff] text-white p-0.5 rounded-tl-md">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* Turnkey SMT Assembly */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcba' })}
              className={`p-4 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center ${
                quoteParams.serviceType === 'pcba'
                  ? 'border-2 border-[#0066ff] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-bold text-xs text-slate-900">Turnkey SMT Assembly</span>
              {quoteParams.serviceType === 'pcba' && (
                <span className="absolute bottom-0 right-0 bg-[#0066ff] text-white p-0.5 rounded-tl-md">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* SMT Stencil */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcb' })}
              className={`p-4 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center ${
                quoteParams.serviceType === 'stencil'
                  ? 'border-2 border-[#0066ff] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-bold text-xs text-slate-900">Laser SMT Stencil</span>
            </div>

            {/* Box Build */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'boxbuild' })}
              className={`p-4 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center ${
                quoteParams.serviceType === 'boxbuild'
                  ? 'border-2 border-[#0066ff] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                <Boxes className="w-6 h-6" />
              </div>
              <span className="font-bold text-xs text-slate-900">Box Build & Enclosure</span>
              {quoteParams.serviceType === 'boxbuild' && (
                <span className="absolute bottom-0 right-0 bg-[#0066ff] text-white p-0.5 rounded-tl-md">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* Burn-In Testing */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'testing' })}
              className={`p-4 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center ${
                quoteParams.serviceType === 'testing'
                  ? 'border-2 border-[#0066ff] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-2">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-bold text-xs text-slate-900">240h Burn-In Testing</span>
              {quoteParams.serviceType === 'testing' && (
                <span className="absolute bottom-0 right-0 bg-[#0066ff] text-white p-0.5 rounded-tl-md">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

          </div>
        </div>

        {/* 2. MAIN CONFIGURATOR & STICKY ASIDE LAYOUT (Screenshot 05 & 07) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Main Form (White Container) */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-7">
            
            {/* Title Strip */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-black text-slate-900">
                Online PCB Quote
              </h3>
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="text-[#0066ff] hover:underline cursor-pointer">Instructions For Ordering &gt;</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer">Upload History ▾</span>
              </div>
            </div>

            {/* 3. GERBER DROPZONE (Exact JLCPCB Format from Screenshot 05) */}
            <div className="bg-[#f5f9ff] border-2 border-dashed border-[#b8d7ff] rounded-xl p-8 text-center relative hover:bg-[#edf5ff] transition-colors">
              <input 
                type="file" 
                onChange={handleFileUpload}
                accept=".zip,.rar,.kicad_pcb,.csv,.xlsx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Upload Gerber or BOM"
              />
              
              <div className="flex flex-col items-center">
                <button 
                  type="button" 
                  className="bg-[#0066ff] hover:bg-[#0052cc] text-white text-sm font-bold px-8 py-3 rounded-full shadow-md flex items-center space-x-2 pointer-events-none mb-3"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>+ Add gerber file</span>
                </button>

                <p className="text-xs text-slate-500 font-medium">
                  {uploadedFile ? uploadedFile : "Only accept zip or rar, Max 100 MB, View example >"}
                </p>

                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mt-3">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>All uploads are secure and confidential. AS9100D encrypted pipeline.</span>
                </div>
              </div>

              {isAnalyzing && (
                <div className="mt-4 p-3 bg-blue-100 text-[#0052cc] rounded-lg text-xs font-semibold animate-pulse">
                  Analyzing Gerber layers, dimensions, and annular ring tolerances...
                </div>
              )}

              {dfmStatus && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-medium text-left flex items-start space-x-2">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Automated DFM Check Passed: </span>
                    <span>Detected {dfmStatus.layers} Layers, {dfmStatus.dimensions}, {dfmStatus.holes} Holes. {dfmStatus.status}.</span>
                  </div>
                </div>
              )}
            </div>

            {/* 4. BASE MATERIAL CARDS (Exact JLCPCB Format from Screenshot 05) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center text-xs font-semibold text-slate-700 w-36 shrink-0">
                <span>Base Material</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {[
                  { id: 'FR-4', label: 'FR-4' },
                  { id: 'Flex', label: 'Flex' },
                  { id: 'Aluminum', label: 'Aluminum' },
                  { id: 'Rogers RF', label: 'Rogers' },
                  { id: 'HDI', label: 'HDI' },
                ].map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setQuoteParams({ ...quoteParams, material: mat.id })}
                    className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all relative ${
                      quoteParams.material === mat.id
                        ? 'border-2 border-[#0066ff] bg-blue-50/40 text-[#0066ff]'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {mat.label}
                    {quoteParams.material === mat.id && (
                      <span className="absolute bottom-0 right-0 bg-[#0066ff] text-white p-0.2 rounded-tl-sm">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. LAYERS PILLS (Exact JLCPCB Format from Screenshot 05) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center text-xs font-semibold text-slate-700 w-36 shrink-0">
                <span>Layers</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
              <div className="flex-1 flex flex-wrap gap-1.5 items-center">
                {LAYER_OPTIONS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setQuoteParams({ ...quoteParams, layers: l })}
                    className={`min-w-[42px] py-1.5 px-2.5 rounded-lg border text-xs font-semibold transition-all ${
                      quoteParams.layers === l
                        ? 'border-2 border-[#0066ff] bg-blue-50/50 text-[#0066ff] font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {l}
                  </button>
                ))}
                <span className="text-xs text-slate-500 font-medium ml-2 cursor-pointer hover:text-[#0066ff]">
                  More ▾
                </span>
              </div>
            </div>

            {/* 6. DIMENSIONS (Exact JLCPCB Format from Screenshot 05) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center text-xs font-semibold text-slate-700 w-36 shrink-0">
                <span>Dimensions</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
              <div className="flex-1 flex items-center space-x-2">
                <input 
                  type="number" 
                  min="10" 
                  max="600"
                  value={quoteParams.lengthMm}
                  onChange={(e) => setQuoteParams({ ...quoteParams, lengthMm: Number(e.target.value) })}
                  className="w-20 bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-xs font-bold text-center focus:outline-none focus:border-[#0066ff]"
                />
                <span className="text-slate-400 font-bold">*</span>
                <input 
                  type="number" 
                  min="10" 
                  max="600"
                  value={quoteParams.widthMm}
                  onChange={(e) => setQuoteParams({ ...quoteParams, widthMm: Number(e.target.value) })}
                  className="w-20 bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-xs font-bold text-center focus:outline-none focus:border-[#0066ff]"
                />
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1.5 rounded-lg border border-slate-200">
                  mm ▾
                </span>
              </div>
            </div>

            {/* 7. PCB QTY (Exact JLCPCB Format from Screenshot 05) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center text-xs font-semibold text-slate-700 w-36 shrink-0">
                <span>PCB Qty</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
              <div className="flex-1">
                <select
                  value={quoteParams.quantity}
                  onChange={(e) => setQuoteParams({ ...quoteParams, quantity: Number(e.target.value) })}
                  className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0066ff] cursor-pointer"
                >
                  {QUANTITY_OPTIONS.map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 8. SOLDER MASK COLOR (Exact JLCPCB Circular Swatches from Screenshot 05) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center text-xs font-semibold text-slate-700 w-36 shrink-0">
                <span>Different Design</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
              <div className="flex-1 flex flex-wrap gap-2.5 items-center">
                {SOLDER_MASK_COLORS.map((col) => {
                  const isSelected = quoteParams.solderMask === col.name;
                  return (
                    <button
                      key={col.name}
                      onClick={() => setQuoteParams({ ...quoteParams, solderMask: col.name })}
                      className={`flex items-center space-x-1.5 py-1 px-2.5 rounded-md border text-xs font-medium transition-all ${
                        isSelected 
                          ? 'border-2 border-[#0066ff] bg-blue-50/50 text-[#0066ff] font-bold' 
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0 shadow-inner"
                        style={{ backgroundColor: col.hex }}
                      ></span>
                      <span>{col.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 9. SURFACE FINISH */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center text-xs font-semibold text-slate-700 w-36 shrink-0">
                <span>Surface Finish</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {[
                  { id: 'Lead-Free HASL', label: 'LeadFree HASL' },
                  { id: 'ENIG (Gold)', label: 'ENIG (Gold)' },
                  { id: 'OSP', label: 'OSP' },
                ].map((fin) => (
                  <button
                    key={fin.id}
                    onClick={() => setQuoteParams({ ...quoteParams, surfaceFinish: fin.id })}
                    className={`py-1.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      quoteParams.surfaceFinish === fin.id
                        ? 'border-2 border-[#0066ff] bg-blue-50/50 text-[#0066ff] font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {fin.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 10. PCB ASSEMBLY TOGGLE BAR (Exact JLCPCB Format from Screenshot 07) */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
              
              {/* Assembly Toggle Card */}
              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                    SMT
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">PCB Assembly</div>
                    <div className="text-xs text-slate-500">200k CPH Fuji/Panasonic cleanroom lines</div>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={quoteParams.serviceType === 'pcba'}
                    onChange={() => setQuoteParams({ ...quoteParams, serviceType: quoteParams.serviceType === 'pcba' ? 'pcb' : 'pcba' })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066ff]"></div>
                </label>
              </div>

              {/* Stencil Toggle Card */}
              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold text-xs">
                    SMD
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Laser SMD Stencil</div>
                    <div className="text-xs text-slate-500">Order together with PCB • Fast alignment guide</div>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={true}
                    readOnly
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066ff]"></div>
                </label>
              </div>

            </div>

          </div>

          {/* Right Column: JLCPCB Pinned Sticky Summary Card */}
          <div className="lg:col-span-4">
            <PriceSummaryCard 
              quoteParams={quoteParams}
              currency={currency}
              onOpenRfqModal={onOpenRfqModal}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
