import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Zenwich from "./Zenwich.js";

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    isClicked: null
  });

  // componentDidMount(){

  // };
  // componentDidUpdate(prevProps){
    // if (prevProps.location.pathname !== this.props.location.pathname)
  // };
// componentWillUnmount(prevProps){
    // if (prevProps.location.pathname !== this.props.location.pathname)
  // };

  //Use Effect
  useEffect(() => {
    //set up URL history listener
    history.listen(() => {
      setState({ isClicked: false });
    });
  }, [history]);

  // Toggle menu
  const toggleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        isClicked: true
      });
      console.log('isClicked 1')
    } else if (state.isClicked === true) {
      setState({ isClicked: !state.isClicked });
      console.log('isClicked 2')
    } else if (state.isClicked === false) {
      setState({ isClicked: !state.isClicked });
    }
    console.log('isClicked 3')
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">ZENWICH</Link>
            </div>
            <div className="menu">
              <button onClick={toggleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Zenwich state={state} />
    </header>
  );
};

export default withRouter(Header);
