export type Product = {
	slug: string;
	name: string;
	price: string;
	subtitle: string;
	stripeUrl: string;
	image: string; // path in /public
	badge?: string;
};


export const products = [
	{
		slug: "colostrum-creamer-packet",
		name: "Colostrum Creamer Packet",
		price: "$150.00",
		subtitle: "Single-serve colostrum creamer packet.",
		image: "/products/colostrum-packet.png",
		stripeUrl: "https://buy.stripe.com/8x2fZh4sB4aTczucC3e3e01",
	},
	{
		slug: "protein-coffee-packet",
		name: "Protein Coffee Packet",
		price: "$2.00",
		subtitle: "Single-serve protein coffee packet.",
		image: "/products/protein-packet.png",
		stripeUrl: "https://buy.stripe.com/9B63cv7EN36P42Y45xe3e03",
	},
	{
		slug: "colostrum-creamer-20-pack",
		name: "Colostrum Creamer – 20 Pack",
		price: "$28.00",
		subtitle: "20 single-serve packets.",
		image: "/products/colostrum-20pack.png",
		stripeUrl: "https://buy.stripe.com/6oU00j5wF36PeHC6dFe3e02",
	},
	{
		slug: "protein-coffee-packet-20-pack",
		name: "Protein Coffee Packet – 20 Pack",
		price: "$38.00",
		subtitle: "20 single-serve packets.",
		image: "/products/protein-20pack.png",
		stripeUrl: "https://buy.stripe.com/4gMaEX9MV22L0QMgSje3e00",
	},
];
