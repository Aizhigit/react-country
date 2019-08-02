import React, { Component } from 'react';
import CountryContainer from '../container/CountryContainer';


function Country(props) {
  return (
    <table border="1">
    <tr>Country name: {props.data.name}
    <img alt={props.data.name} src={props.data.flag}></img>
     Capital: {props.data.capital}
     <button onClick = {props.deleteCountry}>Delete</button>
     <button onClick = {props.openModal}>Modal</button>
     </tr>
     </table>
  );
}
export default Country;