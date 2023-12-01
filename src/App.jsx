import { BasketProvider } from "./context/BasketContext";
import { MainRouter } from "./router";

function App() {
  return (
    <BasketProvider>
      <MainRouter />
    </BasketProvider>
  )
}

export default App
