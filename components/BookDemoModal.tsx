"use client";
import React, { useState } from "react";
import { X, CheckCircle, Loader2, Brain, MessageSquare, User, BookOpen, Target, Clock, Star } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

export default function BookDemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal();
  const [formData, setFormData] = useState({
    // Student & Parent
    studentName: "",
    age: "",
    schoolGrade: "",
    parentName: "",
    phone: "",
    email: "",
    location: "", // Country / City

    // Chess Background
    experience: "beginner",
    rating: "",
    playedTournaments: "No",

    // Learning Goals (Multi-select)
    goals: [] as string[],

    // Personalization
    childsGoal: "",
    classMode: "Online",
    timeSlot: "Evening",

    // Additional
    priorTraining: "",
    expectations: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const BRAND_TEAL = "#008d96";

  const goalOptions = [
    "Improve concentration & memory",
    "Develop logical thinking",
    "Play tournaments",
    "Increase rating",
    "Hobby / Fun learning",
    "Build confidence & discipline",
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = 
      `*New Enrollment/Demo - D'Square Chess Academy*%0A` +
      `-------------------------------------------%0A` +
      `*STUDENT INFORMATION*%0A` +
      `• Name: ${formData.studentName}%0A` +
      `• Age: ${formData.age}%0A` +
      `• Grade: ${formData.schoolGrade}%0A%0A` +
      `*PARENT DETAILS*%0A` +
      `• Name: ${formData.parentName}%0A` +
      `• Phone: ${formData.phone}%0A` +
      `• Email: ${formData.email}%0A` +
      `• Location: ${formData.location}%0A%0A` +
      `*CHESS BACKGROUND*%0A` +
      `• Level: ${formData.experience}%0A` +
      `• Rating: ${formData.rating || "N/A"}%0A` +
      `• Tournaments: ${formData.playedTournaments}%0A%0A` +
      `*LEARNING GOALS*%0A` +
      `• ${formData.goals.join(", ") || "General Interest"}%0A%0A` +
      `*PREFERENCES*%0A` +
      `• Mode: ${formData.classMode}%0A` +
      `• Slot: ${formData.timeSlot}%0A` +
      `• Child's Goal: ${formData.childsGoal}%0A%0A` +
      `*ADDITIONAL INFO*%0A` +
      `• Training: ${formData.priorTraining || "None"}%0A` +
      `• Expectations: ${formData.expectations || "None"}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/919588617808?text=${whatsappMessage}`;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwPBxWXpnQ4ywqrdfmKvfFi7g5Uu6hjmaTFVDE5EiMI0YEyqjRNTCxionf65Q5Zqlg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, academy: "D'Square", timestamp: new Date().toISOString() }),
      });

      setSubmitStatus("success");
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        closeDemoModal();
        setSubmitStatus(null);
      }, 2000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-2xl relative animate-in fade-in zoom-in duration-300 shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* --- Header (Fixed) --- */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between shrink-0 bg-white z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#008d96] flex items-center justify-center text-white shadow-lg">
               <Brain size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 leading-tight">Enroll Now</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Start Your Child's Chess Journey</p>
            </div>
          </div>
          <button onClick={closeDemoModal} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* --- Scrollable Form Body --- */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-10 pr-2">
            
            {/* 1. Student Information */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#008d96] mb-2">
                <User size={18} />
                <h4 className="font-black uppercase tracking-widest text-xs">Student & Parent Information</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Student Name" className="form-input" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
                <div className="grid grid-cols-2 gap-2">
                  <input required type="number" placeholder="Age" className="form-input" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                  <input required placeholder="Grade/School" className="form-input" value={formData.schoolGrade} onChange={(e) => setFormData({...formData, schoolGrade: e.target.value})} />
                </div>
                <input required placeholder="Parent Name" className="form-input" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} />
                <input required type="tel" placeholder="WhatsApp Number" className="form-input" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input required type="email" placeholder="Email ID" className="form-input" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required placeholder="Country / City" className="form-input" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
              </div>
            </section>

            {/* 2. Chess Background */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#008d96] mb-2">
                <BookOpen size={18} />
                <h4 className="font-black uppercase tracking-widest text-xs">Chess Background</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="form-input font-bold" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>
                  <option value="beginner">Beginner</option>
                  <option value="advanced-beginner">Advanced Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="not-sure">Not Sure (Assess me)</option>
                </select>
                <input placeholder="Rating (if any)" className="form-input" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} />
                <select className="form-input" value={formData.playedTournaments} onChange={(e) => setFormData({...formData, playedTournaments: e.target.value})}>
                  <option value="">Played Tournaments?</option>
                  <option value="Yes">Yes, played before</option>
                  <option value="No">No tournaments yet</option>
                </select>
              </div>
            </section>

            {/* 3. Learning Goals */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-orange-500 mb-2">
                <Star size={18} fill="currentColor" />
                <h4 className="font-black uppercase tracking-widest text-xs">Learning Goals (Select all that apply)</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {goalOptions.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleGoalToggle(goal)}
                    className={`text-left px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                      formData.goals.includes(goal)
                        ? "bg-[#008d96] text-white border-[#008d96]"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:border-[#008d96]"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </section>

            {/* 4. Personalization */}
            <section className="space-y-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-2 text-[#008d96] mb-2">
                <Target size={18} />
                <h4 className="font-black uppercase tracking-widest text-xs">Personalization</h4>
              </div>
              <div className="space-y-4">
                <input placeholder="What is your child's goal in chess?" className="form-input bg-white" value={formData.childsGoal} onChange={(e) => setFormData({...formData, childsGoal: e.target.value})} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Preferred Mode</label>
                    <select className="form-input bg-white" value={formData.classMode} onChange={(e) => setFormData({...formData, classMode: e.target.value})}>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Preferred Time Slot</label>
                    <select className="form-input bg-white" value={formData.timeSlot} onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}>
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Additional Information */}
            <section className="space-y-4">
              <textarea placeholder="Any prior training or experience? (Optional)" className="form-input min-h-[80px]" value={formData.priorTraining} onChange={(e) => setFormData({...formData, priorTraining: e.target.value})} />
              <textarea placeholder="Any specific expectations from the coach? (Optional)" className="form-input min-h-[80px]" value={formData.expectations} onChange={(e) => setFormData({...formData, expectations: e.target.value})} />
            </section>

            {/* Status & Submit */}
            <div className="space-y-4 pt-4">
              {submitStatus === "success" && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center gap-3 border border-emerald-100 animate-bounce">
                  <CheckCircle className="w-5 h-5" /> 
                  <span className="text-sm font-bold">Booking Recorded! Opening WhatsApp...</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: BRAND_TEAL }}
                className="w-full text-white font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-[#008d96]/30 active:scale-[0.98]"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><MessageSquare size={18} /> CONFIRM ON WHATSAPP</>}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 0.875rem 1.25rem;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          outline: none;
          transition: all 0.2s;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .form-input:focus {
          border-color: #008d96;
          box-shadow: 0 0 0 4px rgba(0, 141, 150, 0.1);
          background-color: #ffffff;
        }
        
        /* Visible Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #94a3b8; /* Darker gray for visibility */
          border-radius: 10px;
          border: 2px solid #f1f5f9; /* Creates a padding effect */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; /* Even darker on hover */
        }
      `}</style>
    </div>
  );
}