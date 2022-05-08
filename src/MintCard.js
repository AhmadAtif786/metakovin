import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-tilt";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import { isMobile } from "react-device-detect";
import arrow from "./Images/arrow.png";
import meta from "./Images/metamask.png";
import mint from "./Images/bgmint.png";
const MintCard = () => {
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    //console.log(web3, "web 3 console")
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
      await activate(injected);

      //   if (id !== parseInt(chainId)) {
      //     alert("Please change your network to Mainnet");
      //     return false;
      //   }

      const accounts = await web3.eth.getAccounts();
      //   if (isMetamask) {
      //   }
      // setMessage("successful");

      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }

  useEffect(() => {
    if (isMobile && !active && window.ethereum) {
      connect();
    }
  }, [window.ethereum]);
  // const showAccount = document.querySelector('.showAccount');
  function register() {
    // Register functionality here
  }
  function submit() {
    // submit functionality here
  }
  return (
    <div className="bgmint">
      <Container>
        <Row>
          <Col md={3}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="margin1 bgsecondsec"
            >
              <Card.Body>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Roboto",
                    marginBottom: "0px",
                  }}
                >
                  Initial Deposit
                  <br />- 0{" "}
                  <span style={{ color: " rgba(255, 200, 6, 1)" }}>
                    <b>BNB</b>
                  </span>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="margin1 bgsecondsec"
            >
              <Card.Body>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Roboto",
                    marginBottom: "0px",
                  }}
                >
                  Total Deposit
                  <br />- 0{" "}
                  <span style={{ color: " rgba(255, 200, 6, 1)" }}>
                    <b>BNB</b>
                  </span>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="margin1 bgsecondsec"
            >
              <Card.Body>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Roboto",
                    marginBottom: "0px",
                  }}
                >
                  Sold Cities
                  <br />- 0{" "}
                  <span style={{ color: " rgba(255, 200, 6, 1)" }}>
                    <b>BNB</b>
                  </span>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="margin1 bgsecondsec"
            >
              <Card.Body>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Roboto",
                    marginBottom: "0px",
                  }}
                >
                  Referral Rewards
                  <br />- 0{" "}
                  <span style={{ color: " rgba(255, 200, 6, 1)" }}>
                    <b>BNB</b>
                  </span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="rowgut mt-3 ">
          <Col md={6}>
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className=" bgsecondsec"
            >
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <p className="para">Hiring Example </p>
                    <p className="para">
                      1{" "}
                      <span
                        style={{ color: "rgb(255, 200, 6)", fontWeight: "600" }}
                      >
                        BNB{" "}
                      </span>
                      = 0 Aliens
                    </p>{" "}
                    <p className="para">
                      Daily Yield: 0{""}
                      <span
                        style={{ color: "rgb(255, 200, 6)", fontWeight: "600" }}
                      >
                        {""} BNB{" "}
                      </span>
                    </p>
                  </Col>
                  <Col md={6}>
                    {" "}
                    <div className="block">
                      <p
                        className="para1"
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          marginBottom: "0px",
                        }}
                      >
                        {" "}
                        Wallet
                      </p>
                      <p
                        className="para1"
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          marginBottom: "0px",
                        }}
                      >
                        ⚬ {""} 0{" "}
                        <span
                          style={{
                            color: "rgb(255, 200, 6)",
                            fontWeight: "600",
                          }}
                        >
                          {""} BNB{" "}
                        </span>
                      </p>
                    </div>
                  </Col>
                  <p className="para1 mt-4" style={{ textAlign: "center" }}>
                    ⏰ {""}Cities will be built in
                  </p>
                  <p className="para1 mt-2" style={{ textAlign: "center" }}>
                    {" "}
                    --:--:--{" "}
                  </p>
                  <p className="para1 mt-2" style={{ textAlign: "center" }}>
                    Time until next hire bouns is activated :{" "}
                  </p>
                  <p className="para1 mt-2" style={{ textAlign: "center" }}>
                    {" "}
                    --:--:--{" "}
                  </p>
                  <p className="para1 mt-2">
                    <b>
                      Deposit{" "}
                      <span
                        style={{
                          color: "rgb(255, 200, 6)",
                          fontWeight: "600",
                        }}
                      >
                        {""} BNB{" "}
                      </span>
                    </b>
                    ( min 0.1 , max 25 ){" "}
                  </p>
                  <input
                    type="text"
                    placeholder="0"
                    className="buyButton mt-2"
                  />
                  <button class="buyButton1 mt-4 mb-5">Hire 0 Aliens</button>
                  {/* <span class="ant-input-affix-wrapper antInput mt-4">
                    <input type="text" placeholder="0" class="ant-input" />{" "}
                    <span class="ant-input-suffix">
                      <span class="suffix">BNB</span>
                    </span>
                  </span> */}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mbl">
            {" "}
            <Card
              style={{
                border: "none",
                maxWidth: "800px",
                borderRadius: "0.75rem",
              }}
              className="bgsecondsec"
            >
              <div
                className="rightdiv"
                style={{
                  display: "flex",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <p className="para"> 0 Aliens</p>
                <img src={arrow} style={{ width: "13px", margin: "auto" }} />
                <p className="para mt-1">
                  O{" "}
                  <span
                    style={{
                      color: "rgb(255, 200, 6)",
                      fontWeight: "600",
                    }}
                  >
                    {""} BNB{" "}
                  </span>
                </p>
                <br />
                <p className="para sp">Estimated daily yield</p>
                <p className="para">
                  O{" "}
                  <span
                    style={{
                      color: "rgb(255, 200, 6)",
                      fontWeight: "600",
                    }}
                  >
                    {""} BNB{" "}
                  </span>
                </p>
                <br />
                <p className="para sp">Compound Count : 0 times</p>
                <button class="buyButton3 mt-4">Sell City </button>

                <button class="buyButton3 mt-4 mb-5">
                  Hire More Aliens ( +1% Bonus)
                </button>
              </div>
            </Card>
          </Col>
          <p className="mainpara mt-5 mb-5">
            Every time you Hire More Aliens (compound) without withdrawing, your
            compound bonus grows by 1% (max +10%). Withdrawing will reset your
            bonus to 0. Users should compound 10 times to avoid 90% Mars Tax
            (Penalty).{" "}
          </p>
        </Row>
        <Row>
          <Card
            style={{
              border: "none",
              marginBottom: "50px",
              borderRadius: "0.75rem",
              padding: "20px",
            }}
            className="bgsecondsec"
          >
            <div class="referral ">
              <h2 className="nut">
                Referral ( Earn 8% when someone uses your referral link ! )
              </h2>{" "}
              <span class="ant-input-affix-wrapper antInput mt-4 mb-4">
                <p
                  style={{ color: "rgba(183, 183, 183, 1)", fontSize: "22px" }}
                >
                  Your link -{" "}
                </p>
                <input type="text" class="ant-input" />{" "}
                <span class="ant-input-suffix">
                  <span class="suffix">Copy</span>
                </span>
              </span>
            </div>
          </Card>
        </Row>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export default MintCard;
