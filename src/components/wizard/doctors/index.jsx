import AddDoctors from "./add-doctors";
import Button from "components/forms/button";
import Page from "../page";
import SearchDoctor from "./search-doctors";
import SearchResults from "./search-results";
import Title from "components/forms/title";
import { addData } from "contexts/reducers/wizard-data";
import doctorsData from "data/doctors.json";
import { useState } from "react";
import { useStore } from "contexts/wizard-context";

function Doctors() {
  const [{ data }, dispatch] = useStore();
  const [currentPage, setCurrentPage] = useState("default");
  const [searchString, setSearchString] = useState("");
  const [doctors, setDoctors] = useState([]);
  const search = () => {
    const docs = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchString)
    );

    setDoctors(docs);
  };

  const firstDoctor = data.doctors?.[0];

  const removeDoctor = () => {
    const newData = { ...data, doctors: [] };
    dispatch(addData(newData));
    setCurrentPage("search-doctor");
  };
  const DefaultPage = () => {
    if (!data.doctors.length) {
      setCurrentPage("search-doctor");
    }
    return (
      data.doctors?.length && (
        <>
          <Title>
            Do you want to keep {firstDoctor?.name} in network from{" "}
            {firstDoctor.clinic}
          </Title>
          <Button
            className="cont-btn"
            primary
            onClick={() => setCurrentPage("add-doctors")}
          >
            Yes
          </Button>
          <Button className="btn" onClick={() => removeDoctor()}>
            No
          </Button>
        </>
      )
    );
  };

  let content = null;

  switch (currentPage) {
    case "add-doctors":
      content = <AddDoctors setCurrentPage={setCurrentPage} />;
      break;
    case "search-doctor":
      content = (
        <SearchDoctor
          setCurrentPage={setCurrentPage}
          setSearchString={setSearchString}
          search={search}
          searchString={searchString}
        />
      );
      break;
    case "search-results":
      content = (
        <SearchResults
          doctors={doctors}
          setSearchString={setSearchString}
          search={search}
          setCurrentPage={setCurrentPage}
        />
      );
      break;
    default:
      content = <DefaultPage />;
  }

  return <Page>{content}</Page>;
}

export default Doctors;
