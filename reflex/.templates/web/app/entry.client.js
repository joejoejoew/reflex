import { startTransition } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { createElement } from "react";

startTransition(() => {
  const el = createElement(HydratedRouter);
  const root = document.getElementById('sc-content-container');
  if (root) {
    createRoot(root).render(el);
  } else {
    hydrateRoot(document, el);
  }
});
