import React, { useState } from 'react';
import SocialProofAndClients from '../components/SocialProofAndClients';
import FAQSection from '../components/FAQSection';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  Download, 
  CheckCircle2, 
  Building2, 
  Users, 
  Briefcase, 
  MapPin, 
  Mail, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CERTIFICATIONS, COMPANY_INFO, LEADERSHIP_TEAM, CORPORATE_MILESTONES } from '../data/srilineData';

export default function QualityView({ onNavigateToQuote }) {
  const [activeTab, setActiveTab] = useState('certifications'); // 'certifications', 'company', 'team', 'milestones', 'careers'

  const CAREER_OPENINGS = [
    {
      title: "Senior SMT Process Engineer",
      dept: "Manufacturing Floor",
      location: "Hyderabad E-City EMC",
      exp: "4-8 Years",
      desc: "Lead programming, setup, and optimization of Fuji AIMEX IIIc and Panasonic NPM-D3 dual-lane pick-and-place lines."
    },
    {
      title: "Lead Quality Assurance Inspector (AS9100D / IPC-A-610)",
      dept: "Quality Assurance",
      location: "Hyderabad E-City EMC",
      exp: "5-10 Years",
      desc: "Perform first-article inspections (FAI), manage non-conformance reports, and oversee 160kV X-Ray void inspection protocols."
    },
    {
      title: "Embedded Hardware & Firmware Engineer",
      dept: "Design & Engineering",
      location: "Hyderabad E-City EMC",
      exp: "3-6 Years",
      desc: "Develop high-speed ARM Cortex-M/FPGA reference boards, NI LabVIEW automated test fixtures, and board bring-up firmware."
    }
  ];

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospace Header Tag */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200 text-xs">
          <div className="flex items-center space-x-2 text-slate-500 font-mono">
            <span className="font-bold text-slate-900">SRILIN CORPORATE DOSSIER</span>
            <span>/</span>
            <span>AS9100D REV D & ISO 9001:2015</span>
            <span>/</span>
            <span className="text-[#c5283d] font-semibold">ESTABLISHED 2017 HYDERABAD</span>
          </div>
          <button 
            onClick={onNavigateToQuote}
            className="text-[#c5283d] bg-red-50 hover:bg-red-100 font-bold px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          >
            Launch Prototype Quote →
          </button>
        </div>

        {/* View Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider mb-2">
            <span>AEROSPACE NOBILITY & DEFENSE CREDIBILITY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Company Profile, Leadership & Quality Accreditations
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            SriLin Electronics is an ISO 9001:2015, AS9100D, ANSI/ESD S20.20-2021 & IEC 61340-5-1 certified Premier ESDM/EMS center operating in Hyderabad's E-City EMC.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 mb-10 text-xs font-bold overflow-x-auto">
          {[
            { id: 'certifications', label: 'Quality & Flight Certifications', icon: ShieldCheck },
            { id: 'team', label: 'Leadership & Executive Board', icon: Users },
            { id: 'milestones', label: 'Milestones & Strategic Alliances', icon: Sparkles },
            { id: 'company', label: 'Company Heritage & Plant Facility', icon: Building2 },
            { id: 'careers', label: 'Careers in Hyderabad', icon: Briefcase },
          ].map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                  activeTab === t.id
                    ? 'bg-[#c5283d] text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: CERTIFICATIONS & FLIGHT HERITAGE */}
        {activeTab === 'certifications' && (
          <div className="space-y-12">
            
            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="p-5 bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">{c.issuer}</span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-mono">Audited & Active</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900">{c.code}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">{c.title}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 mt-4 text-[11px] text-[#c5283d] font-bold flex items-center justify-between">
                    <span>Verified Audit Dossier</span>
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof & Flight Heritage Testimonials */}
            <SocialProofAndClients />

            {/* FAQ Section */}
            <FAQSection />

          </div>
        )}

        {/* TAB 2: COMPANY HISTORY & FACILITY */}
        {activeTab === 'company' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img 
                  src="/images/srilin/srilin-about-us.png" 
                  alt="SriLin Cleanroom Plant Hyderabad"
                  className="w-full h-88 object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-[#c5283d] uppercase tracking-wider block">
                  ORIGIN & INFRASTRUCTURE SCALE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Established 2017 in E-City EMC, Hyderabad
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SriLin Electronics was founded in 2017 to bridge the critical gap between rapid prototyping and volume defense-grade electronics manufacturing in India. Located in the Electronic Manufacturing Cluster (E-City EMC, formerly Fabcity), Hyderabad, the facility is strategically situated 15 minutes from Rajiv Gandhi International Airport cargo terminal.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The facility encompasses <strong>25,000 sq.ft. of operational Class 100,000 (ISO-8) cleanrooms</strong> equipped with high-speed Japanese surface mount lines, automated optical inspection, and non-destructive X-ray systems, with an additional <strong>214,000 sq.ft. reserve campus</strong> allocated for future defense electronics expansion.
                </p>
                
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 font-mono text-slate-700">
                  <div><strong>Corporate Legal Name:</strong> SriLin Electronics Private Limited</div>
                  <div><strong>Registration:</strong> Under Companies Act, 2013 (18 of 2013)</div>
                  <div><strong>Plant Location:</strong> PLOT: S-1/P/D, E-City EMC, Raviryala Village, Maheshwaram Mandal, Ranga Reddy District, Telangana - 501359</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LEADERSHIP & ADVISORS */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Executive Leadership & Board of Advisors</h2>
              <p className="text-xs text-slate-500 mt-1">
                Guided by seasoned technologists and industry leaders with deep expertise spanning high-reliability aerospace defense EMS, institutional finance, and advanced semiconductor packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEADERSHIP_TEAM.map((member, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3.5">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-red-200 shrink-0 shadow-xs"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-amber-100 text-[#c5283d] flex items-center justify-center font-bold text-base border border-red-200 shrink-0 shadow-xs">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-base text-slate-900 leading-snug">{member.name}</h3>
                        <div className="text-xs font-semibold text-[#c5283d] leading-tight mt-0.5">{member.role}</div>
                        {member.credentials && (
                          <div className="text-[10px] font-mono text-slate-500 mt-0.5">{member.credentials}</div>
                        )}
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200">
                      <strong>Focus:</strong> {member.focus}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {member.experience && (
                    <div className="pt-3 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                      Experience: <strong className="text-slate-700">{member.experience}</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: MILESTONES & STRATEGIC ALLIANCES */}
        {activeTab === 'milestones' && (
          <div className="space-y-8">
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Corporate Milestones & Strategic Partnerships</h2>
              <p className="text-xs text-slate-500 mt-1">
                Authentic milestones from srilinelectronics.com: major tri-party manufacturing agreements, ministerial recognitions, and high-velocity cleanroom facility expansion.
              </p>
            </div>

            <div className="space-y-6">
              {CORPORATE_MILESTONES.map((m, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-start justify-between gap-6 hover:shadow-md transition-all">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-[#c5283d] text-white px-2.5 py-0.5 rounded">
                        {m.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {m.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {m.title}
                    </h3>
                    
                    <div className="text-xs font-mono font-semibold text-cyan-800 bg-cyan-50 border border-cyan-200/80 px-2.5 py-1 rounded-lg inline-block">
                      {m.highlight}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {m.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex md:flex-col items-center justify-end">
                    <button 
                      onClick={onNavigateToQuote}
                      className="px-4 py-2 bg-slate-900 hover:bg-[#c5283d] text-white text-xs font-bold rounded-xl transition-all shadow-xs inline-flex items-center space-x-1.5 active:scale-95 cursor-pointer"
                    >
                      <span>Inquire Partnership</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CAREERS */}
        {activeTab === 'careers' && (
          <div className="space-y-6">
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Careers at SriLin Cleanroom</h2>
              <p className="text-xs text-slate-500 mt-1">
                Join our aerospace electronics engineering team in Hyderabad. We build flight-critical hardware for satellites, launch vehicles, and advanced robotics.
              </p>
            </div>

            <div className="space-y-4">
              {CAREER_OPENINGS.map((job, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-base text-slate-900">{job.title}</h3>
                      <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Full-Time</span>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      Department: {job.dept} • Location: {job.location} • Experience: {job.exp}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {job.desc}
                    </p>
                  </div>

                  <a
                    href={`mailto:hr@srilinelectronics.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                    className="bg-[#c5283d] hover:bg-[#a71d2a] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all inline-flex items-center justify-center space-x-1 shrink-0"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Client Logos & Verified Social Proof */}
        <div className="my-16 border-t border-slate-200 pt-12">
          <SocialProofAndClients onNavigateToQuote={onNavigateToQuote} />
        </div>

        {/* 7. Comprehensive FAQ */}
        <div className="my-12">
          <FAQSection onNavigateToQuote={onNavigateToQuote} />
        </div>

      </div>
    </div>
  );
}
