/* "use client";
import Products from "./products";

export default function Home({ products }) {
	return (
		<>
			<div>
				<h1>Lista dei prodotti</h1>
				<ul>
					{products.map((product) => (
						<li key={product.title}>
							{product.title} - price:{product.price}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
export async function getServerSideProps() {
	// Effettua una richiesta all'API interna
	const res = await fetch("http://localhost:3000/api/products");
	const data = await res.json();

	return {
		props: {
			products: data,
		},
	};
}
 */
import { useEffect, useState } from "react";

export default function Home() {
	const [myData, setMyData] = useState([]);

	useEffect(() => {
		try {
			fetch("/api/products")
				.then((response) => response.json())
				.then((data: any) => {
					if (data.data) {
						setMyData(data.data);
						console.log(data);
					} else {
						setMyData([]);
					}
				});
		} catch (error) {
			setMyData([]);
		}
	}, []);

	console.log(myData);
	return (
		<>
			<div>
				{myData.map((product: { id: any; title: string }) => (
					<div key={product.id}>
						<h2>{product.title}</h2>
					</div>
				))}
			</div>
		</>
	);
}
