class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you?");
      this.updateChatbotState(message);
    }
  
    handleAnalysisInfo() {
      const message = this.createChatBotMessage(
        "The Analysis page lets you upload water samples and get insights about contamination and potability."
      );
      this.updateChatbotState(message);
    }
  
    handleClassificationInfo() {
      const message = this.createChatBotMessage(
        "Classification helps determine if water is potable or not using machine learning models."
      );
      this.updateChatbotState(message);
    }
  
    handleUnknown() {
      const message = this.createChatBotMessage(
        "Sorry, I didn't understand that. Please ask about Analysis, Classification, or another topic."
      );
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  