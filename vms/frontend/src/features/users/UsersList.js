// do this UserList later


const UserList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = userGetUsersQuery()



    return (

        
        <div>
            <h1>User List</h1>
        </div>
    )
}

export default UserList

