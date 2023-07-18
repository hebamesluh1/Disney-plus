import Header from "./components/Header"
import { GlobalStyle } from "./global/style"
import Router from "./router/Router"
import { store } from './redux/store';
import { Provider } from "react-redux";

function App() {


  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Router />
    </Provider>
  )
}

export default App
