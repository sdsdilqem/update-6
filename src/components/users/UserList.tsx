import React from 'react';
import UserCard from './UserCard';
import ScrollContainer from '../common/ScrollContainer';
import { users } from '../../data/users';

export default function UserList() {
  return (
    <div className="relative">
      <ScrollContainer className="flex gap-2 pb-1">
        {users.map(user => (
          <UserCard
            key={user.id}
            username={user.username}
            avatar={user.avatar}
            isVerified={user.isVerified}
          />
        ))}
      </ScrollContainer>
    </div>
  );
}