import PropTypes from "prop-types";

const SearchCard = ({ doctors = [], addDoctor }) => {
  return (
    <div className="search-card">
      {doctors.map((doc) => (
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
      ))}
    </div>
  );
};

SearchCard.propTypes = {
  doctors: PropTypes.array,
  addDoctor: PropTypes.func,
};
export default SearchCard;
