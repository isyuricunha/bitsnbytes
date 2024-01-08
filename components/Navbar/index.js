import Link from "next/link";
import styles from "./Navbar.module.scss";
const Navbar = () => {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.brand}>
					<Link href="/">
						<a>Playhouse Media</a>
					</Link>
				</div>
				<div className={styles.nav_links}>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/blog">
						<a>Blog</a>
					</Link>

					<Link href="https://www.youtube.com/">
						<a target="_blank" rel="noreferrer">
							YouTube
						</a>
					</Link>

					<Link href="/about">
						<a>About</a>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
