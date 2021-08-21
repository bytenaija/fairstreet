import PropTypes from "prop-types";

function Title({ children }) {
  return <div className="title">{children}</div>;
}
Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
