// import { getProgrammingJoke } from 'random-joke-getter';
import { createClientMessage } from 'react-chatbot-kit';

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
  }

  popLastName() {
    // if firstname is valid pop lastname, else pop try again, that name doesn't look valid bitch
    const message = this.createChatBotMessage(
      'Enter your last name'
    );
    // const message = createClientMessage('Hello world!');
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Enter your last name';
  }

  popMobileNumber() {
    const message = this.createChatBotMessage(
      'Enter your 11 digit mobile number'
    );
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Enter your 11 digit mobile number';
  }

  popEmailAddress() {
    const message = this.createChatBotMessage(
      'Enter your email address'
    );
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Enter your email address';
  }

  // default if bot don't understand your response
  greet() {

    const validbotmessages = [
      'Please enter your first name',
      'Enter your lastname',
      'Enter your 11 digit mobile number',
      'Enter your email address'
    ];

    if (validbotmessages.includes(window.$lastbotmessage)) {
      return;
    }
    const greetingMessage = this.createChatBotMessage(
      'Sorry, I don\'t understand that. I\'m just a bot.'
    );
    this.updateChatbotState(greetingMessage);

    setTimeout(() => {

      // if from main menu
      if (window.$lastbotmessage === undefined) {
        const message = this.createChatBotMessage(
          "Please select from these options",
          {
            widget: 'introOptions',
          }
        );
        this.updateChatbotState(message);
      }

      // if wrong mobile number format

      // if wrong email format

    }, 1000);


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

    setTimeout(() => {
      const message1 = this.createChatBotMessage(
        'Agree and continue?'
        , {
          widget: 'agreeOptions',
        });
      this.updateChatbotState(message1);
    }, 1000);

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
  }

  handleCallHotline8888() {
    const message = this.createChatBotMessage('Just dial 8888 on your phone or landline. It is free.');
    this.updateChatbotState(message);
    setTimeout(() => {
      const message1 = this.createChatBotMessage('Thank you for reaching out. Have a good day!');
      this.updateChatbotState(message1);
    }, 1000);

  }

  handleAgreeFileComplaint() {
    const message = this.createChatBotMessage('Please enter your first name');
    this.updateChatbotState(message);
    window.$lastbotmessage = 'Please enter your first name';
  }

  handleCancelFileComplaint() {
    const message = this.createChatBotMessage('Complaint filing cancelled.');
    this.updateChatbotState(message);
    setTimeout(() => {
      const message1 = this.createChatBotMessage('Going back to the main options...', {
        widget: 'introOptions',
      });
      this.updateChatbotState(message1);
    }, 1000);

  }

  handleSubmitTo8888() {
    const message = this.createChatBotMessage('We have successfully created your complaint report.');
    this.updateChatbotState(message);
    setTimeout(() => {
      const message1 = this.createChatBotMessage('This is your ticket number ABCDE54321. Please keep it.');
      this.updateChatbotState(message1);
    }, 1000);
    setTimeout(() => {
      const message2 = this.createChatBotMessage('Thank you for reaching out to us. If you need anything else, here are the options', {
        widget: 'introOptions',
      });
      this.updateChatbotState(message2);
    }, 2000);

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
