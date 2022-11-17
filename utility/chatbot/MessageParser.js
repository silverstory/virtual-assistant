// import { saveLastName, getLastName } from "../../context/vars";

import { useSelector, useDispatch } from "react-redux";
import { updateLastBotMessage } from "../../store/lastBotMsgSlice";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/counterSlice";

import {
  updateFirstname,
  updateLastname,
  updateMobile,
  updateEmail,
  updateComplaint,
  updateNature,
} from "../../store/complaintDataSlice";

import {
  ccUpdateFirstname,
  ccUpdateLastname,
  ccUpdateMobile,
  ccUpdateEmail,
  ccUpdateComplaint,
  ccUpdateNature,
} from "../../store/ccComplaintSlice";

import { devalue } from "../../store/theSlice";

const BotEnum = {
  EnterFname: "Please enter your first name",
  EnterLname: "Enter your lastname",
  EnterMobile: "Enter your 11 digit mobile number",
  EnterEmail: "Enter your email address",
  EnterComplaint: "Type your complaint",
  EnterNature:
    "Please select the nature of complaint from the following options",
  EnterCaptcha: "Human check - Please type the following number:",
};

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.lastbotmessage = useSelector((state) => state.lastbotmessage.value);
    this.complaintdata = useSelector((state) => state.complaintdata);
    this.count = useSelector((state) => state.counter.value);
    this.thevalue = useSelector((state) => state.thevalue.value);
    this.dispatch = useDispatch();
  }

  handleUserMessage(lastbot, message) {
    let component;
    switch (lastbot) {
      case BotEnum.EnterFname:
        // window.$firstname = message;
        this.dispatch(updateFirstname(message));
        window.$lastusermessage = message;
        this.actionProvider.handleLastName();
        component = BotEnum.EnterFname;
        break;
      case BotEnum.EnterLname:
        // window.$lastname = message;
        this.dispatch(updateLastname(message));
        window.$lastusermessage = message;
        this.dispatch(incrementByAmount(5));
        this.actionProvider.handleMobileNumber();
        component = BotEnum.EnterLname;
        break;
      case BotEnum.EnterMobile:
        // window.$mobile = message;
        this.dispatch(updateMobile(message));
        window.$lastusermessage = message;
        this.actionProvider.handleEmailAddress();
        component = BotEnum.EnterMobile;
        break;
      case BotEnum.EnterEmail:
        // window.$email = message;
        this.dispatch(updateEmail(message));
        window.$lastusermessage = message;
        this.actionProvider.handleComplaintMessage();
        component = BotEnum.EnterEmail;
        break;
      case BotEnum.EnterComplaint:
        this.dispatch(updateComplaint(message));
        window.$lastusermessage = message;
        this.actionProvider.handleCaptchaC();
        component = BotEnum.EnterComplaint;
        break;
      case BotEnum.EnterCaptcha:
        if (+message === this.thevalue) {
          
          let { firstname, lastname, mobile, email, complaint, nature } =
            this.complaintdata;

          // set card vars for complaint
          this.dispatch(ccUpdateFirstname(firstname));
          this.dispatch(ccUpdateLastname(lastname));
          this.dispatch(ccUpdateMobile(mobile));
          this.dispatch(ccUpdateEmail(email));
          this.dispatch(ccUpdateComplaint(complaint));
          this.dispatch(ccUpdateNature(nature));

          window.$lastusermessage = message;

          this.actionProvider.handleSubmitTo8888();

        } else {
          this.actionProvider.handleWrongCaptchaC();
        }

        component = BotEnum.EnterCaptcha;
        break;
      default:
        this.actionProvider.greet();
        component = "";
    }
    return component;
  }

  parse(message) {
    if (message.trim() === "") {
      return;
    }

    // if (window.$lastusermessage === message) {
    //   return;
    // }

    // const lowerCaseMessage = message.toLowerCase();

    // if (lowerCaseMessage.includes("hello")) {
    //   this.actionProvider.greet();
    // }

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
