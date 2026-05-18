export interface CaseStudy {
  id: string;
  title: string;
  award?: string;
  date: string;
  bullets: string[];
  pdfFile: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "technice",
    title: "Corporate Case Challenge, IIT Guwahati",
    award: "Silver Medalist",
    date: "Sept 2019",
    bullets: [
      "Analyzed competitive positioning of Sanofi Aventis in Indian Pharma space",
      "Assessed growth opportunities in untapped Indian rural Pharma market",
      "Formulated Business Model for Sanofi's 'Prayas' initiative and re-evaluated product mix",
    ],
    pdfFile: "./files/Technice-Team_Invictus.pdf",
  },
  {
    id: "openiit",
    title: "Open IIT Case Challenge, IIT Kharagpur",
    award: "Silver Medalist",
    date: "Oct 2019",
    bullets: [
      "Analyzed Softbank's investment strategy & explored unorthodox approaches for measuring innovation",
      "Proposed a recession-proof business model for the time frame of SoftBank's investments",
      "Probed the timing of Vision Fund's Launch given warnings of an impending recession",
    ],
    pdfFile: "./files/OpenIIT-Team_Enigma.pdf",
  },
  {
    id: "necc",
    title: "North Eastern Case Challenge, IIT Guwahati",
    award: "Silver Medalist",
    date: "Aug 2019",
    bullets: [],
    pdfFile: "./files/NECC-Team_Invictus.pdf",
  },
  {
    id: "mmr",
    title: "Marketing & Market Research",
    date: "April 2022",
    bullets: [],
    pdfFile: "./files/MMR-Team_18.pdf",
  },
];
