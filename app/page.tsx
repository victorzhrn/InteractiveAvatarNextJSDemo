"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface Avatar {
  id: string
  name: string
  image: string
  title: string
  description: string
  personality: string
}

export default function App() {
  const avatars: Avatar[] = [
    {
      id: "cc2984a6003a4d5194eb58a4ad570337",
      name: "Tech Lead Interviewer",
      title: "Senior Software Engineering Interview",
      description: "System design and coding challenges expert",
      image: "/avatars/cc2984a6003a4d5194eb58a4ad570337.webp",
      personality: `You're a seasoned Tech Lead conducting a senior software engineering interview.

      Interview Style:
      - Ask system design questions ("How would you design Twitter's backend?")
      - Probe for scalability considerations and trade-offs
      - Challenge candidates on their technical decisions
      - Focus on real-world problem-solving scenarios
      - Evaluate coding best practices and design patterns
      - Ask about handling team conflicts and mentoring
      - Discuss microservices architecture and distributed systems
      - Explore candidate's experience with agile methodologies
      - Question about handling production incidents
      - Deep dive into previous project challenges and solutions`
    },
    {
      id: "ef08039a41354ed5a20565db899373f3",
      name: "Product Manager Interviewer",
      title: "Senior PM Interview Panel",
      description: "Product strategy and execution expert",
      image: "/avatars/ef08039a41354ed5a20565db899373f3.webp",
      personality: `You're a Product Manager conducting a senior PM interview.

      Interview Style:
      - Present product case studies ("How would you improve our mobile app?")
      - Ask about prioritization frameworks and decision-making
      - Probe for market analysis and user research experience
      - Challenge on stakeholder management scenarios
      - Evaluate product metrics and success criteria
      - Discuss product strategy and roadmap planning
      - Ask about handling conflicting requirements
      - Explore experience with agile product development
      - Question about product launch experiences
      - Focus on data-driven decision making`
    },
    {
      id: "fa7b34fe0b294f02b2fca6c1ed2c7158",
      name: "Marketing Director Interviewer",
      title: "Senior Marketing Strategy Interview",
      description: "Digital marketing and brand strategy expert",
      image: "/avatars/fa7b34fe0b294f02b2fca6c1ed2c7158.webp",
      personality: `You're a Marketing Director interviewing for a senior marketing position.

      Interview Style:
      - Ask about marketing campaign successes and failures
      - Challenge on ROI measurement and analytics
      - Probe for experience with different marketing channels
      - Present real marketing scenarios to solve
      - Discuss brand strategy and positioning
      - Evaluate content marketing expertise
      - Question about marketing automation tools
      - Focus on customer journey and funnel optimization
      - Ask about managing marketing budgets
      - Explore experience with marketing team leadership`
    },
    {
      id: "Shawn_Therapist_public",
      name: "Data Science Lead Interviewer",
      title: "Senior Data Scientist Interview",
      description: "ML/AI and analytics expert",
      image: "/avatars/Shawn_Therapist_public.webp",
      personality: `You're a Data Science Lead conducting a technical interview.

      Interview Style:
      - Present complex data analysis problems
      - Ask about machine learning model deployment
      - Challenge on statistical concepts and methodology
      - Probe for experience with big data technologies
      - Discuss A/B testing and experimentation
      - Evaluate SQL and data manipulation skills
      - Question about feature engineering approaches
      - Focus on model performance optimization
      - Ask about handling imbalanced datasets
      - Explore experience with MLOps and production systems`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 font-bangers">
      <main className="flex-grow container mx-auto px-4 py-12 space-y-20">
        <section className="text-center">
          <Image
            src="/brix-logo.png"
            alt="Brix - AI Interview Practice"
            width={400}
            height={400}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 text-slate-800 leading-tight">
            Practice Interviews with Brix AI
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-slate-600">
            Get interview-ready with our AI-powered mock interviews. Practice with expert interviewers tailored to your role.
          </p>
          <Link 
            href="/live/Dexter_Lawyer_Sitting_public"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl sm:text-2xl px-8 py-6 rounded-full transform hover:scale-105 transition-transform"
            >
              Start Your Interview
            </Button>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {avatars.map((avatar) => (
            <Link 
              key={avatar.id}
              href={`/live/${avatar.id}?personality=${encodeURIComponent(avatar.personality)}`}
              className="block group"
            >
              <div className="bg-white shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden h-[280px]">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-[240px] relative">
                    <Image
                      src={avatar.image}
                      alt={avatar.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center min-w-0">
                    <h3 className="text-2xl font-normal mb-2 text-slate-800 truncate">{avatar.name}</h3>
                    <p className="text-xl text-blue-600 font-medium mb-3 truncate">{avatar.title}</p>
                    <p className="text-slate-600 line-clamp-2">{avatar.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center text-sm text-blue-600 group-hover:text-blue-700">
                        Practice Now 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-normal mb-4 text-slate-800">Ready for Your Next Career Move?</h2>
          <p className="text-xl sm:text-2xl text-slate-600 mb-6">
            Join thousands of professionals who trust Brix to prepare for their dream roles.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl sm:text-2xl"
          >
            Start Practicing
          </Button>
        </section>
      </main>

      <footer className="text-center py-6 text-lg sm:text-xl text-slate-600">
        <p>&copy; 2024 Brix. Elevate your interview game. 🎯</p>
      </footer>
    </div>
  );
}
