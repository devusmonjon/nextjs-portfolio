"use client";
import { navLinks } from "@/data/constants";
import useScroll from "@/hooks/use-scroll";
import Link from "next/link";
import { useState } from "react";

const Navbar = (): JSX.Element => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [isMenuLoadingToClose, setIsMenuLoadingToClose] =
        useState<boolean>(false);
    useState<boolean>(false);
    const isScrolled = useScroll(40);

    const openMenu = () => {
        if (!isMenuOpened) {
            setIsMenuOpened(true);
        }
    };
    const closeMenu = () => {
        if (isMenuOpened) {
            setIsMenuLoadingToClose(true);
            setTimeout(() => {
                setIsMenuOpened(false);
                setIsMenuLoadingToClose(false);
            }, 100);
        }
    };
    return (
        <header
            className={`sticky top-0 z-30 w-full border-b border-transparent ${
                isScrolled
                    ? "bg-gray/50 backdrop-blur-xl md:border-gray-100"
                    : "bg-gray"
            } max-md:border-gray-100`}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
                <Link target="_self" className="" href="/">
                    <h3 className="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold">
                        &lt;UH /&gt;
                    </h3>
                </Link>
                <div className="hidden items-center gap-6 md:flex">
                    <ul className="flex list-none items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    target="_self"
                                    className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-6 w-0.5 bg-gray-100"></div>
                    <div className="flex items-center gap-4">
                        <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">
                            Download CV
                        </button>
                    </div>
                </div>
                <button
                    onClick={openMenu}
                    title="Open main menu"
                    className="relative justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6 flex md:hidden"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:R1mja:"
                    data-state="closed"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            {isMenuOpened && (
                <div
                    className={`fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100 inset-y-0 right-0 h-full max-w-xs w-full animate-drawer-open h-screen ${
                        isMenuLoadingToClose && "animate-drawer-close"
                    }`}
                    style={{
                        pointerEvents: "auto",
                    }}
                >
                    <div className="flex items-center justify-between border-b border-gray-100 p-4">
                        <h3 className="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold">
                            &lt;SS /&gt;
                        </h3>
                        <button
                            onClick={closeMenu}
                            title="Close main menu"
                            className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x"
                            >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="border-b border-gray-100 p-4">
                        <ul className="flex list-none flex-col gap-4">
                            <li>
                                <a
                                    target="_self"
                                    className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_self"
                                    className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                                    href="#work"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_self"
                                    className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                                    href="#testimonials"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_self"
                                    className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                        <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">
                            Download CV
                        </button>
                    </div>
                </div>
            )}
            {isMenuOpened && (
                <button
                    title="Close menu"
                    onClick={closeMenu}
                    className={`fixed inset-0 bg-gray-900/10 opacity-100 backdrop-blur-sm z-40 w-full h-screen`}
                ></button>
            )}
        </header>
    );
};

export default Navbar;
