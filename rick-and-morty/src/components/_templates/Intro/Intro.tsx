import React from "react";
import styled from "styled-components";
import Meta from "../../_shared/Meta";

interface IIntroTemplateProps {
  className?: string;
  title: string;
}

const IntroTemplate: React.FC<IIntroTemplateProps> = ({ className, title }) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper className={className}>
        <IntroImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />

        <h1>{title}</h1>

        <CTA href="/characters">See all the Rick's</CTA>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;

const IntroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const IntroCopy = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: black;
`;

const CTA = styled.a`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  padding: 10px 14px;
  background-color: #97d7d7;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default IntroTemplate;
