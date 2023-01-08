import React from "react";
import BigTitle from "../../components/bigTitle/BigTitle";
import Button from "../../components/button/Button";
import "./Header.css";

let lines = []; // table that will contain the data concerning the rows of the grid on the header
let pictureNum = 1;
for (let i = 1; i <= 4; i++) {
  // create 4 ligne for the grid
  let line = {
    dataScrollSpeed: i % 2 === 0 ? 16 : -16, // positive or negative value for one on two line
    images: [],
  };
  for (let j = pictureNum; j <= pictureNum + 4; j++) {
    line.images.push({ num: j }); // the number of every picture
  }
  pictureNum += 5; // increase by 3 with each round of the loop
  lines.push(line);
}

export default function Header({title, descr, cta}) {
  return (
    <header className="grid" id="grid">
      <div className="grid__wrap">
        {lines.map((line, id) => {
          return (
            <div
              key={id}
              className="grid__line"
              data-scroll
              data-scroll-speed={line.dataScrollSpeed}
              data-scroll-target="#grid"
            >
              {line.images.map((img, id) => {
                return (
                  <div
                    key={id}
                    className="grid__line-img"
                    style={{
                      backgroundImage: `url(./assets/img/${img.num}.jpg)`,
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="grid__content">
        <div className="grid__content-infos">
          <BigTitle
            title={title}
            className="grid__content-title"
          />
          <p className="grid__content-descr">
            {descr}
          </p>
          <Button
            title={cta}
            arrow={true}
            link="#discover"
          />
        </div>
      </div>
    </header>
  );
}
