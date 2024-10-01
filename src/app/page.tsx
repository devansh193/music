import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/landing/into";
import { Features } from "@/components/landing/features";
export default function Component() {
  const queueItems = [
    "Hey Jude - The Beatles",
    "Bohemian Rhapsody - Queen",
    "Stairway to Heaven - Led Zeppelin",
    "Like a Rolling Stone - Bob Dylan",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Intro />
        <Features />
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Live Queue Demo
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Now Playing:</h3>
                <p className="text-gray-700">Weird Fishes</p>
              </div>
              <h3 className="text-xl font-bold mb-2">Up Next:</h3>
              <ul className="space-y-2">
                {queueItems.map((song, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white p-3 rounded shadow-sm"
                  >
                    <span>{song}</span>
                    <span className="text-gray-500">#{index + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  About musique
                </h2>
                <p className="text-gray-400 mb-4">
                  Muzer started as a passion project born out of the love for
                  music and the desire to share it with friends. As a music
                  enthusiast and developer, I wanted to create a platform that
                  makes collaborative listening easy and fun.
                </p>
                <p className="text-gray-400">
                  Whether you&apos;re hosting a party, working with teammates,
                  or just hanging out with friends, Muzer lets you create the
                  perfect soundtrack together. Join me in revolutionizing the
                  way we experience music socially!
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Muzer Creator"
                  className="rounded-full mx-auto"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
