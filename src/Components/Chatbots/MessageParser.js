class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("Hi")
      || lowerCaseMessage.includes("Hey")) {
      this.actionProvider.greet()
    }
    else if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser

