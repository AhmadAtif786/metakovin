import React from "react";
import { Navbar, Container, NavDropdown, NavItem, Nav } from "react-bootstrap";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import one from "./Images/1.png";
import two from "./Images/2.png";
import three from "./Images/3.png";
import four from "./Images/4.png";
import meta from "./Images/metamask.png";
import con from "./Images/conn.png";
import logo from "./Images/logonew.png";
const Navbartop = () => {
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
      <Navbar
        // collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#160C16" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Audit</Nav.Link>
              <Nav.Link href="#pricing">How to Play</Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <button
                  className="bg-transparent"
                  data-toggle="modal"
                  data-target="#exampleModal11"
                  style={{ border: "none", color: "white" }}
                >
                  FAQ
                </button>
                <div
                  class="modal fade"
                  id="exampleModal11"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog"
                    style={{ maxWidth: "1010px" }}
                    role="document"
                  >
                    <div
                      class="modal-content"
                      style={{ backgroundColor: " rgba(0, 5, 26, 0.93)" }}
                    >
                      <div class="modal-header">
                        <h5
                          class="mainhead"
                          style={{ textAlign: "center" }}
                          id="exampleModalLabel"
                        >
                          Frequently Asked Questions
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
                        <b style={{ color: "rgba(255, 200, 6, 1)" }}>
                          How is the Rise of Mars project different from other
                          similar projects?
                        </b>{" "}
                        <p
                          style={{ color: "white", fontWeight: "bold" }}
                          className="mt-3"
                        >
                          Rise of Mars is the first of its kind Decentralized
                          miner game built of Binance Smart Chain with lot of
                          new features and improvements unlike the other miners
                          out in the space. We made significant improvements in
                          the code to reduce the inflation to an extreme extent,
                          we made lot of features like anti-whale mechanism,
                          Mandatory compound feature, modest referral fee, 36
                          hours Rewards accumulation cut off, withdrawal
                          cooldown, 90% Mars tax for those who make early
                          withdrawals without compounding for at least 10 times
                          to increase the sustainability and longevity of the
                          proper. Rise of Mars has lot of new features like. We
                          made this project to be a gamechanger in the space.
                        </p>
                        <b style={{ color: "rgba(255, 200, 6, 1)" }}>
                          What is Rise of Mars miner game?
                        </b>
                        <p
                          style={{ color: "white", fontWeight: "bold" }}
                          className="mt-3"
                        >
                          The Rise of Mars is a dapp built on the Binance Smart
                          Chain. The objective of the game is to hire more
                          Aliens very often than other Players. This in turn
                          earns you more BNB than others. These Aliens work for
                          you indefinitely, giving you a daily average reward of
                          6%.
                          <br />
                          The daily percentage of returns depend on the aliens
                          actions that are taken within the platform this will
                          impact the Aliens efficiency rate. The Aliens
                          efficiency rate rises and falls as users buy Aliens,
                          re-hire through their earnings and sell their Cities
                          for BNB.
                          <br />
                          Once Aliens are Bought, they cannot be sold, and the
                          investment made to re-hire them (either through hire
                          or re-hiring) cannot be taken back. However, once
                          Aliens are hired they will indefinitely in building
                          your city.
                        </p>
                        <b style={{ color: "rgba(255, 200, 6, 1)" }}>
                          What are the features that are different from other
                          similar platforms and also what are the different
                          function name in game mean?
                        </b>{" "}
                        <p
                          style={{ color: "white", fontWeight: "bold" }}
                          className="mt-3"
                        >
                          The Rise of Mars has several features like Low
                          inflation rate, anti-dumping and anti-whale mechanism
                          in place to ensure the Sustainability of the project.
                          We have also capped the deposit limit to 25 BNB
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          The cutoff time is the amount of time it will take for
                          your "cities to be built" with full of rewards. Once
                          the bag is full, it will stop filling until you've
                          taken some action in the game. This is to prevent
                          whales from letting their rewards accumulate for a
                          long time, and removes the false impression the
                          contract value is going up when most of it is rewards
                          the whale is waiting to withdraw at once.
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          The withdraw cooldown time is the amount of time one
                          has to wait before they can make another withdrawal.
                          This also prevents the contract balance from
                          decreasing. If the team decides it's necessary to
                          protect the contract balance, this time period can be
                          adjusted to slow down the rate of withdrawals, but it
                          can only be set to a value less than or equal to 24
                          hours (per contract rules).
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          The compound count is the number of times the user has
                          compounded. By default, the required compound count by
                          the platform is 10, meaning the user will have to
                          compound 10 times(compound once every 12 hours) before
                          they can withdraw without the feedback tax of 90%.
                          This feature will ensure the longevity and
                          sustainability of the project.
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          To reward users who compound, there is a bonus when
                          you re-hire aliens to build city with rewards instead
                          of selling them. The bonus increases 1% every 12 hours
                          that you compound without withdrawing (10% max after 5
                          days). This incentivizes the user to compound more
                          often, which will help boost the efficiency rate in
                          the long run. To be able to utilize the re-hire bonus
                          feature, the player must not compound before the
                          provided timer reaches 00:00:00.
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          For the Users who choose not to play the game and only
                          sell the cities with rewards, there will be a 90% tax
                          on those sells that will be credited back to the
                          contract. If the player makes two or more consecutive
                          sells, this tax will be applied. The only way for the
                          user to not pay the 90% tax is to compound 10 times
                          before making another withdrawal.
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          Rise of Mars also has a very unique feature that has
                          never been done before which effectively decreases the
                          amount of farmers inflation that occurs over a long
                          period of time. Every sell action will only add 50% of
                          the amount sold to the total supply. Older miner add
                          100% of what is sold to the total supply. This means
                          the contract will have a lower inflation rate, keeping
                          the supply more scarce and more valuable than other
                          miner platforms.
                        </p>
                        <b style={{ color: "rgba(255, 200, 6, 1)" }}>
                          How does Rise of Mars work?
                        </b>
                        <p
                          className="mt-3"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          It works on the principle supply and demand ratio.
                          Aliens are purchased with a pre-determined currency at
                          a price relative to the Aliens's current building
                          efficiency rate. After the Aliens are purchased, they
                          go to work for you right away to give you the best
                          yield on your investment possible. Just as any other
                          asset bought and sold on an financial market, the
                          price of a Alien will fluctuate over time, as will the
                          building efficiency rate, as you and other users
                          recruit Aliens, compound earnings and sell earnings.
                          When there is more demand for the Alien, the more they
                          will increase in value and the more yield they will
                          produce. Inversely, when the demand decreases, so will
                          the value of the Alien and their daily return on
                          investment.
                        </p>
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          The main difference between this game and the
                          financial market is that a recruited Alien cannot be
                          sold, only the value they provide can be sold. As the
                          Users of the game as a whole compound their earnings
                          and make new deposits, the game efficiency rate will
                          stay relatively constant, but the moment Users start
                          to sell more than they are compounding, the efficiency
                          rate will begin to drop as to preserve the TVL and
                          longevity of the game.
                        </p>
                        <b style={{ color: "rgba(255, 200, 6, 1)" }}>
                          Is there a Strategy to play this game?
                        </b>
                        <p
                          className="mt-3"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          The best strategy that the team can recommend is to
                          re-hire/compound for 6 days and harvest 1 day a week.
                          This will increase the users investment at the same
                          time increasing the daily yield earnings. This
                          strategy has already been tried and battle tested and
                          is proven effective.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={two}
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                </a>
                Contract
              </Nav.Link>{" "}
              <Nav.Link href="#pricing">
                {" "}
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={four}
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                </a>
                Twitter
              </Nav.Link>{" "}
              <Nav.Link href="#pricing">
                {" "}
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={three}
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                </a>
                Telegram
              </Nav.Link>
              <button
                type="button"
                class="btn btn-primary topbutton des ml-5"
                data-toggle="modal"
                data-target="#exampleModal1"
              >
                CONNECT
              </button>
              <button type="button" class="btn btn-primary topbutton mob">
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
                    style={{ backgroundColor: "#F58824" }}
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
                      <hr />
                      <img src={con} style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
