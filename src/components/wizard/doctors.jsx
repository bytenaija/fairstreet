import SlimCard from "components/forms/slim-card";
import { addData, updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";
import { useState } from "react";
import { FaPlusCircle  } from "react-icons/fa";
import Page from "./page";

const { default: Button } = require("components/forms/button");

function Doctors() {

  const [{ data }, dispatch] = useStore()
  const [currentPage, setCurrentPage] = useState('default')


  const firstDoctor = data.doctors?.[0]
  
  const removeDoctor = () => {
    const newData = { ...data, doctors: [] }
    dispatch(addData(newData))
    setCurrentPage('search-doctor')
    
  }
  const DefaultPage = () => {
    if (!data.doctors.length) {
      setCurrentPage('search-doctor')
    }
    return data.doctors?.length  &&
        <>
      <div>Do you want to keep {firstDoctor?.name} in network from {firstDoctor.clinic}</div>
        <Button className="cont-btn" primary onClick={()=> setCurrentPage('add-doctors')}>Yes</Button>
        <Button className="btn"  onClick={() => removeDoctor()}>No</Button>
        </>
      
  }

  const DoctorsData = ({ name, specialization }) => {
    return <div className="doctor-data">
      <h2 className="doctor-data-title">{name}</h2>
      <div>{specialization}</div>
    </div>
  }


  
   const AddDoctors = () => {
     return <>
       {data.doctors.map(doctor => <SlimCard>
        <DoctorsData name={doctor.name} specialization={doctor.specialization} />
        
      </SlimCard>)}
      
       <SlimCard onClick={() => setCurrentPage('search-doctor')}>
        <FaPlusCircle /> <span className="doctor-data-add">Add Doctor</span>
      </SlimCard>
        </>
      
  }

     const SearchDoctor = () => {
     return <>
       sea
        </>
      
  }
  let content = null;

  switch (currentPage) {
    case 'add-doctors':
      content = <AddDoctors />
      break;
    case 'search-doctor':
      content = <SearchDoctor />
      break;
    default:
      content = <DefaultPage />
  }

  return (
    <Page>
      {content}
    </Page>
   )
}

export default Doctors
