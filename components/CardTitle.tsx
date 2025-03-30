import React from 'react'
interface CardeProps {
    icon: React.ReactNode; 
    title: string;
}

function CardTitle({ icon, title }: CardeProps) {
    return (
        <div className='w-full border-2 border-solid flex items-center justify-around p-3 m-2 cursor-pointer hover:bg-[#FFD050] '>
            <div className="bg-[#FBF6EA] p-2 rounded-xl overflow-hidden">
                {icon}
            </div>
            <h2 className="text-lg font-bold text-gray-900 p">{title}</h2>
        </div>
    )
}

export default CardTitle