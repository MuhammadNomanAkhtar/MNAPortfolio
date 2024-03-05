import {
  abraham,
  collins,
  hannan,
  kapsule,
  lengo_project,
  unifiedlogo,
  appicslogo,
  joynlogo,
  bitsollogo,
  upwork,
  wbsender,
  azima_project,
  paisa_project,
  lcl_web_app,
  kapsule_project,
  kugali_project,
  qzee_project,
  scan_it_project,
  tout_project,
  wb_project,
  radio_endstation,
} from "../assets";

const kColors = {
  fpurple: {
    400: "#9200D0",
    700: "#4C0083",
  },
  sky: {
    400: "#2D9DE0",
    500: "#2d9de0",
    700: "#091F3C",
  },
  fblue: {
    400: "#005C97",
    800: "#363795",
  },
  pink: {
    200: "#ee0979",
    400: "#ff0099",
    500: "#8a2387",
    600: "#db2777",
    800: "#493240",
  },
  orange: "#ff6a00",
  navy: {
    400: "#ffffff",
  },
  red: {
    400: "#c31432",
    800: "#240b36",
  },
};

const socialLinks = {
  email: "umarrehman6448@gmail.com",
  linkedIn: "https://www.linkedin.com/in/umarrehmandev/",
  github: "https://github.com/UmarRehman",
  whatsapp: "https://wa.me/923105632516",
  // telegram: 'https://t.me/ahsanhafeezsatti',
};
const testimonials = [
  {
    name: "Collins Mugume",
    // position: 'Co-Founder',
    company: "Azima",
    photo: collins,
    review:
      "Extraordinary professional! It has been an honour to work with Umar. He is deliberate with his projecting scooping and implements with great attention to every detail. For me, one of his most important skill sets is his ability to self manage and keep our project moving forward no matter my availability or the lack thereof. No worries once you have agreed on the scoop and a course of action. A truly great person to work with.",
  },
  {
    name: "Hannan Hashmi",
    // position: 'Co-CEO',
    company: "Kapsule",
    photo: hannan,
    review:
      "There are developers and then there is Umar. Umar is an outstanding senior software developer and an asset to any project he is involved in. He has played an invaluable role in development and management of key projects at Kapsule including: our on-demand delivery web apps, medical data analytics dashboards, Point of Sale system for pharmacies and more. His willingness to take responsibility, strong logical reasoning and excellent communication skills make him simply a pleasure to work with. Highliy Recommended!",
  },
  {
    name: "Abraham Aznauryan",
    // position: 'CEO',
    company: "Mixer Social",
    photo: abraham,
    review:
      "It has been am amazing experience to work with Umar on my web app. Umar has been great at practically every aspect of the code. It has already been already many months that we have worked together and I still have only seen positives when working with him. He is very knowledgeable, very quick, and most importantly, he is very quick at learning new things. I had the pleasure to work alongside Umar and he is very resourceful when it comes to finding a solution to a problem.",
  },
  {
    name: "Adi Shaked",
    // position: 'CEO',
    company: "WB Sender",
    photo: wbsender,
    review:
      "Umar really understood my project and went above and beyond in order to complete it. Project was completed with perfect comprehension and the final result was much better than I expected. Here you hand over your project to a developer who knows what he is doing. I would highly recommend Umar",
  },
];
const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "Joyn Digital - Pakistan",
    icon: joynlogo,
    iconBg: "#383E56",
    date: "Febraury 2023 - Present",
    points: [
      "Implemeted clean code practices and design patterns to ensure high-quality code and maintainable software solutions.",
      "Lead a team of developers in designing, developing, testing and deploying mobile and web applications for clients.",
      "Used agile methodologies to manage sprints, prioritize tasks and ensure on-time delivery of project milestones.",
      "Conducted regular code reviews, provided feedback, and mentored junior developers to ensure high code quality and adherence to coding standards.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Upwork - Remote",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "Worked on 15+ projects and developed custom software solutions for multiple clients.",
      "Collaborated closely with clients to understand their business objectives and deliver tailored solutions.",
      "Worked as a team lead of an outsourced team for a social media mobile application that features video/photo-sharing, multiple group chats, live notifications, live interactive interfaces, and more",
      "Stayed up-to-date with industry trends and best practices, incorporating innovative features into projects.",
    ],
  },
  {
    title: "Mern Stack Bootcamp",
    company_name: "Bitsol Technologies - Pakistan",
    icon: bitsollogo,
    iconBg: "#383E56",
    date: "August 2022 - October 2022",
    points: [
      "Completing the MERN Stack Bootcamp is an intensive and rewarding experience. Over the course of the program, I gain comprehensive knowledge of the MERN (MongoDB, Express.js, React, and Node.js) stack",
      "I learn to build full-stack web applications from scratch, incorporating modern development practices and tools.",
      "Throughout the bootcamp, I gain hands-on experience through real-world projects, enhancing your problem-solving and teamwork abilities. ",
      "I gain proficiency in database management with MongoDB, server-side scripting using Express.js, and building dynamic, user-friendly front-end interfaces with React. ",
    ],
  },
  {
    title: "React.js",
    company_name: "AlrightTech - Pakistan",
    icon: appicslogo,
    iconBg: "#383E56",
    date: "July 2022 - January 2023",
    points: [
      "Developed a solid understanding of industry practices, learning how to manage tasks, handle declines, and effectively communicate in a professional environment",
      "Successfully contributed to projects, further honing my abilities in app development and delivering high-quality solutions.",
      "Expanded my development skills, gaining expertise in various Web techniques such as aws, GraphQl, TypeScript, and responsive Layout.",
      "Engaged in continuous learning, staying updated with the latest advancements in Web development to deliver innovative solutions.",
    ],
  },
];

