[mirai-core](../index.md) / [net.mamoe.mirai.contact](index.md) / [nameCardOrNick](./name-card-or-nick.md)

# nameCardOrNick

`val `[`Member`](-member/index.md)`.nameCardOrNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

获取非空群名片或昵称.

若 [群名片](-member/name-card.md) 不为空则返回群名片, 为空则返回 [QQ.nick](-q-q/nick.md)

`@SinceMirai("0.39.0") val `[`User`](-user/index.md)`.nameCardOrNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

获取非空群名片或昵称.

**Return**

当 [User](-user/index.md) 为 [Member](-member/index.md) 时返回 [Member.nameCardOrNick](./name-card-or-nick.md)




否则返回 [Member.nick](#)

