[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [matching](./matching.md)

# matching

`@JvmName("matchingExtension") infix fun `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`.matching(block: `[`MessageListener`](../-message-listener.md)`<M, R>): Ret`

如果[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)  [matches](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/matches.html)

`fun matching(regex: `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`): ListeningFilter<M, Ret, R, RR>`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)可由正则表达式匹配([Regex.matchEntire](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/match-entire.html))

`fun matching(regex: `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`, onEvent: suspend M.(`[`MatchResult`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-match-result/index.html)`) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): Ret`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)可由正则表达式匹配([Regex.matchEntire](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/match-entire.html)), 就执行 `onEvent`

