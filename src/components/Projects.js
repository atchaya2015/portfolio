import websiteimg from './assets/Coloshop-Free.jpg'
import website1img from './assets/fruits.png'


function Projects() {
  return (
    <section className='flex flex-col px-5 py-5 justify-center bg-primary font-hero-font text-white' id = 'projects'>
        <div className='w-1/2 py-20'>
        <div className='flex justify-center'>
            <h1 className='text-4xl  border-b-4 border-[#7009e3] mb-8 w-[150px] font-bold'>Projects</h1>
            </div>
        </div>
        <div className='w-1/2 py-20' >
        <div className='flex px-10 gap-5 h-[200px]'>
            <img src={websiteimg}/>
            <img src={website1img}/>
            

            </div>
        </div>
    </section>
  )
}

export default Projects
