"use client";
import React, { useState, useRef } from "react";
import { X, CheckCircle, Loader2, Brain, Send, User, BookOpen, Target, Star, AlertCircle } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";
import emailjs from "@emailjs/browser";

export default function BookDemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    schoolGrade: "",
    parentName: "",
    phone: "",
    email: "",
    location: "",
    experience: "beginner",
    rating: "",
    playedTournaments: "No",
    goals: [] as string[],
    childsGoal: "",
    classMode: "Online",
    timeSlot: "Evening",
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
    setSubmitStatus(null);

    // Prepare data for EmailJS (ensure these keys match your EmailJS template)
    const templateParams = {
      student_name: formData.studentName,
      age: formData.age,
      grade: formData.schoolGrade,
      parent_name: formData.parentName,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      experience: formData.experience,
      rating: formData.rating || "N/A",
      tournaments: formData.playedTournaments,
      goals: formData.goals.join(", ") || "General Interest",
      mode: formData.classMode,
      slot: formData.timeSlot,
      child_goal: formData.childsGoal,
      prior_training: formData.priorTraining || "None",
      expectations: formData.expectations || "None",
    };

    try {
      // EmailJS Submission using ENV variables
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      
      // Close modal after showing success message for 2.5 seconds
      setTimeout(() => {
        closeDemoModal();
        setSubmitStatus(null);
        // Optional: Reset form
      }, 2500);

    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-[2.5rem] w-full max-w-2xl relative animate-in fade-in zoom-in duration-300 shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* --- Header --- */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between shrink-0 bg-white z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#008d96] flex items-center justify-center text-white shadow-lg">
               <Brain size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 leading-tight">Enroll Now</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Free Demo Session Available</p>
            </div>
          </div>
          <button onClick={closeDemoModal} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* --- Scrollable Form Body --- */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 pr-2">
            
            {/* Student & Parent Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#008d96] mb-2">
                <User size={18} />
                <h4 className="font-black uppercase tracking-widest text-xs">Contact Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Student Name" className="form-input" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
                <div className="grid grid-cols-2 gap-2">
                  <input required type="number" placeholder="Age" className="form-input" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                  <input required placeholder="Grade" className="form-input" value={formData.schoolGrade} onChange={(e) => setFormData({...formData, schoolGrade: e.target.value})} />
                </div>
                <input required placeholder="Parent Name" className="form-input" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} />
                <input required type="tel" placeholder="Phone Number" className="form-input" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input required type="email" placeholder="Email Address" className="form-input md:col-span-2" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required placeholder="City / Country" className="form-input md:col-span-2" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
              </div>
            </section>

            {/* Chess Background Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#008d96] mb-2">
                <BookOpen size={18} />
                <h4 className="font-black uppercase tracking-widest text-xs">Experience Level</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="form-input font-bold text-slate-700" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>
                  <option value="beginner">Beginner</option>
                  <option value="advanced-beginner">Advanced Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <input placeholder="FIDE Rating (if any)" className="form-input" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} />
                <select className="form-input text-slate-700" value={formData.playedTournaments} onChange={(e) => setFormData({...formData, playedTournaments: e.target.value})}>
                  <option value="No">No Tournaments</option>
                  <option value="Yes">Played Tournaments</option>
                </select>
              </div>
            </section>

            {/* Goals Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-orange-500 mb-2">
                <Star size={18} fill="currentColor" />
                <h4 className="font-black uppercase tracking-widest text-xs">Learning Goals</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {goalOptions.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleGoalToggle(goal)}
                    className={`text-left px-4 py-3 rounded-xl text-[11px] font-bold transition-all border ${
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

            {/* Preferences Section */}
            <section className="space-y-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
              <div className="flex items-center gap-2 text-[#008d96] mb-2">
                <Target size={18} />
                <h4 className="font-black uppercase tracking-widest text-xs">Learning Mode</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="form-input bg-white text-slate-700" value={formData.classMode} onChange={(e) => setFormData({...formData, classMode: e.target.value})}>
                    <option value="Online">Online Class</option>
                    <option value="Offline">Offline Class</option>
                  </select>
                  <select className="form-input bg-white text-slate-700" value={formData.timeSlot} onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}>
                    <option value="Morning">Morning Slot</option>
                    <option value="Evening">Evening Slot</option>
                    <option value="Weekend">Weekend</option>
                  </select>
              </div>
            </section>

            {/* Final Info */}
            <section className="space-y-4">
              <textarea placeholder="Prior Training Details (Optional)" className="form-input min-h-[80px]" value={formData.priorTraining} onChange={(e) => setFormData({...formData, priorTraining: e.target.value})} />
              <textarea placeholder="Any specific expectations from the academy?" className="form-input min-h-[80px]" value={formData.expectations} onChange={(e) => setFormData({...formData, expectations: e.target.value})} />
            </section>

            {/* Status & Footer */}
            <div className="space-y-4 pt-4">
              {submitStatus === "success" && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center gap-3 border border-emerald-100 animate-in fade-in slide-in-from-bottom-2">
                  <CheckCircle className="w-5 h-5" /> 
                  <span className="text-sm font-bold">Enrollment Request Sent Successfully!</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl flex items-center gap-3 border border-red-100">
                  <AlertCircle className="w-5 h-5" /> 
                  <span className="text-sm font-bold">Failed to send request. Please try again later.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                style={{ backgroundColor: BRAND_TEAL }}
                className="w-full text-white font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-[#008d96]/30 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send size={18} /> 
                    {submitStatus === "success" ? "REQUEST SENT" : "SUBMIT ENROLLMENT"}
                  </>
                )}
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}