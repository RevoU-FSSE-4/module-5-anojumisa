import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Layout/Navbar";
import TopNews from "@/Layout/TopNews";
import Subscription from "@/Layout/Subscription";
import Footer from "@/Layout/Footer";
import NewsHome from "@/Layout/NewsHome";
import Science from "./[category]/science";
import { GetServerSideProps } from 'next';
import NewsList from "@/components/NewsList";


interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  
}

interface HomeProps {
  articles: Article[];
}

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <>
    <Navbar />
    
    <NewsList articles={articles} />
    <NewsHome articles={articles} />
    
    <Subscription/>
    <Footer />
    </>

  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const apiKey = '19d2d58149474e4cb08304a83cbe8ffc';
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}&pageSize=8`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      props: {
        articles: data.articles,
      },
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default Home;