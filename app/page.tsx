'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Track Your Fitness. <br />
            Transform Your Life.
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            FitTrack helps you monitor your workouts, calories, and progress — all in one place. Start your journey today.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 rounded-md bg-green-600 px-6 py-3 text-white text-base font-medium hover:bg-green-500 transition"
          >
            Get Started <ArrowRightIcon className="w-5" />
          </Link>
        </div>

        {/* Hero Image */}
        
      </div>
    </main>
  );
}
