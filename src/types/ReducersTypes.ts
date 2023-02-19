type AuthState = {
    authData: {
        username: string;
        password: string;
    } | null;
};

type ActionType = {
    payload?: any;
    type: string;
};

interface ReturnType<State> extends Record<string, any> {
    loading?: boolean;
    errors?: any;
    state?: State;
};

export type AuthActions = (
    state: AuthState, action: ActionType
) => ReturnType<AuthState>;
