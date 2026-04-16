import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from "@/components/ui/scroll-area";

// Experience Item Component
const ExperienceItem = ({ item }) => (
  <Card className="mb-4 overflow-hidden bg-primary text-white border border-white/10">
    <CardContent className="p-6">
      <div className="flex items-start">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-white">
            {item.company}
          </h3>
          <p className="text-sm text-gray-400">{item.duration}</p>
          <h4 className="font-medium text-green-400 mt-1">
            {item.position}
          </h4>

          <div className="mt-4">
            {item.details && item.details.length ? (
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 marker:text-green-400">
                {item.details.map((detail, i) => (
                  <li key={i} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm">
                No details specified
              </p>
            )}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Experience Section Component
const ExperienceSection = ({ experience }) => {
  return (
    <section className="max-w-3xl mx-auto p-4 bg-primary text-white">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">
          {experience.title}
        </h2>
      </div>

      <p className="mb-6 text-white/70 leading-relaxed">
        {experience.description}
      </p>

      <ScrollArea className="h-[420px] pr-3">
        {experience.items.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </ScrollArea>
    </section>
  );
};

// Data (Aligned with Resume)
const experience = {
  icon: "/assets/badge.svg",
  title: "My Experience",
  description:
    "Data Analyst with expertise in Power BI, SQL, Python, and Excel, focused on transforming raw data into actionable insights, building KPI-driven dashboards, and improving business performance through data-driven decision-making.",

  items: [
    {
      company: "Kong Head Technology Pvt. Ltd.",
      position: "Data Analyst",
      duration: "2023 – Present",
      details: [
        "Built Power BI dashboards to analyse operational performance and key business metrics.",
        "Performed data analysis and KPI tracking using Power BI and Excel.",
        "Improved company profitability by 35–40% through data-driven operational insights.",
        "Led a team of 10–15 members and trained employees on Microsoft data tools.",
        "Collaborated with Microsoft on Bing search improvement projects involving data evaluation.",
      ],
    },
    {
      company: "Unified Mentor Private Limited",
      position: "Business Analyst Intern",
      duration: "Mar 2025 – May 2025",
      details: [
        "Cleaned and validated datasets using SQL and Power Query.",
        "Built KPI-driven Power BI dashboards to support business decision-making.",
        "Documented data issues and supported automated reporting workflows.",
      ],
    },
    {
      company: "Amity University Noida",
      position: "Data Intern",
      duration: "May 2025 – Aug 2025",
      details: [
        "Cleaned, profiled, and validated multi-year ASER datasets using Python (Pandas, fuzzy matching).",
        "Ensured data consistency and resolved district-level mismatches.",
        "Prepared data quality documentation for research teams.",
      ],
    },
    {
      company: "Knuckle Head Corporation LLP",
      position: "Data Analyst",
      duration: "2021 – 2022",
      details: [
        "Worked on large-scale data annotation and evaluation (text, image, voice, video).",
        "Ensured accurate tagging and classification for machine learning models.",
        "Mentored new analysts, improving team productivity and efficiency.",
      ],
    },
  ],
};

// Main App Component
export default function App() {
  return <ExperienceSection experience={experience} />;
}