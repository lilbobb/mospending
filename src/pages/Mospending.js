import TransactionManagementContainer from "../components/TransactionManagementContainer";
import CardContainer from "../components/CardContainer";
import FormContainer from "../components/FormContainer";
import RecentContactsContainer from "../components/RecentContactsContainer";
import RecentTransactionsContainer1 from "../components/RecentTransactionsContainer1";
import MoneyFlowFormContainer from "../components/MoneyFlowFormContainer";
import SettingsContainer from "../components/SettingsContainer";
import Component from "../components/Component";
import ContainerForm from "../components/ContainerForm";
import MospendingSection from "../components/MospendingSection";
import PersonalizedSavingsSuggestions from "../components/PersonalizedSavingsSuggestions";
import "./Mospending.css";

const Mospending = () => {
  return (
    <div className="mospending">
      <div className="mospending-child" />
      <div className="oval-base" />
      <div className="group-parent">
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="mospending1">Mospending</div>
        </div>
        <div className="frame-parent">
          <div className="home-parent">
            <div className="home">Home</div>
            <div className="home">Product</div>
            <div className="home">Company</div>
            <div className="home">Utility</div>
          </div>
          <div className="login-wrapper">
            <div className="home">Login</div>
          </div>
        </div>
      </div>
      <TransactionManagementContainer />
      <img className="icon" alt="" src="/46.svg" />
      <img className="icon1" alt="" src="/47.svg" />
      <div className="dashboard">
        <div className="dashboard-child" />
        <img className="dashboard-item" alt="" src="/group-1000003740@2x.png" />
        <CardContainer />
        <div className="my-card">My Card</div>
        <FormContainer />
        <RecentContactsContainer />
        <RecentTransactionsContainer1 />
        <MoneyFlowFormContainer />
        <div className="rectangle-parent">
          <div className="group-item" />
          <div className="quick-transfer">Quick Transfer</div>
          <div className="group-container">
            <div className="debit-parent">
              <div className="debit">Debit</div>
              <div className="parent">
                <div className="div">$10,432</div>
                <img className="shape-icon" alt="" src="/shape1.svg" />
              </div>
              <img className="xmlid-328-icon" alt="" src="/xmlid-328.svg" />
            </div>
            <div className="group-inner" />
          </div>
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="enter-amount">Enter amount</div>
            <div className="group">
              <div className="div1">$1,24</div>
              <div className="group-child1" />
            </div>
            <img className="group-icon" alt="" src="/group-1000003759@2x.png" />
          </div>
        </div>
        <div className="group-div">
          <div className="rectangle-container">
            <div className="group-child2" />
            <img className="vector-icon" alt="" src="/vector5.svg" />
          </div>
          <div className="rectangle-parent1">
            <div className="group-child2" />
            <img className="vector-icon1" alt="" src="/vector6.svg" />
          </div>
          <div className="rectangle-parent2">
            <div className="group-child2" />
            <img className="vector-icon1" alt="" src="/vector7.svg" />
          </div>
          <img className="group-child5" alt="" src="/group-1000003754.svg" />
          <div className="send">Send</div>
          <div className="receive">Receive</div>
          <div className="invoicing">Invoicing</div>
          <div className="more">More</div>
        </div>
        <div className="dashboard-inner" />
        <div className="statistics-parent">
          <div className="statistics">Statistics</div>
          <div className="group-parent1">
            <div className="customers-parent">
              <div className="customers">customers</div>
              <div className="k">220k</div>
            </div>
            <img className="group-child6" alt="" src="/group-1000003774.svg" />
          </div>
          <div className="group-parent2">
            <div className="remittance-parent">
              <div className="customers">Remittance</div>
              <div className="k">230k</div>
            </div>
            <img className="group-child6" alt="" src="/group-1000003775.svg" />
          </div>
          <div className="group-parent3">
            <div className="donation-parent">
              <div className="customers">Donation</div>
              <div className="k">270k</div>
            </div>
            <img className="group-child6" alt="" src="/group-1000003777.svg" />
          </div>
          <div className="group-parent4">
            <div className="watchtime-parent">
              <div className="watchtime">Watchtime</div>
              <div className="k">130k</div>
            </div>
            <img className="group-child6" alt="" src="/group-1000003778.svg" />
          </div>
        </div>
        <SettingsContainer />
      </div>
      <div className="mospending-item" />
      <div className="frame-group">
        <div className="our-features-parent">
          <b className="our-features">Our features</b>
          <div className="with-features-like">
            {" "}
            With features like customizable dashboards, real-time alerts, and
            secure data encryption, you can effortlessly manage your
            transactions and take control of your financial life.
          </div>
        </div>
        <div className="frame-container">
          <div className="frame-div">
            <div className="real-time-alerts-parent">
              <b className="real-time">Real - time Alerts</b>
              <div className="stay-on-top">
                Stay on top of your finances with our real-time alert feature!
                Get instant notifications about account activity, upcoming
                bills, and suspicious transactions so you can take action right
                away.
              </div>
            </div>
            <div className="frame-parent1">
              <div className="frame-parent2">
                <div className="frame-child" />
                <div className="frame-item" />
              </div>
              <div className="container">
                <Component
                  prop="/14@2x.png"
                  divBorderRadius="132.19px"
                  divWidth="2.48rem"
                  divHeight="2.48rem"
                  divPosition="relative"
                  iconBorderRadius="66.09px"
                />
                <div className="parent1">
                  <div className="div2">
                    <img className="icon2" alt="" src="/16@2x.png" />
                  </div>
                  <div className="div3">
                    <img className="icon3" alt="" src="/4@2x.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="real-time-alerts-parent">
              <div className="customizable-dashboard">
                Customizable Dashboard
              </div>
              <div className="stay-on-top">
                asily track spending, monitor balances, and view transaction
                history all in one place. Take control of your finances and see
                the information that matters most to you.
              </div>
            </div>
            <div className="vector-parent">
              <img className="vector-icon3" alt="" src="/vector16.svg" />
              <img className="vector-icon4" alt="" src="/vector17.svg" />
              <img className="vector-icon5" alt="" src="/vector18.svg" />
              <img className="vector-icon6" alt="" src="/vector19.svg" />
              <img className="vector-icon7" alt="" src="/vector20.svg" />
              <img className="frame-inner" alt="" src="/frame-2608994.svg" />
              <div className="business-account-parent">
                <div className="business-account">Business account</div>
                <div className="parent2">
                  <b className="b">$50,099</b>
                  <img className="vector-icon8" alt="" src="/vector21.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-parent">
        <div className="content">
          <div className="easily-track-your">{`Easily track your payments with our payment tracking feature. Monitor your bills and payments in one place, and get alerts when bills are due, so you never miss a payment again. With our app, you can simplify your finances and stay organized. `}</div>
          <div className="heading">
            <div className="easy-tracking">Easy tracking</div>
          </div>
        </div>
        <div className="ellipse-group">
          <div className="ellipse-div" />
          <div className="group-parent5">
            <div className="frame-wrapper">
              <ContainerForm dimensionCode="/ellipse-40@2x.png" />
            </div>
            <ContainerForm
              dimensionCode="/ellipse-401@2x.png"
              propTop="6.69rem"
              propLeft="7.44rem"
            />
            <ContainerForm
              dimensionCode="/ellipse-402@2x.png"
              propTop="13.31rem"
              propLeft="5.13rem"
            />
            <ContainerForm
              dimensionCode="/ellipse-403@2x.png"
              propTop="20rem"
              propLeft="0rem"
            />
            <img className="icon4" alt="" src="/471.svg" />
          </div>
        </div>
      </div>
      <div className="group-parent6">
        <MospendingSection />
        <PersonalizedSavingsSuggestions />
      </div>
      <div className="frame-parent4">
        <div className="our-features-parent">
          <div className="we-have-more">We have more offers for you.</div>
          <div className="with-features-like1">
            {" "}
            With features like customizable dashboards, real-time alerts, and
            secure data encryption, you can effortlessly manage your
            transactions and take control of your financial life.
          </div>
        </div>
        <div className="div-parent">
          <div className="div4">
            <div className="div5">
              <div className="div6">
                <b className="send-and-receive">
                  Send and receive without borders
                </b>
                <div className="explore-payments">Explore Payments</div>
              </div>
              <div className="group-644-1">
                <img className="vector-icon9" alt="" src="/vector23.svg" />
                <img className="group-icon1" alt="" src="/group3.svg" />
                <img className="vector-icon10" alt="" src="/vector24.svg" />
                <img className="group-icon2" alt="" src="/group4.svg" />
                <img className="vector-icon11" alt="" src="/vector25.svg" />
                <img className="group-icon3" alt="" src="/group5.svg" />
                <img className="vector-icon12" alt="" src="/vector26.svg" />
                <img className="vector-icon13" alt="" src="/vector27.svg" />
                <img className="group-icon4" alt="" src="/group6.svg" />
                <img className="group-icon5" alt="" src="/group7.svg" />
                <img className="group-icon6" alt="" src="/group8.svg" />
                <img className="group-icon7" alt="" src="/group9.svg" />
                <img className="vector-icon14" alt="" src="/vector28.svg" />
                <img className="vector-icon15" alt="" src="/vector29.svg" />
                <img className="vector-icon16" alt="" src="/vector30.svg" />
                <img className="group-icon8" alt="" src="/group10.svg" />
                <img className="group-icon9" alt="" src="/group11.svg" />
                <img className="group-icon10" alt="" src="/group12.svg" />
                <img className="group-icon11" alt="" src="/group13.svg" />
                <img className="vector-icon17" alt="" src="/vector31.svg" />
                <img className="group-icon12" alt="" src="/group14.svg" />
                <div className="ngn-1000000">NGN 1,000,000</div>
              </div>
            </div>
            <div className="div7">
              <div className="div8">
                <b className="invoices-that-work">Invoices that work smarter</b>
                <div className="learn-more-about">
                  Learn more about Invoices
                </div>
              </div>
              <div className="group-parent7">
                <div className="rectangle-parent3">
                  <div className="group-child10" />
                  <div className="div9">11/24</div>
                  <div className="rectangle-parent4">
                    <div className="frame-child1" />
                    <div className="frame-child2" />
                  </div>
                  <div className="rectangle-parent5">
                    <div className="frame-child1" />
                    <div className="frame-child2" />
                  </div>
                  <div className="parent3">
                    <div className="div10">5995</div>
                    <div className="div10">7474</div>
                    <div className="div10">1103</div>
                    <div className="div10">7513</div>
                    <div className="div10">0014</div>
                  </div>
                  <div className="group-child11" />
                  <img
                    className="vuesaxboldcoin-icon"
                    alt=""
                    src="/vuesaxboldcoin.svg"
                  />
                </div>
                <div className="frame-parent5">
                  <div className="vuesaxoutlinemonitor-wrapper">
                    <img
                      className="vuesaxoutlinemonitor-icon"
                      alt=""
                      src="/vuesaxoutlinemonitor.svg"
                    />
                  </div>
                  <div className="frame-parent6">
                    <div className="new-imac-parent">
                      <div className="home">New iMac</div>
                      <div className="div15">50%</div>
                    </div>
                    <div className="rectangle-parent6">
                      <div className="group-child12" />
                      <div className="group-child13" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div16">
            <div className="div17">
              <div className="div18">
                <div className="smart-company-debit-cards-help-parent">
                  <b className="smart-company-debit">
                    Smart company debit cards help you and your team go further
                  </b>
                  <div className="learn-more-about1">
                    Learn more about Cards
                  </div>
                </div>
              </div>
              <img className="image-58-icon" alt="" src="/image-58@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="image-parent">
        <div className="image">
          <div className="image-child" />
          <img className="image-56-icon" alt="" src="/image-56@2x.png" />
          <img className="icon5" alt="" src="/461.svg" />
          <div className="rectangle-parent7">
            <div className="group-child14" />
            <div className="total-balance-parent">
              <div className="total-balance">Total Balance</div>
              <div className="parent4">
                <b className="div">$4,200</b>
                <div className="div19">+14%</div>
              </div>
            </div>
            <div className="k-parent">
              <div className="div">10k</div>
              <div className="k5">4k</div>
              <div className="k6">2k</div>
              <div className="div20">0</div>
            </div>
            <div className="group-parent8">
              <div className="s-parent">
                <div className="s">S</div>
                <div className="group-child15" />
              </div>
              <div className="m-parent">
                <div className="m">M</div>
                <div className="group-child16" />
              </div>
              <div className="t-parent">
                <div className="t">T</div>
                <div className="group-child17" />
              </div>
              <div className="w-parent">
                <div className="w">W</div>
                <div className="group-child18" />
              </div>
              <div className="t-group">
                <div className="t1">T</div>
                <div className="group-child19" />
              </div>
              <div className="f-parent">
                <div className="f">F</div>
                <div className="group-child15" />
              </div>
              <div className="s-group">
                <div className="s1">S</div>
                <div className="group-child18" />
              </div>
              <div className="s-container">
                <div className="s2">S</div>
                <div className="group-child22" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent7">
          <div className="heading-parent">
            <div className="heading-parent">
              <div className="heading1">
                <div className="instant-visa-card">Instant visa card</div>
              </div>
              <div className="introducing-our-new">
                Introducing our new instant Visa card feature! With just a few
                taps in our app, you can instantly create a virtual Visa card
                and start making purchases online or in-store. Say goodbye to
                waiting for your physical card to arrive in the mail and hello
                to instant spending power. Try it today and experience the
                convenience of our fintech app.
              </div>
            </div>
            <div className="frame-child5" />
          </div>
          <div className="group-parent9">
            <div className="group-wrapper">
              <div className="group-wrapper">
                <div className="instant-access-to">Instant access to funds</div>
                <img className="group-child23" alt="" src="/group-155.svg" />
              </div>
            </div>
            <div className="group-frame">
              <div className="convenience-parent">
                <div className="instant-access-to">Convenience</div>
                <img className="group-child23" alt="" src="/group-155.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="flexibility-parent">
                <div className="instant-access-to">Flexibility</div>
                <img className="group-child23" alt="" src="/group-155.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mospending;
