import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "./ui/fonts";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Keys Rig",
  },
  description: "Software and Hardware for Music Production",
  metadataBase: new URL("https://keysrig.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
