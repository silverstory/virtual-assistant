// import { getProgrammingJoke } from 'random-joke-getter';
import {
  createClientMessage,
  createChatBotMessage,
  createCustomMessage,
} from "react-chatbot-kit";

import { useSelector, useDispatch } from "react-redux";
import { updateLastBotMessage } from "../../store/lastBotMsgSlice";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/counterSlice";
import { devalue } from "../../store/theSlice";

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

// const intro =
//   "I'm a Computer Science student at UCLA and an aspiring software engineer. What do you want to know about me?";
// const experience =
//   'I worked as Software Engineer intern at Paramount, Done. and TechFin.AI.';
// const projects =
//   "I'm love spotting problems from people around me and building solutions that make their lives easier.";
// const skills =
//   "I have three years of experience in fullstack development. I'm a MERN stack lover (MongoDB, Express, React, Node.js).";
// const blogs = 'Check out my blogs on Dev Community and Medium!';

const intro = "";
const experience = "";
const projects = "";
const skills = "";
const blogs = "";

const BotEnum = {
  EnterFname: "Please enter your first name",
  EnterLname: "Enter your lastname",
  EnterMobile: "Enter your 11 digit mobile number",
  EnterEmail: "Enter your email address",
  EnterComplaint: "Type your complaint",
  EnterNature: "Please select the nature of complaint from the following options",
  EnterCaptcha: "Human check - Please type the following number:",
};

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.lastbotmessage = useSelector((state) => state.lastbotmessage.value);
    this.complaintdata = useSelector((state) => state.complaintdata);
    this.cccomplaintdata = useSelector((state) => state.cccomplaintdata);
    this.count = useSelector((state) => state.counter.value);
    this.thevalue = useSelector((state) => state.thevalue.value);
    this.dispatch = useDispatch();
  }

  // default if bot don't understand your response
  greet() {
    const validbotmessages = [
      BotEnum.EnterFname,
      BotEnum.EnterLname,
      BotEnum.EnterMobile,
      BotEnum.EnterEmail,
      BotEnum.EnterComplaint,
    ];

    if (validbotmessages.includes(this.lastbotmessage)) {
      return;
    }
    const greetingMessage = this.createChatBotMessage(
      "Sorry, I don't understand that. I'm just a bot."
    );
    this.updateChatbotState(greetingMessage);

    this.dispatch(increment());

    // if from main menu
    if (this.lastbotmessage === undefined) {
      const message = this.createChatBotMessage(
        "Please select from these options",
        {
          widget: "introOptions",
          delay: 1500,
        }
      );
      this.updateChatbotState(message);
    }

    // if wrong mobile number format

    // if wrong email format
  }

  handleAssistance() {
    const message = this.createChatBotMessage(
      "Please use the options below to request for assistance",
      {
        widget: "assistanceOptions",
      }
    );
    this.updateChatbotState(message);
  }

  async handleComplaint() {
    const message = this.createChatBotMessage(
      "We will need your name and contact info to proceed with filing a complaint."
    );
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage("Agree and continue?", {
      widget: "agreeOptions",
      delay: 1000,
    });
    this.updateChatbotState(message1);
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: "personalOptions",
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (
      await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    ).json();
    const message = this.createChatBotMessage(
      `Let me tell you a joke: ${jokeData.joke}`,
      {
        widget: "jokeOptions",
      }
    );
    this.updateChatbotState(message);
  }

  async handleBadMoodAgain() {
    const jokeData = await (
      await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    ).json();
    const message = this.createChatBotMessage(
      `Here's another one: ${jokeData.joke}`,
      {
        widget: "jokeOptions",
      }
    );
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `Glad you're happy! Let me do a quick self intro: ${intro}`,
      { widget: "personalOptions" }
    );
    this.updateChatbotState(message);
  }

  handleExperience() {
    const message = this.createChatBotMessage(experience, {
      widget: "experienceOptions",
    });
    this.updateChatbotState(message);
  }

  handleProjects() {
    const message = this.createChatBotMessage(projects, {
      widget: "projectsOptions",
    });
    this.updateChatbotState(message);
  }

  handleSkills() {
    const message = this.createChatBotMessage(skills, {
      widget: "skillsOptions",
    });
    this.updateChatbotState(message);
  }

  handleBlogs() {
    const message = this.createChatBotMessage(blogs, {
      widget: "blogsOptions",
    });
    this.updateChatbotState(message);
  }

  handleVisit8888Website() {
    window.open("https://8888.gov.ph/", "_blank");
    const message1 = this.createChatBotMessage(
      "Thank you for reaching out. Have a good day!"
    );
    this.updateChatbotState(message1);

    // clear vars
    this.dispatch(updateFirstname(""));
    this.dispatch(updateLastname(""));
    this.dispatch(updateMobile(""));
    this.dispatch(updateEmail(""));
    this.dispatch(updateComplaint(""));
    this.dispatch(updateNature(""));
    this.dispatch(updateLastBotMessage(""));
    window.$lastusermessage = "";
  }

  handleCallHotline8888() {
    const message = this.createChatBotMessage(
      "Just dial 8888 on your phone or landline. It is free."
    );
    this.updateChatbotState(message);
    const message1 = this.createChatBotMessage(
      "Thank you for reaching out. Have a good day!",
      { delay: 1000 }
    );
    this.updateChatbotState(message1);

    // clear vars
    this.dispatch(updateFirstname(""));
    this.dispatch(updateLastname(""));
    this.dispatch(updateMobile(""));
    this.dispatch(updateEmail(""));
    this.dispatch(updateComplaint(""));
    this.dispatch(updateNature(""));
    this.dispatch(updateLastBotMessage(""));
    window.$lastusermessage = "";
  }

  handleCancelFileComplaint() {
    const message = this.createChatBotMessage("Complaint filing cancelled.");
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage(
      "Going back to the main options...",
      {
        widget: "introOptions",
        delay: 1500,
      }
    );
    this.updateChatbotState(message1);

    // clear vars
    this.dispatch(updateFirstname(""));
    this.dispatch(updateLastname(""));
    this.dispatch(updateMobile(""));
    this.dispatch(updateEmail(""));
    this.dispatch(updateComplaint(""));
    this.dispatch(updateNature(""));
    this.dispatch(updateLastBotMessage(""));
    window.$lastusermessage = "";
  }

  // first name input
  handleAgreeFileComplaint() {
    this.dispatch(updateLastBotMessage(BotEnum.EnterFname));
    const message = this.createChatBotMessage(BotEnum.EnterFname);
    this.updateChatbotState(message);
  }

  handleLastName() {
    this.dispatch(updateLastBotMessage(BotEnum.EnterLname));
    const message = this.createChatBotMessage(BotEnum.EnterLname);
    this.updateChatbotState(message);
  }

  handleMobileNumber() {
    this.dispatch(updateLastBotMessage(BotEnum.EnterMobile));
    const message = this.createChatBotMessage(BotEnum.EnterMobile);
    this.updateChatbotState(message);
  }

  handleEmailAddress() {
    this.dispatch(updateLastBotMessage(BotEnum.EnterEmail));
    const message = this.createChatBotMessage(BotEnum.EnterEmail);
    this.updateChatbotState(message);
  }

  handleComplaintMessage() {
    this.dispatch(updateLastBotMessage(BotEnum.EnterComplaint));
    const message = this.createChatBotMessage(BotEnum.EnterComplaint);
    this.updateChatbotState(message);
  }

  handleCaptchaC() {

    this.dispatch(updateLastBotMessage(BotEnum.EnterCaptcha));

    // get random int
    let captchaInt = Math.floor(Math.random() * 99);

    this.dispatch(devalue(captchaInt));

    const message = this.createChatBotMessage(BotEnum.EnterCaptcha);
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage(captchaInt);
    this.updateChatbotState(message1);

  }

  handleWrongCaptchaC() {
    const message = this.createChatBotMessage(`Sorry, that is a wrong number. Please type : ${this.thevalue}`);
    this.updateChatbotState(message);
  }

  handleSubmitTo8888() {
    this.dispatch(updateLastBotMessage("")); // must be enter nature

    const message = this.createChatBotMessage(
      "By clicking on the Continue button, You agree that Your information will be used in accordance with 8888' Privacy Statement. ",
      {
        widget: "submitComplaintOptions",
      }
    );
    this.updateChatbotState(message);

  }

  handleAgreeSubmitComplaint() {

    let { ccfirstname, cclastname, ccmobile, ccemail, cccomplaint, ccnature } =
    this.cccomplaintdata;

    const message = this.createChatBotMessage(
      `We have successfully created your complaint report below ${ccfirstname} ${cclastname}`,
      {
        widget: "complaintcardOptions",
        delay: 1000,
      }
    );
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage(
      "This is your ticket number ABCDE54321. Please save it for we will be contacting you soon via your email and mobile.",
      { delay: 2000 }
    );
    this.updateChatbotState(message1);

    const message2 = this.createChatBotMessage(
      "Thank you for reaching out to us. If you need anything else, here are the options again",
      {
        widget: "introOptions",
        delay: 3500,
      }
    );
    this.updateChatbotState(message2);

    // clear vars
    this.dispatch(updateFirstname(""));
    this.dispatch(updateLastname(""));
    this.dispatch(updateMobile(""));
    this.dispatch(updateEmail(""));
    this.dispatch(updateComplaint(""));
    this.dispatch(updateNature(""));
    this.dispatch(devalue(""));
    window.$lastusermessage = "";
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
