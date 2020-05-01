[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [ContactOrBot](./index.md)

# ContactOrBot

`@SinceMirai("0.39.0") interface ContactOrBot`

拥有 [id](id.md) 的对象.
此为 [Contact](../-contact/index.md) 与 [Bot](../../net.mamoe.mirai/-bot/index.md) 的唯一公共接口.

**See Also**

[Contact](../-contact/index.md)

[Bot](../../net.mamoe.mirai/-bot/index.md)

### Properties

| [id](id.md) | QQ 号或群号.`abstract val id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |

### Inheritors

| [Bot](../../net.mamoe.mirai/-bot/index.md) | 机器人对象. 一个机器人实例登录一个 QQ 账号. Mirai 为多账号设计, 可同时维护多个机器人.`abstract class Bot : CoroutineScope, `[`LowLevelBotAPIAccessor`](../../net.mamoe.mirai/-low-level-bot-a-p-i-accessor/index.md)`, `[`BotJavaFriendlyAPI`](../../net.mamoe.mirai/-bot-java-friendly-a-p-i/index.md)`, `[`ContactOrBot`](./index.md) |
| [Contact](../-contact/index.md) | 联系人. 虽然叫做联系人, 但他的子类有 [用户](../-user/index.md), 和 [群](../-group/index.md).`abstract class Contact : CoroutineScope, `[`ContactJavaFriendlyAPI`](../-contact-java-friendly-a-p-i/index.md)`, `[`ContactOrBot`](./index.md) |

