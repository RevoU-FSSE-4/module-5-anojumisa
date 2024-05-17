import React from "react";
import Link from 'next/link';

const NotFound= () => {
	return (
		<div>
			<section className="">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold text-red-900 md:text-4xl dark:text-red-700">
							Something's missing.
						</p>
						<p className="mb-4 text-lg font-light text-gray-500 dark:text-yellow-600">
							Sorry, we can't find that page. You'll find lots to explore on the
							home page.{" "}
						</p>
						<Link
							href="/"
							className="inline-flex text-brown bg-red-900 bg-primary-600 hover:bg-primary-800 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
						>
							Back to Homepage
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default NotFound;