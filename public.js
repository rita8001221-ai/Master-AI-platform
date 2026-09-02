document.addEventListener("DOMContentLoaded", () => {

  const menuBtn =
    document.getElementById("menuBtn");

  const closeMenu =
    document.getElementById("closeMenu");

  const sidebar =
    document.getElementById("sidebar");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("open");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  }


  document.querySelectorAll(
    "[data-section]"
  ).forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      const section =
        link.dataset.section;

      document.querySelectorAll(
        ".page-section"
      ).forEach(item => {
        item.classList.add("hidden");
      });

      const target =
        document.getElementById(section);

      if (target) {
        target.classList.remove("hidden");
      }

      sidebar.classList.remove("open");

    });

  });


  const loginBtn =
    document.getElementById("loginBtn");

  const loginModal =
    document.getElementById("loginModal");

  if (loginBtn && loginModal) {

    loginBtn.addEventListener("click", () => {
      loginModal.classList.remove("hidden");
    });

  }


  document.querySelectorAll(
    "[data-close]"
  ).forEach(button => {

    button.addEventListener("click", () => {

      const id =
        button.dataset.close;

      document
        .getElementById(id)
        ?.classList.add("hidden");

    });

  });


  const shareBtn =
    document.getElementById("shareBtn");

  const shareMenu =
    document.getElementById("shareMenu");

  const shareModal =
    document.getElementById("shareModal");

  function openShare() {
    shareModal?.classList.remove("hidden");
  }

  shareBtn?.addEventListener("click", openShare);
  shareMenu?.addEventListener("click", event => {
    event.preventDefault();
    openShare();
    sidebar.classList.remove("open");
  });


  const copyLinkBtn =
    document.getElementById("copyLinkBtn");

  copyLinkBtn?.addEventListener(
    "click",
    async () => {

      const url =
        window.location.href;

      try {

        await navigator.clipboard.writeText(url);

        alert("Platform link copied.");

      } catch {

        alert(url);

      }

    }
  );


  const nativeShareBtn =
    document.getElementById("nativeShareBtn");

  nativeShareBtn?.addEventListener(
    "click",
    async () => {

      const data = {
        title: "Master AI Platform",
        text: "Master AI Platform",
        url: window.location.href
      };

      if (navigator.share) {

        try {
          await navigator.share(data);
        } catch {}

      } else {

        alert(
          "এই ফোনে Native Share support নেই।"
        );

      }

    }
  );


  document.querySelectorAll(
    "[data-share]"
  ).forEach(button => {

    button.addEventListener("click", () => {

      const type =
        button.dataset.share;

      const url =
        encodeURIComponent(
          window.location.href
        );

      const text =
        encodeURIComponent(
          "Master AI Platform"
        );

      let shareUrl = "";

      if (type === "whatsapp") {
        shareUrl =
          `https://wa.me/?text=${text}%20${url}`;
      }

      if (type === "telegram") {
        shareUrl =
          `https://t.me/share/url?url=${url}&text=${text}`;
      }

      if (type === "facebook") {
        shareUrl =
          `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      }

      if (shareUrl) {
        window.open(
          shareUrl,
          "_blank",
          "noopener,noreferrer"
        );
      }

    });

  });


  const socialSearch =
    document.getElementById("socialSearch");

  socialSearch?.addEventListener(
    "input",
    () => {

      const query =
        socialSearch.value.toLowerCase();

      document.querySelectorAll(
        ".social-btn"
      ).forEach(button => {

        button.style.display =
          button.textContent
            .toLowerCase()
            .includes(query)
              ? ""
              : "none";

      });

    }
  );


  const followBtn =
    document.getElementById("followBtn");

  const followerCount =
    document.getElementById("followerCount");

  let followers =
    Number(
      localStorage.getItem(
        "master_ai_followers"
      ) || 0
    );

  if (followerCount) {
    followerCount.textContent = followers;
  }

  followBtn?.addEventListener(
    "click",
    () => {

      followers++;

      localStorage.setItem(
        "master_ai_followers",
        followers
      );

      if (followerCount) {
        followerCount.textContent =
          followers;
      }

      followBtn.textContent =
        "Following";

    }
  );


  document.querySelectorAll(
    ".social-btn"
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const type =
          button.dataset.social;

        const links =
          window.MASTER_CONFIG?.SOCIAL_LINKS || {};

        if (
          links[type] &&
          links[type] !== "#"
        ) {

          window.open(
            links[type],
            "_blank",
            "noopener,noreferrer"
          );

        }

      }
    );

  });


  document
    .getElementById("driveBtn")
    ?.addEventListener(
      "click",
      async () => {

        if (
          window.MasterDrive
        ) {

          await window.MasterDrive.connect();

        }

      }
    );


  document
    .getElementById("startBtn")
    ?.addEventListener(
      "click",
      () => {

        if (
          window.MasterAuth &&
          !window.MasterAuth.isLoggedIn()
        ) {

          window.location.href =
            "login.html";

        }

      }
    );

});
