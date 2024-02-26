import { useContext } from "react";
import { GlobalContext } from "../../utils/globalContext";
import UserData from "./UserData";
import "./Users.css";

const Card = () => {
    const { users } = useContext(GlobalContext);
   
    return (
        <div className="card-container">
            {users.map(user => (
                <div className="card" key={user.id}>
                    <img src="src/assets/personicon.png" alt="avatar" className="avatar"/>
                    <UserData user={user}/>
                </div>
            ))}
        </div>
    );

};

export default Card;