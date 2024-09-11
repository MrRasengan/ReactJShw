import "./App.css";
import CommentsList from "./components/Commentslist";
import Message from "./components/Message";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";

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
		</div>
	);
}

export default App;
