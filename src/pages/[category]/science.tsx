import Navbar from "@/Layout/Navbar";
import { GetServerSideProps } from "next";
import Footer from "@/Layout/Footer";
interface Article {
    url: string | undefined;
	urlToImage: string | undefined;
	title: string;
	description: string;
}

interface ScienceProps {
	articles: Article[];
}

const Science: React.FC<ScienceProps> = ({ articles }) => {
	return (
		<div>
			<Navbar />
			<h1 className="py-3 text-4xl text-gray-300 font-extrabold text-center bg-yellow-700">TODAY ON SCIENCE</h1>
			<ul className="flex flex-wrap justify-center p-5">
				{articles.map((article, index) => (
					<li key={index}>
						<a
							href={article.url}
                            target="_blank"
							className="flex flex-col items-center m-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-yellow-700 dark:bg-red-900 dark:hover:bg-red-700"
						>
							<img
								className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
								src={article.urlToImage}
								alt={article.title}
							/>
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{article.title}
								</h5>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{article.description}
								</p>
							</div>
						</a>
					</li>
				))}
			</ul>
			<Footer />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const apiKey = "19d2d58149474e4cb08304a83cbe8ffc";
	const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		return {
			props: {
				articles: data.articles,
			},
		};
	} catch (error) {
		console.error("Error fetching news:", error);
		return {
			props: {
				articles: [],
			},
		};
	}
};

export default Science;
