import { Inter } from "next/font/google";
import "../styles/globals/reset.scss";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/TostProviders";
import LoginModal from "./components/modals/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb clone application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
