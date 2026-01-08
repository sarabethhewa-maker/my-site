export type Product = {
  slug: string;
  name: string;
  price: string;
  subtitle: string;
  stripeUrl: string;
  image: string;       // base image shown on card
  hoverImage: string;  // image that pops in on hover
  badge?: string;
};


export const products: Product[] = [
	{
		slug: "colostrum-creamer-packet",
		name: "Colostrum Creamer Packet",
		price: "$1.50",
		subtitle: "Single-serve colostrum creamer packet.",
		image: "/products/colostrum-packet-v2.png",
		hoverImage: "/products/colostrum-packet-hover.png",
		stripeUrl: "https://buy.stripe.com/8x2fZh4sB4aTczucC3e3e01",
	},
	{
		slug: "protein-coffee-packet",
		name: "Protein Coffee Packet",
		price: "$2.00",
		subtitle: "Single-serve protein coffee packet.",
		image: "/products/protein-coffee-packet-v2.png",
		hoverImage: "/products/protein-coffee-packet-hover.png",
		stripeUrl: "https://buy.stripe.com/9B63cv7EN36P42Y45xe3e03",
	},
	{
		slug: "cognition-coffee-packet",
		name: "Cognition Coffee Packet",
		subtitle: "Protein coffee + nootropic blend (Saffron, Ginkgo, Alpha GPC).",
		price: "$2.00",
		image: "/products/cognition-packet-v2.png",
		hoverImage: "/products/cognition-packet-hover.png", // optional (swap later if you make a tilted hover)
		stripeUrl: "https://buy.stripe.com/7sY4gz2kt9vdeHC0Tle3e04",
	},
	{
		slug: "colostrum-creamer-20-pack",
		name: "Colostrum Creamer – 20 Pack",
		price: "$28.00",
		subtitle: "20 single-serve packets.",
		image: "/products/colostrum-20pack-v2.png",
		hoverImage: "/products/colostrum-20pack-hover.png",
		stripeUrl: "https://buy.stripe.com/6oU00j5wF36PeHC6dFe3e02",
	},
	{
		slug: "protein-coffee-packet-20-pack",
		name: "Protein Coffee Packet – 20 Pack",
		price: "$38.00",
		subtitle: "20 single-serve packets.",
		image: "/products/protein-20pack-v2.png",
		hoverImage: "/products/protein-20pack-hover.png",
		stripeUrl: "https://buy.stripe.com/4gMaEX9MV22L0QMgSje3e00",
	},

	{
		slug: "cognition-coffee-20-pack",
		name: "Cognition Coffee Packet – 20 Pack",
		subtitle: "20 single-serve packets. Protein coffee + nootropic blend.",
		price: "$38.00",
		image: "/products/cognition-20pack-v2.png",
		hoverImage: "/products/cognition-20pack-hover-v3.png",
		stripeUrl: "https://buy.stripe.com/eVqbJ1aQZ0YH7fa31te3e05",
	},
];
