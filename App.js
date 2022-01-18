import logo from './logo.svg';
import './App.css';
import { DISHES } from './shared/dishes';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetails from './components/DishDetailComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <DishDetails dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
