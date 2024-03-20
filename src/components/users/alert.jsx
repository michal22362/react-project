import React from "react";

export const UserAlert = ({ type, message }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
}
// export default UserAlert;