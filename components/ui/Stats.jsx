"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of working experience",
  },
  {
    num: 15,
    text: "Project completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 155,
    text: "Code commits",
  },
];

export const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center xl:text-left">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center xl:items-start">
              <CountUp
                end={item.num}
                duration={3}
                delay={0.5}
                className="text-4xl xl:text-6xl font-extrabold text-white"
              />
              <p
                className={`mt-2 text-white/80 leading-snug ${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[160px]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
