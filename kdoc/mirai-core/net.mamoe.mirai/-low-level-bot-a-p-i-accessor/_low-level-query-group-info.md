[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [LowLevelBotAPIAccessor](index.md) / [_lowLevelQueryGroupInfo](./_low-level-query-group-info.md)

# _lowLevelQueryGroupInfo

`abstract suspend fun _lowLevelQueryGroupInfo(groupCode: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`GroupInfo`](../../net.mamoe.mirai.data/-group-info/index.md)

向服务器查询群资料. 获得的仅为当前时刻的资料.
请优先使用 [Bot.getGroup](../-bot/get-group.md) 然后查看群资料.

