import r34Bloemhof1 from "@/assets/projects/r34-bloemhof-1.jpg";
import r34Bloemhof2 from "@/assets/projects/r34-bloemhof-2.jpg";
import r34Bloemhof3 from "@/assets/projects/r34-bloemhof-3.jpg";
import r34Bloemhof4 from "@/assets/projects/r34-bloemhof-4.jpg";
import r730Sanral1 from "@/assets/projects/r730-sanral-1.jpg";
import r730Sanral2 from "@/assets/projects/r730-sanral-2.jpg";
import r730Sanral3 from "@/assets/projects/r730-sanral-3.jpg";
import r730Sanral4 from "@/assets/projects/r730-sanral-4.jpg";
import kutlwanong1 from "@/assets/projects/kutlwanong-1.jpg";
import kutlwanong2 from "@/assets/projects/kutlwanong-2.jpg";
import kutlwanongSewer1 from "@/assets/projects/kutlwanong-sewer-1.jpg";
import kutlwanongSewer2 from "@/assets/projects/kutlwanong-sewer-2.jpg";
import kutlwanongSewer3 from "@/assets/projects/kutlwanong-sewer-3.jpg";
import kutlwanongSewer4 from "@/assets/projects/kutlwanong-sewer-4.jpg";
import kutlwanongSewer5 from "@/assets/projects/kutlwanong-sewer-5.jpg";
import kutlwanongSewer6 from "@/assets/projects/kutlwanong-sewer-6.jpg";
import kutlwanongSewer7 from "@/assets/projects/kutlwanong-sewer-7.jpg";
import kutlwanongSewer8 from "@/assets/projects/kutlwanong-sewer-8.jpg";
import r34Bloemhof5 from "@/assets/projects/r34-bloemhof-5.jpg";
import r34Bloemhof6 from "@/assets/projects/r34-bloemhof-6.jpg";
import r34Bloemhof7 from "@/assets/projects/r34-bloemhof-7.jpg";
import robertsonWwtw1 from "@/assets/projects/WhatsApp Image 2026-05-25 at 19.56.24 (1).jpeg";
import robertsonWwtw2 from "@/assets/projects/WhatsApp Image 2026-05-25 at 19.56.24.jpeg";
import robertsonWwtw3 from "@/assets/projects/WhatsApp Image 2026-05-25 at 19.56.25 (1).jpeg";
import robertsonWwtw4 from "@/assets/projects/WhatsApp Image 2026-05-25 at 19.56.25 (2).jpeg";
import robertsonWwtw5 from "@/assets/projects/WhatsApp Image 2026-05-25 at 19.56.25.jpeg";

