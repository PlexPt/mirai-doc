[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Member](index.md) / [mute](./mute.md)

# mute

`abstract suspend fun mute(durationSeconds: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

禁言.

QQ 中最小操作和显示的时间都是一分钟.
机器人可以实现精确到秒, 会被客户端显示为 1 分钟但不影响实际禁言时间.

管理员可禁言成员, 群主可禁言管理员和群员.

### Parameters

`durationSeconds` - 持续时间. 精确到秒. 范围区间表示为 `(0s, 30days]`. 超过范围则会抛出异常.

### Exceptions

`PermissionDeniedException` - 无权限修改时

**Return**
机器人无权限时返回 `false`

**See Also**

[Int.minutesToSeconds](#)

[Int.hoursToSeconds](#)

[Int.daysToSeconds](#)

[MemberMuteEvent](../../net.mamoe.mirai.event.events/-member-mute-event/index.md)

