import Title from "components/forms/title";
import { addData, updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";
import Page from "./page";
import React from "react";

import Button from "components/forms/button";
import Input from "components/forms/input";

function Location() {
  const [{ data }, dispatch] = useStore();
  const setZipCode = (e) => {
    const { value } = e.target;
    const newData = { ...data, zipcode: value };
    dispatch(addData(newData));
  };

  const next = () => {
    dispatch(updateNav("Doctors"));
  };

  return (
    <Page>
      <Title>Enter Your Zipcode</Title>
      <Input className="input" onChange={setZipCode} value={data.zipcode} />
      <Button className="cont-btn" primary onClick={next}>
        Continue
      </Button>
    </Page>
  );
}

export default Location;
