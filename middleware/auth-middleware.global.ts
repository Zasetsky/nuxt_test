import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const { isAuthenticated, isConfirmed } = useAuth();

    const isLoginPage = to.path === "/login";
    const isSignupPage = to.path === "/signup";
    const isOtpPage = to.path === "/otp";

    if (!isAuthenticated && !isConfirmed && !isLoginPage && !isSignupPage) {
      return navigateTo("/login");
    }

    if (isAuthenticated && !isConfirmed && !isOtpPage) {
      return navigateTo("/otp");
    }

    if (
      isAuthenticated &&
      isConfirmed &&
      (isLoginPage || isSignupPage || isOtpPage)
    ) {
      return navigateTo("/");
    }
  }
});
