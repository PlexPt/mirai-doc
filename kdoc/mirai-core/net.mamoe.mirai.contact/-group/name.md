[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Group](index.md) / [name](./name.md)

# name

`abstract var name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

群名称.

在修改时将会异步上传至服务器, 也会广播事件 [GroupNameChangeEvent](../../net.mamoe.mirai.event.events/-group-name-change-event/index.md).
频繁修改可能会被服务器拒绝.

### Exceptions

`PermissionDeniedException` - 无权限修改时将会抛出异常

**See Also**

[GroupNameChangeEvent](../../net.mamoe.mirai.event.events/-group-name-change-event/index.md)

