import React from 'react';
import './Intro.css';

export default function Intro() {
	return (
		<section className="into content">
			<p
				className="content__text content__text--centered"
				data-scroll
				data-scroll-speed="4"
			>
				Chez <span className="text--green">Beco</span>, nous sommes passionnés
				par la santé et le bien-être de nos clients.
				<br />
				<br />
				C'est pourquoi nous avons développé des produits de haute qualité rien
				que pour vous.
			</p>
		</section>
	);
}
