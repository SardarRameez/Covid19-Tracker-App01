import React, { useState, useEffect } from 'react';
import {fetchCountries} from '../../API';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './CountryPicker.module.css';

export const CountryPicker = ({handleCountryChange}) => {
    const [CountriesData ,setCountriesData]=useState([])
    useEffect(()=>{
        const fetchApi=async()=>{
            setCountriesData(await fetchCountries())
        }
        fetchApi()
    },[setCountriesData])
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {CountriesData.map((country, i)=><option value={country} key={i}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
