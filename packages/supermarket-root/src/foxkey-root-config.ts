import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@foxkey/gateway",
  app: () => System.import("@foxkey/gateway"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
