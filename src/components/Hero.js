import Heroimg from '../assets/hero.png';
import{useTypewriter} from 'react-simple-typewriter';
import { AiOutlineTwitter , AiOutlineFacebook , AiOutlineLinkedin} from "react-icons/ai";


function Hero() {
  const[typeEffect] = useTypewriter({
    words:['Atchaya T', 'Atchaya T'],
    loop:{},
    typespeed:100,
    deletespeed:40

  })
  return (
   <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
    <h1 className='text-white text-6xl font-hero-font'>Hi ,<br/> I'm  <span className='text-black'>{typeEffect}</span> 
    <p className='text-2xl py-4'>I'm a  front end Developer</p>
    </h1>
    
    <div className='flex py-10'>
     <a href ="#" className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
     <a href ="#" className='pr-5  hover:text-white'><AiOutlineFacebook  size={40} /></a>
     <a href ="#" className=' hover:text-white'><AiOutlineLinkedin size={40} /></a>
    </div>

    </div>



    <img className='md:w-1/3' src={Heroimg}/>
    
   </section>
  )
}

export default Hero
