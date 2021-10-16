import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
export const getProfile = () => instance.get("/profile");
export const updateProfile = () => instance.patch("/profile");

export const getPosts = () => instance.get("/posts");
export const createPost = (newPost) => instance.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>{ 
  
  instance.patch(`/posts/${id}`, updatedPost)
}
export const deletePost = (id) => instance.delete(`/posts/${id}`);
export const likePost = (id) => instance.patch(`/posts/${id}/likePost`);

export const signin = (formData) => {
  return instance.post("/auth/signin", formData);
};
export const signup = (formData) => {
  return instance.post("/auth/signup", formData);
};

export const getUsers = () => instance.get("/users");



