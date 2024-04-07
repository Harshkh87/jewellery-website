export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  Auth: {
    register: {
      Endpoint: '/register',
      Method: HttpMethod.Post,
    },
    login: {
      Endpoint: '/login',
      Method: HttpMethod.Post,
    },
    contactUs: {
      Endpoint: '/ContactUs',
      Method: HttpMethod.Post,
    },
  }


};

export default ApiRoutes;
