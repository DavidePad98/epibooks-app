import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import CustomFooter from "./Components/CustomFooter";
// import AllTheBooks from "./Components/AllTheBooks";
import WelcomeAlert from "./Components/WelcomeAlert";
// import SingleBook from "./Components/SingleBook";
// import Horror from "./data/books/horror.json";
import BookList from "./Components/BookList";
// import Fantasy from "./data/books/fantasy.json";
// import History from "./data/books/history.json";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main className="bg-secondary pb-5">
        <WelcomeAlert />
        {/* <AllTheBooks /> */}
        {/* <SingleBook book={Horror[0]} /> */}
        <BookList />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
