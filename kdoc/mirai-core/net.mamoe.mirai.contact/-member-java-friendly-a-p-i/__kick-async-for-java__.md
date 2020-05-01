[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [MemberJavaFriendlyAPI](index.md) / [__kickAsyncForJava__](./__kick-async-for-java__.md)

# __kickAsyncForJava__

`@JvmName("kickAsync") open fun __kickAsyncForJava__(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = ""): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>`
`@JvmName("kickAsync") open fun __kickAsyncForJava__(): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>`

踢出该成员.

管理员可踢出成员, 群主可踢出管理员和群员.

### Exceptions

`PermissionDeniedException` - 无权限修改时

**See Also**

[MemberLeaveEvent.Kick](../../net.mamoe.mirai.event.events/-member-leave-event/-kick/index.md)

