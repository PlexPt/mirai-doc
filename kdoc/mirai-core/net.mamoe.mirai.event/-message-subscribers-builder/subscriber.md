[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [subscriber](./subscriber.md)

# subscriber

`val subscriber: (M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, `[`MessageListener`](../-message-listener.md)`<M, RR>) -> Ret`

invoke 这个 lambda 时, 它将会把 [消息事件的处理器](../-message-listener.md) 注册给事件, 并返回注册完成返回的监听器.

