import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/Store";
import routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
