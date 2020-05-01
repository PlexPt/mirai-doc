[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [toForwardMessage](./to-forward-message.md)

# toForwardMessage

`fun `[`Message`](-message/index.md)`.toForwardMessage(sender: `[`User`](../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](-forward-message/index.md)
`@SinceMirai("0.39.0") @JvmOverloads fun `[`Message`](-message/index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](-forward-message/index.md)

转换为 [ForwardMessage](-forward-message/index.md)

