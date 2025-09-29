import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./core/state/store";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
