import { hobbies } from '../data/hobbies'
export default function Hobbies({name}: {readonly name: string}) {
    return (
        <div className="pt-[2rem] ">
            <h3 className="font-bold text-2xl border-hung">{name}</h3>
            {
                hobbies.map((data,i) => (
                    <div key={i} className="flex items-center gap-2 mt-4">
                        {/* <div className='font-bold text-md'>{data.name}</div> */}
                        <div className='text-sm text-gray-600'>{data.description}</div>
                        
                    </div>
                ))
            }
        </div>
    );
}