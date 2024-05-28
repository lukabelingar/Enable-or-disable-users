# (Dis/En)able users

Sample project demonstrates, how users can be enabled or disabled via HMI. The [Users.ts](Users%20Enable/Users.ts) function uses the UserManagement's API to execute the command and writes back response as text.
```typescript
export function Users(ctx: any, user: any, enable: any) {
  TcHmi.Server.UserManagement.updateUser(user, { "enabled": enable }, function (data) {
    console.log(data);
    ctx.success(data);
  });
}
```

This particular operation requires a couple additional read+write permissions:
* AddOrChangeUser
* TcHmiUserManagement.DisableUser
* TcHmiUserManagement.EnableUser

![euser](Users%20Enable/Images/euser.png)

# Tested
1.12.760.59

# Running the code
Publish the HMI project and login as user "demo", which is member of group "pawr". Try modifying user "luka" by pressing the only button and checkbox available on the visualization.
