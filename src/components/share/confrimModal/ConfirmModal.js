import React from 'react';

const ConfirmModal = ({title,message,closeModal,deleteSucess, modalData}) => {
    return (
        <>
           {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="confrim-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={()=> deleteSucess(modalData)} htmlFor="confrim-modal" className="btn">Delete</label>
      <button onClick={closeModal} className='btn btn-primary'>Cancel</button>
    </div>
  </div>
</div>
        </>
    );
};

export default ConfirmModal;