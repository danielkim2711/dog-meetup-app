import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useCookies } from 'react-cookie';

const ActivityItem = ({
  title,
  description,
  location,
  created,
  user,
  loadedLoggedInUser,
  loadedProfile,
}) => {
  const [token] = useCookies(['myToken']);

  const [authorName, setAuthorName] = useState('');
  const [authorPicture, setAuthorPicture] = useState('');
  const [isSending, setIsSending] = useState(false);

  const getDate = (activity) => {
    return new Date(activity).toLocaleString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fb2w75n',
        'template_2psr5l9',
        e.target,
        'user_lp3n5nhwOEGsSPVmYDILF'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          alert('Thank You. Your message successfully sent to the author.');
        },
        (error) => {
          alert('Sorry, there was a problem. Please try again later');
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`http://127.0.0.1:8000/api/profiles/${user}/`, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => {
        console.log('Get User who posted activity: ', res);
        setAuthorName(`${res.data.first_name} ${res.data.last_name}`);
        setAuthorPicture(res.data.picture);
      })
      .catch((err) => console.log(err));
  };

  const verifyUser = () => {
    user === loadedLoggedInUser.user_id
      ? alert('You cannot join your own activity!')
      : setIsSending(true);
  };

  return (
    <li className='activity__item'>
      <div className='activity__card'>
        <div className={isSending ? 'hide' : 'activity__content'}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{`Location: ${location}`}</p>
          <p>{`Created at: ${getDate(created)}`}</p>
          <div className='activity__section__author'>
            <p>Posted by:</p>
            <p>{authorName}</p>
            <img
              className='dropdown-image'
              src={
                authorPicture === null
                  ? 'https://res.cloudinary.com/dluiyrdmg/image/upload/v1637453115/default_tbqndi.png'
                  : authorPicture
              }
              alt='User Profile'
            />
          </div>
        </div>
        <div className={isSending || 'hide'}>
          <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Send Your Message</h2>
            <div className='control hide'>
              <input type='text' name='to_name' value={authorName} />
              <input
                type='text'
                name='from_name'
                value={loadedProfile.first_name}
              />
            </div>
            <div className='control'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                required
                rows='10'
              ></textarea>
            </div>
            <div className='actions'>
              <button>Submit</button>
            </div>
          </form>
          <div className='actions actions--center'>
            <button onClick={() => setIsSending(false)}>Cancel</button>
          </div>
        </div>
        <div className={isSending ? 'hide' : 'activity__actions'}>
          <button onClick={verifyUser}>Join Now!</button>
        </div>
      </div>
    </li>
  );
};

export default ActivityItem;
