[mirai-core](../index.md) / [net.mamoe.mirai.contact](./index.md)

## Package net.mamoe.mirai.contact

### Types

| [Contact](-contact/index.md) | 联系人. 虽然叫做联系人, 但他的子类有 [用户](-user/index.md), 和 [群](-group/index.md).`abstract class Contact : CoroutineScope, `[`ContactJavaFriendlyAPI`](-contact-java-friendly-a-p-i/index.md)`, `[`ContactOrBot`](-contact-or-bot/index.md) |
| [ContactJavaFriendlyAPI](-contact-java-friendly-a-p-i/index.md) | [Contact](-contact/index.md) 中为了让 `Java` 更容易调用的 API. 不要用它作为一个类型, 只应使用其中的方法`abstract class ContactJavaFriendlyAPI` |
| [ContactList](-contact-list/index.md) | 只读联系人列表, 无锁链表实现`class ContactList<C : `[`Contact`](-contact/index.md)`> : `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<C>` |
| [ContactOrBot](-contact-or-bot/index.md) | 拥有 [id](-contact-or-bot/id.md) 的对象. 此为 [Contact](-contact/index.md) 与 [Bot](../net.mamoe.mirai/-bot/index.md) 的唯一公共接口.`interface ContactOrBot` |
| [Friend](-friend/index.md) | 好友 对象. 注意: 一个 [Friend](-friend/index.md) 实例并不是独立的, 它属于一个 [Bot](../net.mamoe.mirai/-bot/index.md). 它不能被直接构造. 任何时候都应从 [Bot.getFriend](../net.mamoe.mirai/-bot/get-friend.md) 或事件中获取.`abstract class Friend : `[`QQ`](-q-q/index.md)`, CoroutineScope` |
| [Group](-group/index.md) | 群.`abstract class Group : `[`Contact`](-contact/index.md)`, CoroutineScope` |
| [GroupSettings](-group-settings/index.md) | 群设置`interface GroupSettings` |
| [Member](-member/index.md) | 群成员.`abstract class Member : `[`MemberJavaFriendlyAPI`](-member-java-friendly-a-p-i/index.md) |
| [MemberJavaFriendlyAPI](-member-java-friendly-a-p-i/index.md) | [Member](-member/index.md) 中为了让 `Java` 更容易调用的 API 不要用它作为一个类型, 只应使用其中的方法`abstract class MemberJavaFriendlyAPI : `[`QQ`](-q-q/index.md) |
| [MemberPermission](-member-permission/index.md) | 群成员的权限.`enum class MemberPermission : `[`Comparable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-comparable/index.html)`<`[`MemberPermission`](-member-permission/index.md)`>` |
| [QQ](-q-q/index.md) | QQ 对象.`abstract class ~~QQ~~ : `[`User`](-user/index.md)`, CoroutineScope` |
| [User](-user/index.md) | 代表一个 **用户**.`abstract class User : `[`Contact`](-contact/index.md)`, CoroutineScope` |

### Exceptions

| [BotIsBeingMutedException](-bot-is-being-muted-exception/index.md) | 发送消息时 bot 正处于被禁言状态时抛出的异常.`class BotIsBeingMutedException : `[`RuntimeException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-runtime-exception/index.html) |
| [MessageTooLargeException](-message-too-large-exception/index.md) | 发送消息时消息过长抛出的异常.`class MessageTooLargeException : `[`RuntimeException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-runtime-exception/index.html) |
| [PermissionDeniedException](-permission-denied-exception/index.md) | 权限不足`class PermissionDeniedException : `[`IllegalStateException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html) |

### Properties

| [botMuteRemaining](bot-mute-remaining.md) | `val `[`BotIsBeingMutedException`](-bot-is-being-muted-exception/index.md)`.botMuteRemaining: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [idContentString](id-content-string.md) | ID 列表的字符串表示. 如:`val `[`ContactList`](-contact-list/index.md)`<*>.idContentString: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [isBotMuted](is-bot-muted.md) | 返回机器人是否正在被禁言`val `[`Group`](-group/index.md)`.isBotMuted: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isFriend](is-friend.md) | 判断此成员是否为好友`val `[`Member`](-member/index.md)`.isFriend: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isMuted](is-muted.md) | 判断群成员是否处于禁言状态.`val `[`Member`](-member/index.md)`.isMuted: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [nameCardOrNick](name-card-or-nick.md) | 获取非空群名片或昵称.`val `[`Member`](-member/index.md)`.nameCardOrNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>`val `[`User`](-user/index.md)`.nameCardOrNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Functions

