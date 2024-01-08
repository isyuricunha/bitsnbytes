import styles from '../../styles/Blog.module.scss';
const TopHeader = () => {
	return (
		<>
			<div className={styles.top_header}>
				<h1>Web Playground</h1>
				<p>
					One-stop resource for everything related to web design and
					development.
				</p>
				<div className={styles.categories}>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JAVASCRIPT</li>
						<li>REACT JS</li>
						<li>FIGMA</li>
						<li>ADOBE XD</li>
						<li>DESIGN</li>
						{/* <li>NEXT JS</li> */}
					</ul>
				</div>
				<p className={styles.latest_articles}>Latest:</p>
			</div>
		</>
	);
};

export default TopHeader;
