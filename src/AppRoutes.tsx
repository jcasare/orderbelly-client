import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home</span>}></Route>
      <Route path="/user-profile" element={<span>User Profile</span>}></Route>
      <Route path="*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  );
};

export default AppRoutes;
