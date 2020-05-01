[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [atBot](./at-bot.md)

# atBot

`fun atBot(): ListeningFilter<M, Ret, R, RR>`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含目标为 [Bot](../../net.mamoe.mirai/-bot/index.md) 的 [At](../../net.mamoe.mirai.message.data/-at/index.md)

`fun atBot(onEvent: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> R): Ret`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含目标为 [Bot](../../net.mamoe.mirai/-bot/index.md) 的 [At](../../net.mamoe.mirai.message.data/-at/index.md), 就执行 [onEvent](at-bot.md#net.mamoe.mirai.event.MessageSubscribersBuilder$atBot(kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, net.mamoe.mirai.event.MessageSubscribersBuilder.R)))/onEvent)

