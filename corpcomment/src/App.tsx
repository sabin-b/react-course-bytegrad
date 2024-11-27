import Container from "./components/Container";
import Footer from "./components/Footer";
import HashTag from "./components/hashtag/HashTag";

export default function App() {
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashTag />
    </div>
  );
}
