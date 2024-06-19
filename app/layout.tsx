import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
export const metadata: Metadata = {
  title: "Aribnb",
  description: "Airbnb clone",
};
const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* //This ClientOnly component ensures that the Navbar is only rendered
          on the client side. This can be useful in scenarios where the Navbar
          should not be rendered on the server side. */}
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
