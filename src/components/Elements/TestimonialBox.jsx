import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author, brand }) {
  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p className="font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="bluDs font13" style={{alignSelf: 'flex-end'}}>
        <em><b>{author}</b></em>
      </p>
      <p className="font13" style={{alignSelf: 'flex-end'}}>
        {brand}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;