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
  email: "muhammadnomanakhtar5526@gmail.com",
  linkedIn: "https://www.linkedin.com/in/muhammad-noman-akhtar-kamoka/",
  github: "https://github.com/MuhammadNomanAkhtar",
  whatsapp: "https://wa.me/923466779267",
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
    title: "React Native Developer",
    company_name: "F3 Technologies - Islamabad - Pakistan",
    icon: joynlogo,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Implemeted clean code practices and design patterns to ensure high-quality code and maintainable software solutions.",
      "Lead a team of developers in designing, developing, testing and deploying mobile and web applications for clients.",
      "Used agile methodologies to manage sprints, prioritize tasks and ensure on-time delivery of project milestones.",
      "Conducted regular code reviews, provided feedback, and mentored junior developers to ensure high code quality and adherence to coding standards.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "AlrightTech - Rawalpindi - Pakistan",
    icon: appicslogo,
    iconBg: "#383E56",
    date: "July 2021 - March 2022",
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
    title: "Raurau Whānau App",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
      "Typescript",
      "React Native Charts",
      "Redux",
      "Realm",
      "REST APIs"
    ],
    description:
      "The Raurau Whānau App goes beyond individual medication management, offering a holistic solution for cancer patients and their families. This mobile application empowers users to not only track their own medication intake but also manage the health and well-being of their family members, all within one convenient platform. With the Raurau Whānau App, users can create profiles for each family member, including children, elderly relatives, or anyone else requiring medication management support. This feature enables caregivers to oversee multiple medication regimens simultaneously. Coordinate medication schedules effortlessly with shared reminder functionality. Caregivers can set reminders for family members' medications, ensuring that everyone receives their doses on time. These reminders can be customized according to each individual's specific needs and preferences. Simplify care coordination by centralizing important information within the app. From medication lists to appointment schedules, users can access comprehensive health profiles for each family member, fostering better-informed decision-making and continuity of care.",
    github_link: null,
    website_link: null,
  },
  {
    image: lcl_web_app,
    title: "Raurau Ngaehe",
    projectType: "Tablet App Developer",
    techStack: [
      "React Native",
      "Javascript",
      "React Native Charts",
      "Redux",
      "Firebase",
      "REST APIs"
    ],
    description:
      "The Raurau Ngaehe tablet app is designed to bring mobility and convenience to your medical staff. With our user-friendly app, authorized users can log in and perform vital bedside functions on their patients' charts. Easily search and filter patients, and add them to your favorites list for quick access during your shift. Access patient demographics, protocols, and cycle information for past, current, and future dates. Our anti-cancer drug patient assessment tools help you provide the best possible care to your patients. Our app also allows you to sign off on blood required on a treatment day and complete mandatory pre-treatment checklists, ensuring patient safety and compliance. With various drug chart functions for different classifications, including cytotoxic, hormonal, biological, fluids, and supportive drugs, you can streamline your workflow and simplify medication administration. The app also provides easy access to documenting the safe administration of intrathecal drug administrations.  The app enables you to view and add alerts, adverse drug reactions, patient queries, vitals, height/weight and BSA, progress notes, recent lab information, and access community prescriptions, all in one place. Our app is the ultimate tool for modern healthcare professionals who demand the best in patient care, convenience, and mobility. Try it out today and see the difference it can make in your daily routine!",
    github_link: null,
    website_link: null,
  },
  {
    image: paisa_project,
    title: "Medication Administration Record",
    projectType: "Tablet App Developer",
    techStack: [
      "React Native",
      "Typescript",
      "React Native Charts",
      "Redux",
      "Firebase",
      "REST APIs"
    ],
    description:
      "The Medication Administration Record (MAR) Tablet App revolutionizes medication management for healthcare professionals, offering a comprehensive solution for scheduling and administering medication treatments. This app empowers users to perform a wide range of actions related to medication administration, vitals monitoring, and prescription management, all from a single, intuitive interface.",
    github_link: null,
    website_link: null,
  },
  {
    image: kugali_project,
    title: "Indici BioScan",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
      "Javascript",
      "React Native Charts",
      "Redux",
      "Firebase",
      "REST APIs"
    ],
    description:
      "Indici BioScan, the cutting-edge mobile app revolutionizing health monitoring through facial expression analysis. With advanced AI technology, this app calculates vital signs such as blood pressure, heart rate, SpO2 level, and more—all with just a simple facial scan. Indici BioScan analyzes facial expressions to provide accurate and real-time health assessments, empowering users to take control of their well-being with ease and convenience. Experience the future of health monitoring in the palm of your hand with Indici BioScan.",
    github_link: null,
    playstore_link: null,
    appstore_link: null,
    website_link: null,
  },
  {
    image: kugali_project,
    title: "Indici Beam",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
      "Javascript",
      "Redux",
      "Firebase",
      "REST APIs"
    ],
    description:
      "Indici Beam, the convenient app designed for sharing documents with your doctor. Easily upload important documents such as medical records, test results, or images of symptoms. Doctors can then access these documents to better understand your condition, symptoms, allergies, and more, helping them provide you with the best possible care. Streamline communication with your healthcare provider and ensure they have all the information they need with Indici Beam.",
    github_link: null,
    playstore_link: null,
    appstore_link: null,
    website_link: null,
  },
  {
    image: tout_project,
    title: "Indici Co-Pilot",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
      "Stripe",
      "Firebase",
      "Cloud messaging",
      "Cloud functions",
    ],
    description:
      "Indici CoPilot is an essential app for General Practitioners, offering seamless patient management at your fingertips. Easily input patient information, capture consult notes, and record conversations with our user-friendly interface. Prioritize privacy with secure data storage, save time on administrative tasks, and elevate your practice with Indici CoPilot.",
    github_link: null,
    playstore_link: null,
    playstore_link_2: null,
    appstore_link: null,
    website_link: null,
  },
  {
    image: tout_project,
    title: "F3 Attendance App",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
      "Javascript",
      "Redux",
      "REST APIs"
    ],
    description:
      "F3 Attendance App, the ultimate solution for efficient attendance management. With this app, team leads and managers can easily track attendance, manage leaves, and oversee their subordinates—all from one convenient platform. Preview check-in and check-out times, review leave requests, and seamlessly approve or reject leaves for yourself and your team members.",
    github_link: null,
    playstore_link: null,
    playstore_link_2: null,
    appstore_link: "https://apps.apple.com/pk/app/f3-attendance/id1555881124",
    website_link: null,
  },
  {
    image: wb_project,
    title: "Blood Doner App",
    projectType: "Mobile App Developer",
    techStack: ["React Native", "Local DB", "Rest APIs", "Zapier", "Licensing"],
    description:
      "Blood Donor App, your go-to platform for blood donation and retrieval. Whether you're a donor or a recipient, this app makes the process easy and convenient. Need blood? Simply search for donors and blood banks in your area with a few taps. Want to connect with donors? Chat directly with them through the app to coordinate donations. Plus, donors earn points every time they donate blood, which they can redeem for blood when they need it most. It's a win-win for everyone involved, making blood donation and retrieval faster, simpler, and more rewarding.",
    github_link: null,
    playstore_link: null,
    playstore_link_2: null,
    appstore_link: null,
    website_link: null,
  },
  {
    image: radio_endstation,
    title: "Eizhar App",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
    ],
    description:
      "Eizhar App, your ultimate Real Estate solution. Whether you're searching for the perfect rental or looking to sell or rent out your property, Eizhar has you covered. Renters can easily search houses, flats, and plots that meet their needs, while landlords and property owners can list their properties for sale or to rent out with detailed descriptions, images, and location information. Users can mark properties as favorite, contact owners or tenants directly, and make informed decisions about their real estate needs.",
    github_link: null,
    playstore_link: null,
    appstore_link: null,
    website_link: null,
  },
  {
    image: azima_project,
    // image: azima2x,
    title: "MyIndici 2.0",
    projectType: "Mobile App Developer",
    techStack: [
      "React Native",
      "Javascript",
      "React Native Charts",
      "Redux",
      "REST APIs",
      "Stripe Payment Method"
    ],
    description:
      "Myindici2.0 is a modern, user-friendly patient app that allows you to access your healthcare data online in a secure and convenient manner. With Myindici2.0, you have a range of healthcare-related information at your fingertips, including appointments, medications, immunizations, diagnoses, and allergies.",
    github_link: null,
    playstore_link: "https://play.google.com/store/apps/details?id=nz.app.myindici&pcampaignid=web_share",
    appstore_link: "https://apps.apple.com/pk/app/myindici-2-0/id1577040594?platform=iphone",
    website_link: null,
  },
];

export { experiences, projects, testimonials, socialLinks, kColors };
