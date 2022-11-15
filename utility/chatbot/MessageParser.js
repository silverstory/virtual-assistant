// import { saveLastName, getLastName } from "../../context/vars";

import { useSelector, useDispatch } from "react-redux";
import { updateLastBotMessage } from "../../store/lastBotMsgSlice";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/counterSlice";

const BotEnum = {
  EnterFname: "Please enter your first name",
  EnterLname: "Enter your lastname",
  EnterMobile: "Enter your 11 digit mobile number",
  EnterEmail: "Enter your email address",
  EnterComplaint: "Type your complaint",
};

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.lastbotmessage = useSelector((state) => state.lastbotmessage.value);
    this.count = useSelector((state) => state.counter.value);
    this.dispatch = useDispatch();
  }

  handleUserMessage(lastbot, message) {
    let component;
    switch (lastbot) {
      case BotEnum.EnterFname:
        window.$firstname = message;
        window.$lastusermessage = message;
        this.actionProvider.handleLastName();
        component = BotEnum.EnterFname;
        break;
      case BotEnum.EnterLname:
        window.$lastname = message;
        window.$lastusermessage = message;
        this.dispatch(incrementByAmount(5));
        this.actionProvider.handleMobileNumber();
        component = BotEnum.EnterLname;
        break;
      case BotEnum.EnterMobile:
        window.$mobile = message;
        window.$lastusermessage = message;
        this.actionProvider.handleEmailAddress();
        component = BotEnum.EnterMobile;
        break;
      case BotEnum.EnterEmail:
        window.$email = message;
        window.$lastusermessage = message;
        this.actionProvider.handleComplaintMessage();
        component = BotEnum.EnterEmail;
        break;
      case BotEnum.EnterComplaint:
        window.$complaint = message;
        window.$lastusermessage = message;
        this.actionProvider.handleSubmitTo8888();
        component = BotEnum.EnterComplaint;
        break;
      default:
        this.actionProvider.greet();
        component = '';
    }
    return component;
  };

  parse(message) {

    if (window.$lastusermessage === message) {
      return;
    }

    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    this.handleUserMessage(this.lastbotmessage, message);

  }

  // working using if then else
  // parse(message) {

  //   if (window.$lastusermessage === message) {
  //     return;
  //   }

  //   // console.log(message, ' - ', window.$lastbotmessage);

  //   const lowerCaseMessage = message.toLowerCase();

  //   if (lowerCaseMessage.includes("hello")) {
  //     this.actionProvider.greet();
  //   }

  //   if (this.lastbotmessage === BotEnum.EnterFname) {
  //     window.$firstname = message;
  //     window.$lastusermessage = message;
  //     this.actionProvider.handleLastName();
  //   } else {

  //     if (this.lastbotmessage === BotEnum.EnterLname) {
  //       window.$lastname = message;
  //       window.$lastusermessage = message;
  //       this.dispatch(incrementByAmount(5));
  //       this.actionProvider.handleMobileNumber();
  //     } else {

  //       if (this.lastbotmessage === BotEnum.EnterMobile) {
  //         window.$mobile = message;
  //         window.$lastusermessage = message;
  //         this.actionProvider.handleEmailAddress();
  //       }

  //       else {

  //         if (this.lastbotmessage === BotEnum.EnterEmail) {
  //           window.$email = message;
  //           window.$lastusermessage = message;
  //           this.actionProvider.handleComplaintMessage();
  //         }

  //         else {

  //           if (this.lastbotmessage === BotEnum.EnterComplaint) {
  //             window.$complaint = message;
  //             window.$lastusermessage = message;
  //             this.actionProvider.handleSubmitTo8888();
  //           }

  //           else {
  //             this.actionProvider.greet();
  //           }

  //         }

  //       }

  //     }

  //   }

  // }


  
}

export default MessageParser;
