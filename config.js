/*
 * Master AI Platform Configuration
 *
 * এখানে সাধারণ configuration থাকবে।
 *
 * SECRET KEY / PRIVATE API KEY এখানে রাখবেন না।
 * Secret কখনো frontend JavaScript-এ রাখা নিরাপদ নয়।
 */

window.MASTER_CONFIG = {

  APP_NAME:
    "Master AI Platform",

  PUBLIC_URL:
    window.location.origin,

  OWNER_URL:
    "/owner.html",


  /*
   * Demo mode:
   * শুরুতে UI test করার জন্য true রাখা হয়েছে।
   *
   * Production-এ আসল Google/Firebase Auth বসানোর পর
   * এটি false করতে হবে।
   */

  AUTH_MODE:
    "demo",

  OWNER_DEMO_MODE:
    false,


  /*
   * Drive demo mode.
   *
   * Production Google Drive OAuth configuration
   * backend-এর মাধ্যমে করতে হবে।
   */

  DRIVE_MODE:
    "demo",


  /*
   * Public social links
   */

  SOCIAL_LINKS: {

    whatsapp:
      "#",

    telegram:
      "#",

    youtube:
      "#",

    facebook:
      "#",

    instagram:
      "#"

  },


  /*
   * Feature configuration
   */

  FEATURES: {

    wishlist: true,

    reviews: true,

    chat: true,

    vendorStore: true,

    buySell: true

  },


  /*
   * Storage policy
   *
   * Agent শুধু platform-created files-এর
   * dedicated folder পরিচালনা করবে।
   */

  STORAGE: {

    MAX_PLATFORM_USAGE_GB:
      9,

    KEEP_RECENT_MONTHS:
      3,

    DELETE_OLDEST_FIRST:
      true,

    NEVER_DELETE_PERSONAL_FILES:
      true

  },


  /*
   * Security
   */

  SECURITY: {

    OWNER_NO_INDEX:
      true,

    BLOCK_UNAUTHORIZED_OWNER:
      true,

    LOG_SECURITY_EVENTS:
      true

  }

};
