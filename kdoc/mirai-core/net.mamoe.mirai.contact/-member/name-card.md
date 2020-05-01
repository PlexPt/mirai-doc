[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Member](index.md) / [nameCard](./name-card.md)

# nameCard

`abstract var nameCard: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

群名片. 可能为空.

管理员和群主都可修改任何人（包括群主）的群名片.

在修改时将会异步上传至服务器.

### Exceptions

`PermissionDeniedException` - 无权限修改时

**See Also**

[nameCardOrNick](../name-card-or-nick.md)

[MemberCardChangeEvent](../../net.mamoe.mirai.event.events/-member-card-change-event/index.md)

