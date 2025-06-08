import "./App.css";
import Header from "./header";
import PizzaCarousel from "./carousel";
import Menu from "./menu";
import BookForm from "./bookForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <PizzaCarousel />
      <Menu />
      <BookForm />
    </div>
  );
}

export default App;
