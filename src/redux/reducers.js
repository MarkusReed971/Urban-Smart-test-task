const USER_LIST = [
    {
        login: "developer21",
        password: "123456"
    }
]

export const rootReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            const actionUser = action.payload.user;
            const isEnabledButton = USER_LIST.find(user => JSON.stringify(user) === JSON.stringify(actionUser));
            return {
                user: actionUser,
                isEnabledButton
            }

        default:
            return state;
    }
}