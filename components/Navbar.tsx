'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400', 
});

const navLinks = [
  { name: 'Docs', href: '#' },
  { name: 'Product', href: '#' },
  { name: 'Blog', href: '/' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md flex justify-center ">
      <div className="max-w-7xl w-[95%] flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-semibold text-[#6C47FF] transition ${pacifico.className}`}
        >
          MyBlog
        </Link>

        {/* Nav Link Container */}
        <div className="hidden md:flex bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
          <div className="flex gap-2 px-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    px-4 py-1 text-sm font-medium text-[16px]
                    ${isActive ? 'text-[#6C47FF]' : 'text-[#3e3c46]'}
                    hover:text-[#6C47FF]
                    hover:drop-shadow-[0_0_0.5em_#a88bff]
                    transition duration-200
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Login */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="bg-[#6C47FF] text-white text-sm px-4 py-1.5 rounded-full font-medium hover:bg-[#5939d7] transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}