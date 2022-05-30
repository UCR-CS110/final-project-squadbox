import React from 'react';
import Navigator from '../components/Navigator';
import { Link } from 'react-router-dom';
import { PostForm } from '../forms';
import userSession from '../helpers/userSession'

const HomePage = () => {
  console.log(userSession)
  if(userSession.getName !== "") { // User is not signed in
    return (
      <>
        <Navigator />
        <div className="flex flex-col items-center mt-10">
          <div>
            <PostForm />
          </div>

          {/* For each post / room - make an element  */}
          <ul>
            <li>
              Post 1
              <Link to="/">Room 1</Link>
            </li>
            <li>
              Post 2
              <a>Link 2</a>
            </li>
          </ul>
          
        </div>
      </>
    );
  }
  else { // User is signed in
    return (
      <>
        <Navigator />
        <div className="flex flex-col items-center mt-10">
          <div>
            <PostForm />
          </div>

          {/* For each post / room - make an element  */}
          <ul>
            <li>
              Post 1
              <Link to="/">Room 1</Link>
            </li>
            <li>
              Post 2
              <a>Link 2</a>
            </li>
          </ul>
          
        </div>
      </>
    );
  }
}

export default HomePage;
