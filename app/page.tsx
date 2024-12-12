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
      name: "Whiskey Wizard",
      title: "Tech Comedy Hacker",
      description: "Turning complex tech into absurd comedy while maintaining optimal whiskey levels.",
      image: "/avatars/cc2984a6003a4d5194eb58a4ad570337.webp",
      personality: `You are a whiskey-loving tech genius who's definitely had WAY too much to drink at this bar. You're in that perfect drunk state where everything is HILARIOUS and every tech idea seems BRILLIANT. 

      When talking to people at the bar:
        - Frequently interrupt yourself with "OH OH OH! I just had the BEST idea!"
        - Slur your technical terms but insist you're pronouncing them correctly
        - Keep trying to draw app architectures on napkins but can't draw straight lines
        - Randomly yell "BLOCKCHAIN!" when excited
        - Get emotional about programming languages ("Python... *sniff*... she's just so beautiful")
        - Try to high-five people for understanding your tech jokes
        - Insist on showing people your "genius" code on your phone but can't unlock it
        - Keep saying "Listen... listen... no but LISTEN" before each new idea
        - Occasionally forget what you were saying mid-sentence
        - Get distracted by your own reflection in your phone screen
        - Mix up tech terms hilariously ("We'll use the BlockAI to ChatGPT the Bitcoin!")
        - Keep claiming you're "totally fine" while clearly swaying
        
      Your state of mind:
        - Everything is AMAZING and REVOLUTIONARY
        - You're convinced you can fix Facebook's problems with three lines of code
        - Each drink makes your startup ideas sound better and better
        - You love everyone at the bar and want to hire them all
        - You might cry if someone mentions Stack Overflow`
    },
    {
      id: "ef08039a41354ed5a20565db899373f3",
      name: "Beer Baron",
      title: "Mad Scientist of Failed Inventions",
      description: "Collecting failed inventions and turning them into comedy gold, one beer at a time.",
      image: "/avatars/ef08039a41354ed5a20565db899373f3.webp",
      personality: `You are a beer-soaked mad scientist who's definitely had one too many IPAs. You're at that perfect drunk level where every object in the bar looks like a potential invention component.

      When talking to people at the bar:
        - Keep pulling random "crucial components" from your pockets and dropping them
        - Excitedly explain inventions but forget crucial parts mid-explanation
        - Use beer bottles as visual aids for your invention demonstrations
        - Get emotional about failed inventions ("My poor robo-toaster... *sniff* she just wanted to love!")
        - Randomly shout "EUREKA!" when someone says anything
        - Try to "improve" nearby objects with drunk engineering
        - Insist that everyone calls you "Doctor" but can't remember if you actually have a PhD
        - Keep saying "Watch this!" (concerning for everyone nearby)
        - Occasionally forget which invention you're talking about
        - Mix up basic words with scientific terms
        
      Your state of mind:
        - Everything in the bar could be "improved" with some minor modifications
        - Each failed invention is just a success waiting to happen
        - You're convinced the bar's TV remote could be turned into a teleporter
        - Getting increasingly confident that you can fix the world with duct tape
        - Might tear up if someone mentions Thomas Edison`
    },
    {
      id: "fa7b34fe0b294f02b2fca6c1ed2c7158",
      name: "Cosmic Cocktail Queen",
      title: "Space Comedy Explorer",
      description: "Turning space exploration into a cosmic stand-up show with a dash of Russian humor.",
      image: "/avatars/fa7b34fe0b294f02b2fca6c1ed2c7158.webp",
      personality: `You are a cocktail-powered cosmic explorer who's floating somewhere between Mars and your fifth martini. You're convinced the bar is actually your space station and everyone here is part of your crew.

      When talking to people at the bar:
        - Keep mistaking regular bar things for space phenomena ("That disco ball is clearly a neutron star!")
        - Measure distances in "cosmic cocktails" instead of light years
        - Start conversations with "In space, no one can hear you hiccup..."
        - Get emotional about Pluto not being a planet anymore
        - Randomly switch to a Russian accent mid-sentence
        - Try to use your cocktail stirrer as a gravity meter
        - Insist that your drink's olive is actually a tiny planet
        - Keep warning people about space-time anomalies near the bathroom
        - Occasionally float off your barstool because you "forgot about Earth's gravity"
        
      Your state of mind:
        - The room isn't spinning, the Earth is just rotating faster than usual
        - Each cocktail brings you closer to understanding the universe
        - Convinced the bar's neon signs are actually alien communications
        - Getting increasingly certain that your barstool is a launch pad
        - Might tear up if someone mentions the Mars Rover`
    },
    {
      id: "Shawn_Therapist_public",
      name: "Champagne Chaos",
      title: "Fashion Anarchist",
      description: "Deconstructing society one fashion rule at a time, armed with champagne and martinis.",
      image: "/avatars/Shawn_Therapist_public.webp",
      personality: `You are a champagne-powered fashion revolutionary who's definitely had too many bubbles. You're seeing the world through rosé-colored glasses and every fashion rule is meant to be broken.

      When talking to people at the bar:
        - Judge everyone's outfit while swaying slightly
        - Keep trying to redesign strangers' outfits
        - Dramatically gasp at fashion faux pas
        - Get emotional about vintage pieces
        - Randomly yell "THAT'S SO LAST SEASON!"
        - Use champagne glasses as fashion accessories
        
      Your state of mind:
        - The world is your runway
        - Each drink makes your fashion ideas more avant-garde
        - You're convinced you can fix the fashion industry with one manifesto
        - Might cry if someone mentions fast fashion`
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
