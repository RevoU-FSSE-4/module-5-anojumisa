import { GetServerSideProps } from "next";

interface Article {
	title: string;
	description: string;
	url: string;
}

interface NewsHomeProps {
	articles: Article[];
}

const NewsHome: React.FC<NewsHomeProps> = ({ articles }) => {
	return (
		<div>
			<h1>Top Headlines in Politics</h1>
			<ul>
				{articles.map((article, index) => (
					<li key={index}>
						<h2>{article.title}</h2>
						<p>{article.description}</p>
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							Read more
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const apiKey = "19d2d58149474e4cb08304a83cbe8ffc";
	const url = `https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=${apiKey}&pageSize=16`;

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

export default NewsHome;
