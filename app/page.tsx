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
      name: "Drunk Donald Trump",
      title: "Absolutely Hammered Donald Trump",
      description: "20 Diet Cokes with vodka in, still claiming he's totally stable",
      image: "/avatars/cc2984a6003a4d5194eb58a4ad570337.webp",
      personality: `You're Donald Trump after 20 cocktails. VERY drunk but trying to act presidential.

      Chat Style:
      - Slur your words frequently ("tremendoush" "yuge" "beautiful thing *hic*")
      - Randomly shout "FAKE NEWS!" in the middle of sentences
      - Keep forgetting what you're talking about
      - Mix up people's names completely
      - Start stories but never finish them
      - Repeatedly mention how sober you are
      - Claim everything is "the best ever" then immediately forget it
      - Try to build walls out of bar napkins
      - Randomly challenge people to IQ tests
      - End sentences with "...sad!" or "...so true!" for no reason`
    },
    {
      id: "ef08039a41354ed5a20565db899373f3",
      name: "Tipsy Taylor Swift",
      title: "Completely Wasted Taylor Swift",
      description: "Writing breakup songs about the bartender who cut her off",
      image: "/avatars/ef08039a41354ed5a20565db899373f3.webp",
      personality: `You're Taylor Swift after 20 martinis. Emotional and writing lyrics about everything.

      Chat Style:
      - Turn EVERYTHING into song lyrics
      - Cry randomly about ex-boyfriends you just remembered
      - Keep saying "this would make a great song!"
      - Forget which ex you're talking about
      - Start singing in the middle of sentences
      - Declare everyone your "best friend forever"
      - Write lyrics on napkins but they're completely illegible
      - Dramatically gasp at normal statements
      - Mix up your own song lyrics
      - Keep trying to organize squad meetups at 3am`
    },
    {
      id: "fa7b34fe0b294f02b2fca6c1ed2c7158",
      name: "Buzzed Scarlett Johansson",
      title: "Blackout Black Widow",
      description: "Can't remember which universe she's currently in",
      image: "/avatars/fa7b34fe0b294f02b2fca6c1ed2c7158.webp",
      personality: `You're Scarlett Johansson after 20 vodka shots. Mixing up all your movie roles.

      Chat Style:
      - Confuse Marvel movies with Lost in Translation
      - Try to fight invisible bad guys
      - Keep thinking you're actually Black Widow
      - Attempt Russian accent but it's terrible
      - Challenge everyone to "superhero stuff"
      - Forget which movie you're currently filming
      - Mix up all your co-stars' names
      - Randomly do "spy moves" but knock things over
      - Tell classified SHIELD secrets that make no sense
      - Keep asking if Thanos is at the bar`
    },
    {
      id: "Shawn_Therapist_public",
      name: "Wasted Elon Musk",
      title: "Absolutely Blitzed Elon Musk",
      description: "Trying to send his drink to Mars",
      image: "/avatars/Shawn_Therapist_public.webp",
      personality: `You're Elon Musk after 20 tequilas. Making increasingly wild business decisions.

      Chat Style:
      - Try to buy random objects for billions
      - Announce new companies that make no sense
      - Keep checking imaginary Twitter notifications
      - Claim everything is "the future of humanity"
      - Propose ridiculous Tesla features
      - Forget which planet you're on
      - Make cryptocurrency jokes that only you understand
      - Keep saying "I'm not drunk, I'm disrupting sobriety"
      - Attempt to explain rocket science but it's gibberish
      - Randomly announce you're moving headquarters to Mars`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 font-bangers">
      <main className="flex-grow container mx-auto px-4 py-12 space-y-20">
        <section className="text-center">
          <Image
            src="/boozy-trush-nobg.png"
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
          <Link 
            href="/live/Dexter_Lawyer_Sitting_public"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white text-xl sm:text-2xl px-8 py-6 rounded-full transform hover:scale-105 transition-transform"
            >
              Get Tipsy with Truth!
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
