import React from "react";

interface Article {
	title: string;
	description: string;
	url: string;
}

interface SearchResultProps {
	articles: Article[];
}

const SearchResult: React.FC<SearchResultProps> = ({ articles }) => {
	return (
		<div>
			<ul >
				{articles.map((article) => (
					<div className="flex flex-col rounded-lg bg-black p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-gray-700 my-3" key={article.url}>
						<h2 className="b-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-400">{article.title}</h2>
						<p className="mb-3 text-gray-500 dark:text-gray-400">{article.description}</p>
						<a className="inline items-center font-medium bg-yellow-600 rounded-md  hover:text-blue-800 hover:bg-yellow-800 dark:text-white dark:hover:text-white" href={article.url} target="_blank" rel="noreferrer">
							Read More
						</a>
					</div>
				))}
			</ul>
		</div>
	);
};

export default SearchResult;