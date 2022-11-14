// import { getProgrammingJoke } from 'random-joke-getter';
import { createClientMessage, createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';

const intro =
  "I'm a Computer Science student at UCLA and an aspiring software engineer. What do you want to know about me?";
const experience =
  'I worked as Software Engineer intern at Paramount, Done. and TechFin.AI.';
const projects =
  "I'm love spotting problems from people around me and building solutions that make their lives easier.";
const skills =
  "I have three years of experience in fullstack development. I'm a MERN stack lover (MongoDB, Express, React, Node.js).";
const blogs = 'Check out my blogs on Dev Community and Medium!';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.count = useSelector((state) => state.counter.value);
    this.dispatch = useDispatch();
  }

  // default if bot don't understand your response
  greet() {

    const validbotmessages = [
      'Please enter your first name',
      'Enter your lastname',
      'Enter your 11 digit mobile number',
      'Enter your email address',
      'Type your complaint'
    ];

    if (validbotmessages.includes(window.$lastbotmessage)) {
      return;
    }
    const greetingMessage = this.createChatBotMessage(
      'Sorry, I don\'t understand that. I\'m just a bot.'
    );
    this.updateChatbotState(greetingMessage);

    this.dispatch(increment());



    // if from main menu
    if (window.$lastbotmessage === undefined) {
      const message = this.createChatBotMessage(
        "Please select from these options",
        {
          widget: 'introOptions',
          delay: 1000
        }
      );
      this.updateChatbotState(message);
    }

    // if wrong mobile number format

    // if wrong email format

  }

  handleAssistance() {
    const message = this.createChatBotMessage(
      'Please use the options below to request for assistance'
      , {
        widget: 'assistanceOptions',
      });
    this.updateChatbotState(message);
  }

  async handleComplaint() {
    const message = this.createChatBotMessage(
      'We will need your name and contact info to proceed with filing a complaint.');
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage(
      'Agree and continue?'
      , {
        widget: 'agreeOptions',
        delay: 1000
      });
    this.updateChatbotState(message1);

  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: 'personalOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (
      await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    ).json();
    const message = this.createChatBotMessage(
      `Let me tell you a joke: ${jokeData.joke}`,
      {
        widget: 'jokeOptions',
      }
    );
    this.updateChatbotState(message);
  }

  async handleBadMoodAgain() {
    const jokeData = await (
      await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    ).json();
    const message = this.createChatBotMessage(
      `Here's another one: ${jokeData.joke}`,
      {
        widget: 'jokeOptions',
      }
    );
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `Glad you're happy! Let me do a quick self intro: ${intro}`,
      { widget: 'personalOptions' }
    );
    this.updateChatbotState(message);
  }

  handleExperience() {
    const message = this.createChatBotMessage(experience, {
      widget: 'experienceOptions',
    });
    this.updateChatbotState(message);
  }

  handleProjects() {
    const message = this.createChatBotMessage(projects, {
      widget: 'projectsOptions',
    });
    this.updateChatbotState(message);
  }

  handleSkills() {
    const message = this.createChatBotMessage(skills, {
      widget: 'skillsOptions',
    });
    this.updateChatbotState(message);
  }

  handleBlogs() {
    const message = this.createChatBotMessage(blogs, {
      widget: 'blogsOptions',
    });
    this.updateChatbotState(message);
  }

  handleVisit8888Website() {
    window.open('https://8888.gov.ph/', '_blank');
    const message1 = this.createChatBotMessage('Thank you for reaching out. Have a good day!');
    this.updateChatbotState(message1);
    // clear vars
    window.$firstname = '';
    window.$lastname = '';
    window.$mobile = '';
    window.$email = '';
    window.$complaint = '';
    window.$lastbotmessage = '';
    window.$lastusermessage = '';
  }

  handleCallHotline8888() {
    const message = this.createChatBotMessage('Just dial 8888 on your phone or landline. It is free.');
    this.updateChatbotState(message);
    const message1 = this.createChatBotMessage('Thank you for reaching out. Have a good day!', { delay: 1000 });
    this.updateChatbotState(message1);
    // clear vars
    window.$firstname = '';
    window.$lastname = '';
    window.$mobile = '';
    window.$email = '';
    window.$complaint = '';
    window.$lastbotmessage = '';
    window.$lastusermessage = '';
  }

  handleAgreeFileComplaint() {
    const message = this.createChatBotMessage('Please enter your first name');
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Please enter your first name';
  }

  handleCancelFileComplaint() {
    const message = this.createChatBotMessage('Complaint filing cancelled.');
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage('Going back to the main options...', {
      widget: 'introOptions',
      delay: 1000
    });
    this.updateChatbotState(message1);
    // clear vars
    window.$firstname = '';
    window.$lastname = '';
    window.$mobile = '';
    window.$email = '';
    window.$complaint = '';
    window.$lastbotmessage = '';
    window.$lastusermessage = '';
  }

  handleLastName() {
    const message = this.createChatBotMessage('Enter your last name');
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Enter your last name';
  }

  handleMobileNumber() {
    const message = this.createChatBotMessage('Enter your 11 digit mobile number');
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Enter your 11 digit mobile number';
  }

  handleEmailAddress() {
    const message = this.createChatBotMessage(
      'Enter your email address'
    );
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Enter your email address';
  }

  handleComplaintMessage() {
    const message = this.createChatBotMessage(
      'Type your complaint'
    );
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Type your complaint';
  }

  handleSubmitTo8888() {
    const message = this.createChatBotMessage(`We have successfully created your complaint report below ${window.$firstname} ${window.$lastname}`, {
      widget: 'complaintcardOptions',
    });
    this.updateChatbotState(message);

    const message1 = this.createChatBotMessage('This is your ticket number ABCDE54321. Please save it for we will be contacting you soon via your email and mobile.', { delay: 1000 });
    this.updateChatbotState(message1);

    const message2 = this.createChatBotMessage('Thank you for reaching out to us. If you need anything else, here are the options again', {
      widget: 'introOptions',
      delay: 2000
    });
    this.updateChatbotState(message2);

    // clear vars
    window.$firstname = '';
    window.$lastname = '';
    window.$mobile = '';
    window.$email = '';
    window.$complaint = '';
    window.$lastbotmessage = '';
    window.$lastusermessage = '';
  }

  updateChatbotState(message) {
    this.setState((prevState) =>
    ({
      ...prevState,
      messages: [...prevState.messages, message],
    })
    );
  }
}

export default ActionProvider;
