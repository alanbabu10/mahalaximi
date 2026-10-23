"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#2B3E75] text-white overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Context (Slides in from Left) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" duration={800}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                <span className="text-[12px] font-medium text-neutral-300">
                  Your Next Project
                </span>
              </div>

              <h2 className="text-[38px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.08] tracking-tight text-white">
                Let&apos;s talk
                <span className="block mt-1">requirements.</span>
              </h2>

              <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.6] text-neutral-300 max-w-[420px]">
                Tell us what you have in mind. Use the form to outline your project
                and the information you would like to discuss.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: White Card Form (Slides in from Right) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" duration={800} delay={150}>
              <div className="bg-white text-[#080808] rounded-[6px] p-6 sm:p-8 lg:p-9 shadow-lg">
                <div className="flex items-center justify-between pb-5 border-b border-[#E5E5E5] mb-6">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#080808]">
                    Send an inquiry
                  </h3>
                  <span className="text-[12px] text-neutral-400">
                    * Required
                  </span>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 bg-red-50 text-[#E51E2A] rounded-full mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-[20px] font-bold text-[#080808]">
                      Inquiry Submitted
                    </h4>
                    <p className="mt-2 text-[14px] text-[#555555] max-w-sm mx-auto">
                      Thank you. Our engineering team has received your inquiry and
                      will review your project requirements promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          company: "",
                          phone: "",
                          email: "",
                          requirements: "",
                        });
                      }}
                      className="mt-6 px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-sm font-medium rounded-[4px] text-[#080808] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Full name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-[#E51E2A] text-[#080808] placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Company *
                        </label>
                        <input
                          id="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Company name"
                          className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-[#E51E2A] text-[#080808] placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Country code and number"
                          className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-[#E51E2A] text-[#080808] placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Work email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Your business email"
                          className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-[#E51E2A] text-[#080808] placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="requirements"
                        className="block text-[12.5px] font-medium text-[#080808] mb-1"
                      >
                        Your requirements *
                      </label>
                      <textarea
                        id="requirements"
                        rows={4}
                        required
                        value={formData.requirements}
                        onChange={(e) =>
                          setFormData({ ...formData, requirements: e.target.value })
                        }
                        placeholder="Tell us about the application specifications, quantity and timing..."
                        className="w-full px-3.5 py-2.5 text-[14px] bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-[#E51E2A] text-[#080808] placeholder:text-neutral-400 resize-y"
                      />
                    </div>

                    <div className="flex items-center gap-2.5 pt-1">
                      <input
                        id="agreement"
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="w-4 h-4 rounded-[3px] text-[#E51E2A] focus:ring-[#E51E2A] border-[#E5E5E5]"
                      />
                      <label
                        htmlFor="agreement"
                        className="text-[12.5px] text-[#555555] select-none"
                      >
                        I agree to be contacted about this inquiry
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                      >
                        <span>Send inquiry</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                      <p className="text-[11px] text-neutral-400 text-center mt-2">
                        All submitted project specifications and inquiry details kept confidential under NDA.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
