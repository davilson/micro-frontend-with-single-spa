import { foxkeyTheme } from "@foxkey/design-system";

import Routes from "./routes";

export default function App() {
  foxkeyTheme.globalStyles();
  return <Routes />;
}
