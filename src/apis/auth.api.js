// import { getTokenLocal } from "../Utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = import.meta.env.VITE_API_URL;

class Categories extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
    //   config.headers["Authorization"] = Bearer ${getTokenLocal()};
      config.headers["authkey"] = import.meta.env.VITE_APP_AUTH_KEY;
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };


  getAllAuthConfig = ApiRoutes.Auth.register;
  getLoginConfig = ApiRoutes.Auth.login;
  getContactUsConfig = ApiRoutes.Auth.contactUs;

  register= async (reqBody) => {
    return this.instance({
      method: this.getAllAuthConfig.Method,
      url: this.getAllAuthConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };

  login= async (reqBody) => {
    return this.instance({
      method: this.getLoginConfig.Method,
      url: this.getLoginConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };

  contactUs= async (reqBody) => {
    return this.instance({
      method: this.getContactUsConfig.Method,
      url: this.getContactUsConfig.Endpoint,
      headers: {},
      data: reqBody,
    });
  };
}

export default Categories;