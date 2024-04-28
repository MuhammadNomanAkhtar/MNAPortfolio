import React from "react";
import {BlurModal} from "../../Ui/BlurModal.jsx";
import PropTypes from "prop-types";
import {useDisableBodyScroll} from "../../../hooks/useDisableBodyScroll.jsx";
import ProjectCardFull from "./ProjectCardFull.jsx";
import {AnimatePresence, motion} from "framer-motion";

export const ProjectDialog = ({showModal, onDismiss, project}) => {

    useDisableBodyScroll(showModal)
    return <>
        <AnimatePresence>
            {showModal && <BlurModal showModal={showModal} onClick={() => {
                console.log('Outside clicked')
                onDismiss()
            }}
            >
                <motion.div
                    initial={{
                        y: '100%'
                    }}
                    animate={{
                        y: 0,
                        transition: {
                            // stiffness: 100,
                            duration: 0.5,
                            bounce: 0.1,
                            type: 'spring',
                        }
                    }}
                    // exit={{
                    //     y: '100%',
                    //     opacity: 0,
                    //     transition: {
                    //         // stiffness: 100,
                    //         duration: 0.3,
                    //         // bounce: 0.1,
                    //         // type: 'spring',
                    //     }
                    // }}
                >
                    <ProjectCardFull
                        onClick={e => e.stopPropagation()}
                        project={project}
                    />
                </motion.div>

            </BlurModal>}
        </AnimatePresence>

    </>
}

ProjectDialog.propTypes = {
    showModal: PropTypes.bool,
    project: PropTypes.object,
    onDismiss: PropTypes.func,
};
