import classes from './Cars.module.css';
import FullSwiper from '../Swiper/FullSwiper';

const Cars = () => {

  return (
    <section className={classes.carsContainer} id='cars'>
      <div className={classes.carsWrapper}>
        <div className={classes['head-before']}>
          <h2>Cars</h2>
        </div>
        <FullSwiper />
      </div>
    </section>
  )
}

export default Cars