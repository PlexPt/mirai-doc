[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [recall](./recall.md)

# recall

`suspend fun `[`MessageReceipt`](-message-receipt/index.md)`<*>.recall(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

撤回这条消息. [recall](./recall.md) 或 [recallIn](../net.mamoe.mirai/recall-in.md) 只能被调用一次.

### Exceptions

`IllegalStateException` - 当此消息已经被撤回或正计划撤回时

**See Also**

[Bot.recall](../net.mamoe.mirai/-bot/recall.md)

