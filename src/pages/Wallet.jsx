import React from "react";

import CommonSection from "../components/ui/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency (crypto). ",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "MetaMask is the leading self-custodial wallet. The safe and simple way to access blockchain applications and web3. Trusted by millions of users worldwide.",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Authereum",
    desc: "Authereum is an Ethereum-based wallet and dApp login solution. It allows users to easily interact with web 3 applications via any browser, using nothing but a username and password.",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Blockchain is a shared, immutable ledger that facilitates the
                  process of recording transactions and tracking assets in a
                  business network. An asset can be tangible (a house, car,
                  cash, land) or intangible (intellectual property, patents,
                  copyrights, branding). Virtually anything of value can be
                  tracked and traded on a blockchain network, reducing risk and
                  cutting costs for all involved.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
