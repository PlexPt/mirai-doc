[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [MemberJavaFriendlyAPI](index.md) / [__kickBlockingForJava__](./__kick-blocking-for-java__.md)

# __kickBlockingForJava__

`@JvmName("kick") open fun __kickBlockingForJava__(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = ""): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`@JvmName("kick") open fun __kickBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

踢出该成员.

管理员可踢出成员, 群主可踢出管理员和群员.

### Exceptions

`PermissionDeniedException` - 无权限修改时

**See Also**

[MemberLeaveEvent.Kick](../../net.mamoe.mirai.event.events/-member-leave-event/-kick/index.md)

