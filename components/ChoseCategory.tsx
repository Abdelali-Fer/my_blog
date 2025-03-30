import Carde from './Carde'
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SiKingstontechnology } from "react-icons/si";


function ChoseCategory() {
    const icons = [
        { icon: <TbBuildingSkyscraper size={28}/>, title: "Economy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { icon: <BsGraphUpArrow size={28}/>, title: "Finance", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { icon: <MdOutlineRocketLaunch size={28}/>, title: "Innovation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { icon: <SiKingstontechnology size={28}/>, title: "Technology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];
    return (
        <div className='w-full max-w-6xl mx-auto py-10 pt-10'>
            <div className='flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>Chose category</h2>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between pt-9 gap-6">
            {icons.map((item, index) => (
                <Carde 
                key={index} 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
                />
            ))}
            </div>
        </div>
    
    )
}

export default ChoseCategory