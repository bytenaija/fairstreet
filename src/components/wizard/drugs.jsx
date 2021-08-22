import Button from "components/forms/button";
import { FaSearch } from "react-icons/fa";
import Input from "components/forms/input";
import Page from "./page";
import Title from "components/forms/title";
import { updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";

const Drugs = () => {
  const [, dispatch] = useStore();
  return (
    <Page>
      <Title>What prescriptions do you have?</Title>
      <Input
        className="input"
        inputClass="input-class"
        icon={<FaSearch />}
        placeholder="Search by name"
        onChange={(e) => console(e.target.value)}
      />
      <Button
        className="cont-btn"
        primary
        onClick={() => {
          dispatch(updateNav("Supplemental Benefits"));
        }}
      >
        Continue
      </Button>
      <Button
        className="btn"
        onClick={() => dispatch(updateNav("Supplemental Benefits"))}
      >
        Skip
      </Button>
    </Page>
  );
};

export default Drugs;
