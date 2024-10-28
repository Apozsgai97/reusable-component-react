import { Card } from "./components/Card/Card";
import "../src/index.css";

export function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          Reusable Card Component
        </h1>
      </header>
      <main className="main">
        <section className="main__description">
          <h2 className="main__description__title">
            Quick info about the project
          </h2>
          <p className="main__description__text"></p>
        </section>
        <section className="main__gallery">
          <Card
            title="Istanbul"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            imageSrc="src/assets/istanbul.jpg"
          />
        </section>
      </main>
    </>
  );
}
