import React from 'react';

class Country extends React.Component {
    state = {
        isShowed: false
    }

    toggleShow = () => {
        this.setState({...this.state, isShowed: !this.state.isShowed})
    }

    render() {

    const modal = () => {
    if(this.state.isShowed) {

    return (
            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>Information about: </h2>
                <a className="close" href="#" onClick={this.toggleShow}>&times;</a>
                <div className="content">
                        <div className="code">Code: {this.props.data.alpha2Code}</div>
                        <div className="flag">Flag: <img src={this.props.data.flag}></img></div>
                        <div className="country-name">Country name: {this.props.data.name}</div>
                        <div className="capital">Capital: {this.props.data.capital}</div>
                        <div className="population">Population: {this.props.data.population}</div>
                </div>
              </div>
            </div> 
        );
    }
}

    return (
        <li>
            {modal()}
            <div className="code">Code: {this.props.data.alpha2Code}</div>
            <div className="flag">Flag: <img src={this.props.data.flag}></img></div>
            <div className="country-name">Country name: {this.props.data.name}</div>
            <div className="capital">Capital: {this.props.data.capital}</div>
            <div className="population">Population: {this.props.data.population}</div>
            <button className="button" onClick={this.props.deleteCountry}>Delete</button>
            <a className="button" onClick={this.toggleShow} href="#popup1">Pop</a>
        </li>
    );
    }
}
export default Country;

