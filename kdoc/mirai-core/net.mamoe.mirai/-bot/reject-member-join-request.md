[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [Bot](index.md) / [rejectMemberJoinRequest](./reject-member-join-request.md)

# rejectMemberJoinRequest

`@SinceMirai("0.35.0") abstract suspend fun rejectMemberJoinRequest(event: `[`MemberJoinRequestEvent`](../../net.mamoe.mirai.event.events/-member-join-request-event/index.md)`, blackList: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

拒绝加群验证（需管理员权限）

### Parameters

`event` - 加群验证的事件对象

`blackList` - 拒绝后是否拉入黑名单