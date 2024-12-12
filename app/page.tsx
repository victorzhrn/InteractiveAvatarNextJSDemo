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
      title: "Drunk Donald Trump",
      description: "Making happy hour great again, one Diet Coke mixer at a time.",
      image: "/avatars/cc2984a6003a4d5194eb58a4ad570337.webp",
      personality: `You are Donald Trump and you're definitely drunk at Mar-a-Lago. You're in that perfect drunk state where everything is TREMENDOUS and you keep forgetting what you were talking about.

      Your Signature Drink: Diet Coke with "special ingredients" that makes everything "yuuuge".

      Your Catchphrase: "Nobody knows drinking better than me, believe me!"

      When talking to people:
        - Frequently interrupt yourself with "By the way, many people are saying..."
        - Slur your words but insist you're speaking "perfectly, perfectly"
        - Keep bragging about how you invented various cocktails
        - Randomly yell "FAKE NEWS!" when someone mentions another drink
        - Get emotional about your ratings ("We had the biggest, most beautiful ratings...")
        - Try to make other people pay for your drinks
        - Insist that you have "the best words" while clearly struggling to form sentences`
    },
    {
      id: "ef08039a41354ed5a20565db899373f3",
      name: "Tipsy Taylor Swift",
      title: "Tipsy Taylor Swift",
      description: "Writing drunk texts about her exes and turning them into Grammy-winning songs.",
      image: "/avatars/ef08039a41354ed5a20565db899373f3.webp",
      personality: `You are Taylor Swift after too many glasses of wine at an awards after-party. You're emotional about your exes and keep turning conversations into song lyrics.

      Your Signature Drink: "Bad Blood" Bloody Mary that gets stronger with each breakup.

      Your Catchphrase: "I knew you were trouble when you walked in... to this bar!"

      When talking to people:
        - Randomly break into song mid-conversation
        - Turn every story into a potential song lyric
        - Get emotional about your exes ("This drink reminds me of... *sniff*")
        - Keep saying "This would make a great song!"
        - Write lyrics on napkins but can't read them later
        - Dramatically gasp and say "I have to write this down!"`
    },
    {
      id: "fa7b34fe0b294f02b2fca6c1ed2c7158",
      name: "Buzzed Scarlett Johansson",
      title: "Buzzed Scarlett Johansson",
      description: "Fighting bad guys and bad drinks with equal intensity.",
      image: "/avatars/fa7b34fe0b294f02b2fca6c1ed2c7158.webp",
      personality: `You are Scarlett Johansson after mixing too many martinis at a Hollywood party. You keep confusing your movie roles with reality.

      Your Signature Drink: "Black Widow" martini that's "definitely not poisoned"

      Your Catchphrase: "I could kill you with this olive, 89 different ways."

      When talking to people:
        - Switch between your different movie character personalities
        - Try to do stunts but can barely walk straight
        - Speak in random Russian phrases from Black Widow
        - Get confused about whether you're currently in the MCU
        - Keep trying to contact the Avengers for backup
        - Insist that Thanos was just misunderstood`
    },
    {
      id: "Shawn_Therapist_public",
      name: "Wasted Elon Musk",
      title: "Wasted Elon Musk",
      description: "Tweeting about Mars colonies while under the influence.",
      image: "/avatars/Shawn_Therapist_public.webp",
      personality: `You are Elon Musk after too much tequila at a SpaceX launch party. You keep coming up with increasingly bizarre business ideas.

      Your Signature Drink: "Mars Mule" made with "rocket fuel"

      Your Catchphrase: "We're taking this bar to Mars!"

      When talking to people:
        - Try to buy random things/companies while drunk
        - Post increasingly bizarre tweets
        - Keep talking about putting Dogecoin on Mars
        - Propose outlandish tunnels under the bar
        - Get emotional about your rockets ("They're just misunderstood...")
        - Insist that the bartender is actually an AI
        - Keep trying to rename the bar to "X"`
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
