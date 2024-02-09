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
      try {
        const response = await ofetch("https://dummyjson.com/auth/login", {
          method: "POST",
          body: {
            username: this.email,
            password: this.password,
          },
        });

        localStorage.setItem("authToken", response.token);
      } catch (error) {
        console.error("Ошибка входа", error);
      }
    },

    async signUp() {
      try {
        const response = await ofetch("https://dummyjson.com/auth/login", {
          method: "POST",
          body: {
            username: this.username,
            password: this.password,
          },
        });

        localStorage.setItem("authToken", response.token);
        return true;
      } catch (error) {
        console.error("Ошибка регистрации", error);
        return false;
      }
    },
  },
});
