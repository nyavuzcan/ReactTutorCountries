import React, { Component } from 'react'
import Data from '../Data'
import {Link} from 'react-router-dom'

export default class CountryList extends Component {
    render() {
const countryList = Data.map((ct,i) => {
    return(
        <div className="card mb-1" key={ct.numericCode}>
            <div className="card-body">
                <Link to={'/'+ ct.name}>
            <h5 className="card-title" >{i+'-'+ct.name}</h5>
            </Link>
            <p>{ct.nativeName}</p>
            </div>

        </div>
        
      
    )
})
    return(
    <div className="card-columns">
        {countryList}
    </div>
    )

    }
}
