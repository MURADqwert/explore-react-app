import { use } from "react";

export default function Users({fetchUsers}){
    const user = use(fetchUsers);
    console.log(user);
    return(
        <div className="border">
            <h3>User = {user.length} </h3>
        </div>
    )
}