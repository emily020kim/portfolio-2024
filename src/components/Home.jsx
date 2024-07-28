import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

import Navbar from './Navbar';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const Header = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin: 100px 0 200px 0;
`;

const HeaderText = styled.h1`
  font-size: 80px;
  font-weight: 700;
  align-content: center;
  color: #4c00b0;
  margin: 0;
  line-height: 0;
  letter-spacing: 2px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  border: 3px solid #4c00b0;
  border-radius: 15px;
  padding: 20px 30px;
  margin-bottom: 10px;
`;

const Home = () => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const titles = gsap.utils.toArray('.text-wrapper h1');
    const tl = gsap.timeline({repeat: -1});
    titles.forEach(title => {
      const splitTitle = new SplitTextJS(title, { type: "chars" });

      tl
        .from(splitTitle.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        })
        .to(
          splitTitle.chars,
          {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
          },
          "+=1"
        );
    });
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Header>
        <div className="text-wrapper" ref={textWrapperRef}>
          <HeaderText>Emily Kim</HeaderText>
          <HeaderText>Developer</HeaderText>
          <HeaderText>Art Lover</HeaderText>
        </div>
      </Header>
      <Body>
        <Card>content</Card>
        <Card>content</Card>
        <Card>content</Card>
      </Body>

    </Wrapper>
  );
};

export default Home;
