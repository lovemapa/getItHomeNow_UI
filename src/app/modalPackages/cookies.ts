export class CookiesModel {
    public _id: string;
    public email: string;
    public token: string;
    public profilePic: any;
    public contact: string;

    constructor(user: any) {
        this._id = user._id;
        this.email = user.email;
        this.token = user.token;
        this.profilePic = user.profilePic;
        this.contact = user.contact;
    }
}
