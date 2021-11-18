import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const ActivityPage = ({ userId, setUsername }) => {
  const [token, setToken, removeToken] = useCookies(['myToken']);

  const [image, setImage] = useState();

  useEffect(() => {
    fetchUsername(userId);
  }, [token]);

  const fetchUsername = (userId) => {
    axios
      .get(`http://127.0.0.1:8000/api/profiles/${userId}`, {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => {
        setUsername(res.data.first_name);
        setImage(res.data.picture.url);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Activities List</h1>
      <img src={image} />
    </div>
  );
};

export default ActivityPage;
