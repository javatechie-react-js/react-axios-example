import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';

export default class Countries extends React.Component {

    constructor() {
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        const apiUrl = "https://restcountries.eu/rest/v2/all";
        axios.get(apiUrl)
            .then(
                (successResponse) => {
                    this.setState({
                        countries: successResponse.data
                    })
                },
                (errorResponse) => {
                    console.log(errorResponse);
                }
            )
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">SlNo</TableCell>
                            <TableCell align="center">Flag</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Capital</TableCell>
                            <TableCell align="center">Region</TableCell>
                            <TableCell align="center">SubRegion</TableCell>
                            <TableCell align="center">Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.countries.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell align="center">
                                    <Icon >
                                        <img src={row.flag} width='80px' height='40px'/>
                                    </Icon>
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.capital}</TableCell>
                                <TableCell align="center">{row.region}</TableCell>
                                <TableCell align="center">{row.subregion}</TableCell>
                                <TableCell align="center">{row.population}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }
}