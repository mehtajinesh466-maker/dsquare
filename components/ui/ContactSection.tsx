"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  MessageSquare, Globe, ArrowUpRight, 
  Trophy, ExternalLink, Instagram, Facebook,
  Loader2, CheckCircle, AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    lastName: "",
    studentName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const BRAND_TEAL = "#008d96";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: `${formData.parentName} ${formData.lastName}`,
      parent_name: `${formData.parentName} ${formData.lastName}`,
      student_name: formData.studentName,
      user_email: formData.email,
      phone_number: formData.phone,
      message: formData.comment,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      setFormData({
        parentName: "",
        lastName: "",
        studentName: "",
        email: "",
        phone: "",
        comment: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, handle: "@dsquarechessacademy", color: "#E1306C", url: "https://www.instagram.com/dsquarechessacademy?igsh=MXMwaDZieGhqaHpiNQ==" },
    { name: "Facebook", icon: Facebook, handle: "D’Square Chess Academy", color: "#1877F2", url: "https://www.facebook.com/profile.php?id=100089823037436" },
  ];

  const platforms = [
    { name: "Chess.com", handle: "D’Square Academy", url: "#" },
    { name: "Lichess.org", handle: "D’Square Academy", url: "#" },
  ];

  return (
    <section className="py-16 md:py-32 bg-[#fafcfc] relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#008d96]/5 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#008d96 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <span className="w-8 md:w-12 h-[2px] bg-[#008d96]"></span>
            <span className="text-[#008d96] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Let's Connect</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Contact <span style={{ color: BRAND_TEAL }} className="italic">D’Square</span> {" "}
            Academy
          </h2>
          <p className="mt-4 md:mt-6 text-slate-500 font-medium max-w-xl text-base md:text-lg">
            Whether you have questions about classes, curriculum, or enrollment, feel free to reach out—we’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 md:mb-24">
          
          {/* --- LEFT: INFO CARDS --- */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            
            <div className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_10px_30px_rgba(0,141,150,0.03)] hover:shadow-[0_20px_50px_rgba(0,141,150,0.12)] transition-all duration-500 relative overflow-hidden">
              <Phone className="text-[#008d96] mb-4 md:mb-6" size={28} />
              <h4 className="text-base md:text-lg font-black text-slate-900 mb-1">Call / WhatsApp</h4>
              <p className="text-slate-500 text-xs md:text-sm font-medium mb-3 md:mb-4 leading-relaxed">Quick support within 24 hours.</p>
              <a href="tel:+919588617808" className="inline-flex items-center gap-2 text-[#008d96] font-black text-xs md:text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                +91 95886 17808 <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_10px_30px_rgba(0,141,150,0.03)] hover:shadow-[0_20px_50px_rgba(0,141,150,0.12)] transition-all duration-500 relative overflow-hidden">
              <Mail className="text-orange-500 mb-4 md:mb-6" size={28} />
              <h4 className="text-base md:text-lg font-black text-slate-900 mb-1">Email Academy</h4>
              <p className="text-slate-500 text-xs md:text-sm font-medium mb-3 md:mb-4 leading-relaxed">For curriculum & enrollments.</p>
              <a href="mailto:info@dsquare.com" className="inline-flex items-center gap-2 text-orange-600 font-black text-xs md:text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                info@dsquare.com <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="p-6 md:p-8 bg-[#0a191a] rounded-[1.5rem] md:rounded-[2rem] text-white relative overflow-hidden">
              <div className="relative z-10 flex items-start gap-4">
                <MapPin className="text-[#00b4bf] shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-xs md:text-sm uppercase tracking-widest mb-1">Our Centers</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-bold">Pune & Nashik</p>
                  <p className="text-slate-500 text-[10px] md:text-xs mt-1 font-medium">Maharashtra, India</p>
                </div>
              </div>
            </div>

          </div>

          {/* --- RIGHT: FORM --- */}
          <div className="lg:col-span-8 bg-white p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-slate-50">
            <h4 className="text-lg md:text-xl font-black text-slate-900 mb-8 md:mb-12 flex items-center gap-2">
               <MessageSquare size={20} className="text-[#008d96]" /> Quick Inquiry
            </h4>
            <form onSubmit={handleEmailSubmit} className="space-y-6 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 md:gap-y-10">
                <div className="relative group">
                  <input name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full py-2 md:py-3 bg-transparent border-b-2 border-slate-100 outline-none focus:border-[#008d96] transition-all font-bold text-slate-900 peer text-sm md:text-base" placeholder=" " />
                  <label className="absolute left-0 top-2 md:top-3 text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#008d96] peer-[:not(:placeholder-shown)]:-top-4">First Name</label>
                </div>
                <div className="relative group">
                  <input name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full py-2 md:py-3 bg-transparent border-b-2 border-slate-100 outline-none focus:border-[#008d96] transition-all font-bold text-slate-900 peer text-sm md:text-base" placeholder=" " />
                  <label className="absolute left-0 top-2 md:top-3 text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#008d96] peer-[:not(:placeholder-shown)]:-top-4">Last Name</label>
                </div>
                <div className="md:col-span-2 relative group">
                  <input name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full py-2 md:py-3 bg-transparent border-b-2 border-slate-100 outline-none focus:border-[#008d96] transition-all font-bold text-slate-900 peer text-sm md:text-base" placeholder=" " />
                  <label className="absolute left-0 top-2 md:top-3 text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#008d96] peer-[:not(:placeholder-shown)]:-top-4">Student Full Name</label>
                </div>
                <div className="relative group">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full py-2 md:py-3 bg-transparent border-b-2 border-slate-100 outline-none focus:border-[#008d96] transition-all font-bold text-slate-900 peer text-sm md:text-base" placeholder=" " />
                  <label className="absolute left-0 top-2 md:top-3 text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#008d96] peer-[:not(:placeholder-shown)]:-top-4">WhatsApp Number</label>
                </div>
                <div className="md:col-span-2 relative group">
                  <textarea name="comment" value={formData.comment} onChange={handleChange} rows={3} className="w-full py-2 md:py-3 bg-transparent border-b-2 border-slate-100 outline-none focus:border-[#008d96] transition-all font-bold text-slate-900 resize-none peer text-sm md:text-base" placeholder=" " />
                  <label className="absolute left-0 top-2 md:top-3 text-slate-400 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[#008d96] peer-[:not(:placeholder-shown)]:-top-4">Your Message</label>
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                      <CheckCircle size={18} /> Inquiry sent successfully! We will contact you soon.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex items-center gap-2 text-red-500 font-bold text-sm">
                      <AlertCircle size={18} /> Failed to send. Please try again or call us directly.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: BRAND_TEAL }}
                  className="group w-full md:w-auto px-10 md:px-12 py-4 md:py-5 text-white font-black rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#008d96]/20 hover:-translate-y-1 active:scale-95 uppercase tracking-[0.2em] text-[10px] md:text-xs disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Send Message"}
                  {!isSubmitting && <MessageSquare size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- DIGITAL CONNECT SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          
          {/* Socials */}
          <div className="space-y-4 md:space-y-6">
             <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
               <Globe size={20} className="text-[#008d96]" /> Global Presence
             </h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 hover:border-[#008d96] transition-all group">
                    <social.icon size={20} style={{ color: social.color }} />
                    <div className="min-w-0">
                      <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{social.name}</p>
                      <p className="text-xs font-bold text-slate-700 truncate">{social.handle}</p>
                    </div>
                  </a>
                ))}
             </div>
          </div>

          {/* Playing Platforms */}
          <div className="space-y-4 md:space-y-6">
             <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
               <Trophy size={20} className="text-orange-500" /> Play & Learn
             </h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <a key={platform.name} href={platform.url} target="_blank" className="p-4 bg-slate-900 rounded-2xl flex items-center justify-between group hover:bg-[#008d96] transition-all">
                    <div>
                      <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white/70">Platform</p>
                      <p className="text-xs md:text-sm font-bold text-white">{platform.name}</p>
                    </div>
                    <ExternalLink size={14} className="text-[#00b4bf] group-hover:text-white shrink-0" />
                  </a>
                ))}
             </div>
          </div>

        </div>

        {/* --- MAP --- */}
        <div className="w-full h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white p-0.5">
          <iframe
            title="D'Square Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.792510255956!2d73.9317544!3d18.5312389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b20739%3A0x350493b2a2b3765e!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711411200000!5m2!1sen!2sin"
            className="w-full h-full rounded-[1.8rem] md:rounded-[2.5rem] border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;