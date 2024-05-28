module TcHmi {
	export module Functions {
		export module users_enable {
			export function Users(ctx: any, user: any, enable: any) {
				TcHmi.Server.UserManagement.updateUser(user, { "enabled": enable }, function (data) {
					console.log(data);
					ctx.success(data);
				});
			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('Users', 'TcHmi.Functions.users_enable', TcHmi.Functions.users_enable.Users);
