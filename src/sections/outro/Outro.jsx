import React from "react";
import Button from "../../components/button/Button";
import "./Outro.css";

export default function Outro() {
  return (
    <section className="outro content">
      <p
        className="content__text content__text--centered"
        data-scroll
        data-scroll-speed="4"
      >
        N'attendez plus, adoptez <span className="text--green">Beco</span> pour
        suivre votre santé
      </p>
      <div className="content__button" data-scroll data-scroll-speed="8">
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
