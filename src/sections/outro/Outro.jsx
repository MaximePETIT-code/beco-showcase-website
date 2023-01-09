import React from 'react';
import Button from '../../components/button/Button';
import './Outro.css';

export default function Outro() {
	return (
		<section className="outro content">
			<p className="content__text content__text--centered">
				N'attendez plus, adoptez <span className="text--green">Beco</span>
			</p>
			<div className="content__button">
				<Button
					title="Rejoindre notre communauté sur Instagram"
					type="inverted"
					target="_blank"
					link="https://instagram.com/beco.officiel"
				/>
			</div>
		</section>
	);
}
