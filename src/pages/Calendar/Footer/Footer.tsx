import React, { useEffect, useState } from 'react';
import DateBlock from '../../../components/DateBlock';
import Paging from '../../../components/Paging';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, SwiperBtn } from './styled';
import { useSwiper } from 'swiper/react';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"


interface IFooterProps {
  children?: React.ReactNode;
  events: Array<object>;
  total: number;
  currentGap: number;
  setCurrentGap: any;
}

const EventSwiper = ({ events, ...props }: any) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 40, 
      depth: 300, 
      modifier: 1,
      slideShadows: false 
  }}
  return (
    <Swiper 
     className='swiper' {...props}>
      {events.map((e: any, i: any) => {
        return (
          <SwiperSlide className='slide' key={i}>
            <DateBlock year={e.year} text={e.info} />
          </SwiperSlide>
        );
      })}
    </Swiper>)
};

const Footer: React.FC<IFooterProps> = ({ events, total, currentGap, setCurrentGap }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 7px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <Container>
      {matches ? <>
        <Paging count={total} currentGap={currentGap} setCurrentGap={setCurrentGap} />
        <EventSwiper
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          events={events} />
      </> : <>
        <EventSwiper
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          events={events}
          className="mySwiper" />
        <Paging count={total} currentGap={currentGap} setCurrentGap={setCurrentGap} />
      </>}
    </Container>
  )
};

export default Footer;
