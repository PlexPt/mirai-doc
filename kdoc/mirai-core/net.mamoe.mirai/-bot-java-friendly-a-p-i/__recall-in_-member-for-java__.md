[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [BotJavaFriendlyAPI](index.md) / [__recallIn_MemberForJava__](./__recall-in_-member-for-java__.md)

# __recallIn_MemberForJava__

`@JvmName("recallIn") fun __recallIn_MemberForJava__(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

在一段时间后撤回这条消息.
将根据 [MessageSource.groupId](#) 判断消息是群消息还是好友消息.

### Parameters

`millis` - 延迟的时间, 单位为毫秒

**See Also**

[recall](../../net.mamoe.mirai.contact/recall.md)

`@JvmName("recallIn") fun __recallIn_MemberForJava__(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

在一段时间后撤回这条消息.

### Parameters

`millis` - 延迟的时间, 单位为毫秒

**See Also**

[recall](../../net.mamoe.mirai.contact/recall.md)

