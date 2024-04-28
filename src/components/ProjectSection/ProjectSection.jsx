import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import {projects} from "../../constants";
import {motion, AnimatePresence} from "framer-motion";
import {ProjectDialog} from "./components/ProjectDialog.jsx";
// import {Modal} from "flowbite-react";
// import {string} from "prop-types";
import Modal from 'react-modal';
import {BlurModal} from "../Ui/BlurModal.jsx";
import {show} from "react-modal/lib/helpers/ariaAppHider.js";
import {useState} from "react";


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const item = {
    // hidden: { opacity: 0, scale: 0 },
    hidden: {opacity: 0, y: 75},
    show: (index) => ({
        opacity: 1,
        // scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            stiffness: 200,
            delay: index * 0.2
        },
    }),
};

// const inViewContainerVariant = {
//   hidden: {opacity: 0, y: 75 },
//   show: {
//     opacity: 1, y: 0,
//     whileInView: {
//       once: true,
//     }
//   }
// }

function ProjectSection() {


    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <motion.div
            initial={{opacity: 0, y: 75}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
                duration: 0.5,
            }}
            className="max-w-7xl mx-auto"
            id="works"
        >

            {/*<BlurModal showModal={showModal} setShowModal={setShowModal}>*/}
            {/*    <ProjectCard*/}
            {/*        image={projects[0].image}*/}
            {/*        title={projects[0].title}*/}
            {/*        projectType={projects[0].projectType}*/}
            {/*        techStack={projects[0].techStack}*/}
            {/*        description={projects[0].description}*/}
            {/*    />*/}
            {/*</BlurModal>*/}

            <SectionTitle
                mainTitle={"Projects"}
                title="My Recent Work"
                subtitle="Here are a few past development projects I've worked on"
            />
            <motion.div
                // variants={container}
                initial="hidden"
                // animate={{
                //     transition: {
                //         stiffness: 4000
                //     }
                // }}
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4 mt-8"
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        onClick={() => {
                            // setShowModal(true)
                            setSelectedProject(project)
                            // console.log(`Clicked ${project.title}`)
                            // () => props.setOpenModal('default')
                            // // setSelectedLayoutId(project.title)
                            // setSelectedProject(project)
                            // openModal()
                        }}
                        project={project}
                    />
                ))}
            </motion.div>


            <ProjectDialog project={selectedProject}
                           showModal={selectedProject !== null}
                           onDismiss={() => setSelectedProject(null)}
            />
            {/*{selectedProject &&*/}
            {/*    <div*/}
            {/*        className={'fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden backdrop-blur-3xl overflow-y-auto md:inset-0 h-full max-h-full'}>*/}
            {/*        <div className={'relative w-full max-w-xl max-h-full m-auto'}>*/}
            {/*            <ProjectCard*/}
            {/*                image={selectedProject.image}*/}
            {/*                title={selectedProject.title}*/}
            {/*                projectType={selectedProject.projectType}*/}
            {/*                techStack={selectedProject.techStack}*/}
            {/*                description={selectedProject.description}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>}*/}
        </motion.div>
    );
}


export default ProjectSection;
