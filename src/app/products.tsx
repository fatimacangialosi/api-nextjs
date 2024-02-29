import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

class Product {

	title: string | undefined;

	price: number | undefined;
	constructor(title: string, price: number) {
		//	title ="";
		//	price=0;
		this.title = title;
		this.price = price;
			}

}

export default function Products() {
	const [products, setProducts] = useState([]);
	//const data = Array(Product);
	let data: Product[];

	useEffect(() => {
		fetch("https://mockend.up.railway.app/api/products")
			.then((res) => {
				return res.json(); // questo è il parse di un file json
			})
			.then((data) => {
				setProducts(data);
				console.log(data);
			});
	});

	return (
		<>
			<h1>Products</h1>;{JSON.stringify(products)}
		</>
	);
}
