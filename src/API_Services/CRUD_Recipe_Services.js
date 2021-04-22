import api from './api'

class RecipeDataService {
    getAll() {
        return api.get("http://localhost:5000/api/recipes");
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