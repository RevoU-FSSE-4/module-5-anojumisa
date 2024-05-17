
import { GetServerSideProps } from "next";

interface Article {
	title: string;
	description: string;
}

interface ScienceProps {
	articles: Article[];
}

const Science: React.FC<ScienceProps> = ({ articles }) => {
	return (
		<div>
			
            <h1>BBC News - Top Headlines</h1>
			<ul>
				{articles.map((article, index) => (
					<li key={index}>
						<h2>{article.title}</h2>
						<p>{article.description}</p>
					</li>
				))}
			</ul>
            
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
