import type {Metadata} from "next";
import "@/styles/tailwind.css";
import ThemeProviders from "../components/ThemeProviders";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Seju Devlog",
  description: "좌충우돌 새싹 개발자 성장기🌱",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <head />
      <body className=" flex flex-col bg-[#f5f5f7] antialiased transition-colors delay-75 dark:bg-[#161617] dark:bg-opacity-80">
        <ThemeProviders>
          <Navbar />
          <main className="mx-auto mt-14 w-full max-w-2xl px-4 min-h-[32rem]">
            {children}
          </main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}

// #161617, opacity 80.0%
