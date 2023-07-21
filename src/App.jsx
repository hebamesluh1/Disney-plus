import { Suspense } from "react"
import { GlobalStyle } from "./global/style"
import Router from "./router/Router"
import Spinner from "./components/Spinner"

function App() {


  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Router />
    </Suspense>
  )
}

export default App
