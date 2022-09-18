import React, {createContext, useState} from 'react';

export const PollContext = createContext({});

const PollProvider = ({children}) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([
    {
      option: '',
      votes: 0,
    },
    {
      option: '',
      votes: 0,
    },
    {
      option: '',
      votes: 0,
    },
    {
      option: '',
      votes: 0,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PollContext.Provider
      value={{
        question,
        setQuestion,
        answers,
        setAnswers,
        isModalOpen,
        setIsModalOpen,
      }}>
      {children}
    </PollContext.Provider>
  );
};

export default PollProvider;
