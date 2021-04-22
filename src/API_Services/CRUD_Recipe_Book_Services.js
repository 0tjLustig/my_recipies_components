import API from './api'

class RecipeBookDataService {
    getAll() {
        return API.get("/recipeBooks");
    }

    get(name) {
        return API.get(`/recipeBooks/${name}`)
    }

    create(data) {
        return API.post("/recipeBooks", data);
    }

    update(name, data) {
        return API.put(`/recipeBooks/${name}`, data);
    }

    delete(name) {
        return API.delete(`/recipeBooks/${name}`);
    }
}


export default new RecipeBookDataService();
