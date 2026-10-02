import React, { useState } from 'react';
import { 
  Search, 
  Cpu, 
  Filter, 
  UploadCloud, 
  CheckCircle, 
  ArrowRight, 
  Box, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronDown,
  Check,
  Download
} from 'lucide-react';
import { CHIP_CATEGORIES, CHIPS_DATA } from '../data/chipsData';

export default function PartsView({ currency = 'INR', onNavigateToQuote, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyInStock, setOnlyInStock] = useState(true);
  const [uploadedBom, setUploadedBom] = useState(null);
  const [bomMatched, setBomMatched] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  // Filter chips based on search and category
  const filteredParts = CHIPS_DATA.filter(part => {
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    const matchesSearch = 
      part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.package.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStock = !onlyInStock || part.stock > 0;
    return matchesCategory && matchesSearch && matchesStock;
  });

  const formatPrice = (part) => {
    if (currency === 'USD') return `$${part.basePriceUSD.toFixed(2)}`;
    if (currency === 'EUR') return `€${part.basePriceEUR.toFixed(2)}`;
    return `₹${part.basePriceINR.toLocaleString('en-IN')}`;
  };

  const handleAddPart = (part) => {
    setAddedItems(prev => ({ ...prev, [part.id]: true }));
    if (onAddToCart) onAddToCart(part);
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [part.id]: false }));
    }, 2000);
  };

  const handleBomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedBom(file.name);
      setTimeout(() => {
        setBomMatched(true);
      }, 1200);
    }
  };

  return (
    <div className="py-8 bg-[#f8fafc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospace Header Tag */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-mono">
            <span className="font-bold text-slate-900">SRILIN SMT PARTS VAULT</span>
            <span>/</span>
            <span>HYDERABAD BONDED WAREHOUSE</span>
            <span>/</span>
            <span className="text-[#c5283d] font-semibold">740,000+ VERIFIED CHIPS</span>
          </div>
          <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[11px] font-semibold">
            ● Direct Feeder Pick & Place Ready
          </span>
        </div>

        {/* Top Hero Search Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#070e1e] rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SAME-DAY SMT FEEDING // ZERO CUSTOMS DELAY // 100% TRACEABLE COC</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              Aerospace SMT Parts Library & Sourcing
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Search over 740,000 active components stocked in our Hyderabad cleanroom facility. Instant pricing, 3D ECAD footprints, and seamless automated placement on our Fuji SMT lines.
            </p>

            {/* Live Search Input */}
            <div className="flex items-center bg-white rounded-xl p-1.5 shadow-2xl max-w-2xl border border-white/20">
              <div className="pl-3 pr-2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Part # (e.g. STM32, Artix-7, TPS5430, BGA, QFN)..."
                className="w-full bg-transparent text-slate-900 text-sm font-medium focus:outline-none placeholder:text-slate-400 py-2"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="px-2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick search tags */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">Popular Aerospace Chips:</span>
              {['STM32H753', 'XC7A100T', 'TPS5430', 'AD9361', 'ESP32-S3', 'ICM-42688'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="bg-white/10 hover:bg-white/20 text-slate-200 px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Decorative Background Graphics */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden lg:block">
            <img 
              src="/images/parts-dark-banner.webp" 
              alt="SMT Reel Library"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* BOM Upload Callout */}
        <div className="bg-white rounded-xl border border-red-200/60 p-5 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#c5283d] flex items-center justify-center shrink-0">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Have a Bill of Materials (BOM) file?
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Upload your CSV / Excel BOM. Our automated parsing engine matches all components to in-stock reels in seconds.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
            <label className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer transition-colors border border-slate-300">
              <span>{uploadedBom ? uploadedBom : 'Upload BOM Spreadsheet'}</span>
              <input type="file" accept=".csv,.xlsx,.xls" onChange={handleBomUpload} className="hidden" />
            </label>
            {bomMatched && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg flex items-center">
                <CheckCircle className="w-3.5 h-3.5 mr-1" />
                100% Components Sourced!
              </span>
            )}
          </div>
        </div>

        {/* Main Content Area: Sidebar Filters + Parts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: Filter Categories */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Category Filter */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs">
              <h4 className="text-xs font-bold font-mono uppercase text-slate-900 mb-3 flex items-center justify-between">
                <span>Categories</span>
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              </h4>

              <div className="space-y-1">
                {CHIP_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#c5283d] text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* In-Stock Filter */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs space-y-3">
              <h4 className="text-xs font-bold font-mono uppercase text-slate-900">
                Inventory Filter
              </h4>
              <label className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded text-[#c5283d] focus:ring-[#c5283d] w-4 h-4 cursor-pointer"
                />
                <span className="font-medium">In-Stock Only (Hyderabad Vault)</span>
              </label>
            </div>

            {/* Aerospace Compliance Badge Card */}
            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-800">
              <div className="flex items-center space-x-1.5 text-cyan-400 font-mono text-[10px] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>AS9100D TRACEABILITY</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                All components stored in nitrogen desiccators with continuous ESD and humidity logging. Certificate of Conformance (CoC) provided for every lot.
              </p>
            </div>

          </div>

          {/* Right Area: Parts Grid */}
          <div className="lg:col-span-9">
            
            <div className="flex items-center justify-between mb-4 text-xs text-slate-500">
              <div>
                Showing <strong className="text-slate-900">{filteredParts.length}</strong> components
              </div>
              <div className="text-[11px] font-mono">
                Currency: <strong className="text-slate-900 font-bold">{currency}</strong>
              </div>
            </div>

            {filteredParts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <Cpu className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 text-base">No Components Found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or clearing category filters to find other aerospace parts.
                </p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  className="mt-4 bg-[#c5283d] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredParts.map(part => {
                  const isAdded = addedItems[part.id];
                  return (
                    <div 
                      key={part.id}
                      className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Top row: Part number and Price */}
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-mono font-bold text-sm text-slate-900">
                              {part.partNumber}
                            </div>
                            <div className="text-xs text-slate-500">
                              {part.manufacturer} • {part.categoryName}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="font-mono font-black text-sm text-[#c5283d]">
                              {formatPrice(part)}
                            </div>
                            <div className="text-[10px] text-slate-400">per piece</div>
                          </div>
                        </div>

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-[11px]">
                          <div>
                            <span className="text-slate-400 block font-mono text-[10px]">PACKAGE</span>
                            <span className="font-mono font-bold text-slate-700">{part.package}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-mono text-[10px]">PIN PITCH</span>
                            <span className="font-mono text-slate-700">{part.pitch}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-mono text-[10px]">CORE / FREQ</span>
                            <span className="font-mono text-slate-700 truncate block">{part.speed || part.core}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-mono text-[10px]">IN-STOCK VAULT</span>
                            <span className="font-mono font-bold text-emerald-700">
                              {part.stock.toLocaleString()} pcs
                            </span>
                          </div>
                        </div>

                        {/* Description snippet */}
                        <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                          {part.description}
                        </p>
                      </div>

                      {/* Bottom action buttons */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => handleAddPart(part)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all flex items-center space-x-1 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Box className="w-3 h-3 text-[#c5283d]" />
                              <span>Add to BOM</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onNavigateToQuote && onNavigateToQuote(part.id)}
                          className="text-xs font-bold text-[#c5283d] hover:text-[#a71d2a] flex items-center space-x-1 cursor-pointer"
                        >
                          <span>Build Assembly</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
