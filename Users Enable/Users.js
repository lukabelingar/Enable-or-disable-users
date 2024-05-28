var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let users_enable;
        (function (users_enable) {
            function Users(ctx, user, enable) {
                TcHmi.Server.UserManagement.updateUser(user, { "enabled": enable }, function (data) {
                    console.log(data);
                    ctx.success(data);
                });
            }
            users_enable.Users = Users;
        })(users_enable = Functions.users_enable || (Functions.users_enable = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('Users', 'TcHmi.Functions.users_enable', TcHmi.Functions.users_enable.Users);
//# sourceMappingURL=Users.js.map