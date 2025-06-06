import { experience } from '../data/experience'
export default function Experience({name}: {readonly name: string}) {
    return (
        <div className="pt-[2rem] ">
            <h3 className="font-bold text-2xl border-hung">{name}</h3>
            {
                experience.map((data,i) => (
                    <div key={i} className="flex flex-col gap-2 mt-4">
                        <div className='font-bold text-xl'>{data.company}</div>
                        <div className='text-md text-gray-600'>{data.position}</div>
                        <div className='text-sm text-gray-600'>{data.startDate} – {data.endDate}</div>
                        <ul className='list-disc pl-5'>
                            {
                                data.description.map((responsibility, j) => (
                                    <li key={j} className='text-sm text-gray-700'>{responsibility}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}