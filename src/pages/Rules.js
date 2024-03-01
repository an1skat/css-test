import { Link } from "react-router-dom";
import "../style/style.css";

const Rules = () => {
    return ( 
        <section className="rules-section">
            <div className="container">
                <h1 className="rules-title">Правила тесту</h1>
                <ul className="rules-list list">
                    <li className="rules-list-item">
                        1. На кожне питання буде даватися 1 хвилина для роздумів.
                    </li>
                    <li className="rules-list-item">
                        2. На кожне питання є тільки одна правильна відповідь.
                    </li>
                    <li className="rules-list-item">
                        3. Якщо ви покинете сторінку, ваш тест анулюється.
                    </li>
                    <li className="rules-list-item">
                        4. Якщо ви повернетесь до питання на яке вже дали відповідь і спробуєте дать іншу, ваш тест анулюється.
                    </li>
                    <li className="rules-list-item">
                        5. Проходьте все чесно, це перевірка ваших знань!
                    </li>
                </ul>
                <Link className="rules-link link" to="/test?question=1">Почати тест</Link>
            </div>
        </section>
     );
}
 
export default Rules;