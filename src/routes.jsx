import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Main } from "./pages/main";
import { NotFound } from "./pages/notFound";
import { UserPage } from "./pages/userPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/user-page" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main/users/:id" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
