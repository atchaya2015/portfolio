import websiteImg1 from '../assets/ecommerce.jpg';
import websiteImg2 from '../assets/webite.jpg';
import websiteImg3 from '../assets/food zone.JPG';



export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with React .',
                link: 'https://github.com/atchaya2015/Stylespot'
             },
            {
                image: websiteImg2,
                description: 'Ranking companies website using html,css,js',
                link: 'https://www.transportrankings.com/'
            },
            {
                image: websiteImg3,
                description: 'Food ordering website using html,css,reactjs',
                link: 'https://github.com/atchaya2015/reactfirst'
            }
            
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React,MERN and Tailwind CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className=' h-[200px] w-[200px] md:h-[250px] md:w-[350px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}