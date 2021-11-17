import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const ActivityPage = ({ userId, setUsername }) => {
  const [token, setToken, removeToken] = useCookies(['myToken']);

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default ActivityPage;
