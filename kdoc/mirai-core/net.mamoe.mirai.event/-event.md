[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [Event](./-event.md)

# Event

`interface Event`

可被监听的类, 可以是任何 class 或 object.

若监听这个类, 监听器将会接收所有事件的广播.

**See Also**

[subscribeAlways](kotlinx.coroutines.-coroutine-scope/subscribe-always.md)

[subscribeOnce](kotlinx.coroutines.-coroutine-scope/subscribe-once.md)

[subscribeMessages](kotlinx.coroutines.-coroutine-scope/subscribe-messages.md)

[broadcast](broadcast.md)

[subscribe](kotlinx.coroutines.-coroutine-scope/subscribe.md)

### Extension Functions

| [broadcast](broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](./-event.md)`> E.broadcast(): E` |

### Inheritors

| [AbstractCancellableEvent](-abstract-cancellable-event/index.md) | 可被取消的事件的实现`abstract class AbstractCancellableEvent : `[`Event`](./-event.md)`, `[`CancellableEvent`](-cancellable-event/index.md) |
| [BotEvent](../net.mamoe.mirai.event.events/-bot-event/index.md) | 有关一个 [Bot](../net.mamoe.mirai/-bot/index.md) 的事件`interface BotEvent : `[`Event`](./-event.md) |
| [BroadcastControllable](-broadcast-controllable/index.md) | 可控制是否需要广播这个事件包`interface BroadcastControllable : `[`Event`](./-event.md) |
| [GroupMessage](../net.mamoe.mirai.message/-group-message/index.md) | `class GroupMessage : `[`ContactMessage`](../net.mamoe.mirai.message/-contact-message/index.md)`, `[`Event`](./-event.md) |

