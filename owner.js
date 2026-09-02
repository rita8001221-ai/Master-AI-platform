document.addEventListener("DOMContentLoaded", async () => {

  if (!location.pathname.endsWith("owner.html")) {
    return;
  }

  const allowed =
    await window.OwnerAuth.verifyOwner();

  if (!allowed) {
    return;
  }


  const menuBtn =
    document.getElementById("ownerMenuBtn");

  const closeMenu =
    document.getElementById("closeOwnerMenu");

  const sidebar =
    document.getElementById("ownerSidebar");

  menuBtn?.addEventListener("click", () => {
    sidebar?.classList.add("open");
  });

  closeMenu?.addEventListener("click", () => {
    sidebar?.classList.remove("open");
  });


  document.querySelectorAll(
    ".owner-main .page-section"
  ).forEach(section => {

    section.classList.remove("hidden");

  });


  document
    .getElementById("ownerLogoutBtn")
    ?.addEventListener(
      "click",
      () => {
        window.OwnerAuth.logout();
      }
    );


  document
    .getElementById("runOwnerAI")
    ?.addEventListener(
      "click",
      async () => {

        const input =
          document.getElementById(
            "ownerAICommand"
          );

        const result =
          document.getElementById(
            "ownerAIResult"
          );

        const command =
          input?.value.trim();

        if (!command) {
          result.textContent =
            "Command লিখুন।";
          return;
        }

        result.textContent =
          "AI Agent কাজ করছে...";

        const response =
          await window.MasterAI.run(
            command,
            {
              role: "owner"
            }
          );

        result.textContent =
          response.message;

      }
    );


  document
    .getElementById("securityScanBtn")
    ?.addEventListener(
      "click",
      () => {

        const log =
          document.getElementById(
            "securityLog"
          );

        const result =
          window.SecurityAgent.scan();

        log.textContent =
          result.message;

      }
    );


  document
    .getElementById("checkStorageBtn")
    ?.addEventListener(
      "click",
      async () => {

        const result =
          document.getElementById(
            "storageResult"
          );

        const status =
          await window.StorageAgent.check();

        result.textContent =
          status.message;

      }
    );


  document
    .getElementById("cleanupStorageBtn")
    ?.addEventListener(
      "click",
      async () => {

        const result =
          document.getElementById(
            "storageResult"
          );

        const cleanup =
          await window.StorageAgent.cleanup();

        result.textContent =
          cleanup.message;

      }
    );


  document
    .getElementById("saveSettingsBtn")
    ?.addEventListener(
      "click",
      () => {

        const settings = {

          wishlist:
            document.getElementById(
              "featureWishlist"
            )?.checked,

          reviews:
            document.getElementById(
              "featureReviews"
            )?.checked,

          chat:
            document.getElementById(
              "featureChat"
            )?.checked,

          vendor:
            document.getElementById(
              "featureVendor"
            )?.checked

        };

        localStorage.setItem(
          "master_ai_settings",
          JSON.stringify(settings)
        );

        alert("Settings saved.");

      }
    );


  const maintenanceBtn =
    document.getElementById(
      "maintenanceBtn"
    );

  const maintenanceModal =
    document.getElementById(
      "maintenanceModal"
    );

  maintenanceBtn?.addEventListener(
    "click",
    () => {
      maintenanceModal?.classList.remove(
        "hidden"
      );
    }
  );


  document
    .getElementById("enableMaintenance")
    ?.addEventListener(
      "click",
      () => {

        localStorage.setItem(
          "master_ai_maintenance",
          "true"
        );

        alert(
          "Maintenance Mode enabled."
        );

      }
    );


  document
    .getElementById("disableMaintenance")
    ?.addEventListener(
      "click",
      () => {

        localStorage.removeItem(
          "master_ai_maintenance"
        );

        alert(
          "Maintenance Mode disabled."
        );

      }
    );


  document.querySelectorAll(
    "[data-close]"
  ).forEach(button => {

    button.addEventListener("click", () => {

      document
        .getElementById(
          button.dataset.close
        )
        ?.classList.add("hidden");

    });

  });

});
