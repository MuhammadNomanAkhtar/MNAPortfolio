import React from "react";
import {motion} from "framer-motion";
import './ProjectDialog.css'
import PropTypes from "prop-types";
import {BiLogoApple, BiLogoPlayStore} from "react-icons/bi";
import {BsGithub, BsGlobe} from "react-icons/bs";
import {LinkWithText} from "./ProjectCardFull.jsx";
import {GrFormNextLink} from "react-icons/gr";
import {FcNext} from "react-icons/fc";
import {MdNavigateNext} from "react-icons/md";


const item = {
    // hidden: { opacity: 0, scale: 0 },
    hidden: {opacity: 0, y: 75}, show: (index) => ({
        opacity: 1, // scale: 1,
        y: 0, transition: {
            duration: 0.5, stiffness: 200, delay: index * 0.2
        },
    }),
};
export default function ProjectCard({
                                        project, index, onClick
                                    }) {

    const {
        image, title, projectType, techStack, description, github_link, playstore_link, // playstore_link_2,
        appstore_link, website_link,
    } = project
    return (<motion.div
            variants={item}
            initial="hidden"
            // animate='show'
            whileInView="show"
            viewport={{once: true}}
            custom={index}
            key={index}
            className="bg-fgray-700 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img onClick={onClick} loading="lazy" src={image} alt={title}
                 className="cursor-pointer w-full rounded-xl h-auto hover:scale-105 transition ease-in-out duration-300"/>
            <div className="p-4 flex flex-col grow">
                <div className={'flex justify-between'}>
                    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                    <hr className="h-2 bg-red border-0 dark:bg-gray-700"/>
                    {/*<div className={'w-full h-2 bg-red'}>asd</div>*/}
                    <div className={'flex space-x-3'}>
                        <LinkWithText showTitle={false} link={playstore_link} icon={<BiLogoPlayStore
                            className={'fill-gray-400 hover:fill-white transition duration-300'} size={24}/>}
                                      title={'Live playstore link'}/>
                        <LinkWithText showTitle={false} link={appstore_link} icon={<BiLogoApple
                            className={'fill-gray-400 hover:fill-white transition duration-300'} size={24}/>}
                                      title={'Live appstore link'}/>
                        <LinkWithText showTitle={false} link={github_link} icon={<BsGithub
                            className={'fill-gray-400 hover:fill-white transition duration-300'} size={24}/>}
                                      title={'Live playstore link'}/>
                        <LinkWithText showTitle={false} link={website_link} icon={<BsGlobe
                            className={'fill-gray-400 hover:fill-white transition duration-300'} size={24}/>}
                                      title={'Website'}/>
                    </div>
                </div>
                {/*<div className={''}>*/}
                {/*    <p className="text-slate-400 mb-2">{projectType}</p>*/}
                {/*</div>*/}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (<span
                        key={index}
                        className="
                            bg-gray-700
                            px-2 py-1
                            rounded-full text-sm text-gray-100"
                    >{tech}
                        {/*bg-gradient-to-tr */}
                        {/*from-primary_blue */}
                        {/*to-primary_cyan*/}</span>))}

                </div>
                <div className={'grow'}></div>
                <p className="line-clamp-3" style={{}}>{description}</p>
            </div>

            <hr className={'opacity-10'}/>
            <div className={'px-4 py-6 flex justify-between items-center'}>
                <div className={'inline text-sm font-medium'}>ROLE:<h1
                    className={'inline text-sm text-gray-400'}>{` ${projectType}`.toUpperCase()}</h1></div>
                <button onClick={onClick} className={'text-sm text-primary_cyan'}>
                    <div className={'flex items-center'}>
                        VIEW DETAIL
                        <span className={'inline'}><MdNavigateNext size={20} className={'fill-primary_cyan'}/></span>
                    </div>

                </button>
            </div>
        </motion.div>);
}

ProjectCard.propTypes = {
    project: PropTypes.object, onClick: PropTypes.func
}
