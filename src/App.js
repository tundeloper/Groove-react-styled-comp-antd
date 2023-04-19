import { GlobalStyle } from "./components/global/globalStyle";
import { AppLayout } from "./components/Layout/Layout";
import Sider from "./components/Sider/sider";
import { Content } from "./components/content/content";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout Sider={Sider} Content={Content} />
    </>
  );
}

export default App;
