import React from 'react';
import './Advantages.css';

export default function Advantages({ item }) {
	return (
		<section className="advantages container">
			{item.map((item, id) => {
				return (
					<div className="advantages__item">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d={item.svg} />
						</svg>
						<h3 className="advantages__title">{item.title}</h3>
						<p className="advantages__descr">{item.descr}</p>
					</div>
				);
			})}
		</section>
	);
}
