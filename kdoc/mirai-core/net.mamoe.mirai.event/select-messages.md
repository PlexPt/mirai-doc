[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [selectMessages](./select-messages.md)

# selectMessages

`@SinceMirai("0.29.0") suspend inline fun <reified T : `[`ContactMessage`](../net.mamoe.mirai.message/-contact-message/index.md)`, R> T.selectMessages(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1, filterContext: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, crossinline selectBuilder: `[`MessageSelectBuilder`](-message-select-builder/index.md)`<T, R>.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): R`

挂起当前协程, 等待任意一个事件监听器触发后返回其返回值.

创建的所有事件监听器都会判断发送人信息 ([isContextIdenticalWith](../net.mamoe.mirai.message/is-context-identical-with.md)), 监听之后的所有消息.

[selectBuilder](select-messages.md#net.mamoe.mirai.event$selectMessages(net.mamoe.mirai.event.selectMessages.T, kotlin.Long, kotlin.Boolean, kotlin.Function1((net.mamoe.mirai.event.MessageSelectBuilder((net.mamoe.mirai.event.selectMessages.T, net.mamoe.mirai.event.selectMessages.R)), kotlin.Unit)))/selectBuilder) DSL 类似于 [subscribeMessages](kotlinx.coroutines.-coroutine-scope/subscribe-messages.md) 的 DSL, 屏蔽了一些 `reply` DSL 以确保类型安全

``` kotlin
val value: String = selectMessages {
  "hello" { "111" }
  "hi" { "222" }
  startsWith("/") { it }
  default { "default" }
}
```

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制

**See Also**

[nextMessage](../net.mamoe.mirai.message/next-message.md)

