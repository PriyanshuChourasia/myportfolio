import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteNavigation } from "./RouteNavigation";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {RouteNavigation.map((item, index) => (
            <Route key={index} path={item.path} element={item.element}>
              {item.children &&
                item.children.map((childRou, index) => (
                  <Route
                    key={index}
                    path={childRou.path}
                    element={childRou.element}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
