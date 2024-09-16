import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Parvocal's media relations expertise transformed our brand’s visibility. Their strategic approach and media connections helped us secure top-tier coverage that truly elevated our market presence."
            author="Olives Ltd."
            brand="— Afrifa Yaw, CEO"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="During a critical crisis, Parvocal provided unparalleled support. Their crisis management skills were vital in maintaining our brand's integrity and navigating a complex situation with confidence."
            author="ASC-ME Coop."
            brand="— The Boys, Co-Founders"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Parvocal’s brand strategy services have been instrumental in redefining our market position. Their creative insights and strategic guidance have set us apart in a competitive industry."
            author="Clozt"
            brand="— Michael Kpodo, Co-Founder"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Parvocal revitalized our online presence through digital PR and social media management. We saw a big increase in our social media following and engagement. Their content strategies connected us more meaningfully with our audience."
            author="EcoSmart Enterprises"
            brand="— Alex Kwesi, Marketing Director"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
