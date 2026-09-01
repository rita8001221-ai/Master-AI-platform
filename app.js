/* =====================================================
   MASTER AI PLATFORM
   MAIN JAVASCRIPT
   ===================================================== */


/* -----------------------------
   SIDEBAR
----------------------------- */

function openNav() {

    const sidebar =
        document.getElementById("mySidebar");

    if (sidebar) {
        sidebar.style.width = "250px";
    }

}


function closeNav() {

    const sidebar =
        document.getElementById("mySidebar");

    if (sidebar) {
        sidebar.style.width = "0";
    }

}


function goHome() {

    closeNav();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* -----------------------------
   PROFILE
----------------------------- */

function openProfile() {

    closeNav();

    const modal =
        document.getElementById("profileModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeProfile() {

    const modal =
        document.getElementById("profileModal");

    if (modal) {
        modal.style.display = "none";
    }

}


/* -----------------------------
   SHARE
----------------------------- */

function openShareOptions() {

    closeNav();

    const modal =
        document.getElementById("shareModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeShareOptions() {

    const modal =
        document.getElementById("shareModal");

    if (modal) {
        modal.style.display = "none";
    }

}


function copyPlatformLink() {

    const url =
        window.location.href;

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard
            .writeText(url)
            .then(() => {

                alert(
                    "✅ Platform link copied!"
                );

            });

    } else {

        prompt(
            "এই লিংকটি কপি করুন:",
            url
        );

    }

}


function nativeShare() {

    const url =
        window.location.href;

    if (navigator.share) {

        navigator.share({

            title:
                "Master AI Platform",

            text:
                "Master AI Platform",

            url: url

        });

    } else {

        copyPlatformLink();

    }

}


/* -----------------------------
   PUBLIC PROJECTS
----------------------------- */

function openProject(project) {

    switch (project) {

        case "youtube-editor":

            alert(
                "🎬 YouTube Video Editor Agent\\n\\n" +
                "এই Agent-এর সম্পূর্ণ Video Editing + SEO + Thumbnail + Upload workflow Backend ধাপে যুক্ত হবে।"
            );

            break;


        case "ai-agent":

            alert(
                "🤖 AI Agent\\n\\n" +
                "Owner Panel থেকে নিজের Agent তৈরি করা যাবে।"
            );

            break;


        case "ai-tools":

            alert(
                "🧰 AI Tools Hub\\n\\n" +
                "Free / Freemium / Paid Tools এখানে দেখানো হবে।"
            );

            break;


        case "chat":

            alert(
                "💬 AI Chat\\n\\n" +
                "AI Chat Backend/API যুক্ত হলে সক্রিয় হবে।"
            );

            break;

    }

}


/* -----------------------------
   SEARCH
----------------------------- */

function filterCards() {

    const input =
        document
        .getElementById("mainSearch");

    if (!input) return;

    const value =
        input.value
        .toLowerCase()
        .trim();


    document
        .querySelectorAll(".card")
        .forEach(card => {

            const searchText =
                (
                    card.innerText +
                    " " +
                    (card.dataset.search || "")
                ).toLowerCase();


            card.style.display =
                searchText.includes(value)
                ? ""
                : "none";

        });

}


/* -----------------------------
   FOLLOWER
----------------------------- */

let following = false;

let followerCount =
    Number(
        localStorage.getItem(
            "master_ai_followers"
        ) || 0
    );


function updateFollowers() {

    const text =
        document.getElementById("followers");

    if (text) {

        text.innerText =
            followerCount +
            " Followers";

    }

}


function followPlatform() {

    const button =
        document.getElementById(
            "followButton"
        );

    if (!following) {

        following = true;

        followerCount++;

        localStorage.setItem(
            "master_ai_followers",
            followerCount
        );


        if (button) {

            button.innerText =
                "Following";

            button.style.background =
                "#2ecc71";

        }

    } else {

        following = false;

        followerCount =
            Math.max(
                0,
                followerCount - 1
            );


        localStorage.setItem(
            "master_ai_followers",
            followerCount
        );


        if (button) {

            button.innerText =
                "Follow";

            button.style.background =
                "#0984e3";

        }

    }


    updateFollowers();

}


/* -----------------------------
   OWNER PANEL NAVIGATION
----------------------------- */

function showSection(sectionId) {

    closeNav();

    document
        .querySelectorAll(".owner-section")
        .forEach(section => {

            section.style.display =
                "none";

        });


    const section =
        document.getElementById(
            sectionId
        );


    if (section) {

        section.style.display =
            "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* -----------------------------
   AGENT BUILDER
----------------------------- */

function createAgent() {

    const name =
        document
        .getElementById("agentName")
        .value
        .trim();


    const type =
        document
        .getElementById("agentType")
        .value;


    const instructions =
        document
        .getElementById("agentInstructions")
        .value
        .trim();


    const freeTools =
        document
        .getElementById("allowFreeTools")
        .checked;


    const paidTools =
        document
        .getElementById("allowPaidTools")
        .checked;


    const installTools =
        document
        .getElementById("allowInstall")
        .checked;


    if (!name) {

        alert(
            "দয়া করে Agent-এর নাম দিন।"
        );

        return;

    }


    const agent = {

        id:
            Date.now(),

        name:
            name,

        type:
            type,

        instructions:
            instructions,

        freeTools:
            freeTools,

        paidTools:
            paidTools,

        installTools:
            installTools,

        created:
            new Date().toISOString()

    };


    let agents =
        JSON.parse(
            localStorage.getItem(
                "master_ai_agents"
            ) || "[]"
        );


    agents.push(agent);


    localStorage.setItem(
        "master_ai_agents",
        JSON.stringify(agents)
    );


    document
        .getElementById("agentMessage")
        .innerHTML =

        `<div class="agent-card">

            <strong>
                ✅ Agent তৈরি হয়েছে
            </strong>

            <p>
                ${escapeHtml(name)}
 /* =====================================================
   MASTER AI PLATFORM
   MAIN JAVASCRIPT
   ===================================================== */


/* -----------------------------
   SIDEBAR
----------------------------- */

function openNav() {

    const sidebar =
        document.getElementById("mySidebar");

    if (sidebar) {
        sidebar.style.width = "250px";
    }

}


function closeNav() {

    const sidebar =
        document.getElementById("mySidebar");

    if (sidebar) {
        sidebar.style.width = "0";
    }

}


function goHome() {

    closeNav();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* -----------------------------
   PROFILE
----------------------------- */

function openProfile() {

    closeNav();

    const modal =
        document.getElementById("profileModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeProfile() {

    const modal =
        document.getElementById("profileModal");

    if (modal) {
        modal.style.display = "none";
    }

}


/* -----------------------------
   SHARE
----------------------------- */

function openShareOptions() {

    closeNav();

    const modal =
        document.getElementById("shareModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeShareOptions() {

    const modal =
        document.getElementById("shareModal");

    if (modal) {
        modal.style.display = "none";
    }

}


function copyPlatformLink() {

    const url =
        window.location.href;

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard
            .writeText(url)
            .then(() => {

                alert(
                    "✅ Platform link copied!"
                );

            });

    } else {

        prompt(
            "এই লিংকটি কপি করুন:",
            url
        );

    }

}


function nativeShare() {

    const url =
        window.location.href;

    if (navigator.share) {

        navigator.share({

            title:
                "Master AI Platform",

            text:
                "Master AI Platform",

            url: url

        });

    } else {

        copyPlatformLink();

    }

}


/* -----------------------------
   PUBLIC PROJECTS
----------------------------- */

function openProject(project) {

    switch (project) {

        case "youtube-editor":

            alert(
                "🎬 YouTube Video Editor Agent\\n\\n" +
                "এই Agent-এর সম্পূর্ণ Video Editing + SEO + Thumbnail + Upload workflow Backend ধাপে যুক্ত হবে।"
            );

            break;


        case "ai-agent":

            alert(
                "🤖 AI Agent\\n\\n" +
                "Owner Panel থেকে নিজের Agent তৈরি করা যাবে।"
            );

            break;


        case "ai-tools":

            alert(
                "🧰 AI Tools Hub\\n\\n" +
                "Free / Freemium / Paid Tools এখানে দেখানো হবে।"
            );

            break;


        case "chat":

            alert(
                "💬 AI Chat\\n\\n" +
                "AI Chat Backend/API যুক্ত হলে সক্রিয় হবে।"
            );

            break;

    }

}


/* -----------------------------
   SEARCH
----------------------------- */

function filterCards() {

    const input =
        document
        .getElementById("mainSearch");

    if (!input) return;

    const value =
        input.value
        .toLowerCase()
        .trim();


    document
        .querySelectorAll(".card")
        .forEach(card => {

            const searchText =
                (
                    card.innerText +
                    " " +
                    (card.dataset.search || "")
                ).toLowerCase();


            card.style.display =
                searchText.includes(value)
                ? ""
                : "none";

        });

}


/* -----------------------------
   FOLLOWER
----------------------------- */

let following = false;

let followerCount =
    Number(
        localStorage.getItem(
            "master_ai_followers"
        ) || 0
    );


function updateFollowers() {

    const text =
        document.getElementById("followers");

    if (text) {

        text.innerText =
            followerCount +
            " Followers";

    }

}


function followPlatform() {

    const button =
        document.getElementById(
            "followButton"
        );

    if (!following) {

        following = true;

        followerCount++;

        localStorage.setItem(
            "master_ai_followers",
            followerCount
        );


        if (button) {

            button.innerText =
                "Following";

            button.style.background =
                "#2ecc71";

        }

    } else {

        following = false;

        followerCount =
            Math.max(
                0,
                followerCount - 1
            );


        localStorage.setItem(
            "master_ai_followers",
            followerCount
        );


        if (button) {

            button.innerText =
                "Follow";

            button.style.background =
                "#0984e3";

        }

    }


    updateFollowers();

}


/* -----------------------------
   OWNER PANEL NAVIGATION
----------------------------- */

function showSection(sectionId) {

    closeNav();

    document
        .querySelectorAll(".owner-section")
        .forEach(section => {

            section.style.display =
                "none";

        });


    const section =
        document.getElementById(
            sectionId
        );


    if (section) {

        section.style.display =
            "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* -----------------------------
   AGENT BUILDER
----------------------------- */

function createAgent() {

    const name =
        document
        .getElementById("agentName")
        .value
        .trim();


    const type =
        document
        .getElementById("agentType")
        .value;


    const instructions =
        document
        .getElementById("agentInstructions")
        .value
        .trim();


    const freeTools =
        document
        .getElementById("allowFreeTools")
        .checked;


    const paidTools =
        document
        .getElementById("allowPaidTools")
        .checked;


    const installTools =
        document
        .getElementById("allowInstall")
        .checked;


    if (!name) {

        alert(
            "দয়া করে Agent-এর নাম দিন।"
        );

        return;

    }


    const agent = {

        id:
            Date.now(),

        name:
            name,

        type:
            type,

        instructions:
            instructions,

        freeTools:
            freeTools,

        paidTools:
            paidTools,

        installTools:
            installTools,

        created:
            new Date().toISOString()

    };


    let agents =
        JSON.parse(
            localStorage.getItem(
                "master_ai_agents"
            ) || "[]"
        );


    agents.push(agent);


    localStorage.setItem(
        "master_ai_agents",
        JSON.stringify(agents)
    );


    document
        .getElementById("agentMessage")
        .innerHTML =

        `<div class="agent-card">

            <strong>
                ✅ Agent তৈরি হয়েছে
            </strong>

            <p>
                ${escapeHtml(name)}
            </p>

        </div>`;


    document
        .getElementById("agentName")
        .value = "";


    document
        .getElementById("agentInstructions")
        .value = "";


    loadAgents();

}


function loadAgents() {

    const list =
        document.getElementById(
            "agentList"
        );


    if (!list) return;


    const agents =
        JSON.parse(
            localStorage.getItem(
                "master_ai_agents"
            ) || "[]"
        );


    const count =
        document.getElementById(
            "agentCount"
        );


    if (count) {

        count.innerText =
            agents.length;

    }


    if (!agents.length) {

        list.innerHTML =

            `<p class="empty-message">
                এখনো কোনো Agent তৈরি করা হয়নি।
            </p>`;

        return;

    }


    list.innerHTML = "";


    agents.forEach(agent => {

        const div =
            document.createElement("div");


        div.className =
            "agent-card";


        div.innerHTML = `

            <h3>
                🤖 ${escapeHtml(agent.name)}
            </h3>

            <p>
                Type: ${escapeHtml(agent.type)}
            </p>

            <p>
                Free Tools:
                ${agent.freeTools ? "✅" : "❌"}
            </p>

            <p>
                Paid Tools:
                ${agent.paidTools ? "✅" : "❌"}
            </p>

            <p>
                Integration Permission:
                ${agent.installTools ? "✅" : "❌"}
            </p>

        `;


        list.appendChild(div);

    });

}


/* -----------------------------
   SETTINGS
----------------------------- */

function saveSettings() {

    const name =
        document
        .getElementById("platformName")
        .value;


    const url =
        document
        .getElementById("publicUrl")
        .value;


    localStorage.setItem(
        "master_ai_platform_name",
        name
    );


    localStorage.setItem(
        "master_ai_public_url",
        url
    );


    const message =
        document.getElementById(
            "settingsMessage"
        );


    if (message) {

        message.innerHTML =

            `<div class="agent-card">
                ✅ Settings saved successfully.
            </div>`;

    }

}


/* -----------------------------
   BASIC HTML SAFETY
----------------------------- */

function escapeHtml(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* -----------------------------
   PAGE LOAD
----------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateFollowers();

        if (
            typeof loadAgents ===
            "function"
        ) {

            loadAgents();

        }

    }
);           </p>

        </div>`;


    document
        .getElementById("agentName")
        .value = "";


    document
        .getElementById("agentInstructions")
        .value = "";


    loadAgents();

}


function loadAgents() {

    const list =
        document.getElementById(
            "agentList"
        );


    if (!list) return;


    const agents =
        JSON.parse(
            localStorage.getItem(
                "master_ai_agents"
            ) || "[]"
        );


    const count =
        document.getElementById(
            "agentCount"
        );


    if (count) {

        count.innerText =
            agents.length;

    }


    if (!agents.length) {

        list.innerHTML =

            `<p class="empty-message">
                এখনো কোনো Agent তৈরি করা হয়নি।
            </p>`;

        return;

    }


    list.innerHTML = "";


    agents.forEach(agent => {

        const div =
            document.createElement("div");


        div.className =
            "agent-card";


        div.innerHTML = `

            <h3>
                🤖 ${escapeHtml(agent.name)}
            </h3>

            <p>
                Type: ${escapeHtml(agent.type)}
            </p>

            <p>
                Free Tools:
                ${agent.freeTools ? "✅" : "❌"}
            </p>

            <p>
                Paid Tools:
                ${agent.paidTools ? "✅" : "❌"}
            </p>

            <p>
                Integration Permission:
                ${agent.installTools ? "✅" : "❌"}

