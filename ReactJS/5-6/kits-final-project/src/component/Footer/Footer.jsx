import icon_fb from "../../assets/icon_fb.svg";
import icon_twitter from "../../assets/icon_twitter.svg";
import icon_in from "../../assets/icon_in.svg";
import icon_insta from "../../assets/icon_insta.svg";
import styled from "styled-components";
import payment from "../../assets/payment.svg";
import icon_up_arrow from "../../assets/icon_up_arrow.svg";
const StyledFooter = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  background-color: #e5e5e5;
  /* width: 100%; */
  height: 550px;

  .footer {
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
  }
  .footer-title {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #000000;
  }
  .footer1 {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .list {
    display: flex;
    width: 210px;
    justify-content: space-between;
  }

  .lisa {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;

    color: #000000;
  }
  .content {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    width: 392px;
    color: rgba(30, 40, 50, 0.75);
  }
  .footer-content {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;

    color: #1e2832;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 22px;
  }
  .footer-content div:hover {
    color: #ff6f61;
  }
`;

const StyledPayment = styled.div`
  /* margin-left: 300px;
  margin-right: 300px; */
  .payment {
    height: 52px;
    background: #1e2832;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 300px;
    padding-right: 300px;
  }
  .left {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-transform: capitalize;

    color: #ffffff;
  }
  .right {
    display: flex;
  }
  .scroll {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #ffffff;
  }
  .payment .right:hover {
    background-color: #ff6f61;
  }
`;

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="footer">
          <div className="footer1">
            <div className="lisa">LISA</div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="social-media">
              <div className="list">
                <img src={icon_fb} alt="" />
                <img src={icon_twitter} alt="" />
                <img src={icon_in} alt="" />
                <img src={icon_insta} alt="" />
              </div>
            </div>
          </div>
          <div className="footer2">
            <div className="footer-title">CATALOG</div>
            <div className="footer-content">
              <div>Necklaces</div>
              <div>hoodies</div>
              <div>Jewelry Box</div>
              <div>t-shirt</div>
              <div>jacket</div>
            </div>
          </div>
          <div className="footer3">
            <div className="footer-title">ABOUT US</div>
            <div className="footer-content">
              <div>Our Producers</div>
              <div>Sitemap</div>
              <div>FAQ</div>
              <div>About Us</div>
              <div>Terms & Conditions</div>
            </div>
          </div>
          <div className="footer4">
            <div className="footer-title">CUSTOMER SERVICES</div>
            <div className="footer-content">
              <div>Contact Us</div>
              <div>Track Your Order</div>
              <div>Product Care & Repair</div>
              <div>Book an Appointment</div>
              <div>Shipping & Returns</div>
            </div>
          </div>
        </div>
      </StyledFooter>
      <StyledPayment>
        <div className="payment">
          <div className="left">© 2023 LISA , Inc.</div>
          <div className="mid">
            <img src={payment} alt="" />
          </div>
          <div className="right">
            <div className="scroll">Scroll to top</div>
            <img src={icon_up_arrow} alt="" />
          </div>
        </div>
      </StyledPayment>
    </>
  );
};
