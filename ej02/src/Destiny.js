import React from "react";

class Destiny extends React.Component {
  handleChange(event) {
    alert(`Te vas a ir de vacaciones a ${event.currentTarget.value}`);
  }
  render() {
    return (
      <div>
        <label for="cities">¿A que ciudad queres viajar?</label>
        <select onChange={this.handleChange} className="CitiesList">
          <option value="Buenos Aires"> Buenos Aires</option>
          <option value="Sidney"> Sidney</option>
          <option value="Praga"> Praga</option>
        </select>
      </div>
    );
  }
}

export default Destiny;
