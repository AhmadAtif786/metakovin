import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import check from "./Images/check.png";
import meta from "./Images/metamask.png";
import con from "./Images/conn.png";
const Home = () => {
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
  return (
    <div>
      <div className="backgroundhome">
        <div class="container ">
          <div class="row rowgut">
            <div class="col-md-7">
              <div class="p-3  margin1">
                <h4 className="mainhead">
                  Explore the red planet and build a civilisation to earn up to
                  6% rewards daily.
                </h4>
                <p className="mainpara">
                  Rise of Mars is first of its kind blockchain game to offer
                  very innovative features like anti-whale mechanism, low
                  Inflation rate, withdraw cool down timer, mandatory compound
                  feature and more to ensure the sustainability and longevity of
                  the project.
                </p>
                <p className="mainpara">
                  Hire Aliens, so they will immediately start building your city
                  to generate crazy daily returns on your investment.
                </p>
                <br />
                <button
                  type="button"
                  class="btn btn-primary topbutton mt-1 des"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  CONNECT WALLET
                </button>
                <button
                  type="button"
                  class="btn btn-primary topbutton mt-1 mob"
                >
                  CONNECT WALLET
                </button>
                <div
                  class="modal fade hide"
                  id="exampleModal1"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ top: "200px" }}
                >
                  <div class="modal-dialog" role="document">
                    <div
                      class="modal-content "
                      style={{ backgroundColor: "rgba(41, 41, 41, 1)" }}
                    >
                      <div>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body mb-3">
                        {" "}
                        <img
                          src={meta}
                          onClick={connect}
                          style={{ width: "100%" }}
                        />
                        <hr style={{ color: "white" }} />
                        <img src={con} style={{ width: "100%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="p-3">
                <Card
                  style={{
                    border: "none",
                    maxWidth: "500px",
                    borderRadius: "0.75rem",
                    padding: "1.5rem 3rem 1.5rem 0.5rem",
                  }}
                  className="margin1 bgsecond"
                >
                  <Card.Body>
                    <div class="dataRow">
                      <div class="name">Contract</div>{" "}
                      <div class="value">
                        0{" "}
                        <span style={{ color: "rgba(255, 200, 6, 1)" }}>
                          BNB
                        </span>
                      </div>
                    </div>
                    <div class="dataRow">
                      <div class="name">Martains</div>
                      <div class="value">0.00</div>
                    </div>
                  </Card.Body>
                </Card>
                <button
                  className="mainhead d-flex"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{
                    textAlign: "center",
                    border: "none",
                    margin: "auto",
                    backgroundColor: "transparent",
                  }}
                >
                  <u>Creators Contest</u>
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog"
                    style={{ maxWidth: "780px" }}
                    role="document"
                  >
                    <div
                      class="modal-content"
                      style={{ backgroundColor: "#FFF4F4" }}
                    >
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Creators Contest!
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <b style={{ fontSize: "20px" }}>
                          Win a juicy BNB reward without the need of a huge
                          following!
                        </b>{" "}
                        <p className="mt-3">For who this may benefit?</p>
                        <p>
                          For anyone who has an audience on Tiktok, Youtube,
                          Twitter, Reddit and other social media platforms.
                        </p>
                        <p>
                          We have different benchmarks to value your content
                          individually depending on views, comments, likes,
                          quality of the post and the response it received.
                        </p>
                        <p>Prize pool:</p>{" "}
                        <p>
                          40% of total marketing wallet fees taken by 7th of
                          June will be distributed to the 50 Winners.
                        </p>
                        <p>
                          Competition Start: 11 May
                          <br />
                          Competition End: 07 Jun
                        </p>
                        <b style={{ fontSize: "20px" }}>Prize pool:</b>
                        <p className="mt-3">
                          #1 - 30%
                          <br />
                          #2 - 15%
                          <br />
                          #3 - 10%
                          <br />
                          #4 - #6 - 5%
                          <br />
                          #7 - 10% - 2.5%
                          <br />
                          #11 - 50% - 0.5%
                        </p>
                        <p>
                          Total prize pool amount will be announced on June 7
                        </p>
                        <b style={{ fontSize: "20px" }}>Competition Rules :</b>
                        <p className="mt-3">
                          Upload post or video about our Rise of Mars game and
                          its daily 6% reward in youtube,Twitter and other
                          social media, with the link to Rise of mars website.
                          Your post will not be valued if it doesn’t provide
                          details about rewards, game play and the link. You can
                          also add your referral link in your post. Post as many
                          times to increase your chance to win the pool. Quality
                          of the post and also the number of people it reaches
                          will matter in deciding the winners. <br />
                          <br />
                          Submit your post links in telegram to @thekingofmeta
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="popupcls"
                          data-dismiss="modal"
                        >
                          GOT IT THANKS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            {" "}
            <h4 className="mainhead ">Features</h4>
            <Card
              style={{
                border: "none",

                borderRadius: "0.75rem",
                padding: "1.5rem 3rem 1.5rem 0.5rem",
              }}
              className=" bgthird"
            >
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <div className="d-flex">
                      <p
                        className="featurepara"
                        style={{ marginBottom: "0px" }}
                      >
                        ✅ {""}
                        {""}Up to 6% Daily 2190% APR
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <div className="d-flex">
                      <p
                        className="featurepara"
                        style={{ marginBottom: "0px" }}
                      >
                        ✅ {""}
                        {""}7% Referrals
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <div className="d-flex">
                      <p
                        className="featurepara"
                        style={{ marginBottom: "0px" }}
                      >
                        ✅ {""}
                        {""}10 Times Mandatory Compound
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md={4}>
                    <div className="d-flex">
                      <p
                        className="featurepara"
                        style={{ marginBottom: "0px" }}
                      >
                        ✅ {""}
                        {""}1% Compound Bonus
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <div className="d-flex">
                      <p
                        className="featurepara"
                        style={{ marginBottom: "0px" }}
                      >
                        ✅ {""}
                        {""}36 Hours Rewards Accumulation Cut-Off
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <div className="d-flex">
                      <p
                        className="featurepara"
                        style={{ marginBottom: "0px" }}
                      >
                        ✅ {""}
                        {""}90% Mars Tax (penalty) for Early Withdrawals
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <p
              style={{ textAlign: "center", color: "white", fontSize: "12px" }}
              className="mt-3 marginfirst"
            >
              High Risk! Funds that are used to initially hire aliens (including
              re-hire) cannot be withdrawn, however your alien will indefinitely
              work and build cities for you. Please play the game at your own
              risk. <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
