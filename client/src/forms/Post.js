import React from 'react';
import { TextInput } from '../form-components';

const Post = () => {
  return (
    <form>
        <input placeholder="Enter a post here"/>
        <button type="submit">Create Post</button>
    </form>
  )
}

export default Post;