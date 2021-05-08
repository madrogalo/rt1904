import React, {FC} from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

interface UserItemPageParams {
    id: string
}
export const UserItemsPage: FC = () => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useHistory()

    React.useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return(
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>User page {user?.name}</h1>
            <div>email {user?.email}</div>
            <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
        </div>
    )
}

export default UserItemsPage