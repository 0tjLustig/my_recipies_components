import api from './api'

class RecipeDataService {
    getAll() {
        //return api.get("https://d4d2fc41-be82-4747-ae2d-fadae5ea9d19.mock.pstmn.io")
        api.get("https://d4d2fc41-be82-4747-ae2d-fadae5ea9d19.mock.pstmn.io/http://localhost:5000/api/recipes/").then((response) =>{
            console.log(JSON.stringify(response.data));
        });
    }

    get(name) {
        return api.get(`http://localhost:5000/api/recipes/${name}`)
    }

    create(data) {
        return api.post("http://localhost:5000/api/recipes", data);
    }

    update(name, data) {
        return api.put(`http://localhost:5000/api/recipes/${name}`, data);
    }

    delete(name) {
        return api.delete(`http://localhost:5000/api/recipes/${name}`);
    }
}

export default new RecipeDataService();