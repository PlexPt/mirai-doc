[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [whileSelectMessages](./while-select-messages.md)

# whileSelectMessages

`@SinceMirai("0.29.0") suspend inline fun <reified T : `[`ContactMessage`](../net.mamoe.mirai.message/-contact-message/index.md)`> T.whileSelectMessages(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1, filterContext: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, crossinline selectBuilder: `[`MessageSelectBuilder`](-message-select-builder/index.md)`<T, `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

挂起当前协程, 等待任意一个事件监听器返回 `false` 后返回.

创建的所有事件监听器都会判断发送人信息 ([isContextIdenticalWith](../net.mamoe.mirai.message/is-context-identical-with.md)), 监听之后的所有消息.

[selectBuilder](while-select-messages.md#net.mamoe.mirai.event$whileSelectMessages(net.mamoe.mirai.event.whileSelectMessages.T, kotlin.Long, kotlin.Boolean, kotlin.Function1((net.mamoe.mirai.event.MessageSelectBuilder((net.mamoe.mirai.event.whileSelectMessages.T, kotlin.Boolean)), kotlin.Unit)))/selectBuilder) DSL 类似于 [subscribeMessages](kotlinx.coroutines.-coroutine-scope/subscribe-messages.md) 的 DSL, 屏蔽了一些 `reply` DSL 以确保类型安全

``` kotlin
reply("开启复读模式")

whileSelectMessages {
    "stop" {
        reply("已关闭复读")
        false // 停止循环
    }
    // 也可以使用 startsWith("") { true } 等 DSL
    default {
        reply(message)
        true // 继续循环
    }
    timeout(3000) {
        // on
        true
    }
} // 等待直到 `false`

reply("复读模式结束")
```

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制

**See Also**

[subscribe](kotlinx.coroutines.-coroutine-scope/subscribe.md)

[subscribeMessages](kotlinx.coroutines.-coroutine-scope/subscribe-messages.md)

[nextMessage](../net.mamoe.mirai.message/next-message.md)

