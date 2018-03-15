export const host = "http://localhost:3001/";

export const headers = {
  Accept: "application/json",
  Authorization: "123456",
  "Content-Type": "application/json"
};

export const endpoints = {
  post: {
    create: () => {
      return `${host}posts`;
    },
    update: id => {
      return `${host}posts/${id}`;
    },
    getComments: id => {
      return `${host}posts/${id}/comments`;
    }
  },
  categories: {
    get: () => {
      return `${host}categories`;
    }
  },
  comments: {
    create: () => {
      return `${host}comments`;
    },
    update: id => {
      return `${host}comments/${id}`;
    },
    get: () => {
      return `${host}categories`;
    }
  }
};
