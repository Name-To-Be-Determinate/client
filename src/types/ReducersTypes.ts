export type AuthData = {
    username: string;
    password: string;
};

type AuthState = { authData: AuthData | null };

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
