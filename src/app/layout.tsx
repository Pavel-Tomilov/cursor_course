import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/layout/header";
import { Providers } from "@/providers/provider";
import Footer from "@/components/UI/layout/footer";
import brandRu from "../../public/locales/ru/brand.json";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import AppLoader from "@/hoc/app-loader";
import Title from "@/components/UI/layout/title";
import { getServerLanguage } from "@/utils/i18n.server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: brandRu.title,
  description: brandRu.description
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const language = await getServerLanguage();

  return (
    <html lang={language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers initialLanguage={language}>
          <SessionProvider session={session}>
            <AppLoader>
              <div className="flex min-h-screen flex-col justify-between">
                <div className="flex flex-col">
                  <Header />
                  <main
                    className={`flex flex-col max-w-[1024px] mx-auto px-[24px] justify-start items-center`}
                  >
                    <Title />
                    {children}
                  </main>
                </div>

                <Footer />
              </div>
            </AppLoader>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
