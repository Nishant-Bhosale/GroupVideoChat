import React, {useEffect, useState, useContext} from 'react';
import Modal from 'react-modal';
import styles from '../styles/pollStyles';
import {Line} from 'rc-progress';
import {PollContext} from '../PollContext/PollContext.js';

const Poll = () => {
  const {
    question,
    setQuestion,
    setAnswers,
    isModalOpen,
    setIsModalOpen,
    answers: voteData,
  } = useContext(PollContext);

  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setTotalVotes(0);
    setVoted(false);
    setQuestion('');
    setAnswers([
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
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      content="Poll Modal"
      style={styles.customStyles}>
      <div>
        <h1>{question}</h1>
        <div style={styles.flexColumn}>
          {voteData &&
            voteData.map((answer, i) => {
              return !voted ? (
                <button
                  style={styles.button}
                  key={i}
                  onClick={(e) => submitVote(e, answer)}>
                  {answer.option}
                </button>
              ) : (
                <div style={styles.flexCenter} key={i}>
                  <h2 style={styles.mr20}>{answer.option}</h2>
                  <Line
                    percent={(answer.votes / totalVotes) * 100}
                    strokeWidth="5"
                    trailWidth="3"
                  />
                  <p style={styles.ml20}>{answer.votes}</p>
                </div>
              );
            })}
        </div>
        <h3>Total Votes: {totalVotes}</h3>
      </div>
    </Modal>
  );
};

export default Poll;
