export interface User {
    id: number
    email: string;
    password: string;
    token: string;
}

export class UserImpl implements User {
    id: number;
    email: string;
    password: string;
    token: string;

    constructor(account?: User) {
        this.id = account?.id || 0
        this.email = account?.email || "";
        this.password = account?.password || "";
        this.token = account?.token || "";
    }
}
