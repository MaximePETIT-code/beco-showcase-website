import React from 'react';
import './Explication.css';

export default function Explication() {
	return (
		<div className="explain">
			<div className="flex__col">
				<h2>Suivez votre santé depuis chez vous</h2>
				<div className="explain__desc">
					<p>
						Grâce à Beco, suivre votre santé n'a jamais été aussi facile et
						accessible.
					</p>
					<p>
						Grâce à notre technologie de pointe, vous pouvez suivre vos données
						de santé en temps réel et avoir accès à des conseils de santé
						personnalisés.
					</p>
				</div>
				<div className="explain__container">
					<div className="explain__card">
						<img
							src="assets/Eclair.png"
							alt="Icon eclair"
							className="icon-eclair"
						/>
						<h3>Batterie ultra performant</h3>
						<p>Nos batteries assurent une utilisation continue et fiable</p>
					</div>
					<div className="explain__card">
						<img
							src="assets/Bluetooth.png"
							alt="icone bluetooth"
							className="icon-bluetooth"
						/>
						<h3>Connexion Bluetooth 5.0</h3>
						<p>Connexion à nos appareils en quelques secondes seulement</p>
					</div>
				</div>
			</div>
			<div className="col2">
				<img src="assets/phone.png" alt="" className="phone" />
				<img src="assets/man.jpg" alt="" className="image" />
			</div>
		</div>
	);
}
