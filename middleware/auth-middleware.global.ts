import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const isAuthenticated = useAuth();

    const isLoginPage = to.path === "/login";
    const isSignupPage = to.path === "/signup";

    if (!isAuthenticated && !isLoginPage && !isSignupPage) {
      return navigateTo("/login");
    }

    if (isAuthenticated && (isLoginPage || isSignupPage)) {
      return navigateTo("/");
    }
  }
});
