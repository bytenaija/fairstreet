import Button from "components/forms/button";
import Page from "./page";
import React from "react";
import Success from "components/success";
import Title from "components/forms/title";

const GetStarted = () => {
  return (
    <Page>
      <Title>Your page is Submitted</Title>
      <div className="getstarted-section">
        <Success />
      </div>
      <div className="getstarted-section">
        <Title>We will notify you when your ID cards are on the way</Title>
      </div>
      <div className="getstarted-section">
        <Title>Next complete your Health Risk Assessment</Title>
      </div>

      <div className="getstarted-section">
        <Button className="cont-btn" primary>
          Continue
        </Button>
      </div>
    </Page>
  );
};

export default GetStarted;
