/*
 * Owner Authentication Guard
 *
 * IMPORTANT:
 * আসল Owner security অবশ্যই server-side authorization দিয়ে করতে হবে।
 * Client-side code একা নিরাপত্তা দিতে পারে না।
 */

window.OwnerAuth = (() => {

  const OWNER_SESSION_KEY =
    "master_ai_owner_session";

  function getSession() {

    try {
      return JSON.parse(
        sessionStorage.getItem(OWNER_SESSION_KEY) || "null"
      );
    } catch {
      return null;
    }

  }

  function isOwner() {
    return !!getSession();
  }

  function setOwnerSession(owner) {

    sessionStorage.setItem(
      OWNER_SESSION_KEY,
      JSON.stringify(owner)
    );

  }

  function logout() {

    sessionStorage.removeItem(
      OWNER_SESSION_KEY
    );

    window.location.href = "index.html";

  }

  async function verifyOwner() {

    /*
     * Production version:
     * Backend থেকে Owner role verify করতে হবে।
     */

    const session = getSession();

    if (!session) {

      const allowDemo =
        window.MASTER_CONFIG &&
        window.MASTER_CONFIG.OWNER_DEMO_MODE === true;

      if (!allowDemo) {

        alert("Owner authorization required.");

        window.location.href = "index.html";

        return false;

      }

    }

    return true;

  }

  return {
    getSession,
    isOwner,
    setOwnerSession,
    logout,
    verifyOwner
  };

})();


document.addEventListener("DOMContentLoaded", async () => {

  if (
    document.body &&
    location.pathname.endsWith("owner.html")
  ) {

    const allowed =
      await window.OwnerAuth.verifyOwner();

    if (!allowed) {
      return;
    }

  }

});
