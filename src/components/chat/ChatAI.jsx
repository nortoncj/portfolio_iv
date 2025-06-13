import "@/assets/css/chatai.css";
const ChatAI = () => {
    return (
      <>
        <div className="chat-section section">
          <div className="container ">
            <div className="chat-container">
              <div className="row align-center">
                <p className="sub-title chat-title">Chris AI</p>
                <p className="chat-caption">Ask me questions about my career</p>
              </div>
              <div className="">
                <iframe
                  className="chatbox"
                src="https://chrisnortonjr-chris-ai.hf.space"
                frameborder="0"
                  
              ></iframe></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChatAI;