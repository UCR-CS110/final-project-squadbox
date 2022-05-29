import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';
import { CommentForm } from '../forms';

const Post = () => {
  const [comments, setComments] = useState("");

  let { postId } = useParams();
  // let room = fetch(url/${roomId});

  useEffect(() => {

  }, [comments])

  let room = true;
  return room ? (
    <div>
      <Navigator />
      Room #: {postId}
      <div>
        <CommentForm />
      </div>
    </div>
  ) : (
    <div> 
      <Navigator />
      Loading... 
    </div>
  )
}

export default Post;