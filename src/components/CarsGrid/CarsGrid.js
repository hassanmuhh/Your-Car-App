import classes from './CarsGrid.module.css'
import img1 from '../../assets/images/grid1.png'
import img2 from '../../assets/images/grid2.png'
import img3 from '../../assets/images/grid3.png'
import img4 from '../../assets/images/grid4.png'
import img5 from '../../assets/images/grid5.png'
import img6 from '../../assets/images/grid6.png'
import img7 from '../../assets/images/grid7.png'
import img8 from '../../assets/images/grid8.png'
import img9 from '../../assets/images/grid9.png'


const CarsGrid = () => {
  return (
    <section className={classes.carsGridWrapper}>
      <div><img src={img1} alt='' /></div>
      <div><img src={img2} alt='' /></div>
      <div><img src={img3} alt='' /></div>
      <div><img src={img4} alt='' /></div>
      <div className={classes.hasContent}>
        <img src={img5} alt='' />
        <div className={classes.carContent}>
          <h2>Tesla Model 3</h2>
          <p>Disruptive, avant-grade, futuristic, innovative</p>
          <button>Contact</button>
        </div>
      </div>
      <div><img src={img6} alt='' /></div>
      <div><img src={img7} alt='' /></div>
      <div><img src={img8} alt='' /></div>
      <div><img src={img9} alt='' /></div>
    </section>
  )
}

export default CarsGrid