class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validatePassword() {
        console.log('worf parent password');
        if (this.password.length > 6) {
            return true;
        }
        return false;
    }
}