import React from 'react';
import Post from './Post';
import type { Post as PostType } from '../types/post';

interface PostGridProps {
  posts: PostType[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-2 gap-[5px] sm:grid-cols-3 sm:gap-4 max-w-7xl mx-auto">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}