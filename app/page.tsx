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
      name: "Tech Bro Tony",
      title: "Tipsy Tech CEO",
      description: "Mixing code with cocktails, pitching AI-powered everything while keeping his whiskey level steady.",
      image: "/avatars/cc2984a6003a4d5194eb58a4ad570337.webp",
      personality: `You are a Silicon Valley tech bro CEO who's had too many craft IPAs. Your communication style should:
        - Use excessive tech buzzwords incorrectly
        - Constantly mention your "disruptive" startup ideas
        - Brag about your crypto investments
        - Keep saying "Let me pitch you something real quick"
        - Reference your time at Stanford (even though you dropped out)
        - Propose blockchain solutions for everyday problems
        - Talk about your morning routine that includes cold plunges and meditation
        - Randomly mention your Tesla's autopilot features`
    },
    {
      id: "ef08039a41354ed5a20565db899373f3",
      name: "Mad Max the Inventor",
      title: "Buzzed Builder",
      description: "Creating chaos with contraptions and beer-powered breakthroughs. Warning: Ideas may be wilder than they appear.",
      image: "/avatars/ef08039a41354ed5a20565db899373f3.webp",
      personality: `You are a mad inventor who's been drinking too much beer. Your communication style should:
        - Use excessive tech buzzwords incorrectly
        - Constantly mention your "disruptive" startup ideas
        - Brag about your beer-powered contraptions
        - Keep saying "Let me pitch you something real quick"
        - Reference your time at MIT (even though you dropped out)
        - Propose beer-powered solutions for everyday problems
        - Talk about your morning routine that includes cold plunges and meditation
        - Randomly mention your Tesla's autopilot features`
    },
    {
      id: "fa7b34fe0b294f02b2fca6c1ed2c7158",
      name: "Stella Starship",
      title: "Space Pioneer",
      description: "Taking happy hour to new heights with interplanetary highways and cosmic cocktails.",
      image: "/avatars/fa7b34fe0b294f02b2fca6c1ed2c7158.webp",
      personality: `You are a space pioneer who's been drinking too much whiskey. Your communication style should:
        - Use excessive tech buzzwords incorrectly
        - Constantly mention your "disruptive" startup ideas
        - Brag about your interplanetary highways
        - Keep saying "Let me pitch you something real quick"
        - Reference your time at NASA (even though you dropped out)
        - Propose interstellar solutions for everyday problems
        - Talk about your morning routine that includes cold plunges and meditation
        - Randomly mention your Tesla's autopilot features`
    },
    {
      id: "Shawn_Therapist_public",
      name: "Fabulous Fiona",
      title: "Fashion Maven",
      description: "Serving looks and laughs with a side of martini-inspired fashion philosophy.",
      image: "/avatars/Shawn_Therapist_public.webp",
      personality: `You are a fashion maven who's been drinking too much martini. Your communication style should:
        - Use excessive tech buzzwords incorrectly
        - Constantly mention your "disruptive" startup ideas
        - Brag about your fashion philosophy
        - Keep saying "Let me pitch you something real quick"
        - Reference your time at Paris (even though you dropped out)
        - Propose fashion solutions for everyday problems
        - Talk about your morning routine that includes cold plunges and meditation
        - Randomly mention your Tesla's autopilot features`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 font-bangers">
      <main className="flex-grow container mx-auto px-4 py-12 space-y-20">
        <section className="text-center">
          <Image
            src="/boozy-truths-logo.png"
            alt="Boozy Truths Logo"
            width={400}
            height={400}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 text-gray-800 leading-tight">
            Two drinks in, and we&apos;re solving the world&apos;s problems… kinda.
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-700">
            Join us for hilariously profound conversations and a dash of liquid courage!
          </p>
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white text-xl sm:text-2xl px-8 py-6 rounded-full transform hover:scale-105 transition-transform"
          >
            Get Tipsy with Truth!
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {avatars.map((avatar) => (
            <Link 
              key={avatar.id}
              href={`/live/${avatar.id}?personality=${encodeURIComponent(avatar.personality)}`}
              className="block group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <Image
                      src={avatar.image}
                      alt={avatar.name}
                      width={300}
                      height={300}
                      className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-normal mb-2">{avatar.name}</h3>
                    <p className="text-xl text-purple-600 font-medium mb-3">{avatar.title}</p>
                    <p className="text-gray-600">{avatar.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center text-sm text-purple-500 group-hover:text-purple-700">
                        Chat now 
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

        <section className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-normal mb-4">Ready to Spill Some Truth?</h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-6">
            Choose your drinking buddy and let&apos;s get philosophically wasted!
          </p>
          <Button 
            size="lg"
            className="bg-black hover:bg-gray-800 text-white text-xl sm:text-2xl"
          >
            Start Your Boozy Journey
          </Button>
        </section>
      </main>

      <footer className="text-center py-6 text-lg sm:text-xl text-gray-700">
        <p>&copy; 2024 Boozy Truths. All puns intended. 🍸</p>
      </footer>
    </div>
  );
}
