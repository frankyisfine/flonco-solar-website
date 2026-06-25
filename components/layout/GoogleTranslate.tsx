"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void;
        InlineLayout: { SIMPLE: number };
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    let scriptAdded = false;

    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      scriptAdded = true;
    };

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,pt,fr,ru,ar,de,it,ja,ko,th,vi,id,tr,pl,uk",
            layout: window.google.translate.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element"
        );
      }
    };

    // Check if already loaded
    if (window.google?.translate) {
      window.googleTranslateElementInit();
    } else {
      addScript();
    }

    return () => {
      if (scriptAdded) {
        const script = document.getElementById("google-translate-script");
        script?.remove();
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="fixed bottom-6 left-6 z-50"
      title="Translate"
    />
  );
}
