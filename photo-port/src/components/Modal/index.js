import React from 'react';

function Modal({ onClose, photo }) {
    const {name, category, description, index} = photo;
    return (
        <div className='modalBackDrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                <img 
                alt='current category'
                src={require(`../../assets/large/${category}/${index}.jpg`)}
                />
                <p>
                    {description}
                </p>
                <button type='button' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;