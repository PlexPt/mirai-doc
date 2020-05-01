[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [Bot](index.md) / [recall](./recall.md)

# recall

`abstract suspend fun recall(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.

[Bot](index.md) 撤回自己的消息不需要权限.
[Bot](index.md) 撤回群员的消息需要管理员权限.

### Parameters

`source` - 消息源. 可从 [MessageReceipt.source](../../net.mamoe.mirai.message/-message-receipt/source.md) 获得, 或从消息事件中的 [MessageChain](../../net.mamoe.mirai.message.data/-message-chain/index.md) 获得.

### Exceptions

`PermissionDeniedException` - 当 [Bot](index.md) 无权限操作时

`IllegalStateException` - 当这条消息已经被撤回时 (仅同步主动操作)

**See Also**

[Bot.recall](./recall.md)

[MessageSource.recall](../../net.mamoe.mirai.message.data/recall.md)

