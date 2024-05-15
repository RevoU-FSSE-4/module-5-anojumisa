import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Layout/Navbar";
import Subscription from "@/Layout/Subscription";
import Footer from "@/Layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <><Navbar /><Subscription/><Footer /></>

  );
}
