import react from 'react';
import RecipeCard from "./RecipeCard";
import api from './API_Services/api.js'

function RecipeCardTable() {
    return(
        <table id='RecipeCardTableContainer'>
            <colgroup span={"2"}/>
            <th colSpan={"2"} scope={"colgroup"}><b>Recipe Books</b></th>
            <tr>
                <td>
                    <RecipeCard />
                </td>
                <td>
                    <RecipeCard />
                </td>
            </tr>
            <tr>
                <td>
                    <RecipeCard />
                </td>
                <td>
                    <RecipeCard />
                </td>
            </tr>
            <tr>
                <td>
                    <RecipeCard />
                </td>
                <td>
                    <RecipeCard />
                </td>
            </tr>
        </table>
    )
}

export default RecipeCardTable;