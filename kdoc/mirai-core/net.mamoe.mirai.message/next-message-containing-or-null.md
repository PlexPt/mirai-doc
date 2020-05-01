[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [nextMessageContainingOrNull](./next-message-containing-or-null.md)

# nextMessageContainingOrNull

`suspend fun <reified M : `[`Message`](../net.mamoe.mirai.message.data/-message/index.md)`> `[`ContactMessage`](-contact-message/index.md)`.nextMessageContainingOrNull(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1): M?`

挂起当前协程, 等待下一条 [MessagePacket.sender](-message-packet-base/sender.md) 和 [MessagePacket.subject](-message-packet-base/subject.md) 与 [this](next-message-containing-or-null/-this-.md) 相同并含有 [M](next-message-containing-or-null.md#M) 类型的消息的 [MessagePacket](-message-packet/index.md)

若 [filter](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/filter.html) 抛出了一个异常, 本函数会立即抛出这个异常.

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制

**Return**
指定类型的消息. 超时时返回 `null`

**See Also**

[syncFromEventOrNull](../net.mamoe.mirai.event/sync-from-event-or-null.md)

