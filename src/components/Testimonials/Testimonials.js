import { useEffect, useState } from 'react'
import classes from './Testimonials.module.css'
import { FaStar } from 'react-icons/fa'
import img from '../../assets/images/bmw.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const getDataFromJson = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();

      setTestimonials(data.testimonials)
    }

    getDataFromJson()
  }, [])


  console.log(testimonials);
  return (
    <section className={classes.testiWrapper}>
      <div className={classes['heading-before']}><h2>Testimonials</h2></div>

      <div className={classes.testiContent}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={classes.myAutoSwiper}
        >
          {testimonials.map(testi => {
            return <SwiperSlide key={testi.name}>
              <p className={classes.text}>{testi.description}</p>
              <div className={classes.stars}>
                <FaStar className={classes.icon} />
                <FaStar className={classes.icon} />
                <FaStar className={classes.icon} />
                <FaStar className={classes.icon} />
                <FaStar className={classes.icon} />
              </div>

              <div className={classes.info}>
                <p>{testi.name}</p> <span>Egypt</span>
              </div>
            </SwiperSlide>
          })}

          <img src={img} className={classes.testiImg} alt='' />
        </Swiper>
      </div>

    </section >
  )
}

export default Testimonials