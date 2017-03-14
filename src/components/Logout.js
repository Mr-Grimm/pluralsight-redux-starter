import React from 'react';
import {browserHistory} from 'react-router';

export default function Logout(props){
  window.location.reload();
  browserHistory.replace("/");
  return (
      <div>
      </div>
  );
}
