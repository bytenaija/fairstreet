import Button from "./forms/button";
import PropTypes from "prop-types";

const SearchCard = ({ doctors = [], addDoctor, setCurrentPage }) => {
  return (
    <div className="search-card">
      {doctors.length == 0 ? (
        <>
          <div>There are 0 results</div>
          <Button
            className="cont-btn"
            primary
            onClick={() => setCurrentPage("search-doctor")}
          >
            Go Back
          </Button>
        </>
      ) : (
        doctors.map((doc) => (
          <div
            className="search-card-doc"
            key={doc.name}
            onClick={() => addDoctor(doc)}
          >
            <h2 className="doctor-data-title">{doc.name}</h2>
            <span>{doc.specialization}</span>
            <span>{doc.address}</span>
            <span>{doc.city},</span>
            <span>{doc.state}</span>
            <span>{doc.zipCode}</span>
          </div>
        ))
      )}
    </div>
  );
};

SearchCard.propTypes = {
  doctors: PropTypes.array,
  addDoctor: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
export default SearchCard;
