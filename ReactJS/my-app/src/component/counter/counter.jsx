import React from "react";
import styled from "styled-components";
import { HelloWord } from "../hello/hello";
// import styled from "styled-components";
const Wrapper = styled.section`

  padding: 4em;
   background: blue;
  color:white;
  background-color: ${props=> props.count>5?"red":"blue"}
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  
`;
const spanCss= styled(Title)`
  color: red;
`

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, loading: true };
  }

  onDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  onIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //trc componentWillMount là constructor

  //thứ tự chạy:
  //1.componentWillMount
  //2.render
  //3.componentDidMount
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
    console.log("componentWillMount");
  }
  //componentDidMount dung de goi state, goi api
//chay sau render
  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate=(nextState,nextProps)=> {
    console.log("nextState",nextState);
    console.log("nextProps",nextProps);
    if(this.nextState>5){
      return false;
    }
    return true;
  }

  
  render() {
    //viet javascipt o day
    console.log("renderrrr");
    return (
      //viet jsx o day
      <div>
        {this.state.loading ? (
          <div>Loadingg</div>
        ) : (
          <>
          <Wrapper count={this.state.count}>
            <Title><h1>abcdef</h1></Title>
            <button
              onClick={() => this.onDecrease()}
              style={{ width: 60, height: 30 }}
            >
              -
            </button>
            <span style={{ marginLeft: 30, marginRight: 30 }}>
              {this.state.count}
            </span>
            <button
              onClick={() => this.onIncrease()}
              style={{ width: 60, height: 30 }}
            >
              +
            </button>
            <HelloWord/>
            <spanCss><HelloWord/></spanCss>
            </Wrapper>
          </>
        )}
      </div>
    );
  }
}
