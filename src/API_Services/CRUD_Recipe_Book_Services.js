import api from './api'

class RecipeBookDataService {

    getAll() {
        api.get("https://640283de-b98e-4f90-9341-1834480f82b2.mock.pstmn.io/api/recipe_books").then((response) =>{
            console.log(JSON.stringify(response.data));
        });
    }

    get(name) {
        return api.get(`http://localhost:5000/api/recipe_books/${name}`)
    }

    create(data) {
        return api.post("http://localhost:5000/api/recipe_books", data);
    }

    update(name, data) {
        return api.put(`http://localhost:5000/api/recipe_books/${name}`, data);
    }

    delete(name) {
        return api.delete(`http://localhost:5000/api/recipe_books/${name}`);
    }
}


export default new RecipeBookDataService();
