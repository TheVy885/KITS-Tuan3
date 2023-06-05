import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonDefaultStyled = styled.div`
  display: flex;
  gap: 11px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }
`;
export const ButtonDefault = ({
  url,
  name_button,
  type,
  width,
  height,
  bgColor,
  textColor,

}) => {
  console.log(url, name_button, type);
  switch (type) {
    case "small":
      break;
    case "large":
      break;
    default:
      return (
        <ButtonDefaultStyled
          url={url}
          name_button={name_button}
          width={width}
          height={height}
          bgColor={bgColor}
          textColor={textColor}

        >
          
          <img src={url} alt="" />
          <span>{name_button}</span>
        </ButtonDefaultStyled>
      );
  }
};
