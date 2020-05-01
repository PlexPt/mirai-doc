[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [LowLevelBotAPIAccessor](./index.md)

# LowLevelBotAPIAccessor

`interface LowLevelBotAPIAccessor`

[Bot](../-bot/index.md) 相关协议层低级 API.

### Functions

| [_lowLevelDeleteAnnouncement](_low-level-delete-announcement.md) | 删除群公告`abstract suspend fun _lowLevelDeleteAnnouncement(groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, fid: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [_lowLevelGetAnnouncement](_low-level-get-announcement.md) | 获取一条群公告`abstract suspend fun _lowLevelGetAnnouncement(groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, fid: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`GroupAnnouncement`](../../net.mamoe.mirai.data/-group-announcement/index.md) |
| [_lowLevelGetAnnouncements](_low-level-get-announcements.md) | 获取群公告列表`abstract suspend fun _lowLevelGetAnnouncements(groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, page: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = 1, amount: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = 10): `[`GroupAnnouncementList`](../../net.mamoe.mirai.data/-group-announcement-list/index.md) |
| [_lowLevelGetGroupActiveData](_low-level-get-group-active-data.md) | 获取群活跃信息`abstract suspend fun _lowLevelGetGroupActiveData(groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`GroupActiveData`](../../net.mamoe.mirai.data/-group-active-data/index.md) |
| [_lowLevelNewFriend](_low-level-new-friend.md) | 构造一个 [Friend](../../net.mamoe.mirai.contact/-friend/index.md) 对象. 它持有对 [Bot](../-bot/index.md) 的弱引用([WeakRef](../../net.mamoe.mirai.utils/-weak-ref/index.md)).`abstract fun _lowLevelNewFriend(friendInfo: `[`FriendInfo`](../../net.mamoe.mirai.data/-friend-info/index.md)`): `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md) |
| [_lowLevelQueryGroupInfo](_low-level-query-group-info.md) | 向服务器查询群资料. 获得的仅为当前时刻的资料. 请优先使用 [Bot.getGroup](../-bot/get-group.md) 然后查看群资料.`abstract suspend fun _lowLevelQueryGroupInfo(groupCode: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`GroupInfo`](../../net.mamoe.mirai.data/-group-info/index.md) |
| [_lowLevelQueryGroupList](_low-level-query-group-list.md) | 向服务器查询群列表. 返回值高 32 bits 为 uin, 低 32 bits 为 groupCode`abstract suspend fun _lowLevelQueryGroupList(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`>` |
| [_lowLevelQueryGroupMemberList](_low-level-query-group-member-list.md) | 向服务器查询群成员列表. 请优先使用 [Bot.getGroup](../-bot/get-group.md), [Group.members](../../net.mamoe.mirai.contact/-group/members.md) 查看群成员.`abstract suspend fun _lowLevelQueryGroupMemberList(groupUin: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, groupCode: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, ownerId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`MemberInfo`](../../net.mamoe.mirai.data/-member-info/index.md)`>` |
| [_lowLevelSendAnnouncement](_low-level-send-announcement.md) | 发送群公告`abstract suspend fun _lowLevelSendAnnouncement(groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, announcement: `[`GroupAnnouncement`](../../net.mamoe.mirai.data/-group-announcement/index.md)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Inheritors

| [Bot](../-bot/index.md) | 机器人对象. 一个机器人实例登录一个 QQ 账号. Mirai 为多账号设计, 可同时维护多个机器人.`abstract class Bot : CoroutineScope, `[`LowLevelBotAPIAccessor`](./index.md)`, `[`BotJavaFriendlyAPI`](../-bot-java-friendly-a-p-i/index.md)`, `[`ContactOrBot`](../../net.mamoe.mirai.contact/-contact-or-bot/index.md) |

