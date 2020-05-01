[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [Bot](index.md) / [ignoreMemberJoinRequest](./ignore-member-join-request.md)

# ignoreMemberJoinRequest

`@SinceMirai("0.35.0") abstract suspend fun ignoreMemberJoinRequest(event: `[`MemberJoinRequestEvent`](../../net.mamoe.mirai.event.events/-member-join-request-event/index.md)`, blackList: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

忽略加群验证（需管理员权限）

### Parameters

`event` - 加群验证的事件对象

`blackList` - 忽略后是否拉入黑名单