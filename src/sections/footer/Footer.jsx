import React from "react";
import "./Footer.css";

export default function Footer({ logo, menu = [], sn = [] }) {
  return (
    <section className="footer container">
      <div className="footer__logo">
        <svg>
          <path d="m30.19,16.5s0,0,0,0c0,0,0,0-.01,0-.01.01-.03.03-.04.04l-13.61,13.61-2.09-2.09,9.68-9.68c.38-.38.57-.88.57-1.37s-.19-.99-.57-1.37c-.76-.76-1.99-.76-2.75,0l-9.68,9.68-2.1-2.1,6.27-6.27c.38-.38.57-.88.57-1.37s-.19-.99-.57-1.37c-.76-.76-1.99-.76-2.74,0l-6.27,6.27-2.12-2.12,1.89-1.89c.38-.38.57-.88.57-1.37s-.19-.99-.57-1.37c-.76-.76-1.99-.76-2.75,0l-1.85,1.85C-.92,11.79-.64,6.32,2.83,2.85c3.77-3.77,9.89-3.77,13.67,0l.02-.02c3.78-3.77,9.89-3.77,13.67,0s3.78,9.89,0,13.67Z" />
        </svg>
      </div>
      <div className="footer__infos">
        <div className="footer__infos-right">
          <p className="footer__infos-copyright">
            &copy; 2023 Beco - Tous droits réservés.
          </p>
          <ul className="footer__infos-menu">
            {menu.map((item, id) => {
              return (
                <li key={id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__infos-left">
          <ul className="footer__infos-sn">
            {sn.map((item, id) => {
              return (
                <li key={id}>
                  <a title={`Notre page ${item.title}`} href={item.link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d={item.svg} />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
