class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("analysis")) {
        this.actionProvider.handleAnalysisInfo();
      } else if (lowerCaseMessage.includes("classification")) {
        this.actionProvider.handleClassificationInfo();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  