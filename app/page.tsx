"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface Person {
  name: string
  image: string
  role: string
}

export default function App() {
  const avatars = [
    {
      id: "Wayne_20240711",
      name: "Avatar 1",
      image: "/avatars/cc2984a6003a4d5194eb58a4ad570337.webp"
    },
    {
      id: "Wayne_20240711",
      name: "Avatar 2",
      image: "/avatars/ef08039a41354ed5a20565db899373f3.webp"
    },
    {
      id: "Eric_public_pro2_20230608",
      name: "Avatar 3",
      image: "/avatars/fa7b34fe0b294f02b2fca6c1ed2c7158.webp"
    },
    {
      id: "Shawn_Therapist_public",
      name: "Shawn Therapist",
      image: "/avatars/Shawn_Therapist_public.webp"
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

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {avatars.map((avatar) => (
            <Link 
              key={avatar.id}
              href={`/live/${avatar.id}`}
              className="block"
            >
              <div 
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform hover:rotate-2 transition-transform cursor-pointer"
              >
                <Image
                  src={avatar.image}
                  alt={avatar.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-normal mb-2">{avatar.name}</h3>
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
