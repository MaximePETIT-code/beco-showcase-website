import React from 'react';
import './Products.css';

export default function Products() {
	return (
		<>
			<section className="products container" id="discover">
				<h2 className="products__title">Nos produits</h2>
				<p className="products__desc">
					Beco est fier de vous proposer une gamme de produits de santé
					connectées de luxe pour améliorer votre bien-être quotidien
				</p>
			</section>
			<div className="whiteBg">
				<div className="products__list">
					<div className="products__row">
						<div className="products__item">
							<p>Montre connectée</p>
							<img src="assets/products/watch.png" alt="Montre connectée" />
						</div>
						<div className="products__item">
							<p>Brosse à dent connectée</p>
							<img src="assets/products/brush.png" alt="Montre connectée" />
						</div>
					</div>
					<div className="products__item">
						<p>Balance connectée</p>
						<img src="assets/products/scale.png" alt="Montre connectée" />
					</div>
				</div>
			</div>
		</>
	);
}
