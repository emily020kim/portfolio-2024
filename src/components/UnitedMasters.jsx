import {useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

import { IoIosMusicalNotes } from "react-icons/io";
import { BsSunglasses } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineSparkles } from "react-icons/hi2";

import Navbar from './Navbar';
import UM from '../assets/UM.png';
import UM1 from '../assets/UM1.png';
import UM2 from '../assets/UM2.png';

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
  margin: 150px 0 300px 0;
`;

const HeaderText = styled.h1`
  font-size: 90px;
  font-weight: 700;
  align-content: center;
  color: #1D4ED8;
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
  margin-bottom: 200px;
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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  justify-content: center;
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
            <h2 className='text-blue-700 font-semibold text-xl'>streamlining the onboarding process to sign partner artists quicker</h2><br/>
            <Flex>
              <h2 className='text-blue-700 font-semibold mr-1 text-xl'>heard the music team doesn&apos;t like to write emails? we got rid of them</h2>
              <BsSunglasses size={25} className='text-blue-700' />
            </Flex>
          </Text>
        </Description>
        <ImageContainer>
          <img src={UM} className='mb-24'/>
          <div className='flex flex-col w-full justify-center items-center mb-24'>
            <h1 className='text-blue-700 font-semibold text-2xl'>
              UnitedMasters is a music label for independent artists
            </h1><br/>
            <a 
              className='text-blue-700 font-semibold text-xl flex items-center underline'
              href='https://unitedmasters.com/'
            >
              check out UnitedMasters <MdArrowOutward size={20} className='text-blue-700 ml-1' />
            </a>
          </div>
          <img src={UM1} className='mb-24'/>
          <div className='flex w-full justify-center mb-24'>
            <h1 className='flex items-center text-blue-700 font-semibold text-2xl'>
              an organized dashboard to send emails <AiOutlineMail size={20} className='text-blue-700 mx-1'/> and create accounts for partner artists
            </h1>
          </div>
          <img src={UM2} className='mb-24'/>
          <div className='flex w-full justify-center mb-24'>
            <h1 className='flex items-center text-blue-700 font-semibold text-2xl'>
              sleek form layout to create an account for a partner artist <HiOutlineSparkles size={20} className='text-blue-700 ml-1'/>
            </h1>
          </div>
        </ImageContainer>
      </Body>
    </Wrapper>
  );
};

export default UnitedMasters;