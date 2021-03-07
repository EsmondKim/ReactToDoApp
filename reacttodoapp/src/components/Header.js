import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={props.onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.defaultProps = {
  title: PropTypes.string.isRequired,
};

//CSS in JSX
//const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// }

export default Header;
