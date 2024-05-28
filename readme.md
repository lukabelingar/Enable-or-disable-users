# (Dis/En)able users

Sample project demonstrates, how users can be enabled or disabled via HMI. The [Users.ts](Users%20Enable/Users.ts) function uses the UserManagement's API to execute the command and writes back response as text. This particular operation requires a couple additional read+write permissions:
* AddOrChangeUser
* TcHmiUserManagement.DisableUser
* TcHmiUserManagement.EnableUser

[euser](Users%20%Enable/Images/euser.png)

# Tested
1.12.760.59
