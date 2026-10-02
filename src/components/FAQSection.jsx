import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../data/srilineData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-white text-slate-800 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Engineering Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about DFM file prep, SMT lines, turnarounds, and aerospace compliance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="text-xs font-mono font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-brand-blue" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center text-[11px] font-semibold text-brand-blue">
                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <h4 className="font-bold text-sm text-slate-900 mb-1">
            Have a specialized aerospace specification or custom NDA requirement?
          </h4>
          <p className="text-xs text-slate-600 mb-4">
            Our engineering team is directly reachable via email or telephone.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a 
              href="mailto:rfq@srilinelectronics.com"
              className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-lg text-xs font-bold transition-colors"
            >
              Email Engineering Team
            </a>
            <a 
              href="tel:+919177702120"
              className="px-4 py-2 border border-slate-300 hover:bg-white text-slate-700 rounded-lg text-xs font-bold transition-colors"
            >
              Call +91 91777 02120
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
