import React from 'react'
import api from './API_Services/api.js'

function RecipeCard () {
    return(
        <table style={{backgroundColor: "#ededed"}} id={"RecipeCardTable"}>
            <thead>
                <th id='RecipeCardHead'>recipe book name</th>
            </thead>
                <tr id='RecipeCardData'>
                    <td>recipe book description</td>
                </tr>
        </table>
    )
}

export default RecipeCard;