import api from './api'

class RecipeDataService {
    getAll() {
        return api.get("/recipes/")
    }

    get(name) {
        return api.get(`/recipes/${name}`)
    }

    create(data) {
        return api.post("/recipes", data);
    }

    update(name, data) {
        return api.put(`/recipes/${name}`, data);
    }

    delete(name) {
        return api.delete(`/recipes/${name}`);
    }
}

export default new RecipeDataService();