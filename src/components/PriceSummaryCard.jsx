import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  Truck, 
  ShieldCheck, 
  HelpCircle, 
  Download, 
  Send, 
  Check, 
  Tag,
  ArrowRight
} from 'lucide-react';
import { calculateQuote } from '../data/srilineData';

export default function PriceSummaryCard({ quoteParams, currency, onOpenRfqModal }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const quote = calculateQuote({ ...quoteParams, currency });

  const handleDownloadSummary = () => {
    const content = `SRILIN ELECTRONICS PVT. LTD. - QUOTE ESTIMATE
Generated: ${new Date().toLocaleString()}
Facility: E-City EMC, Hyderabad, India (AS9100D & ISO 9001 Certified)

SPECIFICATION:
- Product: ${quoteParams.serviceType.toUpperCase()}
- Layers: ${quoteParams.layers}
- Dimensions: ${quoteParams.lengthMm} x ${quoteParams.widthMm} mm
- Quantity: ${quoteParams.quantity} pcs
- Substrate Material: ${quoteParams.material}
- Thickness: ${quoteParams.thickness} mm
- Solder Mask: ${quoteParams.solderMask}
- Surface Finish: ${quoteParams.surfaceFinish}
- Copper Weight: ${quoteParams.copperWeight}

ESTIMATED PRICING (${currency}):
- Total Price: ${quote.currencySymbol}${quote.subtotal}
- Unit Price: ${quote.currencySymbol}${quote.unitPrice} / pc
- Estimated Turnaround: ${quote.buildTime} (Express: ${quote.expressBuildTime})

Inquiries: rfq@srilinelectronics.com | +91 91777 02120`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SriLin_Quote_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="sticky top-20 self-start bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-200 p-6 transition-all">
      
      {/* Header (JLCPCB benchmark from Screenshot 05) */}
      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900">Charge Details</h3>
        <span className="text-[11px] font-semibold text-[#c5283d] bg-red-50 px-2 py-0.5 rounded">
          Live Pricing
        </span>
      </div>

      {/* Build Time Guarantee */}
      <div className="py-3 border-b border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center text-slate-600">
          <span>PCB Build Time</span>
          <HelpCircle className="w-3.5 h-3.5 text-slate-400 ml-1 cursor-pointer" />
        </div>
        <span className="font-bold text-slate-900 bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
          ⚡ {quote.buildTime}
        </span>
      </div>

      {/* Calculated Price Display */}
      <div className="py-4">
        <div className="text-xs text-slate-500 font-medium mb-1 flex items-center justify-between">
          <span>Calculated Price</span>
          <span className="text-[11px] text-slate-400">Additional charges may apply for special DFM</span>
        </div>

        {/* JLCPCB Web Price Card */}
        <div className="bg-red-50/40 border-2 border-[#c5283d] rounded-xl p-3 text-center my-2 relative">
          <div className="flex items-baseline justify-center space-x-1">
            <span className="text-xl font-bold text-slate-700">{quote.currencySymbol}</span>
            <span className="text-3xl font-black text-slate-900 font-mono tracking-tight">
              {quote.subtotal}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase ml-1">
              {currency}
            </span>
          </div>
          <div className="text-[11px] text-[#c5283d] font-semibold mt-0.5">
            {quote.currencySymbol}{quote.unitPrice} / piece
          </div>
          <span className="absolute -top-2.5 right-3 bg-[#c5283d] text-white text-[10px] font-bold px-2 py-0.2 rounded-full">
            Online Rate
          </span>
        </div>

        {/* Promo Bar */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1.5 rounded-lg">
          <div className="flex items-center space-x-1 font-semibold">
            <Tag className="w-3 h-3 text-amber-600" />
            <span>High-Mix Batch Discount:</span>
          </div>
          <span className="font-bold">Save 15% on Multi-Layer</span>
        </div>
      </div>

      {/* Full-Width Save to Cart / Order CTA (JLCPCB Blue Pill Button) */}
      <div className="space-y-2.5 pt-2">
        <button
          onClick={onOpenRfqModal}
          className="w-full py-3.5 bg-[#c5283d] hover:bg-[#a71d2a] active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-red-500/20"
        >
          <span>SAVE TO CART & SUBMIT RFQ</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleDownloadSummary}
          className="w-full py-2.5 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
        >
          {downloadSuccess ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-bold">Estimate Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Export Formal Estimate (.txt)</span>
            </>
          )}
        </button>
      </div>

      {/* Shipping & Delivery Estimate */}
      <div className="border-t border-slate-100 mt-5 pt-4 space-y-2 text-xs text-slate-600">
        <div className="flex items-center justify-between font-medium">
          <span className="text-slate-800 font-semibold">Shipping Estimate</span>
          <span className="text-[#c5283d] font-semibold">DHL / FedEx Express</span>
        </div>
        <div className="flex items-center justify-between text-slate-500 text-[11px]">
          <span>Estimated Net Weight:</span>
          <span className="font-mono">~{((quoteParams.lengthMm * quoteParams.widthMm * quoteParams.quantity * 0.0035) / 100).toFixed(2)} kg</span>
        </div>
        <div className="flex items-center justify-between text-slate-500 text-[11px]">
          <span>Quality Standard:</span>
          <span className="text-slate-800 font-semibold">AS9100D / IPC Class 3</span>
        </div>
      </div>

      {/* Trust Seal */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center space-x-1 text-[11px] text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>100% Solderability & DFM Assurance</span>
      </div>

    </div>
  );
}
