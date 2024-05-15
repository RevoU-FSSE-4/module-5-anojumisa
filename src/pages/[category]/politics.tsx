import React, { useEffect, useState } from "react";
import Navbar from "@/Layout/Navbar";
import Footer from "@/Layout/Footer";

const url =
	"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=19d2d58149474e4cb08304a83cbe8ffc";
type NewsData = {
	urlToImage: string;
	title: string;
	source: {
		name: string;
	};
	publishedAt: string;
	description: string;
	url: string;
};
const Politics = (props: NewsData) => {
	const [news, setNews] = useState([]);

	const getNews = async () => {
		try {
			const response = await fetch(url);
			const json = await response.json();
			setNews(json.articles);
		} catch (error) {
			console.error("Error fetching news:", error);
		}
	};

	useEffect(() => {
		getNews();
	}, []);
	return (
        <div>
            <Navbar />
        
		<div className="flex flex-row flex-wrap mt-4">
			{news.map((data: NewsData, index) => (
				<div key={index}>
					<ul className="">
						<li className="">
							<div className=" flex flex-col mt-6 mx-1 my-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
								<div className=" mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
									<img src={data?.urlToImage} alt={data?.title} />
								</div>
								<div className="flex justify-around">
									<h3 className="text-red-700 font-bold">
										{data?.source.name}
									</h3>
									<h4>
										{new Date(
											data.publishedAt.substring(0, 10)
										).toLocaleDateString("default", {
											month: "long",
											day: "numeric",
											year: "numeric",
										})}
									</h4>
								</div>
								<div className="p-6">
									<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
										{data?.title}
									</h5>
									<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
										{data?.description}
									</p>
								</div>
								<div className="p-6 pt-0">
									<button
										className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
										type="button"
										onClick={() => window.open(data?.url, "_blank")}
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
        <Footer />
        </div>
	);
};

export default Politics;
