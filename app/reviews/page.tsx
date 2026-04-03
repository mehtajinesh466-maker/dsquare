"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Quote, Search, MapPin, Globe, 
  ChevronDown, Trophy, Brain, Users, MessageSquare 
} from "lucide-react";

const BRAND_TEAL = "#008d96";

// --- THE COMPLETE DATASET (1-50) ---
const ALL_REVIEWS = [
  // 1-30: General Parent Reviews
  { id: 1, type: "parent", name: "Dipti Gupta", student: "Rutik", location: "USA", text: "D’Square Chess Academy has been a wonderful experience for my son. His concentration and patience have improved significantly over the last few months. The structured curriculum and small batch size really help in personal attention. I highly recommend this academy to all parents.", rating: 5 },
  { id: 2, type: "parent", name: "Anjali Sharma", student: "Vivaan", location: "UK", text: "We are extremely happy with the quality of coaching at D’Square. My child has developed strong thinking skills and enjoys every class. The coaches make learning very interactive and fun. It’s great to see such consistent progress.", rating: 5 },
  { id: 3, type: "parent", name: "Rohan Mehta", student: "Aarav", location: "India", text: "My son started as a complete beginner, and now he plays confidently. The teaching approach is very systematic and easy to follow. I can clearly see improvement in his decision-making skills. Overall, a great learning platform.", rating: 5 },
  { id: 4, type: "parent", name: "Neha Patel", student: "Krish", location: "Canada", text: "The academy focuses not just on chess but also on overall development. My child has become more focused and disciplined. Classes are engaging and well-structured. We are very satisfied with the results.", rating: 5 },
  { id: 5, type: "parent", name: "Sneha Iyer", student: "Advik", location: "Singapore", text: "D’Square provides excellent global exposure to kids. My child interacts with students from different countries, which is amazing. The coaching quality is top-notch and very professional. Highly recommended.", rating: 5 },
  { id: 6, type: "parent", name: "Amit Verma", student: "Aryan", location: "Dubai", text: "Very well-organized classes with clear learning goals. My son enjoys the sessions and looks forward to them every week. The progress tracking and feedback are very helpful. Great experience overall.", rating: 5 },
  { id: 7, type: "parent", name: "Priya Nair", student: "Anaya", location: "Australia", text: "My daughter has improved a lot in terms of concentration and logical thinking. The classes are interactive and engaging. The academy maintains a perfect balance between fun and learning. Very happy with the coaching.", rating: 5 },
  { id: 8, type: "parent", name: "Kunal Shah", student: "Dev", location: "India", text: "The structured curriculum really stands out. My child has developed a strong foundation in chess. The coaches are very supportive and patient. It’s a great place for serious learning.", rating: 5 },
  { id: 9, type: "parent", name: "Ritika Jain", student: "Kabir", location: "USA", text: "D’Square Chess Academy has exceeded our expectations. The small batch size ensures personal attention. My child is learning concepts very clearly. We are very impressed with the teaching quality.", rating: 5 },
  { id: 10, type: "parent", name: "Pooja Singh", student: "Reyansh", location: "UK", text: "My child eagerly waits for every class, which says a lot about the teaching style. The sessions are very engaging and interactive. I have seen a big improvement in his confidence. Highly recommended academy.", rating: 5 },
  { id: 11, type: "parent", name: "Rajesh Kumar", student: "Ishaan", location: "India", text: "Very professional and well-structured approach to teaching chess. My child has improved consistently. The coaches provide proper guidance and support. Excellent experience so far.", rating: 5 },
  { id: 12, type: "parent", name: "Nisha Gupta", student: "Parth", location: "Canada", text: "The academy has helped my child develop better focus and patience. The learning environment is very positive. Classes are conducted in a very organized way. We are very satisfied.", rating: 5 },
  { id: 13, type: "parent", name: "Rahul Agarwal", student: "Yash", location: "Singapore", text: "Regular feedback and structured learning make a big difference. My child is improving steadily. The coaches are very experienced and supportive. Highly recommended.", rating: 5 },
  { id: 14, type: "parent", name: "Shweta Kulkarni", student: "Atharv", location: "India", text: "I can clearly see improvement in my child’s discipline and thinking ability. The classes are very well planned. Coaches are patient and understanding. Great academy overall.", rating: 5 },
  { id: 15, type: "parent", name: "Manasi Patil", student: "Soham", location: "Australia", text: "D’Square has helped my child grow both mentally and strategically. The teaching style is very effective. My child enjoys learning and practicing. Very happy with the results.", rating: 5 },
  { id: 16, type: "parent", name: "Ankit Jain", student: "Dhruv", location: "Dubai", text: "The academy provides a very professional learning environment. My child has improved significantly in a short time. The sessions are interactive and engaging. Highly recommended.", rating: 5 },
  { id: 17, type: "parent", name: "Pallavi Deshmukh", student: "Aarohi", location: "India", text: "Very structured and systematic curriculum. My daughter is learning step by step with clarity. The coaches are very supportive. Excellent experience so far.", rating: 5 },
  { id: 18, type: "parent", name: "Ruchi Bansal", student: "Vihaan", location: "USA", text: "My child’s confidence has improved a lot after joining D’Square. The classes are very engaging. The coaches ensure every student understands the concepts. Great academy.", rating: 5 },
  { id: 19, type: "parent", name: "Gaurav Gupta", student: "Arnav", location: "UK", text: "D’Square is doing a fantastic job in shaping young minds. The teaching quality is excellent. My child is learning with interest and enthusiasm. Highly satisfied.", rating: 5 },
  { id: 20, type: "parent", name: "Snehal Patil", student: "Om", location: "India", text: "The classes are very interactive and well-paced. My child is always engaged. The coaches give personal attention to each student. Great learning experience.", rating: 5 },
  { id: 21, type: "parent", name: "Mohit Sharma", student: "Laksh", location: "Canada", text: "The academy focuses on both fundamentals and advanced concepts. My child has improved a lot. The learning environment is very positive. Highly recommended.", rating: 5 },
  { id: 22, type: "parent", name: "Deepika Joshi", student: "Tanmay", location: "India", text: "My son enjoys every class and is improving consistently. The teaching style is very effective. The academy provides great support. Very happy with the progress.", rating: 5 },
  { id: 23, type: "parent", name: "Saurabh Srivastava", student: "Aditya", location: "Singapore", text: "Very professional coaching with a clear learning path. My child has developed strong problem-solving skills. The classes are well organized. Great experience.", rating: 5 },
  { id: 24, type: "parent", name: "Swati Agarwal", student: "Riya", location: "Dubai", text: "The academy has exceeded our expectations. My child is learning with interest. The sessions are interactive and engaging. Highly recommended.", rating: 5 },
  { id: 25, type: "parent", name: "Nitin Choudhary", student: "Yuvraj", location: "India", text: "My child’s decision-making skills have improved a lot. The classes are structured and effective. The coaches are very supportive. Excellent academy.", rating: 5 },
  { id: 26, type: "parent", name: "Megha Kapoor", student: "Myra", location: "UK", text: "Very engaging and well-structured sessions. My child enjoys learning chess here. The progress is clearly visible. Great coaching.", rating: 5 },
  { id: 27, type: "parent", name: "Harshal Jadhav", student: "Ved", location: "India", text: "D’Square provides a great platform for kids. The teaching approach is very professional. My child is improving steadily. Highly recommended.", rating: 5 },
  { id: 28, type: "parent", name: "Sonal Shah", student: "Krisha", location: "USA", text: "We are very happy with the academy. My child has become more focused and confident. The sessions are very interactive. Great experience.", rating: 5 },
  { id: 29, type: "parent", name: "Rakesh Tiwari", student: "Ansh", location: "Australia", text: "Excellent coaching and structured learning approach. My child has improved a lot. The classes are engaging and informative. Highly satisfied.", rating: 5 },
  { id: 30, type: "parent", name: "Kavita Mishra", student: "Sarthak", location: "India", text: "Very positive and supportive environment. My child is learning with interest. The academy focuses on overall development. Great experience.", rating: 5 },

  // 31-50: Coach-Specific Reviews
  { id: 31, type: "coach", name: "Meera Shah", student: "Kiara", location: "India", coach: "Vaibhav", text: "Vaibhav sir is extremely patient and explains every concept in a very simple way. My child feels comfortable asking doubts. His teaching has really helped improve my child’s confidence.", rating: 5 },
  { id: 32, type: "coach", name: "Arjun Reddy", student: "Vivaan", location: "USA", coach: "Vaibhav", text: "Vaibhav sir’s structured teaching approach is excellent. My child has improved a lot in understanding the game. The sessions are very clear and well planned.", rating: 5 },
  { id: 33, type: "coach", name: "Nikita Kapoor", student: "Myra", location: "UK", coach: "Pushkar", text: "Pushkar sir connects very well with kids. His classes are always engaging and interactive. My child enjoys learning and shows great improvement.", rating: 5 },
  { id: 34, type: "coach", name: "Sameer Khan", student: "Ayaan", location: "Dubai", coach: "Vaibhav & Pushkar", text: "Both Vaibhav and Pushkar are highly professional coaches. They focus on each child’s improvement. My child has gained confidence and skills.", rating: 5 },
  { id: 35, type: "coach", name: "Ritu Sharma", student: "Kavya", location: "India", coach: "Vaibhav", text: "Vaibhav sir has helped my child improve tremendously. His patience and clarity in teaching are excellent. We are very happy with the progress.", rating: 5 },
  { id: 36, type: "coach", name: "Pooja Mehta", student: "Ishaan", location: "Singapore", coach: "Vaibhav & Pushkar", text: "The coaches give personal attention to every child. My son’s understanding has improved a lot. The sessions are very well conducted.", rating: 5 },
  { id: 37, type: "coach", name: "Sneha Patil", student: "Atharv", location: "India", coach: "Pushkar", text: "Pushkar sir explains even complex topics in a simple way. My child enjoys his classes. The improvement is clearly visible.", rating: 5 },
  { id: 38, type: "coach", name: "Rohit Verma", student: "Aryan", location: "Canada", coach: "Vaibhav", text: "Vaibhav sir’s experience really reflects in his teaching. My child is learning in a structured way. Great coaching experience.", rating: 5 },
  { id: 39, type: "coach", name: "Ananya Gupta", student: "Riya", location: "India", coach: "Vaibhav", text: "Vaibhav sir motivates kids very well. My child has become more confident. The classes are very engaging and effective.", rating: 5 },
  { id: 40, type: "coach", name: "Karan Malhotra", student: "Kabir", location: "UK", coach: "Pushkar", text: "Pushkar sir makes learning fun and interactive. My child looks forward to every class. Great teaching style.", rating: 5 },
  { id: 41, type: "coach", name: "Neha Arora", student: "Aarav", location: "India", coach: "Vaibhav & Pushkar", text: "Both coaches are very supportive and experienced. My child is improving steadily. Excellent guidance.", rating: 5 },
  { id: 42, type: "coach", name: "Mohit Jain", student: "Dhruv", location: "Dubai", coach: "Vaibhav", text: "Vaibhav sir’s teaching is very clear and structured. My child understands concepts easily. Highly recommended.", rating: 5 },
  { id: 43, type: "coach", name: "Fatima Shaikh", student: "Aisha", location: "India", coach: "Pushkar", text: "Pushkar sir is very friendly and approachable. My child feels comfortable learning from him. Great experience.", rating: 5 },
  { id: 44, type: "coach", name: "Rahul Singh", student: "Yuvraj", location: "Australia", coach: "Vaibhav & Pushkar", text: "Very professional coaching by both coaches. My child has improved a lot. The sessions are very effective.", rating: 5 },
  { id: 45, type: "coach", name: "Deepak Yadav", student: "Krishna", location: "India", coach: "Vaibhav & Pushkar", text: "The coaches are very knowledgeable and supportive. My child enjoys learning. Great environment.", rating: 5 },
  { id: 46, type: "coach", name: "Sangeeta Kulkarni", student: "Tanvi", location: "USA", coach: "Vaibhav", text: "Vaibhav sir is very patient with kids. My daughter has improved her focus. The classes are very engaging.", rating: 5 },
  { id: 47, type: "coach", name: "Vikas Agarwal", student: "Rudra", location: "Singapore", coach: "Pushkar", text: "Pushkar sir focuses on each child’s progress. My child is learning steadily. Very good coaching.", rating: 5 },
  { id: 48, type: "coach", name: "Nilesh Patil", student: "Omkar", location: "India", coach: "Vaibhav & Pushkar", text: "Both coaches have a great teaching methodology. My child is improving consistently. Highly recommended.", rating: 5 },
  { id: 49, type: "coach", name: "Priyanka Sharma", student: "Anaya", location: "UK", coach: "Vaibhav & Pushkar", text: "Very positive and motivating environment created by the coaches. My child enjoys learning. Great experience.", rating: 5 },
  { id: 50, type: "coach", name: "Rahul Desai", student: "Ethan", location: "USA", coach: "Vaibhav & Pushkar", text: "Excellent coaching by Vaibhav and Pushkar. My child has developed strong chess skills. Very satisfied with the academy.", rating: 5 },
];

