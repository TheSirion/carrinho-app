import "./App.css";
import ApiContextProvider from "./components/ApiContext/ApiContext";
import ApiSwitcher from "./components/ApiSwitcher/ApiSwitcher";
import Card from "./components/Card/Card";
import CardFooter from "./components/CardFooter/CardFooter";
import CardHeader from "./components/CardHeader/CardHeader";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <ApiContextProvider>
      <main>
        <Card>
          <CardHeader>
            <h1>Meu carrinho</h1>
          </CardHeader>
          <ProductsList />
          <CardFooter />
        </Card>
      </main>
      <ApiSwitcher />
    </ApiContextProvider>
  );
}

export default App;
