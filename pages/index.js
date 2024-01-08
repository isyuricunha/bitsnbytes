import Head from "next/head";
// import Image from 'next/image';
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Bits'n'Bytes - Home</title>
				<meta name="description" content="Bits'n'Bytes Your eletronic store!" />
				<link rel="canonical" href="https://www.bitsnbytes.com" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Bits'n'Bytes - Your eletronic store!"
				/>
				<meta
					property="og:description"
					content="Bits'n'Bytes Your eletronic store!"
				/>
				<meta property="og:url" content="https://www.bitsnbytes.com" />
				<meta
					property="og:site_name"
					content="Bits'n'Bytes Your eletronic store!"
				/>
				<meta
					property="article:publisher"
					content="https://www.facebook.com/bitsnbytes/"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ComingSoon />
			<Footer />
		</div>
	);
}
