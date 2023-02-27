const Confirm = ({ closeModal, done }) => {



  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h2>Confirm</h2>
        <button id='changeVote' className='btn' onClick={closeModal}>
        Change Vote
        </button>
        <button id='done' className='btn model-mt' onClick={done} >
          Done
        </button>

      </div>
    </div>
  );
};

export default Confirm;
