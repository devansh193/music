import Link from "next/link";
import React from "react";
import { GithubIcon, TwitterIcon, MusicIcon } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-6 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-black">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 musique. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <MusicIcon className="h-4 w-4" />
            <span>Now Playing: Weird Fishes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
