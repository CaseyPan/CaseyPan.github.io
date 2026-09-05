export type Education = {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "Master of Computer Science",
    location: "Champaign, IL",
    startDate: "Aug 2022",
    endDate: "Dec 2023",
  },
  {
    school: "National Tsing Hua University",
    degree: "B.S. in Computer Science",
    location: "Hsinchu, Taiwan",
    startDate: "Sep 2017",
    endDate: "Jan 2022",
    note: "Minor in Quantitative Finance",
  },
];
