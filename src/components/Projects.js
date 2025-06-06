import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projectData = [
  {
    title: "Predictive Maintenance ML App",
    imageSrc: "/images/predictive-maintenance.png",
    description: "A machine learning app to predict equipment failure using sensor data.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit","Random Forest"],
    github: "https://github.com/gurkasahan/predictive-maintenance-ml",
    details: {
      purpose: `The Predictive Maintenance ML App was designed to proactively identify equipment failure using machine learning. Rather than waiting for issues to arise, it analyzes sensor data from machinery to predict failures in advance, minimizing downtime and saving costs.`,
      frontend: `Built using Streamlit for rapid UI development. This enabled quick interactions, input forms for data upload, and real-time predictions directly in the browser.`,
      backend: `Utilized a Random Forest Classifier trained on over 10,000 synthetic records. The model was integrated into a backend service that processes CSV uploads and returns predictions for each equipment row.`,
      design: `Designed for maintenance engineers to detect anomalies, the app provides a clear, minimal interface with CSV upload capability and prediction output in an easy-to-read table format.`,
      screenshot: "/images/predictive-maintenance-full.png"
    }
  },
  {
  title: "Parkinson’s Detection ML Model",
  imageSrc: "/images/parkinsons-detection.png",
  description: "Used MLP on clinical biomarkers to detect Parkinson’s from over 2,000 patients.",
  tech: ["Python", "Pandas", "Scikit-learn", "SVM", "MLP", "GridSearchCv"],
  github: "https://github.com/gurkasahan/MachineLearning-Parkinson-Detection",
  details: {
    purpose: `The Parkinson’s Detection ML Model was designed to assist in early diagnosis of Parkinson’s Disease using structured patient data. Due to the challenges in accessing high-quality MRI datasets, the project pivoted to a structured clinical dataset from Kaggle.`,
    frontend: `Built entirely in Jupyter Notebook using Pandas, Matplotlib, and Seaborn to visualize data insights, distribution patterns, and model performance.`,
    backend: `Implemented a Multi-Layer Perceptron (MLP) classifier trained on over 2,000 patient records with data preprocessing (normalization, encoding), model training, and evaluation (confusion matrix, ROC-AUC).`,
    design: `Originally planned for CNN on MRI data, the team pivoted to structured data modeling due to real-world limitations. Despite this, the project preserved its core goal: enabling ML-based Parkinson’s detection through a practical, clean implementation.`,
    screenshot: "/images/predictive-maintenance-full.png"
  }
}
,
  {
  title: "Global Life Expectancy Analysis",
  imageSrc: "/images/life-expectancy.png",
  description: "Analyzed WHO life expectancy trends and visualized socioeconomic effects.",
  tech: ["R", "ggplot2", "dplyr"],
  github: "https://github.com/gurkasahan/global-life-expectancy-analysis",
  details: {
    purpose: `This project analyzes life expectancy trends across various countries and economic statuses using WHO data. The goal was to identify disparities, trends, and potential socioeconomic predictors influencing longevity, helping inform policy and public health strategy.`,
    frontend: `Utilized R Markdown (Rmd) and HTML to present interactive data visualizations and model interpretations. The final output was a structured report embedded with plots, tables, and narrative analysis to communicate findings clearly.`,
    backend: `The backend consisted of:
- Data cleaning: Loaded and filtered WHO life expectancy data (Life-Expectancy-Data-Updated.csv) for nulls and outliers using dplyr.
- Statistical analysis: Conducted hypothesis testing, linear regression, and correlation studies to explore relationships between life expectancy and factors like GDP, schooling, BMI, and HIV/AIDS impact.
- Modeling: Developed multiple linear regression models to predict life expectancy by country, gender, and year.`,
    design: `Designed to appeal to both technical and non-technical users, the report includes:
- Violin plots, correlation heatmaps, and bar charts created with ggplot2
- Regression summaries and interpretation blocks
- Clear layout split across four tasks covering EDA, hypothesis testing, modeling, and improvement strategies`
  }
}
,
  {
    title: "FlexiFit",
  imageSrc: "/images/flexifit.png",
  description: "A gym membership management system with real-time class booking, trainer dashboards, and member profiles.",
  tech: ["ASP.Net", "Entity Framework Core", "SQL Lite", "SQL Server", "C#", "JavaScript", "CSS/HTML", "Git", "PostMan", "Jira"],
  github: "https://github.com/gurkasahan/FlexiFit",
  details: {
    purpose: `FlexiFit was created to streamline gym operations by centralizing class scheduling, trainer coordination, and member profile management. The goal was to replace paper-based systems with a scalable and interactive digital solution.`,
    frontend: `The UI was built using HTML, CSS, and JavaScript, powered by Razor pages in ASP.NET Core MVC. It includes real-time booking forms, dashboards for both members and trainers, and responsive layouts optimized for desktop and mobile.`,
    backend: `Used ASP.NET Core with Entity Framework Core to handle CRUD operations for classes, members, and trainers. Authentication was implemented with Identity, while SQLite/SQL Server powered the data layer for testing and production respectively.`,
    design: `The system follows a layered architecture (Presentation, Business Logic, Data Access), ensuring maintainability and separation of concerns. Tools like Jira and Git were used for task management and version control. Postman was used to test API endpoints during development.`,
    screenshot: "/images/flexifit-full.png"
  }
},
  {
  title: "Tipstarter",
  imageSrc: "/images/tipstarter.png",
  description: "A crowdfunding platform for tipping content creators. Users can post projects, pledge tips, and view campaign analytics.",
  tech: ["React", "Node.Js", "Next.Js", "Typescript", "Figma", "Git", "Supabase", "TipLink API", "SpherePay API", "Google API"],
  github: "https://github.com/vawogbemi/tipstarter",
  details: {
    purpose: `Tipstarter was developed as a modern tipping and micro-funding platform, allowing content creators to launch personalized campaigns and receive support from their audience in a transparent and engaging way.`,
    frontend: `Built with React and Next.js using TypeScript for type safety and component scalability. UI elements were designed in Figma and translated into responsive web pages, featuring dynamic modals, campaign overviews, and pledge forms.`,
    backend: `The backend was powered by Supabase for authentication and database services. Integrated with third-party APIs including TipLink (for crypto-based tipping), SpherePay (for fiat pledges), and Google API (for calendar and creator insights).`,
    design: `Focused on clean UX with user-first navigation, clear CTAs, and secure transactional flows. Git was used for version control and team collaboration. Emphasis was placed on creator transparency and user trust with real-time pledge stats and campaign progress tracking.`,
    screenshot: "/images/tipstarter1.png"
  }
  },
  {
  title: "KnightsTour",
  imageSrc: "/images/knightstour.png",
  description: "A visualization of the Knight’s Tour problem using backtracking and recursion algorithms.",
  tech: ["C#", "Xamarin", "ASP.Net", "HTML/CSS", "Git"],
  github: "https://github.com/gurkasahan/KnightsTour",
  details: {
    purpose: `KnightsTour was created as a mobile app to visually demonstrate the Knight’s Tour problem from chess — where a knight must visit every square of the board exactly once. It serves both as a learning tool and an algorithm visualizer.`,
    frontend: `Built using Xamarin.Forms for cross-platform mobile development. The UI features a responsive chessboard grid and step-by-step animation of the knight’s movement. Highlights the current step and provides controls to start, pause, or reset the algorithm.`,
    backend: `The logic implements a recursive backtracking algorithm in C#. It calculates valid knight moves and uses depth-first search to find a valid tour. Optimized to prevent stack overflow and handle both 8x8 and smaller grids.`,
    design: `The design emphasizes simplicity and clarity for educational purposes. It includes visual feedback for invalid moves, successful completion, and performance metrics (e.g., step count). Developed with user interaction and debugging in mind.`,
    screenshot: "/images/knightstour-full.png"
  }
},
  {
  title: "ABC-Inc.",
  imageSrc: "/images/abcinc.png",
  description: "An employee management system built using ASP.NET Core MVC, EF, and Bootstrap, tailored for internal HR operations.",
  tech: ["JavaScript", "HTML", "CSS", "React"],
  github: "https://github.com/gurkasahan/ABC-Inc.",
  details: {
    purpose: `ABC-Inc. is a web-based internal HR solution built to help small-to-medium businesses manage employees, roles, salaries, and department data efficiently.`,
    frontend: `The UI is developed using Razor Views with Bootstrap for responsiveness and custom styling. Clean layout and navigation make it intuitive for HR staff to view employee records and manage data.`,
    backend: `The backend leverages ASP.NET Core MVC and Entity Framework Core with a code-first approach. A SQL Server database is used to persist data like employee info, roles, and salaries. Controllers handle CRUD operations with clear separation of concerns.`,
    design: `Designed to streamline HR processes by enabling the creation, editing, and deletion of employee and role data through secure forms and validation. The structure follows MVC architecture, ensuring scalability and maintainability.`,
    screenshot: "/images/abcinc-full.png"
  }
},
  {
  title: "TheBooker",
  imageSrc: "/images/thebooker.png",
  description: "A command-line based book inventory system for small bookstores or personal libraries.",
  github: "https://github.com/gurkasahan/TheBooker",
  details: {
    screenshot: "/images/thebooker.png",
    purpose: `TheBooker was built as a lightweight inventory management tool to help small bookstores or personal users manage book records directly from the terminal. It provides basic functions like adding, editing, listing, and deleting book entries.`,
    backend: `Developed entirely in C++ using Object-Oriented Programming principles. Book data is stored in local text files using simple file I/O, with classes managing data structure and logic.`,
    design: `The menu-driven console layout ensures easy navigation. The program uses structured functions and class encapsulation to promote code clarity and reusability.`
  }
}

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <Box id="projects" py={10} px={6} maxW="900px" mx="auto">
      <Heading mb={6}>Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projectData.map((project, index) => (
          <Box key={index} onClick={() => handleOpen(project)} cursor="pointer">
            <ProjectCard {...project} />
          </Box>
        ))}
      </SimpleGrid>
      <ProjectModal isOpen={isOpen} onClose={handleClose} project={selectedProject} />
    </Box>
  );
};

export default Projects;
