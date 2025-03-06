import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

interface NavLink {
    href: string;
    label: string;
}



export function Navbar({ className = "" }: { className?: string }) {
    const navLinks: NavLink[] = [
        { href: '/about', label: 'Über mich' },
        { href: '/blog', label: 'Blog' },
        { href: '/projects', label: 'Projekte' },
    ];


    return (
        <nav className={`bg-white dark:bg-gray-800 shadow-md ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            FreierFreier23
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}