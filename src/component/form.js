import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// import './navbar.css'; import {Link, Route, Redirect} from
// 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {apiURL} from '../config.json'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  table: {
    minWidth: 700
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataku: [],
      name: '',
      age: '',
      phone: '',
      address: '',
    };
  }


  handleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleChangeAge(e){
    this.setState({
      age: e.target.value
    })
  }

  handleChangePhone(e){
    this.setState({
      phone: e.target.value
    })
  }

  handleChangeAddress(e){
    this.setState({
      address: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const user = {
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone,
      address: this.state.address
    }
    axios.post(`${apiURL}/route/data`,{user})
    .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
  }


  getData() {
    axios
      .get(`${apiURL}/route/data`)
      .then(res => {
        this.setState({dataku: res.data});
        console.log(this.state.dataku)
      })
      .catch(error => {
        console.log(error);
      })
  }


  componentDidMount() {
    this.getData();
  }

  

  render() {

    const {classes} = this.props;

    return (

      <div className="container">
        <center style={{
          margin: '100px'
        }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell numeric>Ages</TableCell>
                <TableCell numeric>Phone</TableCell>
                <TableCell >Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this
                .state
                .dataku
                .map(function (item, index) {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">{item.name}</TableCell>
                      <TableCell numeric>{item.age}</TableCell>
                      <TableCell numeric>{item.phone}</TableCell>
                      <TableCell component="th" scope="row">{item.address}</TableCell>
                      <Button href="#text-buttons" className={classes.button}>
                        Edit
                      </Button>
                      <Button href="#text-buttons" className={classes.button}>
                        Delete
                      </Button>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>

          <form onSubmit={this.handleSubmit}>
            <TextField
            id="name"
            label="Name"
            className={classes.textField}
            type="text"
            margin="normal"
            onChange={this.handleChangeName}
            />
            <br/>
            <TextField
              id="age"
              label="Age"
              className={classes.textField}
              type="text"
              margin="normal"
              onChange={this.handleChangeAge}
            />
            <br/>
            <TextField
              id="phone"
              label="Phone"
              className={classes.textField}
              type="text"
              margin="normal"
              onChange={this.handleChangePhone}
            />
            <br/>
            <TextField
              id="address"
              label="Address"
              className={classes.textField}
              type="text"
              margin="normal"
              onChange={this.handleChangeAddress}
            />
            <br/>
            <Button className={classes.button}>
              Submit
            </Button>
          </form>
          
        </center>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);