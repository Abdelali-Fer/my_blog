import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface CardeProps {
  icon: React.ReactNode; 
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