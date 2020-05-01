[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [nextMessageContaining](./next-message-containing.md)

# nextMessageContaining

`suspend fun <reified M : `[`Message`](../net.mamoe.mirai.message.data/-message/index.md)`> `[`ContactMessage`](-contact-message/index.md)`.nextMessageContaining(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1): M`

挂起当前协程, 等待下一条 [MessagePacket.sender](-message-packet-base/sender.md) 和 [MessagePacket.subject](-message-packet-base/subject.md) 与 [this](next-message-containing/-this-.md) 相同的 [MessagePacket](-message-packet/index.md)

若 [filter](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter.html) 抛出了一个异常, 本函数会立即抛出这个异常.

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制

**See Also**

[syncFromEvent](../net.mamoe.mirai.event/sync-from-event.md)

[whileSelectMessages](../net.mamoe.mirai.event/while-select-messages.md)

[selectMessages](../net.mamoe.mirai.event/select-messages.md)

