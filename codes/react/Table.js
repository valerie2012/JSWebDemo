import React from 'react';
import axios from 'axios';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/user/retrieve`)
    .then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }
  render() {
    return (
    <div className="App">
       <div className="left">
       <table>
        <tr>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        { this.state.users.map(user => 
          <tr>
            <td>{user.name}</td>
            <td><input type="image" src="public/edit.svg" height="50" width="50" style="background-color:yellow;" onclick="buttonClick()"/></td>
            <td><input type="image" src="trash-alt.svg" height="50" width="50" style="background-color: red"/></td>
            </tr>
            <tr>
            <td></td>
            <td><button type="button" id="btnAddName" class="addnamebutton" data-toggle="modal" data-target="#myModal">Add Name</button></td>
            <td></td>
          </tr>
          )}
        </table>
      </div>    
      </div>
      );
    }
}
export default Table;
