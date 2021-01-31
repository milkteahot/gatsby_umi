import React from "react";

const Hero = () => (
  <div className="container py-12 lg:pb-16">
    <h2
      className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900"
      style={{ fontFamily: "Noto Sans KR" }}
    >
      쌍둥이 새들의 세상
      <br />
      <span
        className="text-blue-600"
        style={{
          fontWeight: "300",
          fontSize: "26px",
          fontFamily: "Noto Sans KR"
        }}
      >
        The world of twinbirds
      </span>
    </h2>
  </div>
);

export default Hero;
