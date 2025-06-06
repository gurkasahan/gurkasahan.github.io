import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    company: "Pearson Manufacturing",
    title: "Project Management Intern",
    date: "May 2024 – August 2024",
    location: "Mississauga, ON",
    logo: "/images/pearson.png",
    bullets: [
      "Streamlined quoting system using Excel automation and Power BI dashboards, improving efficiency by 35% and boosting project margins by up to 20%.",
      "Analyzed historical data from 100+ jobs to optimize machining time estimates and reduce turnaround delays.",
      "Built visual reporting tools to identify production bottlenecks and improve operational decision-making.",
      "Developed production process maps using mechanical and metallurgical aspects with engineers from various industry sectors",
      "Collaborated with cross-functional engineers to develop process maps integrating mechanical and material considerations.",
      "Defined project requirements with local and international stakeholders, contributing to end-to-end solution design.",
      "Supported system issue triage and escalation workflows in alignment with SLAs, minimizing client disruptions.",
    ],
  },
  {
    company: "D&A Group Services",
    title: "Data Analyst Intern",
    date: "May 2023 – Aug 2023",
    location: "Mississauga, ON",
    logo: "/images/da.png",
    bullets: [
      "Effectively identified patterns to improve collection strategies, resulting in a remarkable monthly gross collection of over $8k for the Hertz department",
      "Mined, categorized, and extracted structured data from 10,000+ scanned documents from healthcare and government clients",
      "Designed predictive Excel models that flagged high-priority files based on payment probability and debt age",
      "Analyzed data and communicated insights to executives, directors and product managers to inform decision making within the company",
      "Applied data analysis to provide product teams with actionable insights using Python, SQL and Excel",
    ],
  },
  {
    company: "Diamond & Diamond Lawyers",
    title: "IT & Legal Administrative Intern",
    date: "May 2022 – Dec 2022",
    location: "Toronto, ON",
    logo: "/images/diamond.png",
    bullets: [
      "Reduced physical document handling by 75% by implementing a digitization workflow using OCR software and structured folder hierarchies for active legal cases",
      "Provided administrative and technical support to legal staff, maintaining a secure digital filing system for 5,000+ client records and ensuring compliance with data protection standards (PIPEDA, ISO 27001)",
      "Assisted in digitizing case files and configuring access control for sensitive legal data using cloud platforms, contributing to improved file retrieval speed by 40%",
      "Liaised with IT vendors to maintain hardware, software, and user account systems across 4 departments",
      "Supported deployment of case management software and trained 15+ team members on new digital workflows",
      "Troubleshot client-side software and login issues, reducing downtime and improving team response times",
    ],
  },
];

const Experience = () => {
  return (
    <Box id="experience" py={10} px={6} maxW="900px" mx="auto">
      <Heading mb={8}>Experience</Heading>
      <VerticalTimeline lineColor="#3182CE">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={
              <Box
                as="img"
                src={exp.logo}
                alt={`${exp.company} Logo`}
                boxSize="100%"
                objectFit="contain"
                p={2}
              />
            }
            iconStyle={{
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            contentStyle={{
              background: "white",
              borderTop: "4px solid #3182CE",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <Heading as="h4" size="md">
              {exp.title}
            </Heading>
            <Text fontWeight="semibold" mt={1}>
              {exp.company} · {exp.location}
            </Text>
            <UnorderedList mt={3} spacing={2}>
              {exp.bullets.map((point, i) => (
                <ListItem key={i}>{point}</ListItem>
              ))}
            </UnorderedList>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