const projects = [
  {
    image: lcl_web_app,
    title: "Lucky Cement Limited",
    projectType: "Web app developer",
    techStack: [
      "HTML",
      "CSS3",
      "Javascript",
      "Reactstrap",
      "Google maps",
      "React graphs",
      "React Js",
      "Python",
      "Django",
      "Aws S3",
      "Dashboard",
      "MLP",
    ],
    description:
      "Lucky Cement Limited has effectively deployed an ERP-driven web application, acting as a central hub for the modernization of user data. The system employs diverse data collection techniques such as forms input, charts, graphs, calendar integration, Google Map Box, and API connectivity.",
    github_link: null,
    website_link: "https://dev.luckycement.biz/",
  },
  {
    image: paisa_project,
    title: "Paysa",
    projectType: "Web app developer",
    techStack: [
      "HTML",
      "CSS3",
      "Javascript",
      "Nextjs",
      "Aws Ec2",
      "Github",
      "Three.js",
      "slick-slider",
    ],
    description:
      "PaySa, a rapidly emerging player in the digital payments market, Offering innovative solutions, quick settlement services, data-driven insights, secure VPN tunnel, and round-the-clock customer support, PaySa aims to shape a brighter future for banking services.",
    github_link: null,
    website_link: "https://paysa.com.pk/",
  },
  {
    image: azima_project,
    // image: azima2x,
    title: "Azima",
    projectType: "Mobile app developer",
    techStack: ["React Native", "MVVM", "Nuovo", "Chat", "Python", "Rest APIs"],
    description:
      "Azima is a mobile application that give users instant access to affordable and no security loans on their phone in Uganda",
    github_link: null,
    playstore_link: "https://play.google.com/store/apps/details?id=com.azima",
    appstore_link: null,
    website_link: "https://azima.app/",
  },

  {
    image: kugali_project,
    title: "Kugali Comics",
    projectType: "Mobile app developer",
    techStack: ["React Native", "DI", "Caching", "Wordpress", "Firebase"],
    description:
      "An app dedicated to sharing African cultural stories through comic books, art, and augmented reality. Discover tales that celebrate Africa's past, present, and future in an accessible and engaging format.",
    github_link: null,
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.qe5dbd4f27b0.www&hl=en&gl=US",
    appstore_link: null,
    website_link: "https://kugali.com/",
  },

  {
    image: tout_project,
    title: "Tout Apps",
    projectType: "Mobile app developer",
    techStack: [
      "React Native",
      "Stripe",
      "Firebase",
      "Cloud messaging",
      "Cloud functions",
    ],
    description:
      "Tout is an all-in-one solution for business promotion and supporting local brands. Easily create and share promotions for your business while exploring a diverse range of small businesses.",
    github_link: null,
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.tout.android",
    playstore_link_2:
      "https://play.google.com/store/apps/details?id=com.tout.adsmanager",
    appstore_link: null,
    website_link: "https://thecraftshowapp.com/",
  },
  {
    image: wb_project,
    title: "WB Bot",
    projectType: "Mobile app developer",
    techStack: ["React Native", "Local DB", "Rest APIs", "Zapier", "Licensing"],
    description:
      "WB Bot is an All-in-one whatsapp automation solution. It empower users to automate marketing, sales, and support on WhatsApp effortlessly. No prior knowledge needed. Configure the app to respond on WhatsApp or WhatsApp Business, or both. Define triggers and responses, set response times, and utilize smart matching for versatile interactions.",
    github_link: null,
    playstore_link:
      "https://play.google.com/store/apps/details?id=wbsender.bot&hl=en&gl=US",
    playstore_link_2: null,
    appstore_link: null,
    website_link: "https://www.wbsender.co/",
  },
  {
    image: radio_endstation,
    title: "Radio Endstation",
    projectType: "Mobile app developer",
    techStack: [
      "React Native",
      "Music Service",
      "Exo player",
      "Radio",
      "Retrofit",
    ],
    description:
      "A radio music streaming app for enthusiasts of Oi!, punk rock, and ska genres. With radio enstation you can enjoy uninterrupted, ad-free music streaming 24/7, bringing your favorite skinhead tunes directly to your device whenever you have an internet connection. With a minimalist design, it's all about the music you love, and you can even request new songs to enhance your listening experience",
    github_link: null,
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.lokke.radio.endstation",
    appstore_link: null,
    website_link: "https://radio-endstation.de/",
  },

  {
    image: qzee_project,
    title: "Qzee",
    projectType: "Mobile app developer",
    techStack: ["React Native", "NodeJS", "GraphQL", "Styled components"],
    description:
      "Qzee is a mobile app that simplifies booking and interactions with businesses. Make last-minute plans or book ahead with flexibility. QZee tackles the costly issue of no-shows and cancellations, streamlining your reservations and enhancing your engagement with businesses.",
    github_link: null,
    playstore_link: null,
    appstore_link: null,
    website_link: "https://qzee.app/",
  },

  {
    image: kapsule_project,
    title: "Kapsule apps",
    projectType: "Mobile app developer",
    techStack: [
      "Java",
      "Kotlin",
      "React Native",
      "Firebase",
      "NodeJS",
      "Cloud messaging",
    ],
    description:
      "A suite of four apps for healthcare supply chain management, catering to both businesses and consumers. These apps streamline orders, deliveries, and inventory, connecting medical facilities, patients, and suppliers to enhance healthcare logistics efficiency and accessibility.",
    github_link: null,
    playstore_link: null,
    appstore_link: null,
    website_link: "https://www.kapsuletech.com/",
  },
  {
    image: scan_it_project,
    title: "Scan It",
    projectType: "Mobile app developer",
    techStack: ["React Native", "QR", "Local DB", "SMS"],
    description:
      "Scan It is a QR-based attendance tracking system designed for educational institutions. With multiple scanning modes, it efficiently monitors student attendance, records entry and exit times, and offers the option of sending SMS notifications to parents for added convenience.",
    github_link: "https://github.com/AhsanHafeez2525",
    playstore_link: null,
    appstore_link: null,
    website_link: null,
  },
];

export { experiences, projects, testimonials, socialLinks, kColors };
