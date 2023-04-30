import { Inter } from "next/font/google";
import "../styles/globals/reset.scss";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

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
          <Modal isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
