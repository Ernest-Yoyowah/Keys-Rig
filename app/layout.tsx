import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "./ui/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Keys Rig",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon.ico"],
    // apple: ['/apple-touch-icon.png?v=4'],
    // shortcut: ['/apple-touch-icon.png'],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
