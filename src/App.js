import React from 'react';
import { Cards } from './Components/Cards/Cards';
import { Charts } from './Components/Charts/Charts';
import { CountryPicker } from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './API';
import NavBar from './Components/NavBar';


class App extends React.Component {
    state ={
        data:{},
        country:"",
    }
    async componentDidMount(){
        const fetchdata=await fetchData();
        this.setState({data:fetchdata})
    }
    handleCountryChange=async(country)=>{
        const fetchdata=await fetchData(country);
        this.setState({data:fetchdata,country:country})
    }
    render(){
        const {data,country}=this.state;
        return (
            <div>
                                <NavBar></NavBar>
            <div className={styles.container}>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Charts data={data} country={country}></Charts>
            </div>
            </div>
        )
    }
}

export default App;