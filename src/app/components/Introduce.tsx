import React from 'react';
import { introduce } from '../data/introduce'
import { FaLocationDot, FaPhone, FaVoicemail } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
export default function Introduce() {
    return (
        <div className='flex flex-col items-center gap-4  bg-white border-hung  pt-5'>
            <h1 className='text-3xl font-bold '>{introduce.name}</h1>
            <div>
                <ul className='flex  gap-2'>
                    <li className='flex items-center gap-2'>
                        {/* icon */}
                        <FaLocationDot />
                        <span>{introduce.address}</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        {/* icon */}
                        <FaPhone />
                        <a href={`mailto:${introduce.email}`}>{introduce.email}</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        {/* icon */}
                        <MdEmail  />
                        <a href={`tel:${introduce.phone}`}>{introduce.phone}</a>
                    </li>
                </ul>
            </div>
        </div>
        );
}