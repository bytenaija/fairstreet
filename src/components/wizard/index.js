import "components/wizard/wizard.scss";

import Doctors from "./doctors";
import Drugs from "./drugs";
import GetStarted from "./get-started";
import Location from "./location";
import Plans from "./plans";
import React from "react";
import SupplementalBenefits from "./supplemental-benefits";
import { useStore } from "contexts/wizard-context";

const Wizard = () => {
  const [{ nav }] = useStore();

  let content = null;
  if (nav === "Location") {
    content = <Location />;
  }

  if (nav === "Doctors") {
    content = <Doctors />;
  }

  if (nav === "Drugs") {
    content = <Drugs />;
  }

  if (nav === "Supplemental Benefits") {
    content = <SupplementalBenefits />;
  }

  if (nav === "Pick a Plan") {
    content = <Plans />;
  }

  if (nav === "Get Started with your plan") {
    content = <GetStarted />;
  }
  return content;
};

export default Wizard;
