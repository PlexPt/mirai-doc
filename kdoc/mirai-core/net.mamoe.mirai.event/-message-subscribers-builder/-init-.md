[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`MessageSubscribersBuilder(stub: RR, subscriber: (M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, `[`MessageListener`](../-message-listener.md)`<M, RR>) -> Ret)`

消息订阅构造器

### Parameters

`M` - 消息类型

`R` - 消息监听器内部的返回值

`Ret` - 每个 DSL 函数创建监听器之后的返回值

**See Also**

[subscribeFriendMessages](../kotlinx.coroutines.-coroutine-scope/subscribe-friend-messages.md)

