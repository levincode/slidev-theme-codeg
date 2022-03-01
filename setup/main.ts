import { defineAppSetup } from "@slidev/types";

export default defineAppSetup(({ app }) => {
  app._context.config.globalProperties.$slidev
});
