import { GetServerSideProps } from "next";
import React from "react";

type News = {
    url: string;
    title: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-04-17&sortBy=publishedAt&apiKey=19d2d58149474e4cb08304a83cbe8ffc"
    );
    const news: News[] = await response.json(); 
    console.log("server", news);
    return {
        props: { news },
    };
};

export default function TopNews({ news }: { news: News[] | undefined }) { 

    if (!news) {
        return <p>Loading news...</p>; 
    }

    return (
        <div>
            <h1 className=" py-3 text-4xl text-gray-300 font-extrabold text-center underline bg-yellow-700">TOP NEWS</h1>
            <ul className="flex  max-w text-m text-gray-500 dark:text-gray-400 list-outside">
            {news.map(
                    (data, index) => ( 
                        <li
                            key={index}
                            className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box font-semibold text-left text-gray-900 dark:text-black hover:bg-yellow-700 hover:text-gray-300 rounded-md mt-3"
                        ><a href={data.url}>
                            <span className="text-3xl text-red-700">{index + 1}. </span> {data.title}
                            </a>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
