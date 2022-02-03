import {
  getAnalytics as _getAnalytics,
  logEvent as _logEvent,
  isSupported,
} from "firebase/analytics";

import { firebaseApp } from "./initialise-service";
import { isProd } from "utils/environment";

const getAnalytics = async () =>
  isSupported().then((isSupported) =>
    isSupported ? _getAnalytics(firebaseApp) : null
  );

const logEvent = async (
  event: string,
  params?: { [key: string]: string | number }
) => {
  const analytics = await getAnalytics();

  if (analytics) {
    if (isProd) {
      _logEvent(analytics, event, params);
    }
  } else {
    console.log("Analytics are not supported");
  }
};

export { logEvent };
