[mirai-core](../index.md) / [net.mamoe.mirai.contact](index.md) / [takeIfIsFriend](./take-if-is-friend.md)

# takeIfIsFriend

`@SinceMirai("0.39.0") inline fun <R> `[`Member`](-member/index.md)`.takeIfIsFriend(block: (`[`Friend`](-friend/index.md)`) -> R): R?`

如果此成员是好友, 则执行 [block](take-if-is-friend.md#net.mamoe.mirai.contact$takeIfIsFriend(net.mamoe.mirai.contact.Member, kotlin.Function1((net.mamoe.mirai.contact.Friend, net.mamoe.mirai.contact.takeIfIsFriend.R)))/block) 并返回其返回值. 否则返回 `null`

