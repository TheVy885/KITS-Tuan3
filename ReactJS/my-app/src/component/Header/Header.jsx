import styled from "styled-components";
import searchIcon from "assets/searchIcon.svg";
import notiIcon from "assets/notiIcon.svg";
import user from "assets/user.svg";
const HeaderStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  /* position: fixed; */
  /* z-index: 99; */
  display: flex;
  justify-content: space-between;
  width: 95.8%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: #caeae6;
  /* margin: 32px; */
  padding: 32px;
  input {
    background: #ffffff;
    border-radius: 35px;
    width: 461px;
    height: 56px;
    padding-left: 60px;
  }
  .input-search {
    position: relative;
  }
  .input-search img {
    position: absolute;
    top: 18px;
    left: 26px;
  }
  .noti-user {
    display: flex;
    gap: 24px;
  }
  .noti {
    width: 56px;
    height: 56px;
    background: #ffffff;
    border-radius: 50%;
    border: 1px solid #e9e9e9;
    position: relative;
  }
  .noti img {
    position: absolute;
    top: 16px;
    left: 16px;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <div className="input-search">
        <img src={searchIcon} alt="" />

        <input
          type="text"
          placeholder="Search Item, Collection and Account.."
        />
      </div>
      <div className="noti-user">
        <div className="noti">
          <img src={notiIcon} alt="" />
        </div>
        <div className="user">
          <img src={user} alt="" />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
