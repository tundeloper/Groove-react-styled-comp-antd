import { GlobalStyle } from "./components/global/globalStyle";
import { AppLayout } from "./components/Layout/Layout";
import { Sider } from "./components/Sider/sider";
import { Content } from "./components/content/content";
import { MobileNav } from "./components/Mobile";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout Sider={Sider} Content={Content} Mobile={MobileNav} />
    </>
  );
}

export default App;
