import React from 'react'

function RecipeCard () {
    return(
        <table style={{backgroundColor: "#ededed"}}>
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