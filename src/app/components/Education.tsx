import { education } from '../data/education'
export default function Education({name}: {readonly name: string}) {
    return (
        <div className="pt-[2rem] ">
            <h3 className="font-bold text-2xl border-hung">{name}</h3>
            {
                education.map((edu,i) => (
                    <div key={i} className="flex flex-col gap-2 mt-4">
                        <div className='font-bold text-xl'>{edu.institution}</div>
                        <div className='text-sm text-gray-600'>{edu.startDate} – {edu.endDate}</div>
                    </div>
                ))
            }
        </div>
    );
}