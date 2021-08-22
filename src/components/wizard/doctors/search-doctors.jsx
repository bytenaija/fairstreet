import Button from "components/forms/button";
import { FaSearch } from "react-icons/fa";
import Input from "components/forms/input";
import PropTypes from "prop-types";
import Title from "components/forms/title";

const SearchDoctor = ({
  setCurrentPage,
  searchString,
  setSearchString,
  search,
}) => {
  return (
    <>
      <Title>What doctors do you want covered by your plan</Title>
      <Input
        className="input"
        inputClass="input-class"
        value={searchString}
        icon={<FaSearch />}
        placeholder="Search by name"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button
        className="cont-btn"
        primary
        onClick={() => {
          search();
          setCurrentPage("search-results");
        }}
      >
        Continue
      </Button>
      <Button className="btn" onClick={() => console.log("hahahahaha")}>
        Skip
      </Button>
    </>
  );
};

SearchDoctor.propTypes = {
  setCurrentPage: PropTypes.func,
  setSearchString: PropTypes.func,
  searchString: PropTypes.string,
  search: PropTypes.func,
};
export default SearchDoctor;
