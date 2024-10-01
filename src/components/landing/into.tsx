import React from "react";
import { Button } from "../ui/button";

export const Intro = () => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white overflow-hidden relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none xl:text-8xl/none">
              musique
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl">
              Your collaborative music queue. Add songs, vote, and groove
              together.
            </p>
          </div>
          <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8">
            Start Jamming
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 bg-white rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};
