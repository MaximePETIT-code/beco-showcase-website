import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="into content">
      <p
        className="content__text content__text--centered"
        data-scroll
        data-scroll-speed="4"
      >
        Chez <span className="text--green">Beco</span>, nous sommes passionnés par
        la santé et le bien-être de nos clients. C'est pourquoi nous avons créé
        une gamme de produits de haute qualité qui permettent de suivre et de
        maintenir votre santé au quotidien.
      </p>
    </section>
  );
}
