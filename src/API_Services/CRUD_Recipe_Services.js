import API from './api'

class RecipeDataService {
    getAll() {
        return API.get("/recipes");
    }

    get(name) {
        return API.get(`/recipes/${name}`)
    }

    create(data) {
        return API.post("/recipes", data);
    }

    update(name, data) {
        return API.put(`/recipes/${name}`, data);
    }

    delete(name) {
        return API.delete(`/recipes/${name}`);
    }
}

export default new RecipeDataService();