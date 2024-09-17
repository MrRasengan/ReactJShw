import "./App.css";
import Message from "./components/hw1/Message";

import CommentsList from "./components/hw2/Commentslist";

import TemperatureConverter from "./components/hw3/TemperatureConverter";
import TodoList from "./components/hw3/TodoList";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/hw4/HomePage";
import AboutPage from "./components/hw4/AboutPage";

import { Provider, useSelector } from "react-redux";
import store from "./components/hw5/store";
import ThemeToggle from "./components/hw5/ThemeToggle";
import "./styles.css";

const App = () => {

	return (
		<div>
			<p className="less">Lesson 1 JSX</p>
			<Message text="Привет, это сообщение для домашнего задания по Reactу)))!" />
			<Message text="Это еще одно сообщение дополнительно." />
			<br></br>

			<p className="less">Lesson 2 Virtual DOM</p>
			<CommentsList />
			<br></br>

			<p className="less">Lesson 3 Температурный конвертер с Material UI и Список дел</p>
			<TemperatureConverter />
			<TodoList />
			<br></br>

			<p className="less">Lesson 4 Роутинг в React</p>
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

			<p className="less">Lesson 5 Приложение для переключения темы сайта</p>

			<Provider store={store}>
      <AppWithTheme />
    </Provider>


		</div>
	);
};

const AppWithTheme = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <h1>My App</h1>
      <ThemeToggle />
      {/* Другой контент приложения */}
    </div>
  );
};

export default App;
