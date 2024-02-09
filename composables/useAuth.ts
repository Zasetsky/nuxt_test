export function useAuth() {
  const isConfirmed = localStorage.getItem("isConfirmed");
  const token = localStorage.getItem("authToken");
  if (isConfirmed) {
    return { isAuthenticated: Boolean(token), isConfirmed };
  }
  return { isAuthenticated: Boolean(token) };
}
