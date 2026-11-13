"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Mould Development",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s+\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select or enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message or project requirements are required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters detailing your requirements.";
    }

    if (!formData.agreement) {
      newErrors.agreement = "You must agree to be contacted regarding this project inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "Mould Development",
      message: "",
      agreement: false,
    });
    setErrors({});
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero
        badge="GET IN TOUCH"
        title="Let's Discuss Your"
        titleAccent="Manufacturing Requirements"
        description="Connect with our technical engineering desk. Whether you need custom mould development, tooling fabrication, or high-volume plastic injection moulding, we are ready to assist."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Contact Details & Inquiry Form */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* ────────────────────────────────────────────────────────
                LEFT COLUMN: CONTACT INFO & CORPORATE COORDINATES
            ──────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <ScrollReveal direction="left" duration={800}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                    <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                      PROJECT COORDINATION DESK
                    </span>
                  </div>

                  <h2 className="text-[28px] sm:text-[34px] font-bold text-[#080808] tracking-tight leading-tight">
                    Direct Engineering Consultation
                  </h2>

                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#555555]">
                    Our engineers review 2D/3D component drawings, CAD models, material specifications, and production schedules under strict mutual non-disclosure.
                  </p>

                  {/* Info Cards */}
                  <div className="mt-8 space-y-4">
                    {/* Facility Address */}
                    <div className="p-4 bg-neutral-50 border border-[#E5E5E5] rounded-[4px] flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded bg-white text-[#E51E2A] border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                          Corporate &amp; Works
                        </span>
                        <p className="text-[13.5px] font-medium text-[#080808] mt-0.5">
                          Mahalaxmi Tools &amp; Plastic Industries LLP
                        </p>
                        <p className="text-[12.5px] text-[#555555]">
                          Industrial Tooling &amp; Injection Moulding Works, Maharashtra, India
                        </p>
                      </div>
                    </div>

                    {/* Email Desk */}
                    <div className="p-4 bg-neutral-50 border border-[#E5E5E5] rounded-[4px] flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded bg-white text-[#E51E2A] border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                          Inquiries &amp; RFQs
                        </span>
                        <a
                          href="mailto:inquiry@mahalaxmitools.com"
                          className="text-[13.5px] font-semibold text-[#080808] hover:text-[#E51E2A] transition-colors mt-0.5 block"
                        >
                          inquiry@mahalaxmitools.com
                        </a>
                        <span className="text-[11.5px] text-[#777777]">
                          Responses provided within 24 business hours
                        </span>
                      </div>
                    </div>

                    {/* Phone & Direct Coordination */}
                    <div className="p-4 bg-neutral-50 border border-[#E5E5E5] rounded-[4px] flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded bg-white text-[#E51E2A] border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                          Direct Phone Line
                        </span>
                        <a
                          href="tel:+912027123456"
                          className="text-[13.5px] font-semibold text-[#080808] hover:text-[#E51E2A] transition-colors mt-0.5 block"
                        >
                          +91 (0) 20 2712 3456
                        </a>
                        <span className="text-[11.5px] text-[#777777]">
                          Mon - Sat: 8:30 AM - 6:30 PM IST
                        </span>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="p-4 bg-neutral-50 border border-[#E5E5E5] rounded-[4px] flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded bg-white text-[#30467F] border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                          Operations &amp; Production
                        </span>
                        <p className="text-[13px] font-medium text-[#080808] mt-0.5">
                          Toolroom Engineering: Mon - Sat
                        </p>
                        <p className="text-[12px] text-[#555555]">
                          Injection Moulding Production Bays: 24 / 7 Operations
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Inquiry Button */}
                  <div className="mt-6">
                    <a
                      href="https://wa.me/?text=Hello%20Mahalaxmi%20Tools%20Team%2C%20I%20would%20like%20to%20discuss%20a%20manufacturing%20requirement."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-[4px] transition-colors shadow-xs group cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Quick Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ────────────────────────────────────────────────────────
                RIGHT COLUMN: INQUIRY FORM WITH VALIDATION
            ──────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={800} delay={150}>
                <div className="bg-white border border-[#E5E5E5] rounded-[6px] p-6 sm:p-8 lg:p-9 shadow-sm">
                  <div className="flex items-center justify-between pb-5 border-b border-[#E5E5E5] mb-6">
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-bold text-[#080808]">
                        Send an Inquiry
                      </h3>
                      <p className="text-[13px] text-[#555555] mt-0.5">
                        Outline your project details and CAD/mould specifications
                      </p>
                    </div>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      * All fields required
                    </span>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-200">
                      <div className="w-14 h-14 bg-red-50 text-[#E51E2A] rounded-full mx-auto flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-[22px] font-bold text-[#080808]">
                        Inquiry Received Successfully
                      </h4>
                      <p className="mt-2 text-[14px] text-[#555555] max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-[#080808]">{formData.fullName}</span>. Our engineering coordination team has logged your requirements regarding <span className="font-semibold text-[#080808]">{formData.subject}</span> and will review the specifications promptly.
                      </p>
                      <div className="mt-6">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-sm font-medium rounded-[4px] text-[#080808] transition-colors cursor-pointer"
                        >
                          Submit another inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: "" });
                          }}
                          placeholder="Your complete name"
                          className={`w-full px-3.5 py-2.5 text-[14px] bg-white border rounded-[4px] focus:outline-none text-[#080808] placeholder:text-neutral-400 ${
                            errors.fullName
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#E5E5E5] focus:border-[#E51E2A]"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11.5px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email & Phone in 2 cols */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[12.5px] font-medium text-[#080808] mb-1"
                          >
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            placeholder="business@example.com"
                            className={`w-full px-3.5 py-2.5 text-[14px] bg-white border rounded-[4px] focus:outline-none text-[#080808] placeholder:text-neutral-400 ${
                              errors.email
                                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                                : "border-[#E5E5E5] focus:border-[#E51E2A]"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-[11.5px] text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-[12.5px] font-medium text-[#080808] mb-1"
                          >
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (errors.phone) setErrors({ ...errors, phone: "" });
                            }}
                            placeholder="+91 98765 43210"
                            className={`w-full px-3.5 py-2.5 text-[14px] bg-white border rounded-[4px] focus:outline-none text-[#080808] placeholder:text-neutral-400 ${
                              errors.phone
                                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                                : "border-[#E5E5E5] focus:border-[#E51E2A]"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-[11.5px] text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject Selection */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Subject / Area of Interest *
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => {
                            setFormData({ ...formData, subject: e.target.value });
                            if (errors.subject) setErrors({ ...errors, subject: "" });
                          }}
                          className={`w-full px-3.5 py-2.5 text-[14px] bg-white border rounded-[4px] focus:outline-none text-[#080808] ${
                            errors.subject
                              ? "border-red-500 focus:border-red-500"
                              : "border-[#E5E5E5] focus:border-[#E51E2A]"
                          }`}
                        >
                          <option value="Mould Development">Mould Development (Single / Multi-Cavity)</option>
                          <option value="Tools & Dies">Tools &amp; Dies Fabrication</option>
                          <option value="Plastic Components">Plastic Injection Moulded Components</option>
                          <option value="CNC Machining">Precision CNC / EDM Machining</option>
                          <option value="General Project Inquiry">General Technical Consultation / RFQ</option>
                        </select>
                        {errors.subject && (
                          <p className="text-[11.5px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message / Requirements */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[12.5px] font-medium text-[#080808] mb-1"
                        >
                          Message / Project Requirements *
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: "" });
                          }}
                          placeholder="Outline component material, estimated volume, target delivery timeframe, or mould specifications..."
                          className={`w-full px-3.5 py-2.5 text-[14px] bg-white border rounded-[4px] focus:outline-none text-[#080808] placeholder:text-neutral-400 resize-y ${
                            errors.message
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#E5E5E5] focus:border-[#E51E2A]"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-[11.5px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Agreement Checkbox */}
                      <div className="pt-1">
                        <div className="flex items-start gap-2.5">
                          <input
                            id="agreement"
                            type="checkbox"
                            checked={formData.agreement}
                            onChange={(e) => {
                              setFormData({ ...formData, agreement: e.target.checked });
                              if (errors.agreement) setErrors({ ...errors, agreement: "" });
                            }}
                            className="w-4 h-4 rounded-[3px] text-[#E51E2A] focus:ring-[#E51E2A] border-[#E5E5E5] mt-0.5"
                          />
                          <label
                            htmlFor="agreement"
                            className="text-[12.5px] text-[#555555] select-none cursor-pointer"
                          >
                            I agree to be contacted regarding this manufacturing inquiry. All shared drawings and data are kept confidential under NDA.
                          </label>
                        </div>
                        {errors.agreement && (
                          <p className="text-[11.5px] text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.agreement}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center px-6 py-3.5 text-[15px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] disabled:opacity-60 rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A] cursor-pointer"
                        >
                          <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                        <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                          Direct engineering evaluation · Confidentiality guaranteed
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────
              GOOGLE MAPS / LOCATION SECTION
          ──────────────────────────────────────────────────────── */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-[#E5E5E5]">
            <ScrollReveal direction="up" duration={700}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-[14px] h-[2px] bg-[#E51E2A]" />
                    <span className="text-[11px] font-bold text-[#E51E2A] uppercase tracking-wider">
                      WORKS LOCATION
                    </span>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#080808]">
                    Industrial Facility Coordinates
                  </h3>
                </div>
                <span className="text-[12px] text-[#777777] hidden sm:block">
                  Factory visits arranged by appointment for authorized project reviews
                </span>
              </div>

              {/* Styled Maps Interactive Frame */}
              <div className="w-full h-[360px] sm:h-[420px] rounded-[6px] border border-[#E5E5E5] overflow-hidden shadow-xs relative bg-neutral-100">
                <iframe
                  title="Mahalaxmi Tools & Plastic Industries Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471115598!2d73.79292677273909!3d18.524545043516597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d082e33!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-[4px] border border-[#E5E5E5] shadow-xs flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E51E2A] animate-ping" />
                  <span className="text-[12px] font-semibold text-[#080808]">
                    Mahalaxmi Tools &amp; Plastic Industries Works
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

