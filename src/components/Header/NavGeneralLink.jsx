import PropTypes from "prop-types";
import { linkedin_logo } from "../../assets";

export const NavGeneralLink = ({ text, href = "#", children }) => {
  return (
    <div className="">
        {children}
    </div>
  );
};

NavGeneralLink.propTypes = { text: PropTypes.string, href: PropTypes.string };
