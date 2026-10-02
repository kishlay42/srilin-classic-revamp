import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Plane, 
  FileText, 
  ArrowRight,
  ExternalLink,
  Lock,
  Headphones
} from 'lucide-react';
import { COMPANY_INFO } from '../data/srilineData';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function ContactView({ onOpenRfqModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'turnkey-smt',
    projectTimeline: 'immediate',
    message: '',
    ndaRequested: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `SL-CNT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setSubmitted(true);
  };

  const departments = [
    {
      name: "Aerospace & Defense Programs Desk",
      desc: "Fast-track technical consultation for defense electronics, ISRO/DRDO payloads, and mission-critical telemetry.",
      email: "defense@srilinelectronics.com",
      phone: "+91 91777 02120",
      badge: "AS9100D Certified",
      color: "border-red-200 bg-red-50/50"
    },
    {
      name: "Commercial & Turnkey SMT Quotes",
      desc: "Instant BOM analysis, prototype quick-turns (48-72h), volume PCB fabrication, and component sourcing.",
      email: COMPANY_INFO.email,
      phone: "+91 40 2988 2120",
      badge: "2-Hour Response",
      color: "border-amber-200 bg-amber-50/50"
    },
    {
      name: "Quality Assurance & Facility Audits",
      desc: "Schedule physical plant audits, ESD surveys, or request compliance certifications (ISO 9001, ANSI/ESD).",
      email: "quality@srilinelectronics.com",
      phone: "+91 91777 02120",
      badge: "ISO-8 Cleanroom",
      color: "border-emerald-200 bg-emerald-50/50"
    },
    {
      name: "Careers & Talent Acquisition",
      desc: "Apply for SMT process engineer, Koh Young 3D AOI programmer, cleanroom operator, or QA inspector roles.",
      email: "careers@srilinelectronics.com",
      phone: "+91 91777 02120",
      badge: "We're Hiring",
      color: "border-cyan-200 bg-cyan-50/50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* 1. Header Banner */}
      <div className="bg-[#070e1e] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5283d_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
            <span className="bg-[#c5283d] text-white px-2.5 py-1 rounded font-bold uppercase tracking-wider">
              Direct Contact & Support
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-400 flex items-center space-x-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Engineering Desk Online • Response &lt; 2h</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-amber-300 font-bold">15 Mins to HYD International Airport</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
            Contact SriLin Electronics
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Connect directly with our aerospace engineering desk, schedule a certified Class 100,000 (ISO-8) cleanroom plant audit, or request comprehensive turnkey SMT quotation support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Dispatched Successfully!</h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
                    Your reference tracking ID is <span className="font-mono font-bold text-[#c5283d]">{ticketId}</span>. A SriLin Aerospace Applications Engineer will review your requirements and respond within 2 hours.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1 font-mono">
                  <div><strong>Company:</strong> {formData.company || 'Not Specified'}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Inquiry Type:</strong> {formData.inquiryType.toUpperCase()}</div>
                  {formData.ndaRequested && <div className="text-[#c5283d] font-bold">✓ Mutual NDA Requested</div>}
                </div>
                <div className="flex justify-center space-x-3 pt-3">
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ ...formData, message: '' }); }}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    to="/quote"
                    className="px-5 py-2.5 rounded-lg bg-[#c5283d] hover:bg-[#a71d2a] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    Go to Instant Quote Configurator
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-[#c5283d]" />
                    <span>Send Engineering Inquiry / RFQ</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the technical brief below. All project data and CAD files are covered under strict non-disclosure protocol.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Corporate / Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@aerospace.in"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Defense Avionics Lab"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Inquiry Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d] bg-white font-medium"
                      >
                        <option value="turnkey-smt">Turnkey SMT & High-Density Assembly</option>
                        <option value="defense-aerospace">Aerospace & Defense Flight Hardware (AS9100D)</option>
                        <option value="bare-pcb">Multi-Layer Rigid / HDI Bare PCB Fabrication</option>
                        <option value="cleanroom-tour">Cleanroom Facility Audit & Visit Request</option>
                        <option value="parts-sourcing">BOM Sourcing & Laser Cut Stencil</option>
                        <option value="careers">Careers & Technical Engineering Roles</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Required Timeline
                      </label>
                      <select
                        value={formData.projectTimeline}
                        onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d] bg-white font-medium"
                      >
                        <option value="immediate">⚡ 48-72h Express Quick-Turn Prototype</option>
                        <option value="standard">Standard Batch Production (5-10 Days)</option>
                        <option value="scheduled">Scheduled Annual Program / Defense Contract</option>
                        <option value="exploratory">Technical Feasibility & DFM Review</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details / Technical Scope <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify board layer count, estimated quantity, SMT components, testing requirements (ICT, 160kV X-Ray, 240h burn-in), or preferred visit dates..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5283d]/20 focus:border-[#c5283d]"
                    ></textarea>
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-start space-x-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="ndaRequested"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      className="mt-0.5 rounded text-[#c5283d] focus:ring-[#c5283d] h-4 w-4 cursor-pointer"
                    />
                    <label htmlFor="ndaRequested" className="text-xs text-slate-600 select-none cursor-pointer">
                      <span className="font-semibold text-slate-800">Request Bilateral Mutual NDA (Non-Disclosure Agreement)</span> before sharing proprietary CAD/Gerber and BOM engineering files.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#c5283d] hover:bg-[#a71d2a] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer shadow-red-500/20 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch Technical Inquiry</span>
                    </button>
                  </div>

                </form>
              </div>
            )}
          </div>

          {/* Right Column: Plant Location, Fast Contacts & Logistics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Quick Desk Card */}
            <div className="bg-[#070e1e] text-white rounded-2xl p-6 border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-extrabold text-[#e6a100] uppercase tracking-wider">
                  Hyderabad Plant Headquarters
                </span>
                <span className="flex items-center text-emerald-400 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                  Open 24/7 Operations
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#c5283d] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">SriLin Electronics Pvt. Ltd.</div>
                    <div className="text-slate-300 mt-0.5 leading-relaxed text-[11px]">
                      PLOT: S-1/P/D, E-City EMC, Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana – 501359, India
                    </div>
                    <div className="text-[10px] font-mono text-cyan-300 mt-1">
                      Coordinates: 17.2087° N, 78.4982° E
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-1 border-t border-slate-800">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-slate-400">Defense Hotline:</span>
                    <a href="tel:+919177702120" className="font-mono font-bold text-white hover:text-cyan-300 transition-colors">
                      +91 91777 02120
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border-t border-slate-800 pt-2">
                  <Headphones className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-slate-400">Plant Landline:</span>
                    <a href="tel:+914029882120" className="font-mono font-bold text-white hover:text-amber-300 transition-colors">
                      +91 40 2988 2120
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border-t border-slate-800 pt-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-slate-400">Engineering Sales:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-mono font-bold text-emerald-300 hover:text-white transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp trigger */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/919177702120?text=Hello%20SriLin%20Electronics%20Engineering%20Desk,%20I%20would%20like%20to%20request%20an%20instant%20technical%20quote%20for%20Turnkey%20SMT%20Assembly."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-emerald-900/30"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+91 91777 02120)</span>
                </a>
              </div>
            </div>

            {/* Airport & Logistics Advantage */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                <Plane className="w-4 h-4 text-[#c5283d]" />
                <span>Logistics & Strategic Proximity</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located in the government-promoted <strong>E-City EMC (Fabcity)</strong> in Hyderabad. Directly accessible via Hyderabad Outer Ring Road (ORR Exit 14), enabling expedited dispatch:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5283d]"></span>
                  <span><strong>15 Minutes:</strong> Rajiv Gandhi International Airport Air Cargo Terminal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5283d]"></span>
                  <span><strong>18% GST Input Credit:</strong> Zero customs duty or demurrage port delays</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5283d]"></span>
                  <span><strong>Dedicated Defense Logistics:</strong> Secure chain of custody couriers</span>
                </li>
              </ul>
            </div>

            {/* Cleanroom Visit Guidelines */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-2 text-xs">
              <div className="flex items-center space-x-2 font-bold text-emerald-950 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Class 100,000 Cleanroom Audit Protocol</span>
              </div>
              <p className="text-emerald-900 leading-relaxed">
                Client technical teams and quality auditors are welcome. Visitor ESD smocks, conductive heel straps, and cleanroom bunny boots are provided at the entrance air shower chamber. Prior 24-hour advance registration is requested.
              </p>
            </div>

          </div>

        </div>

        {/* Interactive Google Maps & Campus Location Section */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-[#c5283d]" />
                <span>CLEANROOM PLANT LOCATION & PHYSICAL AUDITS</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                SriLin Electronics Campus — Hyderabad E-City EMC
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                PLOT: S-1/P/D, E-City EMC, Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana – 501359, India
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a 
                href="https://maps.google.com/?q=SRILIN+ELECTRONICS+PRIVATE+LIMITED+Hyderabad"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition-all shadow-sm active:scale-95"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
              <a 
                href="https://wa.me/919177702120?text=Hello%20SriLin,%20I%20would%20like%20to%20schedule%20a%20Cleanroom%20Facility%20Audit%20at%20Raviryala."
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition-all shadow-sm active:scale-95"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>Schedule Audit via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Responsive Iframe */}
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-inner h-[380px] sm:h-[440px] bg-slate-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951390.4510336884!2d76.05560302734375!3d17.203769821917533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba5aa089189cd%3A0x446e4978ad7eea49!2sSRILIN%20ELECTRONICS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1783442292637!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SriLin Electronics Campus Map Location"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 font-bold uppercase block">Airport Proximity</span>
              <span className="font-bold text-slate-900 block">15 Mins to RGIA Terminal</span>
              <span className="text-slate-500 text-[11px] block">Direct highway transit via Outer Ring Road (ORR Exit 14).</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 font-bold uppercase block">Cleanroom Accreditation</span>
              <span className="font-bold text-slate-900 block">ISO-8 / Class 100,000 Certified</span>
              <span className="text-slate-500 text-[11px] block">Air-shower interlocks, positive pressure & ESD flooring.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 font-bold uppercase block">Geo Coordinates</span>
              <span className="font-mono font-bold text-[#c5283d] block">17.2087° N, 78.4982° E</span>
              <span className="text-slate-500 text-[11px] block">Maheshwaram Mandal, Fabcity Aerospace Corridor.</span>
            </div>
          </div>
        </div>

        {/* 3. Department Specific Desks */}
        <div className="mt-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-mono font-extrabold text-[#c5283d] uppercase tracking-wider">
              Specialized Divisions
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Direct Department Desks
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Route your inquiries directly to the engineering team best equipped to handle your specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${dept.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/90 text-slate-800 border border-slate-200">
                      {dept.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {dept.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center space-x-1.5 text-slate-700 hover:text-[#c5283d] font-semibold transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c5283d] shrink-0" />
                    <span className="truncate">{dept.email}</span>
                  </a>
                  <a 
                    href={`tel:${dept.phone}`}
                    className="flex items-center space-x-1.5 text-slate-600 hover:text-slate-900 font-mono transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>{dept.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