| [asFriend](as-friend.md) | 得到此成员作为好友的对象.`fun `[`Member`](-member/index.md)`.asFriend(): `[`Friend`](-friend/index.md) |
| [asFriendOrNull](as-friend-or-null.md) | 得到此成员作为好友的对象.`fun `[`Member`](-member/index.md)`.asFriendOrNull(): `[`Friend`](-friend/index.md)`?` |
| [asSequence](as-sequence.md) | `fun <E : `[`Contact`](-contact/index.md)`> `[`ContactList`](-contact-list/index.md)`<E>.~~asSequence~~(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<E>` |
| [checkBotPermission](check-bot-permission.md) | 要求 [Bot](../net.mamoe.mirai/-bot/index.md) 在这个群里的权限为 [required](check-bot-permission.md#net.mamoe.mirai.contact$checkBotPermission(net.mamoe.mirai.contact.Group, net.mamoe.mirai.contact.MemberPermission, kotlin.Function0((kotlin.String)))/required), 否则抛出异常 [PermissionDeniedException](-permission-denied-exception/index.md)`fun `[`Group`](-group/index.md)`.checkBotPermission(required: `[`MemberPermission`](-member-permission/index.md)`, lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = {
        "Permission denied: required $required, got actual $botPermission for $bot in group $id"
    }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [checkBotPermissionOperator](check-bot-permission-operator.md) | 要求 [Bot](../net.mamoe.mirai/-bot/index.md) 在这个群里的权限为 [管理员或群主](is-operator.md), 否则抛出异常 [PermissionDeniedException](-permission-denied-exception/index.md)`fun `[`Group`](-group/index.md)`.checkBotPermissionOperator(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = {
        "Permission denied: required ${MemberPermission.ADMINISTRATOR} or ${MemberPermission.OWNER}, got actual $botPermission for $bot in group $id"
    }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [filteringGetOrNull](filtering-get-or-null.md) | `fun <C : `[`Contact`](-contact/index.md)`> `[`LockFreeLinkedList`](../net.mamoe.mirai.utils/-lock-free-linked-list/index.md)`<C>.~~filteringGetOrNull~~(filter: (C) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): C?` |
| [firstOrNull](first-or-null.md) | `fun <C : `[`Contact`](-contact/index.md)`> `[`LockFreeLinkedList`](../net.mamoe.mirai.utils/-lock-free-linked-list/index.md)`<C>.~~firstOrNull~~(filter: (C) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): C?` |
| [get](get.md) | `operator fun <C : `[`Contact`](-contact/index.md)`> `[`LockFreeLinkedList`](../net.mamoe.mirai.utils/-lock-free-linked-list/index.md)`<C>.get(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): C` |
| [getOrNull](get-or-null.md) | `fun <C : `[`Contact`](-contact/index.md)`> `[`LockFreeLinkedList`](../net.mamoe.mirai.utils/-lock-free-linked-list/index.md)`<C>.getOrNull(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): C?` |
| [isAdministrator](is-administrator.md) | 判断权限是否为管理员`fun `[`MemberPermission`](-member-permission/index.md)`.isAdministrator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun `[`Member`](-member/index.md)`.isAdministrator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isMuted](is-muted.md) | 判断改成员是否处于禁言状态.`fun `[`Member`](-member/index.md)`.~~isMuted~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isOperator](is-operator.md) | 判断权限是否为管理员或群主`fun `[`MemberPermission`](-member-permission/index.md)`.isOperator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun `[`Member`](-member/index.md)`.isOperator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isOwner](is-owner.md) | 判断权限是否为群主`fun `[`MemberPermission`](-member-permission/index.md)`.isOwner(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun `[`Member`](-member/index.md)`.isOwner(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [mute](mute.md) | `suspend fun `[`Member`](-member/index.md)`.mute(duration: `[`Duration`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.time/-duration/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Member`](-member/index.md)`.mute(durationSeconds: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recall](recall.md) | `suspend fun `[`Contact`](-contact/index.md)`.recall(source: `[`MessageChain`](../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Contact`](-contact/index.md)`.recall(source: `[`MessageSource`](../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](recall-in.md) | `fun `[`Contact`](-contact/index.md)`.recallIn(message: `[`MessageChain`](../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`<br>`fun `[`Contact`](-contact/index.md)`.recallIn(source: `[`MessageSource`](../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [takeIfIsFriend](take-if-is-friend.md) | 如果此成员是好友, 则执行 [block](take-if-is-friend.md#net.mamoe.mirai.contact$takeIfIsFriend(net.mamoe.mirai.contact.Member, kotlin.Function1((net.mamoe.mirai.contact.Friend, net.mamoe.mirai.contact.takeIfIsFriend.R)))/block) 并返回其返回值. 否则返回 `null``fun <R> `[`Member`](-member/index.md)`.takeIfIsFriend(block: (`[`Friend`](-friend/index.md)`) -> R): R?` |
| [toList](to-list.md) | `fun <E : `[`Contact`](-contact/index.md)`> `[`ContactList`](-contact-list/index.md)`<E>.~~toList~~(): `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<E>` |
| [toMutableList](to-mutable-list.md) | `fun <E : `[`Contact`](-contact/index.md)`> `[`ContactList`](-contact-list/index.md)`<E>.~~toMutableList~~(): `[`MutableList`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html)`<E>` |
| [toMutableSet](to-mutable-set.md) | `fun <E : `[`Contact`](-contact/index.md)`> `[`ContactList`](-contact-list/index.md)`<E>.~~toMutableSet~~(): `[`MutableSet`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html)`<E>` |
| [toSet](to-set.md) | `fun <E : `[`Contact`](-contact/index.md)`> `[`ContactList`](-contact-list/index.md)`<E>.~~toSet~~(): `[`Set`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)`<E>` |

