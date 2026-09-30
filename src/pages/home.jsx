import Header from "../components/Header/header";
import "../App.css";

function Home() {
    return (
      <div>
  <Header />

  <main className="page">
    <div className="page-content">

      <h1 className="page-title">Home</h1>

      <p className="page-subtitle">
        Discover our latest collection and explore quality products.
      </p>

      <div className="page-card">
        <h2>Welcome to Our Store</h2>

        <p>
          Explore our collection and find products made for you.
        </p>

        <button className="page-button">
          Explore Shop
        </button>
      </div>

    </div>
  </main>
</div>
    );
}

export default Home;