function User(){
    return(
        <div>
            <h1>
            This is function component!
            </h1>
            <Student />
        </div>
    );
}

function Student(){
    return(
        <div>
            <h1>This is my second function component in user!</h1>
        </div>
    );
}

export default User;