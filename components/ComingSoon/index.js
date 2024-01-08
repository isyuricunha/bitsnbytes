import {
	FaFacebook,
	FaYoutube,
	FaWhatsapp,
	FaLinkedin,
	FaEnvelope,
} from "react-icons/fa";
import styles from "./ComingSoon.module.scss";

export default function ComingSoon() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>This Domain Has been Regitered with Bits'n'Bytes</p>
					<h2>Need a Website? Contact us Now</h2>
				</div>
				<div className={styles.grid}>
					<a
						href="mailto:info@bitsnbytes.com?subject=I need one of your services&body=Good Day, Jacob. We need you to ... "
						target="_blank"
						rel="noreferrer"
						className={styles.card}
					>
						<h2 className={styles.icons}>
							<FaEnvelope className={`${styles.icon} ${styles.email}`} />
							Email
						</h2>
						<p>info@bitsnbytes.com</p>
					</a>

					<a
						href="https://wa.me/message/"
						target="_blank"
						rel="noreferrer"
						className={styles.card}
					>
						<h2 className={styles.icons}>
							<FaWhatsapp className={`${styles.icon} ${styles.whatsapp}`} />
							WhatsApp / Call
						</h2>
						<p>+00 00 0 00 00</p>
					</a>

					<a
						href="https://www.facebook.com/playhousemediatech/"
						target="_blank"
						rel="noreferrer"
						className={styles.card}
					>
						<h2 className={styles.icons}>
							<FaFacebook className={`${styles.icon} ${styles.facebook}`} />
							Facebook
						</h2>
						<p>Like Us on Facebook</p>
					</a>

					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noreferrer"
						className={styles.card}
					>
						<h2 className={styles.icons}>
							<FaYoutube className={`${styles.icon} ${styles.youtube}`} />
							YouTube
						</h2>
						<p>Subscribe to our YouTube Channel.</p>
					</a>
				</div>
			</main>
		</div>
	);
}
