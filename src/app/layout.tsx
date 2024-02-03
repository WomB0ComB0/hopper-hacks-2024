import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import CookieBanner from "@/components/analytics/CookieBanner";
import GoogleAnalytics from "@/scripts/scripts";
import CursorCanvas from "./_components/CursorCanvas";
import { Toaster } from "@/components/ui/toaster"
import { ClerkProvider } from '@clerk/nextjs'
import { ScrollToTopButton } from "@/components/custom/index";
import Room from "./Room";
import { constructMetadata } from "@/utils";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

const RootLayout: React.FC<Readonly<{
  children: React.ReactNode;
}>> = ({
  children
}) => {
    return (
      <>
            <ClerkProvider>
        <html lang={`en`}>
            <GoogleAnalytics GA_MEASUREMENT_ID={'G-4WE13PP68G'} />
          <body className={inter.className}>
              <Toaster />
              <ThemeProvider
                attribute={`class`}
                defaultTheme={`dark`}
                enableSystem
                disableTransitionOnChange
              >
                <Room>
                  <Layout>
                    {children}
                    <ScrollToTopButton />
                    <CursorCanvas />
                    <CookieBanner />
                  </Layout>
                </Room>
              </ThemeProvider>
          </body>
        </html>
            </ClerkProvider>
      </>
    );
  }

export default RootLayout;