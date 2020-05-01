[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Group](index.md) / [get](./get.md)

# get

`abstract operator fun get(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Member`](../-member/index.md)

获取群成员实例. 不存在时抛出 [kotlin.NoSuchElementException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/index.html)
当 [id](get.md#net.mamoe.mirai.contact.Group$get(kotlin.Long)/id) 为 [Bot.id](../../net.mamoe.mirai/-bot/id.md) 时返回 [botAsMember](bot-as-member.md)

