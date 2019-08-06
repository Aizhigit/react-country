import React, { Component, Fragment } from 'react';
import Country from '../component/Country';
import './CountryContainer.css';

class CountryContainer extends Component {
  state = {
    data: [],
    searchedCountry: ""
  }
  componentWillMount = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .catch(err => console.log(err));
  }
  deleteCountry = (index) => {
      let countries = this.state.data;
      countries.splice(index,1);
      this.setState({data: countries});
    }
   onchange = aiji => {
          this.setState({searchedCountry: aiji.target.value});

}

  render() {
    const filCountries = this.state.data.filter ( country => {
      
      return country.name.toLowerCase().includes(this.state.searchedCountry.toLowerCase());
    })

    return (
      <Fragment >
      <input label="Search" icon="search" 
      value = {this.state.searchedCountry} onChange={this.onchange}/>
      <ul className="country-list">
        {filCountries.map((item, index) => {
        return (<Country data = {item}
      deleteCountry =  { () => this.deleteCountry(index)}
         />);}
        )}
      </ul>
      </Fragment>
      );
    }
}
export default CountryContainer;
