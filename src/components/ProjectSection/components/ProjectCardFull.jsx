import React from "react";
import {motion} from "framer-motion";
import './ProjectDialog.css'
import PropTypes from "prop-types";
import {BsLinkedin, BsGithub, BsGlobe} from "react-icons/bs";
import app from "../../../App.jsx";
import {BiLogoApple, BiLogoPlayStore} from "react-icons/bi";

export default function ProjectCardFull({project, onClick}) {

    const {
        image,
        title,
        projectType,
        techStack,
        description,
        github_link,
        playstore_link,
        // playstore_link_2,
        appstore_link,
        website_link,
    } = project
    return (
        <div onClick={onClick}
                    className="bg-fgray-700 rounded-xl shadow-lg overflow-hidden transition ease-in-out duration-300">
            <img loading="lazy" src={image} alt={title} className="w-full rounded-lg h-auto"/>
            <div className="p-4">
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                <p className="text-slate-400 mb-2">{projectType}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="
                            bg-gray-700
                            px-2 py-1
                            rounded-full text-sm text-gray-100"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <p className="text-white my-4 text-sm font-[100]">{description}</p>
                <h1 className={'font-bold text-lg'}>Project Links.</h1>

                <div className={'mt-2 flex flex-row space-x-3'}>
                    <LinkWithText link={playstore_link} icon={<BiLogoPlayStore/>} title={'Playstore link'}/>
                    {/*<LinkWithText link={playstore_link_2} icon={<BiLogoPlayStore/>} title={'Live playstore app 2 link'}/>*/}
                    <LinkWithText link={appstore_link} icon={<BiLogoApple/>} title={'Appstore link'}/>
                    <LinkWithText link={github_link} icon={<BsGithub/>} title={'Source code'}/>
                    <LinkWithText link={website_link} icon={<BsGlobe/>} title={'Website'}/>
                </div>
            </div>
        </div>
    );
}

export const LinkWithText = ({link, icon, title, showTitle = true}) => {
    return (
        <>
            {link &&
                <a className={'flex flex-row items-center text-sm text-primary_cyan'} target="_blank" rel="noreferrer"
                   href={link}>{icon}
                    {showTitle && <div className={'inline ml-1'}>{title}</div>}
                </a>}

        </>
    )
}
LinkWithText.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    showTitle: PropTypes.bool,
}
ProjectCardFull.propTypes = {
    project: PropTypes.object,
    onClick: PropTypes.func
}