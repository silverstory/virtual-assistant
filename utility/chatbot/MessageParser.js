// import { saveLastName, getLastName } from "../../context/vars";

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.count = useSelector((state) => state.counter.value);
    this.dispatch = useDispatch();
  }

  // parse(message) {
  //   this.actionProvider.greet();
  //   // you can get the last message here
  //   console.log('user message ', message);
  // }

  parse(message) {

    if (window.$lastusermessage === message) {
      return;
    }

    // console.log(message, ' - ', window.$lastbotmessage);

    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (window.$lastbotmessage === 'Please enter your first name') {
      window.$firstname = message;
      window.$lastusermessage = message;
      
      this.actionProvider.handleLastName();
    } else {

      if (window.$lastbotmessage === 'Enter your last name') {
        window.$lastname = message;
        window.$lastusermessage = message;
        this.dispatch(increment());
        // console.log(this.count);
        this.actionProvider.handleMobileNumber();
      } else {

        if (window.$lastbotmessage === 'Enter your 11 digit mobile number') {
          window.$mobile = message;
          window.$lastusermessage = message;
          this.actionProvider.handleEmailAddress();
        }

        else {

          if (window.$lastbotmessage === 'Enter your email address') {
            window.$email = message;
            window.$lastusermessage = message;
            this.actionProvider.handleComplaintMessage();
          }

          else {

            if (window.$lastbotmessage === 'Type your complaint') {
              window.$complaint = message;
              window.$lastusermessage = message;
              this.actionProvider.handleSubmitTo8888();
            }

            else {
              this.actionProvider.greet();
            }

          }

        }

      }

    }

  }

}

export default MessageParser;
