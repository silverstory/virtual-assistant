import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/molecules/Options';
import ExperienceCards from '../../components/organisms/ExperienceCards';
import ProjectCards from '../../components/organisms/ProjectCards';
import SkillCards from '../../components/organisms/SkillCards';
import BlogCards from '../../components/organisms/BlogCards';
import ComplaintCard from '../../components/organisms/ComplaintCard';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Doing great! Tell me about yourself',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'Having a bad day...',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getIntroOptions = (actionProvider) => {
  return [
    {
      text: 'I want to request for assistance',
      handler: () => actionProvider.handleAssistance(),
      id: 1,
    },
    {
      text: 'I want to file a complaint',
      handler: () => actionProvider.handleComplaint(),
      id: 2,
    },
  ];
}

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const getAssistanceOptions = (actionProvider) => {
  return [
    {
      text: 'visit 8888 Website',
      handler: () => actionProvider.handleVisit8888Website(),
      id: 1,
    },
    {
      text: 'call hotline 8888',
      handler: () => actionProvider.handleCallHotline8888(),
      id: 2,
    },
  ];
};


const getAgreeOptions = (actionProvider) => {
  return [
    {
      text: 'Yes, I agree',
      handler: () => actionProvider.handleAgreeFileComplaint(),
      id: 1,
    },
    {
      text: 'No cancel this',
      handler: () => actionProvider.handleCancelFileComplaint(),
      id: 2,
    },
  ];
};

const getAgreeSubmitC = (actionProvider) => {
  return [
    {
      text: 'Continue',
      handler: () => actionProvider.handleAgreeSubmitComplaint(),
      id: 1,
    },
    {
      text: 'Cancel',
      handler: () => actionProvider.handleCancelFileComplaint(),
      id: 2,
    },
  ];
};

const getPersonalOptions = (actionProvider) => {
  return [
    {
      // text: 'Experience',
      text: 'Services',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Blogs',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const config = {
  botName: 'Juan D.',
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm Juan D. the 8888 virtual assistant. How can I help you today?",
      {
        widget: 'introOptions',
      }
    ),
    // add another message here for privacy consent with widget and agree / decline buttons
  ],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#147efb',
  //   },
  //   chatButton: {
  //     backgroundColor: '#147efb',
  //   },
  // },
  widgets: [
    {
      widgetName: 'introOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getIntroOptions} />
      ),
    },
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'assistanceOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getAssistanceOptions}
        />
      ),
    },
    {
      widgetName: 'submitComplaintOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getAgreeSubmitC}
        />
      ),
    },
    {
      widgetName: 'agreeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getAgreeOptions}
        />
      ),
    },
    {
      widgetName: 'personalOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getPersonalOptions}
        />
      ),
    },
    {
      widgetName: 'experienceOptions',
      widgetFunc: () => <ExperienceCards />,
    },
    {
      widgetName: 'projectsOptions',
      widgetFunc: () => <ProjectCards />,
    },
    {
      widgetName: 'complaintcardOptions',
      widgetFunc: () => <ComplaintCard />,
    },
    {
      widgetName: 'skillsOptions',
      widgetFunc: () => <SkillCards />,
    },
    {
      widgetName: 'blogsOptions',
      widgetFunc: () => <BlogCards />,
    },
  ],
};

export default config;
