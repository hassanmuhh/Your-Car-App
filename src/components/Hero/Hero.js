import classes from './Hero.module.css'

const Hero = () => {
  return (
    <section className={classes.heroWrapper} id='home'>
      <span></span>
      <div className={classes.heroContent}>
        <h1>Find the perfect car for you at YourCar</h1>
        <p>We offer a wide range of cars that cater to your needs and budget. visit us today and drive away with your dream car!</p>
        <button>Learn More</button>
      </div>
    </section>
  )
}

export default Hero