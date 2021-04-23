import api from './api'

class RecipeBookDataService {

    getAll() {
        return api.get("http://3.92.28.166:5000/api/recipe_books")
        /*
        api.get("http://3.92.28.166:5000/api/recipe_books").then((response) =>{
            console.log(JSON.stringify(response.data));
        });
         */
    }

    get(name) {
        return api.get(`http://3.92.28.166:5000/api/recipe_books/${name}`)
    }

    create(data) {
        return api.post("http://3.92.28.166:5000/api/recipe_books", data);
    }

    update(name, data) {
        return api.put(`http://3.92.28.166:5000/api/recipe_books/${name}`, data);
    }

    delete(name) {
        return api.delete(`http://3.92.28.166:5000/api/recipe_books/${name}`);
    }
}


export default new RecipeBookDataService();
