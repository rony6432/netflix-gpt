import { Body } from "./component/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const App=()=> {
  return (
    <div className="text-green-400">
<Provider store={AppStore}>
  <Body/>
  </Provider>
    
    </div>
  );
}

export default App;
