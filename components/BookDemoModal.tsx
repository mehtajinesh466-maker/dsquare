"use client";
import React, { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

export default function BookDemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    experience: "beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Prepare the WhatsApp Message
    const whatsappMessage = `*New Demo Booking - Checkmate Sensei Academy*%0A` +
      `-------------------------------------------%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Age:* ${formData.age}%0A` +
      `*Level:* ${formData.experience}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/918130627389?text=${whatsappMessage}`;

    try {
      // 2. Optional: Still send to Google Sheets for your records
      await fetch("https://script.google.com/macros/s/AKfycbwPBxWXpnQ4ywqrdfmKvfFi7g5Uu6hjmaTFVDE5EiMI0YEyqjRNTCxionf65Q5Zqlg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });

      setSubmitStatus("success");

      // 3. Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        closeDemoModal();
        setSubmitStatus(null);
        setFormData({ studentName: "", parentName: "", email: "", phone: "", age: "", experience: "beginner" });
      }, 2000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg relative animate-in fade-in zoom-in duration-300 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Book Free Demo</h3>
            <p className="text-gray-500 text-sm">We'll contact you within 24 hours</p>
          </div>
          <button onClick={closeDemoModal} className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Student & Parent Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                placeholder="Student Name" 
                required 
                className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.studentName}
                onChange={(e) => setFormData({...formData, studentName: e.target.value})}
              />
              <input 
                placeholder="Parent Name" 
                required 
                className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
              />
            </div>

            {/* Email & Phone (Crucial for WhatsApp) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="email"
                placeholder="Email Address" 
                required 
                className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="tel"
                placeholder="Phone Number" 
                required 
                className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            {/* Age & Level */}
            <div className="grid grid-cols-2 gap-4">
               <input 
                type="number" 
                placeholder="Age" 
                required
                className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
              <select 
                className="w-full px-4 py-2.5 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {submitStatus === "success" && (
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl flex items-center gap-2 border border-emerald-100">
                <CheckCircle className="w-4 h-4" /> Redirecting to WhatsApp...
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 border border-red-100">
                Error! Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm & Send on WhatsApp"
              )}
            </button>
            <p className="text-center text-[10px] text-gray-400">
              Note: This will open WhatsApp to confirm your booking.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}