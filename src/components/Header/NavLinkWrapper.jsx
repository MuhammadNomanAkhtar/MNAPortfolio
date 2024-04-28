import PropTypes from "prop-types";
import {HashLink} from "react-router-hash-link";

export const NavLinkWrapper = ({children}) => {
    return (
        <>
            <div
                className="text-gray-400 transition duration-300 ease-in-out hover:bg-fgray-700 text-sm hover:text-white hover:bg-gray px-3 py-3 rounded-md"
            >
                {children}
            </div>
        </>
    );
};

NavLinkWrapper.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.array,
};
