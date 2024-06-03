import axios from "axios";

class BaseService {
    baseURL;
    http;

    constructor(baseURL = "http://localhost:8080/api/") {
        this.baseURL = baseURL;
        this.http = axios.create({
            baseURL: this.baseURL,
        });
        this.setupInterceptors();
    }

    setupInterceptors() {
        this.http.interceptors.request.use(
            (config) => {
                config.headers = {
                    "content-type": "application/json",
                };
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.http.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    get(url, config = {}) {
        return this.http.get(url, config);
    }

    post(url, data, config = {}) {
        return this.http.post(url, data, config);
    }

    put(url, data, config = {}) {
        return this.http.put(url, data, config);
    }

    delete(url, config = {}) {
        return this.http.delete(url, config);
    }

    patch(url, data, config = {}) {
        return this.http.patch(url, data, config);
    }
}

export default BaseService;
