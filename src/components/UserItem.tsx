import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps{
    user: IUser,
    onClick: (user: IUser) => void;
}
const UserItem: FC<UserItemProps> = ({user, onClick}) => {

    return(
        <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid gray'}}>
            {user.id} {user.name} live in city {user.address.city} street {user.address.street} post {user.address.zipcode}
        </div>
    )
}

export default UserItem