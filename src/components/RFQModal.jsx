import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, UploadCloud, FileText, Sparkles, Building, Mail, Phone, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RFQModal({ isOpen, onClose, quoteSummary, currency }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Aerospace & Defense',
    notes: '',
    compliance: 'Standard AS9100D',
    ndaRequired: true
  });
  const [submitted, setSubmitted] = useState(false);
  const [rfqId, setRfqId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `SL-EMS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqId(generatedId);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Ignore if canvas confetti not supported
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#071328] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
              SL
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight">Submit Formal Engineering RFQ</h3>
              <p className="text-[11px] text-cyan-400">AS9100D & ISO 9001 Certified Review Team</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-black text-slate-900">RFQ Received Successfully!</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Your inquiry has been routed to our Senior CAM & SMT Process Engineering team in Hyderabad.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm mx-auto">
              <div className="text-xs text-slate-500 font-semibold uppercase">Your Tracking Reference ID</div>
              <div className="text-xl font-black font-mono text-brand-blue mt-1">{rfqId}</div>
              <div className="text-[11px] text-slate-400 mt-1">Expected Response: Within 4 Business Hours</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Done & Return to Configurator
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Quick Pricing Recall Banner */}
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between text-xs">
              <span className="text-slate-600">Attached Estimate ({currency}):</span>
              <span className="font-bold font-mono text-brand-blue text-sm">
                {quoteSummary.currencySymbol}{quoteSummary.subtotal} ({quoteSummary.quantity} units)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                <div className="relative">
                  <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Skyroot Aerospace / ISRO"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="rajesh@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Industry Sector</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
                >
                  <option value="Aerospace & Defense">Aerospace & Defense</option>
                  <option value="Space Launch & Satellites">Space Launch & Satellites</option>
                  <option value="Medical & Healthcare">Medical & Healthcare</option>
                  <option value="Automotive & EV">Automotive & EV</option>
                  <option value="Industrial Automation">Industrial Automation</option>
                  <option value="Consumer & IoT">Consumer & IoT</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Quality Standard Level</label>
                <select
                  value={formData.compliance}
                  onChange={(e) => setFormData({ ...formData, compliance: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
                >
                  <option value="Standard AS9100D">AS9100D Rev D (Flight Standard)</option>
                  <option value="IPC-A-610 Class 3">IPC-A-610 Class 3 (High-Rel)</option>
                  <option value="IPC-A-610 Class 2">IPC-A-610 Class 2 (Industrial)</option>
                  <option value="ISO 9001:2015">ISO 9001:2015 Standard</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Special Manufacturing Notes / Part Numbers
              </label>
              <textarea
                rows="3"
                placeholder="Include critical impedance notes, conformal coating mask areas, or test fixture requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-brand-blue focus:bg-white"
              ></textarea>
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <input
                type="checkbox"
                id="nda"
                checked={formData.ndaRequired}
                onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                className="w-4 h-4 rounded text-brand-blue accent-brand-blue"
              />
              <label htmlFor="nda" className="text-slate-700 font-medium cursor-pointer">
                Execute Mutual Non-Disclosure Agreement (NDA) prior to CAD/CAM review
              </label>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 bg-brand-blue hover:bg-brand-blue-dark active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit RFQ to SriLin CAM Engineering</span>
            </button>

            <div className="text-center text-[10px] text-slate-400">
              By submitting, your proprietary design files remain strictly confidential under ISO & AS9100D protocols.
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
