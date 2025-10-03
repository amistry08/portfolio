import user_image from "./user-image.png"
import code_icon from "./code-icon.png"
import code_icon_dark from "./code-icon-dark.png"
import edu_icon from "./edu-icon.png"
import edu_icon_dark from "./edu-icon-dark.png"
import project_icon from "./project-icon.png"
import project_icon_dark from "./project-icon-dark.png"
import vscode from "./vscode.png"
import firebase from "./firebase.png"
import figma from "./figma.png"
import git from "./git.png"
import mongodb from "./mongodb.png"
import right_arrow_white from "./right-arrow-white.png"
import logo from "./logo.png"
import logo_dark from "./logo_dark.png"
import mail_icon from "./mail_icon.png"
import mail_icon_dark from "./mail_icon_dark.png"
import profile_img from "./profile-img.png"
import download_icon from "./download-icon.png"
import hand_icon from "./hand-icon.png"
import header_bg_color from "./header-bg-color.png"
import moon_icon from "./moon_icon.png"
import sun_icon from "./sun_icon.png"
import arrow_icon from "./arrow-icon.png"
import arrow_icon_dark from "./arrow-icon-dark.png"
import menu_black from "./menu-black.png"
import menu_white from "./menu-white.png"
import close_black from "./close-black.png"
import close_white from "./close-white.png"
import web_icon from "./web-icon.png"
import mobile_icon from "./mobile-icon.png"
import ui_icon from "./ui-icon.png"
import graphics_icon from "./graphics-icon.png"
import right_arrow from "./right-arrow.png"
import send_icon from "./send-icon.png"
import right_arrow_bold from "./right-arrow-bold.png"
import right_arrow_bold_dark from "./right-arrow-bold-dark.png"

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
}

export const workData = [
    {
        title: "Clutch - Car Dealership",
        description:
            "Full-stack app with Django, React, Node.js, MongoDB, and Docker for car dealership management.",
        bgImage: "/work-1.png",
        link: "https://github.com/amistry08/clutch_car_dealership",
    },
    {
        title: "Neetcode 150 Tracker",
        description:
            "Python-based tool to track coding interview progress with problem categorization and stats.",
        bgImage: "/work-2.png",
        link: "https://github.com/amistry08/Neetcode-150-Tracker",
    },
    {
        title: "Express Book Reviews",
        description:
            "Node.js app for managing book reviews, built as a Coursera project with authentication and APIs.",
        bgImage: "/work-3.png",
        link: "https://github.com/amistry08/expressBookReviews",
    },
    {
        title: "E-Plant Shopping",
        description:
            "Full-stack e-commerce demo for online plant shopping, integrating React, Node, and databases.",
        bgImage: "/work-4.png",
        link: "https://github.com/amistry08/e-plantShopping",
    },
]

export const experienceData = [
    {
        icon: assets.web_icon,
        title: "Central Transport - Billing Data Analyst",
        description:
            "Maintained 99% error-free billing records by ensuring data integrity and reconciliation for high-volume workflows. Automated reporting and validated new employee data entries to improve process compliance.",
        link: "",
    },
    {
        icon: assets.mobile_icon,
        title: "Triveni Global Software Services LLP - Software Engineer",
        description:
            "Developed 15+ reusable React components, integrated secure Node.js APIs for 5,000+ users, and boosted reusability by 40% through ATOM architecture. Mentored junior developers and collaborated in Agile Scrum practices.",
        link: "",
    },
    {
        icon: assets.ui_icon,
        title: "Triveni Global Software Services LLP - Intern (React.js)",
        description:
            "Built secure RESTful APIs in .NET, reduced bugs by 50% with unit testing, and managed CI/CD deployments. Contributed to a 20+ member Agile team and developed a Node.js chatbot to improve customer support.",
        link: "",
    },
]
export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: "Languages",
        description: "React, Node, Python, C#, AWS, and more",
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: "Education",
        description: "Masters in Applied Computing || University of Windsor",
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: "Projects",
        description:
            "20+ full-stack projects showcasing expertise in React, Node.js, and cloud development.",
    },
]

export const EXPERIENCES = [
    {
        id: "ct",
        title: "Billing Data Analyst",
        org: "Central Transport",
        period: "2023 – Present",
        bullets: [
            "Maintained 99%+ accuracy in billing workflows",
            "Automated checks with Excel formulas & macros",
            "Audited new team members’ entries for compliance",
            "Streamlined workflows with cross-team collaboration",
        ],
        tech: ["Excel", "VBA", "SQL"],
    },
    {
        id: "triveni-fsd",
        title: "Full Stack Developer",
        org: "Triveni Global Software Services LLP",
        period: "2020 – 2022",
        bullets: [
            "Developed 15+ reusable React components",
            "Built REST & GraphQL APIs with JWT/OAuth security",
            "Refactored codebase into ATOM architecture",
            "Mentored 10+ junior developers in Git & SDLC practices",
        ],
        tech: [
            "JavaScript",
            "React",
            "Node.js",
            ".NET",
            "SQL",
            "MongoDB",
            "Redux",
            "REST",
            "GraphQL",
            "Docker",
        ],
    },
    {
        id: "triveni-intern",
        title: "Software Developer (Intern)",
        org: "Triveni Global Software Services LLP",
        period: "2019 – 2020",
        bullets: [
            "Built secure RESTful APIs in .NET & Node.js",
            "Deployed apps with Azure DevOps CI/CD pipelines",
            "Implemented unit testing to cut bugs by 50%",
            "Created Node.js chatbot integrated with third-party APIs",
        ],
        tech: [
            "React",
            ".NET",
            "Node.js",
            "Express",
            "SQL",
            "Jest",
            "React Testing Library",
            "Azure DevOps",
        ],
    },
]

export const toolsData = [
    assets.vscode,
    assets.firebase,
    assets.mongodb,
    assets.figma,
    assets.git,
]
