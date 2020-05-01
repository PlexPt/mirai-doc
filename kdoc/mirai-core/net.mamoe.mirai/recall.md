[mirai-core](../index.md) / [net.mamoe.mirai](index.md) / [recall](./recall.md)

# recall

`suspend fun `[`Bot`](-bot/index.md)`.recall(message: `[`MessageChain`](../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

撤回这条消息.

[Bot](-bot/index.md) 撤回自己的消息不需要权限, 但需要在发出后 2 分钟内撤回.
[Bot](-bot/index.md) 撤回群员的消息需要管理员权限, 可在任意时间撤回.

### Exceptions

`PermissionDeniedException` - 当 [Bot](-bot/index.md) 无权限操作时

**See Also**

[Bot.recall](-bot/recall.md)

