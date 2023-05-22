import classes from './Brands.module.css'
import logo1 from '../../assets/images/logos/BMW.png'
import logo2 from '../../assets/images/logos/Volvo_logo1 1.png'
import logo3 from '../../assets/images/logos/Suzuki_logo_2 1.png'
import logo4 from '../../assets/images/logos/Toyota_EU 1.png'
import logo5 from '../../assets/images/logos/Nissan_2020_logo.png'
import logo6 from '../../assets/images/logos/Mercedes-Benz_free_logo.png'
import logo7 from '../../assets/images/logos/image 262.png'
import logo8 from '../../assets/images/logos/Vector.png'





const Brands = () => {
  return (
    <section className={classes.brandsWrapper}>
      <div><img src={logo1} alt='Brands here!' /></div>
      <div><img src={logo2} alt='Brands here!' /></div>
      <div><img src={logo3} alt='Brands here!' /></div>
      <div><img src={logo4} alt='Brands here!' /></div>
      <div><img src={logo5} alt='Brands here!' /></div>
      <div><img src={logo6} alt='Brands here!' /></div>
      <div><img src={logo7} alt='Brands here!' /></div>
      <div><img src={logo8} alt='Brands here!' /></div>
    </section>
  )
}

export default Brands