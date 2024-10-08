import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-stone-950 text-white py-5 flex justify-center text-center">
          <p>&copy; 2024 plane verse, all rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

