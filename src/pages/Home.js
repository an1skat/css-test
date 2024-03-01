import { Link } from "react-router-dom";
import "../style/style.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <h1 className="home-title">CSS Тест</h1>
        <p className="home-text">
          Привіт! Це тест по стилям у CSS. Він складається із 35 запитань.
          <br />
          <br /> Деякі питання дуже легкі, а деякі неймовірно складні. <br /> 
          В кінці тесту ти дізнаєшся свою кількість правильних відповідей, а
          також побачиш де ти зробив помилку. <br /> <br />
          Успіху!
        </p>
        <Link className="home-link link" to="/rules">
          Почати тест
        </Link>
      </div>
    </section>
  );
};

export default Home;
