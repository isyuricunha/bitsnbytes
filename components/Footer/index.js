import Image from "next/image";
import styles from "./Footer.module.scss";
const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<a
					href="https://bitsnbytes.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					{/* Powered by Playhouse Media */}
					<span className={styles.logo}>
						<Image
							src="/images/logobrand.svg"
							alt="Playhouse Media Logo"
							width={288}
							height={64}
						/>
					</span>
				</a>
			</footer>
		</>
	);
};

export default Footer;
