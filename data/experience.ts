export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  team: string;
  location: string;
  startDate: string;
  endDate: string;
  project: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "amazon",
    company: "Amazon",
    logo: "./images/experiences/amazon.svg",
    role: "Applied Scientist Intern",
    team: "Advertising Technology",
    location: "Bangalore",
    startDate: "Jan 2022",
    endDate: "Jul 2022",
    project: "Traffic Quality for Sponsored Ads",
    bullets: [
      "Building ML & DL algorithms for detecting advanced robotic behaviors to safeguard Amazon advertisers in an ever-evolving fraud landscape",
      "Developed DNN based crawler bot detection model with 11.9% improved robotic coverage and 4.9% higher Impression IVR",
    ],
    tags: ["Python", "Spark", "PySpark", "Tensorflow"],
  },
  {
    id: "ibm",
    company: "IBM Research AI",
    logo: "./images/experiences/ibm.png",
    role: "Research Intern",
    team: "IBM AI for Business Process Automation",
    location: "Bangalore",
    startDate: "Dec 2021",
    endDate: "May 2022",
    project: "Assessing the Impact of Event Log Quality on Predictive Process Monitoring",
    bullets: [
      "Carried out statistical analysis of data quality issues as a collection of patterns to improve performance of predictive process models",
    ],
    tags: ["Python", "PyTorch", "R", "PM4PY", "Time Series"],
  },
  {
    id: "adobe",
    company: "Adobe Inc.",
    logo: "./images/experiences/adobe.svg",
    role: "Research Intern",
    team: "Big Data Experience Lab",
    location: "Bangalore",
    startDate: "May 2021",
    endDate: "Aug 2021",
    project: "Videos2Doc: Generating Documents from a Collection of Procedural Videos",
    bullets: [
      "Developed a machine learning-based framework for automated document generation from a collection of procedural videos",
      "Eased the task of making multimedia accessible through automation in conversion to alternate presentation modes",
      "Established the utility of this work via empirical and qualitative evaluations",
      "Published at ACM IUI 2022 — https://dl.acm.org/doi/abs/10.1145/3490100.3516460",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "Transformers"],
  },
  {
    id: "philips",
    company: "Philips India Ltd.",
    logo: "./images/experiences/philips.svg",
    role: "Software Development Intern",
    team: "Philips Innovation Campus",
    location: "Bangalore",
    startDate: "Apr 2020",
    endDate: "Jun 2020",
    project: "Application of AI in prediction of Software Vulnerabilities",
    bullets: [
      "Designed, developed & deployed ML-based software to predict software vulnerabilities for optimizing the software testing process",
      "Fine-tuned SVM, Multinomial Naive Bayes, and Dense Neural Networks (LSTMs) for multiclass classification with 30+ categories",
      "Developed user interface using HTML5, CSS & JavaScript, integrated with backend using Eel",
    ],
    tags: ["Python", "Python-Eel", "Keras", "NLTK", "Pandas", "Scikit-Learn"],
  },
  {
    id: "iima",
    company: "Indian Institute of Management, Ahmedabad",
    logo: "./images/experiences/iima.svg",
    role: "Research Intern",
    team: "Department of Production and Quantitative Methods",
    location: "Ahmedabad",
    startDate: "May 2019",
    endDate: "Jul 2019",
    project: "Application of Machine Learning in Finance",
    bullets: [
      "Implemented an unsupervised, graph-based topic modeling algorithm to extract topic-specific articles from the news feed",
      "Successfully extracted 1,000+ articles from the CNN DailyMail dataset",
    ],
    tags: ["Python", "Numpy", "NLTK", "Pandas", "Networkx"],
  },
];
