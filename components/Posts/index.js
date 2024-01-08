import imageUrlBuilder from '@sanity/image-url';
import styles from './Posts.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// useEffect(() => {
// 	if (posts.length) {
// 		const imgBuilder = imageUrlBuilder({
// 			projectId: 'ohvexoyp',
// 			dataset: 'production',
// 		});
const Posts = ({ posts }) => {
	console.log(posts);
	const router = useRouter();

	const [mappedPosts, setMappedPosts] = useState([]);

	useEffect(() => {
		if (posts.length) {
			const imgBuilder = imageUrlBuilder({
				projectId: 'ohvexoyp',
				dataset: 'production',
			});

			setMappedPosts(
				posts.map((post) => {
					return {
						...post,
						mainImage: imgBuilder.image(post.mainImage).width(500).height(250),
					};
				})
			);
		} else {
			setMappedPosts([]);
		}
	}, [posts]);
	return (
		<>
			<div className={styles.main}>
				<h1>Welcome To My Blog</h1>

				<h3>Recent Posts:</h3>

				<div className={styles.feed}>
					{mappedPosts.length ? (
						mappedPosts.map((post, index) => (
							<div
								onClick={() => router.push(`/${post.slug.current}`)}
								key={index}
								className={styles.post}>
								<h3>{post.title}</h3>
								<img className={styles.mainImage} src={post.mainImage} />
							</div>
						))
					) : (
						<>No Posts Yet</>
					)}
				</div>
			</div>
		</>
	);
};

export default Posts;

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent(`*[ _type == 'post' ]`);
	// const url = `https://ohvexoyp.api.sanity.io.v1/data/query/production?query=${query}`;
	const url = `https://ohvexoyp.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result || !result.result.length) {
		return {
			props: {
				posts: [],
			},
		};
	} else {
		return {
			props: {
				posts: result.result,
			},
		};
	}
};
