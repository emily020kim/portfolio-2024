import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';
import { CgMenuRightAlt } from "react-icons/cg";

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
  margin: 150px 0 200px 0;
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

const Card = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  border: 1px solid #4c00b0;
  border-radius: 15px;
  padding: 20px 30px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CardTitle = styled.div`
  display: flex;
  width: 80%;
  justify-content: start;
  align-items: center;
  margin-bottom: 5px;
`;

const CardLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 15px;
`;

const cardData = [
  {
    year: '2024',
    title: 'unitedmasters',
    buttons: ['cms', 'frontend'],
    route: '/unitedmasters'
  }, 
  {
    year: '2024',
    title: 'sonomatic',
    buttons: ['AI', 'full stack'],
    route: 'sonomatic'
  },
  {
    year: '2024',
    title: 'im just a girl',
    buttons: ['coming soon', 'full stack'],
    route: 'im-just-a-girl'
  }
];

const Home = () => {
  const textWrapperRef = useRef(null);
  const navigate = useNavigate();

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
        <CardTitle>
          <CgMenuRightAlt size={15} className='text-purple-1000'/>
          <h1 className='ml-1 text-purple-1000 font-bold text-lg'>
            work & projects
          </h1>
        </CardTitle>
        {cardData.map((card, index) => (
          <Card key={index} onClick={() => navigate(card.route)}>
            <CardLayout>
              <div className='flex items-center'>
                <h1 className='text-purple-1000 font-bold mr-4 text-xl'>{card.year}</h1>
                <h1 className='text-purple-1000 font-medium text-5xl'>{card.title}</h1>
              </div>
              <div className='flex items-center'>
                {card.buttons.map((button, btnIndex) => (
                  <a
                    key={btnIndex}
                    className='rounded-full border border-purple-1000 py-1 px-3 mr-2 text-purple-1000 font-semibold text-xl'
                  >
                    {button}
                  </a>
                ))}
              </div>
            </CardLayout>
          </Card>
        ))}
      </Body>
      <Footer>
        footer here
      </Footer>
    </Wrapper>
  );
};

export default Home;
