import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { userData } from "@/data/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${userData.name}'s portfolio`,
    description:
        "Highly analytical and detail oriented problem solver with 2+ years of deep learning in Front-End and Back-End web development. I'll complate fully startup project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="!scroll-smooth dark"
            style={{
                colorScheme: "dark",
            }}
        >
            <body className={inter.className}>{children}</body>
        </html>
    );
}
