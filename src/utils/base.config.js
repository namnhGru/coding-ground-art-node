export const NODE_ENV = process.env.NODE_ENV || "developement";
export const SERVER_HOST =
  NODE_ENV === "development"
    ? "http://localhost"
    : "https://secure-wave-64960.herokuapp.com";
export const SERVER_PORT = NODE_ENV === "development" ? 2000 : 80;
export const DB_HOST =
  NODE_ENV === "development"
    ? "mongodb://localhost"
    : "mongodb://namnh:nmptlamua123@ds225624.mlab.com";
export const DB_PORT = NODE_ENV === "development" ? 27017 : 25624;
export const DB_DATABASE =
  NODE_ENV === "development" ? "codinground" : "heroku_tk64m9k4";
