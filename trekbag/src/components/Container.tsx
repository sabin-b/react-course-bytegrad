import ItemsProvider from "../context/ItemsProvider";
import Header from "./Header";
import ItemsList from "./ItemsList";
import Sidebar from "./Sidebar";

export default function Container() {
  return (
    <main>
      <ItemsProvider>
        <Header />
        <ItemsList />
        <Sidebar />
      </ItemsProvider>
    </main>
  );
}
