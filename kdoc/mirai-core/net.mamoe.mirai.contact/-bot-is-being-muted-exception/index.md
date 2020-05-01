[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [BotIsBeingMutedException](./index.md)

# BotIsBeingMutedException

`@SinceMirai("0.33.0") class BotIsBeingMutedException : `[`RuntimeException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-runtime-exception/index.html)

发送消息时 bot 正处于被禁言状态时抛出的异常.

**See Also**

[Group.sendMessage](../-group/send-message.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 发送消息时 bot 正处于被禁言状态时抛出的异常.`BotIsBeingMutedException(target: `[`Group`](../-group/index.md)`)` |

### Properties

| [target](target.md) | `val target: `[`Group`](../-group/index.md) |

### Extension Properties

| [botMuteRemaining](../bot-mute-remaining.md) | `val `[`BotIsBeingMutedException`](./index.md)`.botMuteRemaining: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

