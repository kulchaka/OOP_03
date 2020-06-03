class Student extends User {
    constructor(username, password, nickname) {
        super(username, password);
        this.nickname = nickname;
    }
    getNameVsNickName() {
        return this.username + ' ' + this.nickname;
    }
    validatePassword() {
        if (this.password.length > 8) {
            return true;
        }
        return false;
    }
}