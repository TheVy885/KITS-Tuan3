import React, { Component } from "react";
import Slider from "react-slick";
import { Product } from "../Product";
import green_dress from "../../assets/green-dress.svg";
import styled from "styled-components";

const StyledResponsiveSlick = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
class ResponsiveSlick extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>

          <div>
            <Product
              img={green_dress}
              price="236.00"
              type="Dress"
              name="Basic Dress Green"
              tag="Hot"
              // bgTag="red"
            />
          </div>
          {/* <div>
              <h3>
                <Product
                  img={green_dress}
                  price="236.00"
                  type="Dress"
                  name="Basic Dress Green"
                  tag="Hot"
                  // bgTag="red"
                />
              </h3>
            </div>
            <div>
              <h3>
                <Product
                  img={green_dress}
                  price="236.00"
                  type="Dress"
                  name="Basic Dress Green"
                  tag="Hot"
                  // bgTag="red"
                />
              </h3>
            </div>
            <div>
              <h3>
                <Product
                  img={green_dress}
                  price="236.00"
                  type="Dress"
                  name="Basic Dress Green"
                  tag="Hot"
                  // bgTag="red"
                />
              </h3>
            </div>
            <div>
              <h3>
                <Product
                  img={green_dress}
                  price="236.00"
                  type="Dress"
                  name="Basic Dress Green"
                  tag="Hot"
                  // bgTag="red"
                />
              </h3>
            </div> */}
        </Slider>
      </div>
    );
  }
}

export default ResponsiveSlick;
