import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import BuyToken from "./pages/BuyToken";

function App() {
  return (
    <div class='min-h-screen w-[1144px] mx-auto'>
      <Navbar />
      <BuyToken />
      {/* <Dashboard /> */}
    </div>
  )
}

export default App;
