export const projects = [
    {
        id: 1,
        title: "Southern Minnesota Science Fair",
        shortDesc: "A web platform to streamline student science fair workflows with real-time data syncing and role-based dashboards.",
        description: `Built a multi-role web platform using React and Firestore to manage science fair submissions, reviews, and judging processes. 
        Implemented real-time data syncing and custom filtering for over 100 project evaluations. Role-based access and dashboards improved admin and participant efficiency.`,
        tags: ["React", "Firestore", "TypeScript"],
        githubLink: "", // Add GitHub link if available
        image: "/src/assets/images.png",
        demoAvailable: false,
        demoLink: "",
    },
    {
        id: 2,
        title: "CLI Travel Planner",
        shortDesc: "Command-line travel planner that builds personalized itineraries using Yelp and Google Generative AI APIs.",
        description: `Developed a CLI tool that fetches top destinations with Yelp API and generates daily itineraries using Google GenAI. 
        Integrated SQLite for schedule storage and retrieval. Implemented unit testing and CI workflows for automation and quality assurance.`,
        tags: ["Python", "SQLite", "Google GenAI", "Yelp API"],
        githubLink: "", // Add GitHub link if available
        image: "/src/assets/images.png",
        demoAvailable: false,
        demoLink: "",
    },
    {
        id: 3,
        title: "Alchemi",
        shortDesc: "An AI-powered educational platform that analyzes syllabi and creates quizzes using OpenAI API.",
        description: `Developed a learning platform using Next.js and MongoDB that parses syllabi and auto-generates quizzes. 
        Integrated AI tutor bots trained on course content for personalized learning. Built a dynamic quiz engine producing 10+ quizzes per syllabus.`,
        tags: ["Next.js", "MongoDB", "OpenAI"],
        githubLink: "", // Add GitHub link if available
        image: "/src/assets/images.png",
        demoAvailable: false,
        demoLink: "",
    }
];
