[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [finding](./finding.md)

# finding

`@JvmName("findingExtension") infix fun `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`.finding(block: suspend M.(`[`MatchResult`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-match-result/index.html)`) -> R): Ret`

如果[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md) [Regex.find](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/find.html) 不为空

`fun finding(regex: `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`): ListeningFilter<M, Ret, R, RR>`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)可由正则表达式查找([Regex.find](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/find.html))

`fun finding(regex: `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`, onEvent: suspend M.(`[`MatchResult`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-match-result/index.html)`) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): Ret`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)可由正则表达式查找([Regex.find](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/find.html)), 就执行 `onEvent`

