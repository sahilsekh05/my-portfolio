import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {ScrollArea} from "@/components/ui/scroll-area"

{/*item.icon*/}
const ExperienceItem = ({ item }) => (
    <Card className="mb-4 overflow-hidden bg-primary text-white">
      <CardContent className="p-6">
        <div className="flex items-start">
         
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white">{item.company}</h3>
            <p className="text-sm text-gray-400">{item.duration}</p>
            <h4 className="font-medium text-green-400 mt-1">{item.position}</h4>
            <div className="mt-4">
              {item.details && item.details.length ? (
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 marker:text-accent">
                  {item.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">No details specified</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );


  const ExperienceSection = ({ experience }) => {
    return (
      <section className="max-w-3xl mx-auto p-4 bg-primary text-white">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{experience.title}</h2>
        </div>
        <p className="mb-6 text-white/60">{experience.description}</p>
        <ScrollArea className="h-[400px]">
            {experience.items.map((item, index) => (
                <ExperienceItem key={index} item={item} />
              ))}
        </ScrollArea>
      </section>
    );
  };

// Example usage of the ExperienceSection component
const experience = {
    icon:"/assets/badge.svg",
    title:"My experience",  
    description:"Applications of Machine Learning and Data Science in Real-World Projects.",
    items:[
        {
            company :  "Wafa Gestion - Attijariwafa bank",
            position : "Machine Learning Intern",
            duration : "Jul. 2025 - Sep. 2025",
            details: [
                "Developed a predictive model for Morocco’s policy rate by combining macroeconomic indicators with sentiment analysis of economic media, using a tailored NLP pipeline and statistical forecasting methods",

            ],
        },
        
    ]
}




// You can use the ExperienceSection component like this
export default function App() {
  return <ExperienceSection experience={experience} />;
};
