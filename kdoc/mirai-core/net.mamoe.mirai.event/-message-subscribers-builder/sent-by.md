[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [sentBy](./sent-by.md)

# sentBy

`fun sentBy(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): ListeningFilter<M, Ret, R, RR>`

如果是这个人发的消息. 消息目前只会是群消息

`fun sentBy(qq: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): ListeningFilter<M, Ret, R, RR>`
`fun sentBy(friend: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`): ListeningFilter<M, Ret, R, RR>`
`fun sentBy(qq: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, onEvent: `[`MessageListener`](../-message-listener.md)`<M, R>): Ret`

如果是这个人发的消息. 消息可以是好友消息也可以是群消息

`@PlannedRemoval("1.0.0") fun ~~sentBy~~(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, onEvent: `[`MessageListener`](../-message-listener.md)`<M, R>): Ret`
**Deprecated:** for binary compatibility

