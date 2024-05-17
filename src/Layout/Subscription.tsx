import React, { useState } from "react";

interface SubscriptionProps {}

const Subscription: React.FC<SubscriptionProps> = () => {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");

	const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.setItem("email", email);
		setShowModal(true);
		setEmail("");
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className="flex flex-col justify-between items-center my-5">
			<h1 className="self-center bg-red-700 w-100 p-4 rounded-lg text-2xl font-semibold whitespace-nowrap my-4 dark:text-white">
				AJ News
			</h1>
			<h2>Let's subscribe so you don't miss the latest updates!</h2>
			<div className="my-4">
				<form className="w-full mx-auto" onSubmit={handleSubscribe}>
					<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative  w-full">
						<input
							type="email"
							id="default-search"
							className="block p-4 w-80 text-sm text-gray-200 border border-gray-100 rounded-lg bg-gray-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Your email..."
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button
							type="submit"
							className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>
			{showModal && (
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
					<div className="bg-white rounded-lg p-8 shadow-md">
						<h3 className="text-xl font-semibold mb-4">
							Thank you for subscribing!
						</h3>
						<p className="text-gray-700">
							You will now receive email updates from AJ News.
						</p>
						<button
							className=" text-white bg-red-500 hover:bg-blue-700 focus:ring-4 my-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							onClick={handleCloseModal}
						>
							Close
						</button>
					</div>

					<div className="absolute inset-0" onClick={handleCloseModal} />
				</div>
			)}
		</div>
	);
};

export default Subscription;