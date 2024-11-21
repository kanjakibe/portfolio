import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    todolist,
    aquashine,
    netflix,
    knitohstore,
    restaurant,
    lyrical,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Development",
      icon: web,
    },
    {
      title: "Front-End Development Libraries",
      icon: mobile,
    },
    {
      title: "Javascript Algorithms and Data Structures",
      icon: backend,
    },
    {
      title: "Responsive Web Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      title: "Programming Languages",
      // company_name: "Tech Skills",
      // icon: starbucks,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Javascript",
        "PHP",
        "Python",
      ],
    },
    {
      title: "Tech Stack",
      // company_name: "Tech Skills",
      // icon: starbucks,
      iconBg: "#E6DEDD",
      // date: "March 2020 - April 2021",
      points: [
        "PostgreSQL",
        "Express",
        "React",
        "NodeJS",
        "MySQL",
      ],
    }
    
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Aquashine Limited",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - June 2024",
      points: [
        "Developed a Customer Relation Management system.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "I.T Support",
      company_name: "Kenya Medical Training College (KMTC)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Feb 2023",
      points: [
        "Monitoring and maintaining computer systems and networks.",
        "Installing and configuring computer hardware, software, systems, networks and printers",
      ],
    },
    {
      title: "Invigilator",
      company_name: "Kiambu Institute of Science and Technology (KIST)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2021 - Jan 2021",
      points: [
        "Helping to set up and check exam rooms before students arrived.",
        "Overseeing candidates throughout the exam, minimizing distractions, and ensuring they don't communicate with each other.",
      ],
    },
    {
      title: "Technical Assistant",
      company_name: "Top Choice Surveillance Ltd",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Mar 2019",
      points: [
        "Installing CCTV and data network installation.",
        "I.T support in the office when needed.",
      ],
    },
    {
      title: "Mathematics Teacher",
      company_name: "Supreme Care Primary School",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2015 - Nov 2015",
      points: [
        "Teaching and tutoring pupils.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CRM",
      description:
        "Web-based application platform that allows users to store records for the business, assign technicians to their duties and generate reports.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "blue-text-gradient",
        }
      ],
      image: aquashine,
      source_code_link: "#",
    },
    {
      name: "Netflix - Clone",
      description:
        "Web application with RESTful API to showcase trending, top picks and top rated movies. It is mobile responsive and it has user authentication.",
      tags: [
        {
          name: "React",
          color: "white-text-gradient",
        },
        {
          name: "RESTful API",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://netflix-clone-knon.vercel.app",
    },
    {
      name: "To-Do List",
      description:
        `Web-based application that allows the user to create, read, update and delete a to-do list.`,
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        }
      ],
      image: todolist,
      source_code_link: "https://kanjakibe.github.io/todo-React/",
    },
    {
      name: "Nelson Restaurant",
      description:
        "Web application which has the menu and about of the restaurant. It is mobile responsive.",
      tags: [
        {
          name: "React",
          color: "white-text-gradient",
        },
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        
      ],
      image: restaurant,
      source_code_link: "https://kanjakibe.github.io/restaurant/",
    },
    {
      name: "kNITOH store",
      description:
        "An e-commerce website with a collection of clothes, shoes with their prices. It is mobile resposive and gives a good user experience while navigating in the website.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: knitohstore,
      source_code_link: "https://kanjakibe.github.io/Ecommerce/",
    },
    {
      name: "Lyrical",
      description:
        `Web-based application that allows the user to enter an artist and a title of the song they have sang then search. The app retrieves the lyrics of the song which was entered.`,
      tags: [
        {
          name: "Javascript",
          color: "white-text-gradient",
        },
        {
          name: "RESTful API",
          color: "green-text-gradient",
        },
        
      ],
      image: lyrical,
      source_code_link: "https://lyrical-u1v3.onrender.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };