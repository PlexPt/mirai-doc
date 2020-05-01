[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [MemberJavaFriendlyAPI](index.md) / [__unmuteAsyncForJava__](./__unmute-async-for-java__.md)

# __unmuteAsyncForJava__

`@JvmName("unmuteAsync") open fun __unmuteAsyncForJava__(): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>`

解除禁言.

管理员可解除成员的禁言, 群主可解除管理员和群员的禁言.

### Exceptions

`PermissionDeniedException` - 无权限修改时

**See Also**

[MemberUnmuteEvent](../../net.mamoe.mirai.event.events/-member-unmute-event/index.md)

