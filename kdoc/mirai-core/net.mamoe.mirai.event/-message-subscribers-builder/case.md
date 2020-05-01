[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [case](./case.md)

# case

`fun case(equals: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false, trim: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true): ListeningFilter<M, Ret, R, RR>`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md) `==` [equals](case.md#net.mamoe.mirai.event.MessageSubscribersBuilder$case(kotlin.String, kotlin.Boolean, kotlin.Boolean)/equals)

`fun case(equals: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false, trim: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, onEvent: `[`MessageListener`](../-message-listener.md)`<M, R>): Ret`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md) `==` [equals](case.md#net.mamoe.mirai.event.MessageSubscribersBuilder$case(kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, net.mamoe.mirai.event.MessageSubscribersBuilder.R)))/equals)

### Parameters

`trim` - `true` 则删除首尾空格后比较

`ignoreCase` - `true` 则不区分大小写