import "@/assets/css/chatai.css";
const ChatAI = () => {
  return (
    <>
      <div className="chat-section section">
        <div className="container ">
          <div className="chat-container">
            <div className="row align-center">
              <p className="chat-title">Chris AI</p>
              <p className="chat-caption mt-2">Ask me questions about my experience</p>
            </div>
            <div className="mt-4">
              <iframe
                className="chatbox"
                src="https://chrisnortonjr-chris-ai.hf.space"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAI;
