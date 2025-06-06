import { projects } from '../data/project'
export default function Project({name}: {readonly name: string}) {
    return (
        <div className="pt-[2rem] ">
            <h3 className="font-bold text-2xl border-hung mb-[1rem]">{name}</h3>
            <p>To improve my coding skills, stay updated with new web development technologies in general and ReactJS in particular, and with the desire to bring useful products to users, I have undertaken the following side projects. For each project, I handled everything from design layout and coding to deployment.</p>
            {
                projects.map((data,i) => (
                    <div key={i} className="flex flex-col gap-2 mt-4">
                        <div className='font-bold text-xl'>{data.name}</div>
                        <div className='text-sm text-gray-600'>{data.startDate} – {data.endDate}</div>
                        <div className='text-sm text-gray-600'>{data.description}</div>
                        <div className='font-semibold text-gray-800'>Technologies used:</div>
                        <ul className='list-disc pl-5'>
                            {
                                data.technologies.map((tech, j) => (
                                    <li key={j} className='text-sm text-gray-700'>{tech}</li>
                                ))
                            }
                        </ul>
                        
                        <div className="flex">
                            <div className="font-semibold text-gray-800 ">URL:&nbsp;</div>
                            <a href={data.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                                {data.link}
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}