'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', href: '/' },                     // ✅ Added this
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Workouts', href: '/dashboard/workouts' },
  { name: 'Goals', href: '/dashboard/goals' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-100 h-full p-4">
      <h2 className="text-xl font-bold mb-6">🏋️ FitTrack</h2>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                'block px-4 py-2 rounded hover:bg-green-200 transition',
                {
                  'bg-green-500 text-white': pathname === item.href,
                }
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