export default function FullReviewsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredReviews = useMemo(() => {
    return ALL_REVIEWS.filter(review => {
      const matchesTab = activeTab === "all" || review.type === activeTab;
      const matchesSearch = 
        review.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        review.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (review.coach && review.coach.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fafcfc] font-sans pt-32 md:pt-40 pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Stories of Success</span>
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight">
              The Wall of <br />
              <span style={{ color: BRAND_TEAL }}>Global Love.</span>
            </h1>
            <p className="mt-8 text-slate-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Real feedback from parents across <span className="text-slate-900 font-bold">50+ countries</span> who have seen their children excel.
            </p>
          </div>

          {/* Academy Rating Badge */}
          <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl flex items-center gap-6 min-w-[300px]">
             <div className="w-16 h-16 rounded-2xl bg-[#f0fafb] flex items-center justify-center text-[#008d96]">
                <Star className="fill-[#008d96]" size={32} />
             </div>
             <div>
                <p className="text-4xl font-black text-slate-900 leading-none">4.9/5</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Verified Academy Rating</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- SEARCH & FILTER BAR --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-12">
        <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-xl p-4 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
            {["all", "parent", "coach"].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setVisibleCount(12); }}
                className={`px-6 py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all flex-1 md:flex-none ${activeTab === tab ? 'bg-white text-[#008d96] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab === 'all' ? 'All Reviews' : tab === 'parent' ? 'Parents' : 'Coach Specific'}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, coach or country..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-[#008d96]/20 transition-all font-medium text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* --- REVIEWS GRID --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.slice(0, visibleCount).map((review, idx) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#008d96]/10 transition-all duration-500 flex flex-col h-full relative"
              >
                <Quote className="absolute top-8 right-8 text-[#e6f4f5] group-hover:text-[#008d96]/20 transition-colors" size={48} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-base font-medium leading-relaxed italic mb-8 flex-grow">
                  "{review.text}"
                </p>

                <div className="pt-6 border-t border-slate-50">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#f0fafb] flex items-center justify-center text-[#008d96] font-black text-lg border-2 border-white shadow-sm">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900 leading-none">{review.name}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Parent of {review.student}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg">
                        <MapPin size={10} className="text-[#008d96]" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">{review.location}</span>
                      </div>
                   </div>
                   
                   {/* Coach Tag for 31-50 */}
                   {review.coach && (
                     <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-[#008d96]/5 rounded-xl border border-[#008d96]/10">
                        <Users size={12} className="text-[#008d96]" />
                        <span className="text-[9px] font-black text-[#008d96] uppercase tracking-widest">
                          Mentored by: {review.coach}
                        </span>
                     </div>
                   )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- NO RESULTS STATE --- */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
             <Brain className="mx-auto text-slate-200 mb-4" size={64} />
             <p className="text-slate-400 font-bold italic">We couldn't find any reviews matching your search.</p>
          </div>
        )}

        {/* --- LOAD MORE BUTTON --- */}
        {visibleCount < filteredReviews.length && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-12 py-5 bg-[#0a191a] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#008d96] transition-all flex items-center gap-3 mx-auto shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Load More Stories <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mt-24">
         <div className="bg-[#0a191a] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
               <Trophy className="mx-auto text-[#00b4bf] mb-8" size={64} />
               <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Your child’s story starts here.</h2>
               <p className="text-slate-400 font-medium text-lg leading-relaxed mb-10">
                 Join the thousands of happy parents worldwide. Book a free assessment today.
               </p>
               <button 
                  style={{ backgroundColor: BRAND_TEAL }}
                  className="px-12 py-5 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all"
               >
                  Book Free Assessment
               </button>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008d96]/10 rounded-full blur-[120px] -z-0"></div>
            <Globe className="absolute left-[-50px] bottom-[-50px] text-white/5" size={300} />
         </div>
      </div>

    </div>
  );
}