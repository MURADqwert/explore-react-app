
export default function User({User}){
    const {name, email, username} = User;
    return(
        <div className="border">
            <p>User Name : {name} </p>
            <p>Email : {email}</p>
            <p>UserName :{username} </p>
        </div>
    )
}