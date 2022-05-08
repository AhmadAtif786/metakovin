import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import third from "./Images/third.png";
const Thirdsection = () => {
  return (
    <div className="bgthirds ">
      <Container>
        <Row>
          <Card
            style={{
              border: "none",

              borderRadius: "0.75rem",
              padding: "20px",
            }}
            className="bgsecondsec margin1 mt-5 mb-5"
          >
            <h4 className="mainhead">Important Note! </h4>
            <div className="mt-4">
              <p className="thirdpara">
                ✅ Rise of mars is the only Miner game that has the lowest
                inflation rate with other finest benefits to make this project a
                leader in the defi space.
              </p>
              <p className="thirdpara mt-4">
                {" "}
                ✅ Martians (user) should compound 10 times before they can
                withdraw or else Martians deciding not to compound or hire more
                aliens using their earnings, and continuously withdrawing will
                be penalised with a 90% Mars tax that will be credited back to
                the contract.
              </p>
              <p className="thirdpara mt-4">
                {" "}
                ✅ In Addition, to further encourage the community to
                re-hire/compound, there will be an additional 1% bonus for each
                compound action that the user will do, which can stack up to 10%
                for 10 consecutive times / 5 days. By doing so, this will ensure
                the long term potential profit for every investor.
              </p>
              <p className="thirdpara mt-4">
                {" "}
                ✅ The best strategy that the team can recommend is to
                re-hire/compound for 6 days and harvest 1 day a week. This will
                increase the users investment at the same time increasing the
                daily yield earnings. This strategy has already been tried and
                battle tested by several project and is proven very effective.
              </p>
              <p className="thirdpara mt-4">
                {" "}
                ✅ Please read our FAQ and How to play guide for further
                understanding.
              </p>
              <img src={third} className="third mt-5 mb-3" />
            </div>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Thirdsection;
