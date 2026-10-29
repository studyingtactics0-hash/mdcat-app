
"use client";

import { useEffect } from "react";
import { App } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";

export default function AndroidBackButton() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    let removeListener: (() => void) | undefined;
    let active = true;

    App.addListener("backButton", ({ canGoBack }) => {
      if (canGoBack) {
        // Navigate to the previous page
        window.history.back();
      } else if (window.location.pathname !== "/") {
        // If there is no history, return to Home
        window.location.href = "/";
      }
      // On Home, keep the app open instead of exiting
    }).then((listener) => {
      if (active) {
        removeListener = () => {
          void listener.remove();
        };
      } else {
        void listener.remove();
      }
    });

    return () => {
      active = false;
      removeListener?.();
    };
  }, []);

  return null;
}