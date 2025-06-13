import "@/assets/css/chatai.css";
const ChatAI = () => {
    return (
      <>
        <div className="section">
          <div className="container ">
            <div className="chat-container">
              <div className="row align-center">
                <p className="sub-title chat-title">Chris AI</p>
                <p className="chat-caption">Ask me questions about my career</p>
              </div>
              <div className="">
              <iframe
                src="https://chrisnortonjr-chris-ai.hf.space"
                frameborder="0"
                width="750"
                  height="600"
              ></iframe></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChatAI;