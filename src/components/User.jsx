
const User = (props) => {




    return (
        <div>
            <p className='productName'>{props.userId}</p>
            <p>{props.userName}</p>
        </div>
    )
}

export default User