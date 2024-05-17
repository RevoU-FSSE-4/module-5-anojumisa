// components/NewsList.tsx
import React from "react";

interface Article {
	title: string;
	description: string;
}

interface NewsListProps {
	articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
	const slicedArticles = articles.slice(0, 5); // Slice the first 5 articles

	return (
		<div>
			<h1 className="py-3 text-4xl text-gray-300 font-extrabold text-center bg-yellow-700">
				Top Headlines
			</h1>
			<ul className="flex  max-w text-m mb-6 text-gray-500 dark:text-gray-400 list-outside">
				{slicedArticles.map((article, index) => (
					<li
						key={index}
						className="carousel carousel-center max-w-md p-4  bg-neutral rounded-box font-semibold text-left text-white dark:text-white hover:bg-yellow-700 hover:text-gray-300 rounded-md mt-3"
					>
						
						<div className="flex flex-col space-y-2">
							
							
							<span className="flex justify-center text-5xl italic top-2 left-2 bg-cyan-950 text-white px-2 rounded-full font-bold">
							{index + 1} 
						</span>
							<h2 className="text-2xl font-bold text-center">{article.title}</h2>
							
							<p className="italic text-sm text-center">{article.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NewsList;
