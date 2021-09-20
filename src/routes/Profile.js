import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router";

const Profile =() => {

    const onLogOutClick = () => authService.signOut();

    return (
        <>
        <button onClick={onLogOutClick}>Log Out</button>
        </>

    )

}
// export default () =>{
//     const history = useHistory();
//     const onLogOutClick = () => authService.signOut();
//     history.push("/")//Log out 된 후 다시 home으로 돌아갈 수 있도록 함 
     
//     return(
//         <>
//         <button onClick={onLogOutClick}>Log Out</button>
//         </>
//     )
// };

export default Profile;