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
    description:"Leveraging data analysis, business intelligence, and automation to deliver real-world solutions while mentoring and training teams to enhance performance and outcomes.",
    items:[
        {
            company :  "Amity University Noida",
            position : "Data Intern",
            duration : "May. 2025 - Aug. 2025",
            details: [
                "Collaborated under Dr. Pallavi Joshi Lahari at Amity Institute of Public Health.",
                "Analyzed and enhanced ASER datasets using R and Python.",
                "Performed data cleaning, transformation, and trend analysis across key indicators.",
                "Resolved district-level mismatches using fuzzy string matching.",
                "Generated comprehensive data-quality reports using Excel, OpenPyXL, and ReportLab."
         ],
        },
        {
            company :  "Unified Mentor Private Limited.",
            position : "Business Analyst Intern",
            duration : "Mar. 2025 - May. 2025",
            details: [
                "Conducted data analysis using Power BI, Excel, and SQL to deliver actionable insights.",
                "Designed dashboards for pizza sales, HR analytics, and influencer trends to support decision-making.",
                "Performed data extraction and transformation using SQL and Power Query.",
         ],
        },
        {
            company :  "Kong Head Technology Private Limited",
            position : "Cofounder & Operations Head",
            duration : "Jun. 2022 - Dec. 2024",
            details: [
                "Led a team of 10–15 employees, providing training on Microsoft data analysis tools.",
                "Achieved 35–40% profit growth through strategic project management and execution.",
                "Collaborated with Microsoft to enhance the Bing search engine functionality.",
                "Directed high-level decision-making and ensured alignment with organizational goals.",
                "Managed end-to-end project execution, client communication, and resource allocation.",
         ],
        },
         {
            company :  "Knuckle Head Corporation LLP",
            position : "Data Analyst",
            duration : "Jun. 2021 - May. 2022",
            details: [
                "Analysed and processed large datasets, performing data annotation, labelling, and evaluation",
                "Mentored new employees on data analysis tools, techniques, and best practices, improving team efficiency and performance.",
         ],
        },
    ]
}




// You can use the ExperienceSection component like this
export default function App() {
  return <ExperienceSection experience={experience} />;
};
