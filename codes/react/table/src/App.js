import React from 'react';
import logo from './logo.svg';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/user/retrieve`)
      .then(res => {
        console.log("data");
        console.log(res.data);
        this.setState({ users: res.data });
      });
  }

  render() {

    let trUsers;
    if (this.state.users && this.state.users.length > 0) {
      trUsers = this.state.users.map((user) =>
        <tr>
          <td>{user.Name}</td>
          <td><input type="image" src="edit.svg" height="50" width="50" style={{ backgroundColor: 'yellow' }} onclick="buttonClick()" /></td>
          <td><input type="image" src="trash-alt.svg" height="50" width="50" style={{ backgroundColor: 'red' }} /></td>
        </tr>
        /*<
          <td></td>
          <td><button type="button" id="btnAddName" class="addnamebutton" data-toggle="modal" data-target="#myModal">Add Name</button></td>
          <td></td>
        </tr>*/
      )
    }

    return (
      <div className="App">
        <div className="left">
          <table>
            <tr>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {trUsers}
          </table>
        </div>
      </div>
    )
  }
}

export default App;