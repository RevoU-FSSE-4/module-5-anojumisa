import { GetServerSideProps } from "next";

interface Article {
	source: any;
	urlToImage: string | undefined;
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
			<h1 className="py-3 text-4xl text-gray-300 font-extrabold text-center bg-yellow-700">
				Highlight of The Day
			</h1>
			<div className="flex flex-row flex-wrap mt-4 mx-14">
				{articles.map((article, index) => (
					<div key={index}>
						<ul className="">
							<li className="">
								<div className=" flex flex-col mt-6 mx-1 my-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
									<div className="  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
										<img src={article?.urlToImage} alt={article?.title} />
									</div>
									<div className="flex justify-around">
										<h3 className="text-red-700 font-bold">
											{article?.source.name}
										</h3>
										<h4>
											{new Date(
												article.publishedAt.substring(0, 10)
											).toLocaleDateString("default", {
												month: "long",
												day: "numeric",
												year: "numeric",
											})}
										</h4>
									</div>
									<div className="p-6">
										<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
											{article?.title}
										</h5>
										<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
											{article?.description}
										</p>
									</div>
									<div className="p-6 pt-0">
										<button
											className=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
											type="button"
											onClick={() => window.open(article?.url, "_blank")}
										>
											Read More
										</button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				))}
			</div>

			<h1 className="py-3 text-4xl mb-5 text-gray-300 font-extrabold text-center bg-yellow-700">
				What's on Today
			</h1>
			<div className="">
				<ul className="">
					{articles.map((article, index) => (
						<a href={article.url} target="_blank" rel="noreferrer"><li key={index} className="">
							<div className="flex flex-col h-100 mx-auto mb-6 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-7xl md:flex-row">
								<img
									className="h-100 rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
									src={article.urlToImage}
									alt={article.title}
								/>
								<div className="flex flex-col justify-start p-6">
									<h5 className="mb-2 text-xl text-black font-medium">
										{article.title}
									</h5>
									<p className="mb-4 text-black text-base">
										{article.description}
									</p>
									<p className="text-xs text-surface/75 dark:text-neutral-300">
										{new Date(article.publishedAt).toLocaleDateString()}
									</p>
								</div>
							</div>
						</li></a>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NewsHome;
