/*
 * Master AI Platform
 * Public User Authentication
 *
 * IMPORTANT:
 * Production Google OAuth-এর জন্য backend/Firebase configuration লাগবে।
 */

window.MasterAuth = (() => {

  const SESSION_KEY = "master_ai_user_session";

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }

  function isLoggedIn() {
    return !!getUser();
  }

  function setUser(user) {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify(user)
    );

    document.dispatchEvent(
      new CustomEvent("masterai:login", {
        detail: user
      })
    );
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);

    document.dispatchEvent(
      new Event("masterai:logout")
    );

    window.location.href = "index.html";
  }

  async function loginWithGoogle() {

    /*
     * এখানে production Google Identity/Firebase Auth
     * সংযোগ করা হবে।
     */

    if (
      window.MASTER_CONFIG &&
      window.MASTER_CONFIG.AUTH_MODE === "demo"
    ) {

      const demoUser = {
        id: "demo-user",
        name: "Demo User",
        email: "demo@example.com",
        provider: "demo"
      };

      setUser(demoUser);

      return demoUser;
    }

    alert(
      "Google Login চালু করার জন্য config.js-এ Google/Firebase configuration দিন।"
    );

    return null;
  }

  async function requireLogin() {

    const user = getUser();

    if (!user) {
      window.location.href = "login.html";
      return null;
    }

    return user;
  }

  return {
    getUser,
    isLoggedIn,
    setUser,
    logout,
    loginWithGoogle,
    requireLogin
  };

})();


document.addEventListener("DOMContentLoaded", () => {

  const loginButtons =
    document.querySelectorAll("#googleLoginBtn");

  loginButtons.forEach(button => {

    button.addEventListener("click", async () => {

      const status =
        document.getElementById("loginStatus");

      if (status) {
        status.textContent = "Login হচ্ছে...";
      }

      const user =
        await window.MasterAuth.loginWithGoogle();

      if (user) {

        if (status) {
          status.textContent =
            "Login সফল হয়েছে।";
        }

        setTimeout(() => {
          window.location.href = "index.html";
        }, 500);

      }

    });

  });

});
