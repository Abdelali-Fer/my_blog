import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { TbChartBar } from "react-icons/tb";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SiKingstontechnology } from "react-icons/si";
import { IconType } from "react-icons";

interface CardeProps {
  icon: React.ReactNode; // ✅ Correction ici
  title: string;
  description: string;
}

function Carde({ icon, title, description }: CardeProps) {
  return (
    <Card className="border border-gray-200  rounded-none w-56 hover:bg-yellow-400 cursor-pointer">
      <CardHeader className="flex items-start space-x-4">
        <div className="bg-[#f3e8d3] p-2 rounded-lg">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export default Carde