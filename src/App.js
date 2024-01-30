import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import CustomFooter from "./Components/CustomFooter";
import AllTheBooks from "./Components/AllTheBooks";
import WelcomeAlert from "./Components/WelcomeAlert";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main className="bg-secondary pb-5">
        <WelcomeAlert />
        <AllTheBooks />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
