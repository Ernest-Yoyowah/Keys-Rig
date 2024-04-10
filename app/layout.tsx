import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "./ui/fonts";
import { ThemeProvider } from "@/components/theme-provider";
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
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}
