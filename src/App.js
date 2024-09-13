import "./App.css";
import Message from "./components/hw1/Message";

import CommentsList from "./components/hw2/Commentslist";

import TemperatureConverter from "./components/hw3/TemperatureConverter";
import TodoList from "./components/hw3/TodoList";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/hw4/HomePage';
import AboutPage from './components/hw4/AboutPage';

function App() {
	return (
		<div>
			<p className="less">Домашнее задание 1</p>
			<Message text="Привет, это сообщение для домашнего задания по Reactу)))!" />
			<Message text="Это еще одно сообщение дополнительно." />
			<br></br>

			<p className="less">Домашнее задание 2</p>
      <CommentsList/>
			<br></br>

			<p className="less">Домашнее задание 3</p>
			<TemperatureConverter/>
			<TodoList/>
			<br></br>

			<p className="less">Домашнее задание 4</p>
			<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
		</div>
	);
}

export default App;
