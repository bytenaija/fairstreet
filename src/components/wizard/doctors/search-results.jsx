import PropTypes from "prop-types";
import SearchCard from "components/search-card";
import { addData } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";

const SearchResults = ({ doctors, setCurrentPage, setSearchString }) => {
  const [{ data }, dispatch] = useStore();

  const addDoctor = (doc) => {
    const allDoctors = data.doctors;
    allDoctors.push(doc);
    const newData = { ...data, doctors: allDoctors };
    dispatch(addData(newData));
    setSearchString("");
    setCurrentPage("add-doctors");
  };
  return (
    <SearchCard
      doctors={doctors}
      addDoctor={addDoctor}
      setCurrentPage={setCurrentPage}
    ></SearchCard>
  );
};

SearchResults.propTypes = {
  doctors: PropTypes.array,
  setCurrentPage: PropTypes.func,
  setSearchString: PropTypes.func.isRequired,
};

export default SearchResults;
