[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [Bot](index.md) / [constructMessageSource](./construct-message-source.md)

# constructMessageSource

`@SinceMirai("0.39.0") abstract fun constructMessageSource(kind: Kind, fromUin: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, targetUin: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, id: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, internalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, originalMessage: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`OfflineMessageSource`](../../net.mamoe.mirai.message.data/-offline-message-source/index.md)

构造一个 [OfflineMessageSource](../../net.mamoe.mirai.message.data/-offline-message-source/index.md)

### Parameters

`id` - 即 [MessageSource.id](../../net.mamoe.mirai.message.data/-message-source/id.md)

`internalId` - 即 [MessageSource.internalId](../../net.mamoe.mirai.message.data/-message-source/internal-id.md)

`fromUin` - 为用户时为 [Friend.id](../../net.mamoe.mirai.contact/-friend/id.md), 为群时需使用 [Group.calculateGroupUinByGroupCode](#) 计算

`targetUin` - 为用户时为 [Friend.id](../../net.mamoe.mirai.contact/-friend/id.md), 为群时需使用 [Group.calculateGroupUinByGroupCode](#) 计算