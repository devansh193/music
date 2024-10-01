import React from "react";
import { UsersIcon, PlayIcon, PlusIcon } from "lucide-react";
export const Features = () => {
  return (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gray-100 p-6 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
            <UsersIcon className="h-12 w-12 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold mb-2 text-center">
              Collaborative Queuing
            </h3>
            <p className="text-gray-500 group-hover:text-gray-300 text-center">
              Add songs and let your friends contribute to the playlist.
            </p>
          </div>
          <div className="group bg-gray-100 p-6 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
            <PlayIcon className="h-12 w-12 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold mb-2 text-center">
              Real-time Playback
            </h3>
            <p className="text-gray-500 group-hover:text-gray-300 text-center">
              Listen in sync with your group, no matter where you are.
            </p>
          </div>
          <div className="group bg-gray-100 p-6 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
            <PlusIcon className="h-12 w-12 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-bold mb-2 text-center">
              Multiple Music Sources
            </h3>
            <p className="text-gray-500 group-hover:text-gray-300 text-center">
              Connect your favorite streaming services and local files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
