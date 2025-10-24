import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {ScrollArea} from "@/components/ui/scroll-area"

{/*item.icon*/}
const EducationItem = ({ item }) => (
    <Card className="mb-4 overflow-hidden bg-primary text-white">
      <CardContent className="p-6">
        <div className="flex items-start">
         
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white">{item.instution || item.compagny}</h3>
            <p className="text-sm text-gray-400">{item.duration}</p>
            <h4 className="font-medium text-green-400 mt-1">{item.degree}</h4>
            <div className="mt-4">
              {item.field ? (
                <p className="text-sm text-gray-300">Field: {item.field}</p>
              ) : (
                <p className="text-gray-400 text-sm">No field specified</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );


  const EducationSection = ({ education }) => {
    return (
      <section className="max-w-3xl mx-auto p-4 bg-primary text-white">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{education.title}</h2>
        </div>
        <p className="mb-6 text-white/60">{education.description}</p>
        <ScrollArea className="h-[400px]">
            {education.items.map((item, index) => (
                <EducationItem key={index} item={item} />
              ))}
        </ScrollArea>
      </section>
    );
  };

// Example usage of the EducationSection component
const educationData = {
  icon: "/assets/cap.svg",
  title: "My Education",
  description: "An investment in knowledge pays the best interest. – Benjamin Franklin",
  items: [
    {
      instution: "MAKAUT University",
      degree: "Bachelor of Technology",
      duration: "2017-2021",
      field: "Computer Science and Engineering",
      
    },
    {
      instution: "Kendriya Vidyalaya No.2 BBSR",
      degree: "High School",
      duration: "2015- 2017",
      field: "Math & Physics & Computer Science & Chemistry",
    },
   
  ],
};




// You can use the EducationSection component like this
export default function App() {
  return <EducationSection education={educationData} />;
};

