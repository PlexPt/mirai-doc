[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [quoteReply](./quote-reply.md)

# quoteReply

`open infix fun ListeningFilter<M, Ret, R, RR>.quoteReply(toReply: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): Ret`
`open infix fun ListeningFilter<M, Ret, R, RR>.quoteReply(toReply: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): Ret`

启动这个监听器, 在满足条件时引用回复原消息

`open infix fun ListeningFilter<M, Ret, R, RR>.quoteReply(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): Ret`

启动这个监听器, 在满足条件时执行 [replier](quote-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$quoteReply(net.mamoe.mirai.event.MessageSubscribersBuilder.ListeningFilter((net.mamoe.mirai.event.MessageSubscribersBuilder.M, net.mamoe.mirai.event.MessageSubscribersBuilder.Ret, net.mamoe.mirai.event.MessageSubscribersBuilder.R, net.mamoe.mirai.event.MessageSubscribersBuilder.RR)), kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 并引用回复原消息

