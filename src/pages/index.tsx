import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Layout/Navbar";
import TopNews from "@/Layout/TopNews";
import Subscription from "@/Layout/Subscription";
import Footer from "@/Layout/Footer";
import NewsHome from "@/Layout/NewsHome";
import Science from "./[category]/science";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar />
    <TopNews news={undefined} />
    <Science articles={[]} />
    <Subscription/>
    <Footer />
    </>

  );
}
