import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import { Link } from "react-scroll";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Who We Are: Your Trusted PR Partner
            </h1>
            <p className="font13">
              Parvocal is more than a public relations firm—we are your<br/>
              strategic partner in building authentic, purpose-driven
              communication. Our team is driven by a shared belief that<br/>
              transparency, strategy, and impact are the keys to connecting
              brands with their audiences. We work closely with each client,<br/>
              taking the time to understand their unique challenges and
              objectives. Whether you’re launching a new product or managing a<br/>
              brand crisis, we offer the insight and expertise to help you
              navigate the complexities of modern communication.
            </p>
            <p className="font13" style={{ marginTop:'30px' }}>
              Our commitment
              to excellence has earned us the trust of brands across diverse
              industries, all looking to build stronger, more authentic<br/>
              connections with their audience.
            </p>  
              
            
          </HeaderInfo>
          <div className="row textCenter"></div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <Link
                activeClass="active"
                style={{ padding: "10px 15px", cursor: "pointer" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
            Hear directly from the brands that have experienced the impact of Parvocal’s strategic PR solutions.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
