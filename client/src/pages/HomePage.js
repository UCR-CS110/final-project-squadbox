import React from 'react';
import Navigator from '../components/Navigator';

const HomePage = () => {
  return (
    <>
      <Navigator />
      <div className="flex flex-col items-center mt-10">
        <form>
          <input type="text" placeholder="Add post text"/>
          <button type="submit">Add Post</button> Only show if logged in
        </form>

        {/* For each post / room - make an element  */}
        <ul>
          <li>
            Post Title
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default HomePage;
