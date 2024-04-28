import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

export const NavLink = ({ text, href = "#", onClick }) => {
  return (
    <>
      <HashLink
        onClick={onClick}
        to={href}
        smooth
        className="text-slate-400 transition duration-300 ease-in-out hover:bg-fgray-700 text-sm hover:text-white hover:bg-gray px-3 py-3 rounded-md"
      >
        {text}
      </HashLink>
    </>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
