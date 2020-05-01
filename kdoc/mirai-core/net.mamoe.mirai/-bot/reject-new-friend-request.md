[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [Bot](index.md) / [rejectNewFriendRequest](./reject-new-friend-request.md)

# rejectNewFriendRequest

`@SinceMirai("0.35.0") abstract suspend fun rejectNewFriendRequest(event: `[`NewFriendRequestEvent`](../../net.mamoe.mirai.event.events/-new-friend-request-event/index.md)`, blackList: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

拒绝好友验证

### Parameters

`event` - 好友验证的事件对象

`blackList` - 拒绝后是否拉入黑名单