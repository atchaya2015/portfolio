import Aboutimg from './assets/about.png';

function About() {
  return (
    <section className='flex flex-col md:flex-row  bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src ={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center font-hero-font text-white  '>
            <h1 className='text-4xl  border-b-4 border-[#9e4ef7] mb-5 w-[180px] font-bold'>About Me</h1>
            <p className=' text-xl pb-5'>Hi, I am Atchaya T. I am a Front-end Web Developer with 1.5 Years Experience. I Built E-commerce Websites with React.js And Tailwind CSS.</p>
            <p className='text-xl '>I am Proficient in Frontent skills like React.js,Tailwind CSS , SaSS ,CSS3 and many more.</p>
            </div>
        </div>
    </section>
  )
}

export default About
