export type Product = {
	slug: string;
	name: string;
	price: string;
	subtitle: string;
	stripeUrl: string;
	image: string; // path in /public
	badge?: string;
};

export const PRODUCTS: Product[] = [
	{
		slug: "colostrum-creamer-packet",
		name: "Colostrum Creamer Packet",
		price: "$150.00",
		subtitle: "Single-serve colostrum creamer packet.",
		stripeUrl: "PASTE_STRIPE_LINK_HERE",
		image: "/products/colostrum-packet.png",
		badge: "New",
	},
	{
		slug: "protein-coffee-packet",
		name: "Protein Coffee Packet",
		price: "$2.00",
		subtitle: "Single-serve protein coffee packet.",
		stripeUrl: "PASTE_STRIPE_LINK_HERE",
		image: "/products/protein-packet.png",
	},
	{
		slug: "colostrum-creamer-20-pack",
		name: "Colostrum Creamer – 20 Pack",
		price: "$28.00",
		subtitle: "20 single-serve packets.",
		stripeUrl: "PASTE_STRIPE_LINK_HERE",
		image: "/products/colostrum-20pack.png",
		badge: "Bestseller",
	},
	{
		slug: "protein-coffee-20-pack",
		name: "Protein Coffee Packet – 20 Pack",
		price: "$38.00",
		subtitle: "20 single-serve packets.",
		stripeUrl: "https://buy.stripe.com/4gMaEX9MV22L0QMgSje3e00",
		image: "/products/protein-20pack.png",
		badge: "Bestseller",
	},
];
