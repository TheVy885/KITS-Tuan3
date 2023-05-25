import styled from "styled-components";

const StyledToggle = styled.div`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
  }

  .container {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }
  #checkbox {
    display: none;
  }
  .toggle {
    height: 30px;
    width: 90px;
    border-radius: 9999px;

    background-size: cover;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    box-shadow: 6px 6px 10px #0000003d;
  }

  #checkbox:checked + .toggle {
    background-size: cover;
  }

  .toggle::before {
    content: "";
    height: 30px;
    width: 30px;
    position: absolute;
    left: 0;
    border-radius: 50%;
    background-color: #f4f4f4;
    transition: all 0.5s ease-in-out;
    background-image: url(./moonIcon.svg);

    background-size: cover;
  }

  #checkbox:checked + .toggle::before {
    position: absolute;
    left: calc(67%);
    background-image: url(./sunIcon.svg);
  }
`;

export const Toggle_NightMode = () => {
  return (
    <StyledToggle>
    <div className="container">
      <div className="daynight">
        <label for="checkbox">
          <input type="checkbox" name="" id="checkbox" />
          <div className="toggle">
            <div className="star1"></div>
            <div className="star2"></div>
          </div>
        </label>
      </div>
    </div>
    </StyledToggle>
  );
};
