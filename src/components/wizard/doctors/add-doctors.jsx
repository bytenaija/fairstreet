import Button from "components/forms/button";
import { FaPlusCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import SlimCard from "components/forms/slim-card";
import { updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";

function AddDoctors({ setCurrentPage }) {
  const [{ data }, dispatch] = useStore();

  const DoctorsData = ({ name, specialization }) => {
    return (
      <div className="doctor-data">
        <h2 className="doctor-data-title">{name}</h2>
        <div>{specialization}</div>
      </div>
    );
  };

  DoctorsData.propTypes = {
    name: PropTypes.string,
    specialization: PropTypes.string,
  };

  return (
    <>
      {data.doctors.map((doctor) => (
        <SlimCard key={doctor.name}>
          <DoctorsData
            name={doctor.name}
            specialization={doctor.specialization}
          />
        </SlimCard>
      ))}

      <SlimCard onClick={() => setCurrentPage("search-doctor")}>
        <FaPlusCircle /> <span className="doctor-data-add">Add Doctor</span>
      </SlimCard>

      <div className="continue">
        <Button
          className="cont-btn"
          primary
          onClick={() => {
            dispatch(updateNav("Drugs"));
          }}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

AddDoctors.propTypes = {
  setCurrentPage: PropTypes.func,
};

export default AddDoctors;
