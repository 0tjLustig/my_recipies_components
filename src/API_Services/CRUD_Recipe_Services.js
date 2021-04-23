import api from './api'

class RecipeDataService {
    getAll() {
        //return api.get("http://3.92.28.166:5000/api/recipes/")
        api.get("http://3.92.28.166:5000/api/recipes/").then((response) =>{
            console.log(JSON.stringify(response.data));
        });
    }

    get(name) {
        return api.get(`http://3.92.28.166:5000/api/recipes/${name}`)
    }

    create(data) {
        return api.post("http://3.92.28.166:5000/api/recipes", data);
    }

    update(name, data) {
        return api.put(`http://3.92.28.166:5000/api/recipes/${name}`, data);
    }

    delete(name) {
        return api.delete(`http://3.92.28.166:5000/api/recipes/${name}`);
    }
}

export default new RecipeDataService();