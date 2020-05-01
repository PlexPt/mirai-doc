[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [LowLevelBotAPIAccessor](index.md) / [_lowLevelNewFriend](./_low-level-new-friend.md)

# _lowLevelNewFriend

`abstract fun _lowLevelNewFriend(friendInfo: `[`FriendInfo`](../../net.mamoe.mirai.data/-friend-info/index.md)`): `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md)

构造一个 [Friend](../../net.mamoe.mirai.contact/-friend/index.md) 对象. 它持有对 [Bot](../-bot/index.md) 的弱引用([WeakRef](../../net.mamoe.mirai.utils/-weak-ref/index.md)).

[Bot](../-bot/index.md) 无法管理这个对象, 但这个对象会以 [Bot](../-bot/index.md) 的 [Job](#) 作为父 Job.
因此, 当 [Bot](../-bot/index.md) 被关闭后, 这个对象也会被关闭.

