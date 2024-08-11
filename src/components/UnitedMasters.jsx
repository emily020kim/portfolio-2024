import {useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

import { IoIosMusicalNotes } from "react-icons/io";
import { BsSunglasses } from "react-icons/bs";

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
  font-size: 90px;
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
  flex: 1;
`;

const Description = styled.div`
  display: flex;
  width: 100vw;
  margin-left: 300px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const UnitedMasters = () => {
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
          <HeaderText>emily kim</HeaderText>
          <HeaderText>developer</HeaderText>
          <HeaderText>art lover</HeaderText>
        </div>
      </Header>
      <Body>
        <Description>
          <Text>
            <Flex>
              <IoIosMusicalNotes size={25} className='text-blue-700'/>
              <h1 className='text-blue-700 ml-1 font-semibold text-3xl'>creation of a new CMS tool</h1><br/>
            </Flex>
            <h2 className='text-blue-700 font-semibold text-xl'>streamlining the onboarding process to sign partner artists quicker.</h2><br/>
            <Flex>
              <h2 className='text-blue-700 font-semibold mr-1 text-xl'>heard the music team doesn&apos;t like to write emails? say less</h2>
              <BsSunglasses size={25} className='text-blue-700' />
            </Flex>
          </Text>

        </Description>
      </Body>
    </Wrapper>
  )
};

export default UnitedMasters;