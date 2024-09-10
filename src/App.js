import "./App.css";
import CommentsList from "./components/Commentslist";
import Message from "./components/Message";

function App() {
	return (
		<div>
			<p className="less">Домашнее задание 1</p>
			<Message text="Привет, это сообщение для домашнего задания по Reactу)))!" />
			<Message text="Это еще одно сообщение дополнительно." />
			<br></br>

			<p className="less">Домашнее задание 2</p>
      <CommentsList/>
		</div>
	);
}

export default App;
