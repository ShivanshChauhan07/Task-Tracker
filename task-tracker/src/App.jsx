import { Provider } from "react-redux";
import Home from "./components/Home";
import appStore from "./components/utils/store";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
