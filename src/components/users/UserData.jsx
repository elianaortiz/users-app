/* eslint-disable react/prop-types */
const UserData = ({user}) => {
    return (
        <div>
            <div>
                <h2>{user.name}</h2>
                <h3>Username: {user.username}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Ciudad: {user.address.city}</h3>
                <h3>Teléfono: {user.phone}</h3>
                <h3>Empresa: {user.company.name}</h3>
            </div>
            
        </div>
    );
};
export default UserData;