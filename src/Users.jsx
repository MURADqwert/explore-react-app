import { use } from "react";
import User from './User';

export default function Users({fetchUsers}){
    const users = use(fetchUsers);
    return(
        <div className="border">
            <h3>User</h3>
            {
                users.map(user => <User key={user.id} User={user}></User>)
            }
        </div>
    )
}