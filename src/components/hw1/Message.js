import './Message.css';

const Message = ({ text }) => {
  return (
    <div className="message-container">
      <p className="message-text">{text}</p>
    </div>
  );
};

export default Message;