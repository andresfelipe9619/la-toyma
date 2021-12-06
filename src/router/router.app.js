import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routerConfig from "./router.config";
import NotFound from "../pages/NotFound";
import { JellyfishSpinner } from "react-spinners-kit";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

function RouterApp() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routerConfig.map((route) => (
          <Route key={route.path} {...route} element={<route.element />} />
        ))}
        <Route
          exact
          path="/not-found"
          render={(props) => <NotFound {...props} />}
        />
      </Routes>
    </Suspense>
  );
}

const Spinner = () => {
  const theme = useTheme();
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center">
      <JellyfishSpinner loading size={200} color={theme.palette.primary.main} />
    </Box>
  );
};
export default memo(RouterApp);
