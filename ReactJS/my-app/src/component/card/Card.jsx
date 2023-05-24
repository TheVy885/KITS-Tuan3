import styled from "styled-components";
import { Button } from "component/button/button";
import ethIcon from "assets/eth.svg";
const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;

  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;
    margin-left: 24px;
    /* display: flex;
    gap: 34px; */
    font-weight: 700;
    color: #27262e;
  }
  .ammount-wrapper {
    /* margin-bottom: 12px; */

    display: flex;
    justify-content: space-between;
  }
  .eth {
    margin-left: 10px;
  }
  .content {
    width: 90px;
    height: 31px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;

    color: #27262e;
  }
`;
export const Card = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ? (
        <div className="ammount-wrapper">
          <img className="eth" src={ethIcon} alt="eth"></img>
          <div>
            <span className="amount">{amount}</span> ETH
          </div>
        </div>
      ) : (
        <div>
          <span className="content">{content}</span> %
        </div>
      )}
      <Button percent={percent} boderColor="#E9E9E9">
        {Math.abs(percent)}%
      </Button>
    </StyledCard>
  );
};
