import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.controller = new AbortController()
    this.state = {
      display: false,
      countries: [],
      currentCountries: [],
    };
  }
  
  async fetchCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all", {
        signal: this.controller.signal
      })
      const data = response.data;
      console.log("fetched");
      this.setState({
        countries: data,
        currentCountries: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async fetchCountriesWithTimeout() {
    setTimeout(() => {
      this.fetchCountries();
    }, 3000);
  }

  inputChangeHandler(e) {
    const filtered = this.state.countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    const timerID = setTimeout(() => {
      this.setState({ currentCountries: filtered });

      return () => {
        clearTimeout(timerID);
      };
    }, 500);
  }

  clickHandler() {
    this.setState((prevState) => {
      return { display: !prevState.display };
    });
  }

  clickToShowState() {
    console.log(this.state.countries);
    console.log(this.state.currentCountries);
  }

  //? if I want to do sth when the component mounts
  // componentDidMount() {
  //   this.fetchCountries()
  //   console.log('component mounted')
  // }


  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.display !== this.state.display &&
      this.state.display === true
    ) {
      this.fetchCountriesWithTimeout();
      console.log("component updated, ul mounted");
    }
    if (
      prevState.display !== this.state.display &&
      this.state.display === false
    ) {
      this.controller.abort()
      this.setState({ countries: [], currentCountries: [] });
      console.log("ul unmounted");
    }
  }

  //? if the entire component is unmounted
  // componentWillUnmount() {
  //   console.log("component unmounted");
  //   this.setState({ countries: [], currentCountries: [] });
  // }

  render() {
    return (
      <>
        <div className="wrapper">
          <label htmlFor="search">Search</label>
          <input name="search" onChange={this.inputChangeHandler.bind(this)} />
          <button onClick={this.clickHandler.bind(this)}>Display</button>
          <button onClick={this.clickToShowState.bind(this)}>
            clg display state
          </button>
        </div>
        <ul>
          {this.state.display &&
            this.state.currentCountries.map((country) => {
              return <li key={country.name.official}>{country.name.common}</li>;
            })}
        </ul>
      </>
    );
  }
}
export default App;
