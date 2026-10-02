import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  ArrowRight, 
  Info,
  Sparkles,
  Box
} from 'lucide-react';
import PriceSummaryCard from '../components/PriceSummaryCard';
import { CHIPS_DATA } from '../data/chipsData';
import { calculateDfmConfidence } from '../data/srilineData';

export default function QuoteView({ quoteParams, setQuoteParams, currency, onOpenRfqModal }) {
  const [searchParams] = useSearchParams();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dfmStatus, setDfmStatus] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadedChip, setLoadedChip] = useState(null);

  const dfmConfidence = calculateDfmConfidence({
    layers: quoteParams.layers || 2,
    minTraceMil: quoteParams.minTraceWidth === '3/3 mil' ? 3 : 4,
    surfaceFinish: quoteParams.surfaceFinish || 'Lead-Free HASL',
    bgaInspection: quoteParams.bgaInspection !== false,
    thickness: quoteParams.thickness || 1.6
  });

  // Check URL query parameters for pre-selected chip
  useEffect(() => {
    const partId = searchParams.get('part');
    if (partId) {
      const chip = CHIPS_DATA.find(c => c.id === partId || c.partNumber.toLowerCase().includes(partId.toLowerCase()));
      if (chip) {
        setLoadedChip(chip);
        setQuoteParams(prev => ({
          ...prev,
          serviceType: 'pcba',
          isTurnkey: true
        }));
      }
    }
  }, [searchParams]);

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
    <div className="py-8 bg-[#f7f8fa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospace Header Tag */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-mono">
            <span className="font-bold text-slate-900">SRILIN CONFIGURATOR</span>
            <span>/</span>
            <span>HYDERABAD CLEANROOM INTAKE</span>
            <span>/</span>
            <span className="text-[#c5283d] font-semibold">AS9100D REV D</span>
          </div>
          <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[11px] font-semibold">
            ● 200k CPH SMT Lines Ready
          </span>
        </div>

        {/* Pre-Loaded Silicon Component Banner */}
        {loadedChip && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs animate-fadeIn">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-emerald-900 font-mono text-sm block">
                  Pre-Loaded Component: {loadedChip.partNumber} ({loadedChip.package})
                </span>
                <span className="text-emerald-700">
                  {loadedChip.categoryName} • SMT placement profile, stencil aperture, and 160kV X-Ray verification configured.
                </span>
              </div>
            </div>
            <span className="text-emerald-800 font-mono font-bold bg-white px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
              {loadedChip.stock.toLocaleString()} In Stock
            </span>
          </div>
        )}

        {/* 1. SELECT PRODUCT CAROUSEL WITH REAL WEBP RENDERS */}
        <div className="mb-6">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
            Select Product Line
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            
            {/* 1. Standard PCB */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcb' })}
              className={`p-3 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center group ${
                quoteParams.serviceType === 'pcb'
                  ? 'border-2 border-[#c5283d] shadow-md ring-1 ring-[#c5283d]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden mb-2 bg-slate-100 relative">
                <img src="/images/rigid-pcb.webp" alt="Standard PCB" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="font-bold text-xs text-slate-900">Standard PCB</span>
              <span className="text-[10px] text-slate-500">1-32 Layers</span>
              {quoteParams.serviceType === 'pcb' && (
                <span className="absolute top-2 right-2 bg-[#c5283d] text-white p-0.5 rounded-full">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* 2. Turnkey SMT Assembly */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcba' })}
              className={`p-3 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center group ${
                quoteParams.serviceType === 'pcba'
                  ? 'border-2 border-[#c5283d] shadow-md ring-1 ring-[#c5283d]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden mb-2 bg-slate-100 relative">
                <img src="/images/pcba-smt.webp" alt="Turnkey PCBA" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="font-bold text-xs text-slate-900">Turnkey SMT Assembly</span>
              <span className="text-[10px] text-slate-500">200k CPH SMT</span>
              {quoteParams.serviceType === 'pcba' && (
                <span className="absolute top-2 right-2 bg-[#c5283d] text-white p-0.5 rounded-full">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* 3. SMT Stencil */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcb' })}
              className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer transition-all bg-white flex flex-col items-center text-center group"
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden mb-2 bg-slate-100 relative">
                <img src="/images/smt-stencil.webp" alt="SMT Stencil" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="font-bold text-xs text-slate-900">Laser SMT Stencil</span>
              <span className="text-[10px] text-slate-500">±0.003mm Cut</span>
            </div>

            {/* 4. Flexible PCB */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'pcb', material: 'Rogers/Flex' })}
              className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer transition-all bg-white flex flex-col items-center text-center group"
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden mb-2 bg-slate-100 relative">
                <img src="/images/flex-pcb.webp" alt="Flexible PCB" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="font-bold text-xs text-slate-900">Flexible PCB</span>
              <span className="text-[10px] text-slate-500">Polyimide 1-8L</span>
            </div>

            {/* 5. CNC Machining & Enclosures */}
            <div 
              onClick={() => setQuoteParams({ ...quoteParams, serviceType: 'boxbuild' })}
              className={`p-3 rounded-xl border cursor-pointer transition-all bg-white relative flex flex-col items-center text-center group ${
                quoteParams.serviceType === 'boxbuild'
                  ? 'border-2 border-[#c5283d] shadow-md ring-1 ring-[#c5283d]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="w-16 h-12 rounded-lg overflow-hidden mb-2 bg-slate-100 relative">
                <img src="/images/cnc-machining.webp" alt="CNC & Enclosures" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <span className="font-bold text-xs text-slate-900">CNC Enclosures</span>
              <span className="text-[10px] text-slate-500">Aluminum 6061</span>
              {quoteParams.serviceType === 'boxbuild' && (
                <span className="absolute top-2 right-2 bg-[#c5283d] text-white p-0.5 rounded-full">
                  <Check className="w-3 h-3" />
                </span>
              )}
            </div>

          </div>
        </div>

        {/* 2-COLUMN MAIN CONFIGURATOR AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Deep Parameter Form */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
            
            {/* GERBER FILE UPLOAD DROPZONE */}
            <div className="border-2 border-dashed border-[#c5283d]/40 bg-red-50/20 hover:bg-red-50/40 transition-colors rounded-xl p-6 text-center">
              <input 
                type="file" 
                id="gerber-file"
                className="hidden" 
                accept=".zip,.rar,.tar,.gz,.gerber,.gbr"
                onChange={handleFileUpload}
              />
              <label htmlFor="gerber-file" className="cursor-pointer block">
                <div className="w-12 h-12 rounded-full bg-red-100 text-[#c5283d] mx-auto flex items-center justify-center mb-3">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {uploadedFile ? uploadedFile : 'Add Gerber & BOM Archive (ZIP / RAR)'}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Only accept zip or rar, Max 100 MB. Instant DFM pre-check performed automatically.
                </p>
                <div className="mt-3 inline-flex items-center space-x-1.5 text-[11px] text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>All uploads are encrypted and held under strict aerospace NDA.</span>
                </div>
              </label>

              {/* DFM Simulation Feedback */}
              {isAnalyzing && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-[#c5283d] font-semibold animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  <span>Analyzing Gerber geometry & layer stackup...</span>
                </div>
              )}

              {dfmStatus && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-left text-xs space-y-1">
                  <div className="font-bold text-emerald-900 flex items-center space-x-1">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>{dfmStatus.status}</span>
                  </div>
                  <div className="text-emerald-700 font-mono text-[11px]">
                    Detected: {dfmStatus.layers} Layers | {dfmStatus.dimensions} | {dfmStatus.holes} Plated Through-Holes
                  </div>
                </div>
              )}
            </div>

            {/* BASE MATERIAL SELECTOR */}
            <div>
              <label className="text-xs font-bold text-slate-900 block mb-2 flex items-center space-x-1">
                <span>Base Material</span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'FR-4', name: 'FR-4 Standard', tag: 'High-Tg 170°C' },
                  { id: 'Rogers/Flex', name: 'Rogers 4350B', tag: 'RF Low-Loss' },
                  { id: 'Aluminum Core', name: 'Aluminum Core', tag: '1.5W/m-K Power' },
                  { id: 'Polyimide Flex', name: 'Polyimide Flex', tag: 'Dynamic Bending' },
                ].map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setQuoteParams({ ...quoteParams, material: mat.id })}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      quoteParams.material === mat.id
                        ? 'border-2 border-[#c5283d] bg-red-50/50 text-[#c5283d]'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs">{mat.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{mat.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* LAYER COUNT SELECTOR */}
            <div>
              <label className="text-xs font-bold text-slate-900 block mb-2 flex items-center space-x-1">
                <span>Layers</span>
                <span className="text-xs text-slate-400 font-normal">(Free POFV for 6+ layers)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {LAYER_OPTIONS.map((layer) => (
                  <button
                    key={layer}
                    onClick={() => setQuoteParams({ ...quoteParams, layers: layer })}
                    className={`w-12 h-10 rounded-lg border font-mono text-xs font-bold transition-all cursor-pointer ${
                      quoteParams.layers === layer
                        ? 'border-2 border-[#c5283d] bg-[#c5283d] text-white shadow-xs'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {layer}
                  </button>
                ))}
              </div>
            </div>

            {/* BOARD DIMENSIONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">
                  Dimensions (Length × Width)
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus-within:border-[#c5283d] focus-within:bg-white flex-1">
                    <input 
                      type="number" 
                      min="10" 
                      max="600" 
                      value={quoteParams.lengthMm}
                      onChange={(e) => setQuoteParams({ ...quoteParams, lengthMm: Number(e.target.value) })}
                      className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                    />
                    <span className="text-xs text-slate-400 ml-1 font-semibold">mm</span>
                  </div>
                  <span className="text-slate-400 font-bold">×</span>
                  <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus-within:border-[#c5283d] focus-within:bg-white flex-1">
                    <input 
                      type="number" 
                      min="10" 
                      max="600" 
                      value={quoteParams.widthMm}
                      onChange={(e) => setQuoteParams({ ...quoteParams, widthMm: Number(e.target.value) })}
                      className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                    />
                    <span className="text-xs text-slate-400 ml-1 font-semibold">mm</span>
                  </div>
                </div>
              </div>

              {/* QUANTITY */}
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">
                  PCB Quantity
                </label>
                <select
                  value={quoteParams.quantity}
                  onChange={(e) => setQuoteParams({ ...quoteParams, quantity: Number(e.target.value) })}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5283d] cursor-pointer"
                >
                  {QUANTITY_OPTIONS.map((q) => (
                    <option key={q} value={q}>{q} pcs</option>
                  ))}
                </select>
              </div>
            </div>

            {/* SOLDER MASK COLOR PALETTE */}
            <div>
              <label className="text-xs font-bold text-slate-900 block mb-2">
                PCB Solder Mask Color
              </label>
              <div className="flex flex-wrap gap-2.5">
                {SOLDER_MASK_COLORS.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setQuoteParams({ ...quoteParams, solderMask: col.name })}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      quoteParams.solderMask === col.name
                        ? 'border-2 border-[#c5283d] bg-red-50/50 text-[#c5283d] font-bold shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" 
                      style={{ backgroundColor: col.hex }}
                    ></span>
                    <span>{col.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SURFACE FINISH */}
            <div>
              <label className="text-xs font-bold text-slate-900 block mb-2">
                Surface Finish
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'Lead-Free HASL', label: 'LeadFree HASL' },
                  { id: 'ENIG (Gold)', label: 'ENIG Immersion Gold (2-3µ")' },
                  { id: 'Hard Gold', label: 'Hard Gold 30µ" (Edge Fingers)' },
                  { id: 'Immersion Silver', label: 'Immersion Silver' },
                  { id: 'OSP', label: 'OSP' },
                ].map((fin) => (
                  <button
                    key={fin.id}
                    onClick={() => setQuoteParams({ ...quoteParams, surfaceFinish: fin.id })}
                    className={`py-1.5 px-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                      quoteParams.surfaceFinish === fin.id
                        ? 'border-2 border-[#c5283d] bg-red-50/50 text-[#c5283d] font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {fin.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PCB ASSEMBLY TOGGLE CARD */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                    SMT
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">PCB Assembly (Turnkey SMT)</div>
                    <div className="text-xs text-slate-500">200k CPH Fuji/Panasonic lines + 160kV X-Ray Inspection</div>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={quoteParams.serviceType === 'pcba'}
                    onChange={() => setQuoteParams({ ...quoteParams, serviceType: quoteParams.serviceType === 'pcba' ? 'pcb' : 'pcba' })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c5283d]"></div>
                </label>
              </div>

              {quoteParams.serviceType === 'pcba' && (
                <div className="p-4 bg-red-50/30 border border-red-200/70 rounded-xl space-y-3 text-xs animate-fadeIn">
                  <div className="font-bold text-slate-900">SMT Assembly Engineering Options:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2 text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={quoteParams.bgaInspection}
                        onChange={(e) => setQuoteParams({ ...quoteParams, bgaInspection: e.target.checked })}
                        className="rounded text-[#c5283d] focus:ring-[#c5283d]"
                      />
                      <span>Nordson 160kV 3D X-Ray Inspection (BGAs & QFNs)</span>
                    </label>

                    <label className="flex items-center space-x-2 text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={quoteParams.conformalCoating}
                        onChange={(e) => setQuoteParams({ ...quoteParams, conformalCoating: e.target.checked })}
                        className="rounded text-[#c5283d] focus:ring-[#c5283d]"
                      />
                      <span>Selective Conformal Coating (Humiseal 1B31)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Pinned Sticky Summary Card & Live DFM Confidence Widget */}
          <div className="lg:col-span-4 space-y-4">
            <PriceSummaryCard 
              quoteParams={quoteParams}
              currency={currency}
              onOpenRfqModal={onOpenRfqModal}
            />

            {/* LIVE DFM PROCESS CONFIDENCE SCORE WIDGET */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs border border-emerald-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 leading-tight">DFM Process Confidence</h4>
                    <span className="text-[10px] font-mono text-slate-400">Hyderabad Cleanroom Capability</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black font-mono text-emerald-600 leading-none">
                    {dfmConfidence.score}%
                  </span>
                  <span className="text-[9px] font-mono text-emerald-700 block mt-0.5">High Yield</span>
                </div>
              </div>

              {/* Progress Bar Gauge */}
              <div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500 rounded-full"
                    style={{ width: `${dfmConfidence.score}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                  <span>Standard: <strong className="text-slate-800">{dfmConfidence.processWindow}</strong></span>
                  <span className="text-emerald-700 font-semibold">{dfmConfidence.riskLevel}</span>
                </div>
              </div>

              {/* Factor Breakdown */}
              <div className="space-y-2 pt-1 border-t border-slate-100 text-[11px]">
                {dfmConfidence.factors.map((f, i) => (
                  <div key={i} className="flex items-start justify-between text-slate-600">
                    <div className="pr-2">
                      <span className="font-bold text-slate-800 block text-[11px]">{f.rule}</span>
                      <span className="text-[10px] text-slate-500 leading-tight block">{f.status}</span>
                    </div>
                    <span className={`font-mono text-[10px] font-bold shrink-0 ${f.impact.startsWith('-') ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {f.impact}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>Target DFM Standard:</span>
                <span className="font-bold text-slate-900">AS9100D Class 3 Guaranteed</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
