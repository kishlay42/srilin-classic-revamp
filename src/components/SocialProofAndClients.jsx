import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, Rocket, Satellite, Activity, Car, Quote } from 'lucide-react';
import { CERTIFICATIONS, CLIENT_LOGOS, COMPANY_INFO, TESTIMONIALS } from '../data/srilineData';

export default function SocialProofAndClients() {
  return (
    <section id="certifications-section" className="py-20 bg-[#071328] text-white scroll-mt-20 relative overflow-hidden rounded-3xl my-8">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mission-Critical Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by India's Premier Aerospace & Defense Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            From orbital launch vehicles and satellite bus electronics to automotive ADAS and critical medical devices, our AS9100D certified EMS delivers zero-defect reliability.
          </p>
        </div>

        {/* Client Roster Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-14">
          {CLIENT_LOGOS.map((client, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-red-500/40 p-4 rounded-2xl flex flex-col justify-between items-center text-center group transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                {idx === 0 ? <Car className="w-5 h-5 text-red-400" /> :
                 idx === 1 ? <Activity className="w-5 h-5 text-teal-400" /> :
                 idx === 2 ? <Rocket className="w-5 h-5 text-amber-400" /> :
                 idx === 3 ? <Satellite className="w-5 h-5 text-cyan-400" /> :
                 idx === 4 ? <Activity className="w-5 h-5 text-blue-400" /> :
                 <Activity className="w-5 h-5 text-emerald-400" />}
              </div>
              <h4 className="font-extrabold text-xs text-white group-hover:text-red-400 transition-colors">
                {client.name}
              </h4>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                {client.sector}
              </p>
              <span className="mt-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                {client.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Verified Client Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
              CLIENT TESTIMONIALS & PRODUCTION PARTNERSHIPS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl relative flex flex-col justify-between"
              >
                <Quote className="w-8 h-8 text-red-500/30 mb-2" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-3 pt-3 border-t border-slate-800">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 text-red-400 font-black flex items-center justify-center text-xs">
                    {t.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-white">{t.author}</h5>
                    <span className="text-[11px] text-slate-400">{t.title}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Major Defense & Aerospace Certifications */}
        <div className="border-t border-slate-800 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-white">
              Global Quality & Defense Accreditations
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Third-party audited facilities in E-City EMC, Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {cert.validity}
                  </span>
                </div>

                <div className="text-2xl font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.code}
                </div>
                <div className="text-xs font-bold text-slate-300 mb-2">
                  {cert.title}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
