import { Route, Routes, useLocation } from "react-router-dom";
import SettingsOverlay from "./components/SettingsOverlay/index.js";
import Index from "./pages/Index.js";
import OriginPage from "./pages/OriginPage.js";
import PostPage from "./pages/PostPage.js";
import ReadList from "./pages/ReadList.js";
import { initConfig } from "./utils/initConfig.js";

await initConfig();

export const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="settings" element={<SettingsOverlay />} />
          <Route path="post" element={<PostPage />} />
          <Route path="origin" element={<OriginPage />} />
          <Route path="readlist" element={<ReadList />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/settings" element={<SettingsOverlay />} />
        </Routes>
      )}
    </>
  );
};