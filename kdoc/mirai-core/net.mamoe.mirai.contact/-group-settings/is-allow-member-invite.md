[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [GroupSettings](index.md) / [isAllowMemberInvite](./is-allow-member-invite.md)

# isAllowMemberInvite

`abstract var isAllowMemberInvite: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

允许群员邀请好友入群的状态. `true` 为允许

在修改时将会异步上传至服务器.

### Exceptions

`PermissionDeniedException` - 无权限修改时将会抛出异常

**See Also**

[GroupAllowMemberInviteEvent](../../net.mamoe.mirai.event.events/-group-allow-member-invite-event/index.md)

