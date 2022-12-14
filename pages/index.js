import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Chatbot from 'react-chatbot-kit';

import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';
import LinksBar from '../components/layouts/LinksBar';
import SectionsBar from '../components/layouts/SectionsBar';
import useWindowSize from '../hooks/useWindowSize';
import { Box } from '@mui/system';
import MobileHeader from '../components/layouts/MobileHeader';

const saveMessages = (messages, HTMLString) => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  }
  
};

const loadMessages = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  }

};

const validateInput = () => {
  // do wala
}


const WebHome = () => {
  return (
    <>
      <div className={styles.links}>
        <LinksBar />
      </div>
      <Chatbot
        className={styles}
        config={config}
        actionProvider={ActionProvider}
        // messageHistory={loadMessages()}
        // saveMessages={saveMessages}
        // validator={validateInput}
        // runInitialMessagesWithHistory
        messageParser={MessageParser}
      />
      <div className={styles.links}>
        <SectionsBar />
      </div>
    </>
  );
};

const MobileHome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        height: '100vh',
      }}
    >
      <MobileHeader />
      <Chatbot
        className={styles}
        config={config}
        actionProvider={ActionProvider}
        // messageHistory={loadMessages()}
        messageParser={MessageParser}
      />
    </Box>
  );
};

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div className={styles.app}>
      <Head>
        <title>8888 ?? Virtual Assistant</title>
        <meta
          name="description"
          content="Hotline 8888 | Online Assistant | Chatbot"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {width > 740 ? <WebHome /> : <MobileHome />} */}
      {width > 740 ? <WebHome /> : <MobileHome />}
    </div>
  );
}
