import { addData, updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";
import Page from "./page";

const { default: Button } = require("components/forms/button");
const { default: Input } = require("components/forms/input");

function Location() {

  const [{data}, dispatch] = useStore()
  const setZipCode = (e) => {
    const { value } = e.target
    const newData = { ...data, zipcode: value }
    dispatch(addData(newData))
  }


    const next = () => {
    
    dispatch(updateNav('Doctors'))
  }

  
  return (
    <Page>

      <div>Enter Your Zipcode</div>
      <Input className="input" onChange={setZipCode} value={data.zipcode}/>
      <Button className="cont-btn" primary onClick={next}>Continue</Button>
    </Page>
   )
}

export default Location
