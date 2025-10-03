import { Provider } from "react-redux";
import { store } from "./core/state/store";
import { AppRouter } from "./routes/router";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}
