import React, { useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table'

export default function AsyncCountries() {

    const [countries, setCountries] = React.useState([]);

    useEffect(() => {

        async function getCountriesData() {
            const response = await axios.get("https://restcountries.eu/rest/v2/all");
            setCountries(response.data);
            return countries;
        }
        getCountriesData();
    }, []);

    const colms=[
        {
            title: 'Flag',
            field: 'flag',
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.flag}
              />
            ),
          },
        {
            title:'Name',field:'name'
        },
        {
            title:'Capital',field:'capital'
        },
        {
            title:'Region',field:'region'
        },
        {
            title:'SubRegion',field:'subregion'
        },
        {
            title:'Population',field:'population'
        }

    ]
    return (
        <div>
            <MaterialTable title='Countries information ...'
            data={countries}
            columns={colms}
            options={{
                filtering:true,
                exportAllData:true,
                exportButton:true,
                exportFileName:'javatechie-reports'
            }}
            />

        </div>
    );
}