import classes from './FullSwiper.module.css';
import SwiperItem from './SwiperItem';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch } from 'react-redux';


const FullSwiper = () => {
  const [carsList, setCarsList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  let slides;

  useEffect(() => {
    const getDataFromJson = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();

      setCarsList(data.cars)
    }

    getDataFromJson()
  }, [dispatch])


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (screenWidth <= 544) {
    slides = 1
  } else {
    slides = 3
  }

  return (
    <div className={classes.swiper}>
      <Swiper
        slidesPerView={slides}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {carsList.map(car => {
          return <SwiperSlide style={{ height: 'auto' }} className={classes.swiperSlide} key={car.id}> <SwiperItem id={car.id} carClass={car.class} name={car.name} image={car.image} desc={car.description} seats={car.seats} luggage={car.luggage} /></SwiperSlide>
        })}

      </Swiper>
    </div>
  )
}

export default FullSwiper