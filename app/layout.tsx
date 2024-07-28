import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RentModal from "./components/modals/RentModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "../app/components/modals/LoginModal";
import { getCurrentUser } from "../app/actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Aribnb",
  description: "Airbnb clone",
};
const font = Nunito({
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* //This ClientOnly component ensures that the Navbar is only rendered
          on the client side. This can be useful in scenarios where the Navbar
          should not be rendered on the server side. */}
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
