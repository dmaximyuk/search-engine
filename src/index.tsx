import "./styles/main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TranslationProvider } from "i18nano";
import { RouterProvider } from "react-router-dom";
import { Provider as Store } from "react-redux";

import { store } from "store/store";

import { router } from "routes";

import { en } from "translation";

const translations = {
  en: async () => en,
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Store store={store}>
      <TranslationProvider translations={translations} language="en">
        <RouterProvider router={router} />
      </TranslationProvider>
    </Store>
  </StrictMode>,
);
