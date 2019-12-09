import React, { Component } from "react";
import "./App.css";
// import NavBar from "./NavBar";
import MediaCard from "./cardForItem";
import SimpleImageSlider from "react-simple-image-slider";

export default class ItemComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const images = [
      {
        url:
          "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
      },
      {
        url:
          "ihttps://mybookpk.s3.amazonaws.com/assets/upload/halls/hall_2016oRW5zQzE7TeqySPl92nfsWDnQJGt7O3sws7HiLWS"
      },
      {
        url:
          "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
      },
      {
        url:
          "https://mybookpk.s3.amazonaws.com/assets/upload/halls/hall_2016oRW5zQzE7TeqySPl92nfsWDnQJGt7O3sws7HiLWS"
      },
      {
        url:
          "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
      },
      {
        url:
          "https://mybookpk.s3.amazonaws.com/assets/upload/halls/hall_2016oRW5zQzE7TeqySPl92nfsWDnQJGt7O3sws7HiLWS"
      },
      {
        url:
          "https://www.geo.tv/assets/uploads/updates/2019-03-21/231757_5095423_updates.jpg"
      }
    ];

    return (
      <div>
        {" "}
        {/* <NavBar /> */}
        <span style={{ display: "inline" }}>
          <SimpleImageSlider
            style={{ marginTop: "8rem" }}
            width={900}
            height={400}
            images={images}
          />

          <MediaCard />
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13536.790522042322!2d35.83889189999999!3d31.9826576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca185283dfb89%3A0x611dda32fcd10faa!2z2LPZitiq2Yog2YXZiNmE!5e0!3m2!1sar!2sjo!4v1575807547103!5m2!1sar!2sjo"
          width="100%"
          height="300"
          frameborder="0"
          style={{ border: "1", float: "right", marginTop: "3rem" }}
          allowfullscreen=""
        ></iframe>
      </div>
    );
  }
}
