[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [mapping](./mapping.md)

# mapping

`open fun <N : `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`> mapping(mapper: M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> N?, onEvent: suspend M.(N) -> R): Ret`

如果 [mapper](mapping.md#net.mamoe.mirai.event.MessageSubscribersBuilder$mapping(kotlin.Function2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, net.mamoe.mirai.event.MessageSubscribersBuilder.mapping.N)), kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, net.mamoe.mirai.event.MessageSubscribersBuilder.mapping.N, net.mamoe.mirai.event.MessageSubscribersBuilder.R)))/mapper) 返回值非空, 就执行 [onEvent](mapping.md#net.mamoe.mirai.event.MessageSubscribersBuilder$mapping(kotlin.Function2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, net.mamoe.mirai.event.MessageSubscribersBuilder.mapping.N)), kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, net.mamoe.mirai.event.MessageSubscribersBuilder.mapping.N, net.mamoe.mirai.event.MessageSubscribersBuilder.R)))/onEvent)

