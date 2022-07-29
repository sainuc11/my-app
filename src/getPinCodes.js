import React from 'react';
import axios from 'axios';


class GetPin extends React.Component {
  state = {
    persons: []
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]:[e.target.value]});
    console.log(this.state);
  }

  getData=(e)=> {
    e.preventDefault();
    console.log(this.state);
    axios.get('http://localhost:8081/DBConnection-0.0.1-SNAPSHOT/pinDetailsByPin/'+this.state.pincode)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getData}>
          <input type='text' placeholder='Enter pincode' name='pincode' value={this.state.pincode} onChange={this.handleChange}></input>
          <input type='submit' placeholder='submit' value='submit'></input>
        </form>
      <table>
        {
          this.state.persons
            .map(person =>
              <tr key={person.slNo}><td>{person.pinCode}</td><td>{person.pinArea}</td></tr>
            )
        }
      </table>
      </div>
    )
  }
}

export default GetPin;