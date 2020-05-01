[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Group](index.md) / [getOrNull](./get-or-null.md)

# getOrNull

`abstract fun getOrNull(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Member`](../-member/index.md)`?`

获取群成员实例, 不存在则 null
当 [id](get-or-null.md#net.mamoe.mirai.contact.Group$getOrNull(kotlin.Long)/id) 为 [Bot.id](../../net.mamoe.mirai/-bot/id.md) 时返回 [botAsMember](bot-as-member.md)

