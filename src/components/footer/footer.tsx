import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
    return (
        <footer className="w-full bg-gray-50 py-6">
            <div className="flex items-center justify-center gap-1">
                <p className="text-normal text-sm flex items-center">
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
                        className="mr-1 inline-block h-4 w-4"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M15 9.354a4 4 0 1 0 0 5.292"></path>
                    </svg>
                    {`copyright | ${new Date().getFullYear()} \t`}
                    coded with ❤️️ by &nbsp;
                    <Link
                        target="_blank"
                        href="https://github.com/devusmonjon"
                        className="underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600"
                    >
                        Usmonjon Hasanov
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