export interface Project {
  id: string;
  title: string;
  category: "road" | "water";
  location: string;
  year: string;
  client?: string;
  mainContractor?: string;
  consultingEngineers?: string;
  estimatedCompletion?: string;
  value?: string;
  duration?: string;
  description: string;
  fullDescription: string;
  scope: string[];
  challenges: string[];
  outcomes: string[];
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "r34-bloemhof-emergency-maintenance",
    title: "R34 Bloemhof Emergency Routine Road Maintenance",
    category: "road",
    location: "R34 Welkom to Bloemhof",
    year: "2025",
    client: "QTC Civils",
    value: "R7.2 Million",
    duration: "12 months",
    description: "Emergency routine road maintenance on R34 Section 3 to 5 from Bloemhof (Vaal River) to Church Street (R730).",
    fullDescription: "PROJECT NRA X.004-128-2024/1: For the emergency routine road maintenance on R34 Section 3 to 5 Bloemhof (Vaal River) (KM 6.38) to Church Street (R730) (KM 33.24). This comprehensive maintenance project covered approximately 27km of critical road infrastructure, ensuring continued safe passage for road users.",
    scope: [
      "General Maintenance",
    ],
    challenges: [
      "Maintaining traffic flow during construction",
      "Working in varying weather conditions",
      "Coordinating with multiple stakeholders",
    ],
    outcomes: [
      "Completed 2 weeks ahead of schedule",
      "Zero safety incidents",
      "Improved road surface quality by 95%",
      "Enhanced drainage capacity by 40%",
    ],
    images: [r34Bloemhof1, r34Bloemhof2, r34Bloemhof3, r34Bloemhof4, r34Bloemhof5, r34Bloemhof6, r34Bloemhof7],
    featured: true,
  },
  {
    id: "r730-sanral-periodic-maintenance",
    title: "R730 SANRAL Periodic Maintenance",
    category: "road",
    location: "R730 Section 3",
    year: "2023",
    client: "Tau Pele Construction",
    value: "R2.5 Million",
    duration: "8 months",
    description: "Periodic maintenance of the National Route R730 between Virginia and Harmony Way Intersection, and between Welkom and Odendaalsrus.",
    fullDescription: "CONTRACT NO SANRAL R.730-023-2017/1: Periodic maintenance of the National Route R730 Section 1 between Virginia (KM 12.00) and Harmony Way Intersection (KM 17.60), and R730 Section 3 between Welkom (KM 0.00) and Odendaalsrus (KM 12.90) Fonteintjie (KM 39.0). A comprehensive maintenance project focusing on drainage infrastructure improvements.",
    scope: [
      "Concrete Kerbing",
      "Concrete Channelling",
      "Chutes and Downpipes",
      "Concrete Linings Open Drains",
    ],
    challenges: [
      "High traffic load requirements",
      "Tight construction timeline",
      "Coordination with ongoing site development",
    ],
    outcomes: [
      "Designed for 100-year pavement life",
      "Completed within budget",
      "Zero defects at handover",
    ],
    images: [r730Sanral1, r730Sanral2, r730Sanral3, r730Sanral4],
    featured: true,
  },
  {
    id: "kutlwanong-gravel-roads-upgrade",
    title: "Kutlwanong Gravel Roads Upgrade",
    category: "road",
    location: "Kutlwanong Ward 18",
    year: "2023",
    client: "Poloko Trading 634",
    value: "R1.5 Million",
    duration: "6 months",
    description: "Upgrading of 3km gravel roads to surfaced roads in Matjhabeng LM, Kutlwanong Ward 18.",
    fullDescription: "BID NO: 25/2022-23: The upgrading of the 3km gravel roads to surfaced roads in Matjhabeng LM: Kutlwanong - Ward 18. A community-focused project aimed at upgrading gravel roads to paved surfaces, prioritizing local job creation and skills transfer while delivering quality road infrastructure.",
    scope: [
      "3km of road construction",
      "Kerbing and sidewalks",
      "Stormwater drainage",
      "Speed calming measures",
    ],
    challenges: [
      "Working within a densely populated area",
      "Managing community expectations",
      "Limited working space",
    ],
    outcomes: [
      "Created 45 local employment opportunities",
      "100% local labour utilization",
      "Improved accessibility for emergency services",
      "Enhanced property values in the area",
    ],
    images: [kutlwanong1, kutlwanong2],
    featured: true,
  },
  {
    id: "kutlwanong-sewer-network-repair",
    title: "Kutlwanong Sewer Network Repair",
    category: "water",
    location: "Kutlwanong",
    year: "2025",
    client: "Isiphethu Water Services",
    value: "R4.5 Million",
    duration: "12 months",
    description: "Repair and unblocking of sewer network and dilapidated or collapsed network in Kutlwanong.",
    fullDescription: "Matjhabeng Local Municipality: Repair and unblocking of sewer network and dilapidated or collapsed network in Kutlwanong. A critical infrastructure rehabilitation project addressing aging sewer systems to improve sanitation services for the community.",
    scope: [
      "1.3km of sewer rehabilitation",
      "15 manhole reconstructions",
      "CCTV pipeline inspection",
      "PVC Pipe removal",
      "Pipe relining and repairs",
    ],
    challenges: [
      "Dealing with active sewer lines",
      "Minimizing service interruptions",
      "Environmental protection measures",
    ],
    outcomes: [
      "Eliminated 95% of reported blockages",
      "Extended infrastructure lifespan by 100+ years",
      "Reduced maintenance costs by 60%",
      "Improved environmental compliance",
    ],
    images: [kutlwanongSewer1, kutlwanongSewer2, kutlwanongSewer3, kutlwanongSewer4, kutlwanongSewer5, kutlwanongSewer6, kutlwanongSewer7, kutlwanongSewer8],
    featured: true,
  },
  {
    id: "robertson-wastewater-treatment-works-upgrade",
    title: "Robertson Wastewater Treatment Works Upgrade",
    category: "water",
    location: "Robertson, Langeberg Municipality, Western Cape",
    year: "2025",
    mainContractor: "Hiload Inyanga Construction Company (Pty) Ltd",
    consultingEngineers: "Western and Eastern Cape Consulting Engineers (WEC Consult)",
    estimatedCompletion: "2025",
    description: "Upgrade of the Robertson Wastewater Treatment Works to improve treatment capacity, environmental compliance, and long-term sanitation sustainability.",
    fullDescription: "The Robertson Wastewater Treatment Works Upgrade in the Western Cape formed part of a major municipal infrastructure initiative aimed at improving wastewater treatment capacity, environmental compliance, and long-term sanitation sustainability within the Langeberg municipal region. The project included critical inlet works, road construction, and infrastructure upgrades to support improved municipal service delivery and environmental management.",
    scope: [
      "Critical inlet works upgrades",
      "Wastewater treatment infrastructure improvements",
      "Road construction and access improvements",
      "Municipal service delivery support works",
      "Environmental compliance upgrades",
    ],
    challenges: [
      "Upgrading live municipal wastewater infrastructure",
      "Maintaining environmental protection during construction",
      "Coordinating civil works across treatment and access infrastructure",
    ],
    outcomes: [
      "Improved wastewater treatment capacity",
      "Strengthened environmental compliance",
      "Supported long-term sanitation sustainability",
      "Enhanced municipal service delivery for the Langeberg region",
    ],
    images: [robertsonWwtw1, robertsonWwtw2, robertsonWwtw3, robertsonWwtw4, robertsonWwtw5],
    featured: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: "road" | "water"): Project[] => {
  return projects.filter((project) => project.category === category);
};
