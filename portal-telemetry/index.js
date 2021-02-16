const fs = require("fs");
const path = require("path");
const telemetryHelper = require("./telemetryHelper.js");
const telemtryEventConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./telemetryEventConfig.json"))
);
const googleDid = "2c010e13a76145d864e459f75a176171";

const logImpressionEvent = (req) => {
  const edata = {
    type: "view",
    pageid: "google-sign-in",
    uri: "/google/auth",
  };
  const context = {
    env: "GOOGLE_SIGN_IN",
    did: googleDid,
  };
  telemetryHelper.logImpressionEvent(req, { edata, context });
};

const req = {
  id: "ekstep.telemetry",
  ver: "3.0",
  ets: 1613102466886,
  session: { rootOrghashTagId: "12345643212345" },
  events: [
    {
      eid: "IMPRESSION",
      ets: 1613102466676,
      ver: "3.0",
      mid: "IMPRESSION:565fba6741d8488dffe6e39f565c0529",
      actor: { id: "d4e5944e381900eefa3afb1edddb6214", type: "User" },
      context: {
        channel: "b00bc992ef25f1a9a8d63291e20efc8d",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.6.0",
          pid: "sunbird-portal",
        },
        env: "public",
        sid: "eea15340-6ce6-11eb-9279-6b23fe6a441d",
        did: "d4e5944e381900eefa3afb1edddb6214",
        cdata: [],
        rollup: { l1: "b00bc992ef25f1a9a8d63291e20efc8d" },
        uid: "anonymous",
      },
      object: {},
      tags: ["b00bc992ef25f1a9a8d63291e20efc8d"],
      edata: {
        type: "view",
        pageid: "login",
        subtype: "init",
        uri:
          "https://dev.sunbirded.org/auth/realms/sunbird/protocol/openid-connect/auth?client_id=portal&state=2110fedd-09ee-4e91-940c-43cf574cf640&redirect_uri=https%253A%252F%252Fdev.sunbirded.org%252Fresources%253Fauth_callback%253D1&scope=openid&response_type=code&version=4",
        visits: ["dev"],
      },
    },
  ],
};

logImpressionEvent(req);

let telemetry_events = {
  id: "api.sunbird.telemetry",
  ver: "3.0",
  params: {
    msgid: "f4a0bd97cc365975c70be1b73846662e",
  },
  ets: 1613103029408,
  events: [
    {
      eid: "LOG",
      ets: 1613102920015,
      ver: "3.0",
      mid: "LOG:24af1eda9b2b236218164146dec185f0",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "app",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "cdn_failed",
        level: "ERROR",
        message: "cdn failed, loading files from portal",
        pageid: "/",
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613102920169,
      ver: "3.0",
      mid: "IMPRESSION:13f2caa3d1bc7e7d9c02ca9c2cefb04c",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library",
        uri: "/resources",
        subtype: "paginate",
        duration: 0.238,
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613102920169,
      ver: "3.0",
      mid: "IMPRESSION:13f2caa3d1bc7e7d9c02ca9c2cefb04c",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library",
        uri: "/resources",
        subtype: "paginate",
        duration: 0.238,
      },
    },
    {
      eid: "INTERACT",
      ets: 1613103022443,
      ver: "3.0",
      mid: "INTERACT:1ba1e1c28a2fccaf9c94c80592f35db2",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "content-type",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        id: "all",
        type: "click",
        pageid: "/resources",
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103022528,
      ver: "3.0",
      mid: "IMPRESSION:3c0396d1b0d625d32e2c005bb35166f8",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library-search",
        uri: "/search/Library/1?selectedTab=all",
        subtype: "paginate",
        duration: 0.083,
      },
    },
    {
      eid: "INTERACT",
      ets: 1613103023195,
      ver: "3.0",
      mid: "INTERACT:d0aaea84438bc0ce8c253c9b52ff3e6e",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "content-type",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        id: "tvProgram",
        type: "click",
        pageid: "/search/Library/1?selectedTab=all",
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103023199,
      ver: "3.0",
      mid: "IMPRESSION:6356999d32ca062a188f7c59750a30c6",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library-search",
        uri: "/search/Library/1?selectedTab=all",
        subtype: "pageexit",
        duration: 0.083,
        visits: [],
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103023227,
      ver: "3.0",
      mid: "IMPRESSION:977d5dbf84d4d804cbf95531671c09fa",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library",
        uri: "/resources?selectedTab=tvProgram",
        subtype: "paginate",
        duration: 0.03,
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103023228,
      ver: "3.0",
      mid: "IMPRESSION:b1a9a0d2928960ba1cc4a60e81440115",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library",
        uri: "/resources?selectedTab=tvProgram",
        subtype: "paginate",
        duration: 0.03,
      },
    },
    {
      eid: "INTERACT",
      ets: 1613103024682,
      ver: "3.0",
      mid: "INTERACT:87d1e2a4484b3b277fe1a681c389481e",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "content-type",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        id: "course",
        type: "click",
        pageid: "/resources?selectedTab=tvProgram",
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103024710,
      ver: "3.0",
      mid: "IMPRESSION:e31811b9e7164be5cfa9b85102184f03",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "Course",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "learn",
        uri: "/learn?selectedTab=course",
        subtype: "pageexit",
        duration: 0.015,
        visits: [],
      },
    },
    {
      eid: "INTERACT",
      ets: 1613103025505,
      ver: "3.0",
      mid: "INTERACT:c24bd5e55f4aa229777e4d44661b5a54",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "content-type",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        id: "textbook",
        type: "click",
        pageid: "/learn?selectedTab=course",
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103025557,
      ver: "3.0",
      mid: "IMPRESSION:a52e1acc38caedcf1b07e21d9d44af35",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library",
        uri: "/resources?selectedTab=textbook",
        subtype: "paginate",
        duration: 0.05,
      },
    },
    {
      eid: "IMPRESSION",
      ets: 1613103025557,
      ver: "3.0",
      mid: "IMPRESSION:a52e1acc38caedcf1b07e21d9d44af35",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "library",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        type: "view",
        pageid: "library",
        uri: "/resources?selectedTab=textbook",
        subtype: "paginate",
        duration: 0.05,
      },
    },
    {
      eid: "INTERACT",
      ets: 1613103029398,
      ver: "3.0",
      mid: "INTERACT:73f82a29cb463a1cacddad51b0330564",
      actor: {
        id: "68bf1df9-bd59-499f-a2d4-de63a4140299",
        type: "User",
      },
      context: {
        channel: "01316027171990732818",
        pdata: {
          id: "dev.sunbird.portal",
          ver: "3.7.0",
          pid: "sunbird-portal",
        },
        env: "home",
        sid: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
        did: "cfa61eb5ef2247bd1d7d953ec95e5c02",
        cdata: [
          {
            id: "nWja5EKLCAv_UOdWJjb23zDpQPrEhEpA",
            type: "UserSession",
          },
          {
            id: "Desktop",
            type: "Device",
          },
          {
            id: "default",
            type: "Theme",
          },
        ],
        rollup: {
          l1: "01316027171990732818",
        },
        uid: "68bf1df9-bd59-499f-a2d4-de63a4140299",
      },
      object: {},
      tags: ["01316027171990732818"],
      edata: {
        id: "logout",
        type: "click",
        pageid: "resources?selectedTab=textbook",
      },
    },
  ],
};
