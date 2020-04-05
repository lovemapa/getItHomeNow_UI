export class CookiesModel {
    public _id: string;
    public email: string;
    public token: string;

    constructor(user:any) {
        this._id=user._id;
        this.email=user.email;
        this.token=user.token;
    }
}
