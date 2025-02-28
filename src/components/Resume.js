import Resumeimg from '../assets/resume.jpg';
import resume from '../assets/ATCHAYA T.pdf';
function Resume() {
  return (
    <section id='resume' className='flex flex-col md:flex-row  bg-secondary px-5 py-20'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[400px]' src={Resumeimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center font-hero-font text-white  '>
            <h1 className='text-4xl  border-b-4 border-[#9e4ef7] mb-5 w-[140px] font-bold'>Resume</h1>
            <p className=' text-xl pb-5'>You can view my resume <a href={resume} download='resume' className='btn '>Download</a></p>
            </div>
        </div>
    </section>
  )
}

export default Resume
