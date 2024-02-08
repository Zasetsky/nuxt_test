import { defineStore } from "pinia";
import { ofetch } from "ofetch";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  }),
  actions: {
    async login() {
      console.log({
        username: this.email,
        password: this.password,
      });

      try {
        const response = await ofetch("https://dummyjson.com/auth/login", {
          method: "POST",
          body: {
            username: this.email,
            password: this.password,
          },
        });
        console.log("response", response.token);

        const data = await response.data;
        localStorage.setItem("authToken", data.token);
      } catch (error) {
        console.error("Ошибка входа", error);
      }
    },

    async signUp() {
      try {
        const response = await ofetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Ошибка входа", error);
      }
    },
  },
});
