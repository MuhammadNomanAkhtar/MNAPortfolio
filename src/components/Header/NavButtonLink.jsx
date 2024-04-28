import PropTypes from "prop-types";
import tailwindConfig from '../../../tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig'

const fullConfig = resolveConfig(tailwindConfig)
import {motion} from "framer-motion";
import {HashLink} from "react-router-hash-link";

export const NavButtonLink = ({text, href = '#', onClick}) => {

    return (
        <>
            <HashLink to={href}
                      smooth onClick={onClick}
                      className="
               text-white
               transition-all
               duration-300
               ease-in-out
               text-sm
               bg-fgray-700
               hover:text-white
               hover:bg-gradient-to-r
               hover:from-primary_blue
               hover:to-primary_cyan
               px-3 py-3
               rounded-md">
                {text}</HashLink>
        </>
    )
}

NavButtonLink.propTypes = {text: PropTypes.string, href: PropTypes.string, onClick: PropTypes.func}