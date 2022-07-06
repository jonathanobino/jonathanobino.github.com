import React, { useState, useRef } from 'react';
import useFetch from '../API/useFetch';
import { emailValidator } from '../utils';
import Loading from './Loading';

export default function () {
  const [result, isSending, error, send, updateOptions] = useFetch(
    'https://formspree.io/f/xyyojjyj',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    },
    true
  );
  const formRef = useRef(null);
  const [formMessage, setFormMessage] = useState({
    message: "Let's get in touch!",
    isError: false,
  });

  function validateForm(data) {
    return (
      data.name !== '' &&
      data.email !== '' &&
      emailValidator(data.email) &&
      data.message !== ''
    );
  }

  function beforeSend(data) {
    if (!validateForm(data))
      setFormMessage({
        message: 'Fill every field before sending',
        isError: true,
      });
    else {
      updateOptions({ body: JSON.stringify(data) });
      setFormMessage({
        message: "Thank you! I'll be in touch shortly!",
        isError: false,
      });
      send();
    }
  }

  return (
    <div className="contactFormWrapper">
      <div className={`message ${isSending || result || error ? 'show' : ''}`}>
        {isSending && <Loading />}
        {/*message error from api*/}
        {!isSending && result && (
          <h2>
            {' '}
            Thank you! I'll be in touch shortly!{' '}
            <i className="fa fa-thumbs-o-up"></i>
          </h2>
        )}
        {!isSending && error && (
          <h2>
            {' '}
            Hey! An error has occoured! Please try to refresh the page and send
            it again.
          </h2>
        )}
      </div>

      <form
        className="contactForm"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          beforeSend(Object.fromEntries(new FormData(e.target)));
        }}
      >
        <div className="row">
          <div className="medium-12 columns medium-centered text-center">
            <h2 className={formMessage.isError ? 'error' : ''}>
              {formMessage.message}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="medium-6 columns">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="medium-6 columns">
            <input type="email" placeholder="Email" name="email" />
          </div>
        </div>
        <div className="row">
          <div className="medium-12 columns">
            <textarea placeholder="Message" name="message" rows="5" />
          </div>
          <div className="medium-12 columns">
            <input type="submit" className=" button sendForm" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
}
