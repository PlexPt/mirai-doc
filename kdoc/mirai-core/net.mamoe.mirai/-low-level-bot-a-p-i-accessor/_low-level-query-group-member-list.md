[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [LowLevelBotAPIAccessor](index.md) / [_lowLevelQueryGroupMemberList](./_low-level-query-group-member-list.md)

# _lowLevelQueryGroupMemberList

`abstract suspend fun _lowLevelQueryGroupMemberList(groupUin: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, groupCode: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, ownerId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`MemberInfo`](../../net.mamoe.mirai.data/-member-info/index.md)`>`

向服务器查询群成员列表.
请优先使用 [Bot.getGroup](../-bot/get-group.md), [Group.members](../../net.mamoe.mirai.contact/-group/members.md) 查看群成员.

这个函数很慢. 请不要频繁使用.

**See Also**

[Group.calculateGroupUinByGroupCode](#)

