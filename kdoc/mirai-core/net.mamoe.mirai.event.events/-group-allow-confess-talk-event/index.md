[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [GroupAllowConfessTalkEvent](./index.md)

# GroupAllowConfessTalkEvent

`data class GroupAllowConfessTalkEvent : `[`GroupSettingChangeEvent`](../-group-setting-change-event/index.md)`<`[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

群 "坦白说" 功能状态改变. 此事件广播前修改就已经完成.

### Constructors

| [&lt;init&gt;](-init-.md) | 群 "坦白说" 功能状态改变. 此事件广播前修改就已经完成.`GroupAllowConfessTalkEvent(origin: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, new: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md)`, isByBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`)` |

### Properties

| [group](group.md) | `val group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md) |
| [isByBot](is-by-bot.md) | `val isByBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [new](new.md) | `val new: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [origin](origin.md) | `val origin: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

