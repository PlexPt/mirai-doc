[mirai-core](../../index.md) / [net.mamoe.mirai.data](../index.md) / [GroupAnnouncementList](./index.md)

# GroupAnnouncementList

`data class GroupAnnouncementList`

群公告数据类
getGroupAnnouncementList时，如果page=1，那么你可以在inst里拿到一些置顶公告

发公告时只需要填写text，其他参数可为默认值

### Constructors

| [&lt;init&gt;](-init-.md) | 群公告数据类 getGroupAnnouncementList时，如果page=1，那么你可以在inst里拿到一些置顶公告`GroupAnnouncementList(ec: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, msg: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, feeds: `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<`[`GroupAnnouncement`](../-group-announcement/index.md)`>? = null, inst: `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<`[`GroupAnnouncement`](../-group-announcement/index.md)`>? = null)` |

### Properties

| [ec](ec.md) | `val ec: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [feeds](feeds.md) | `val feeds: `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<`[`GroupAnnouncement`](../-group-announcement/index.md)`>?` |
| [inst](inst.md) | `val inst: `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<`[`GroupAnnouncement`](../-group-announcement/index.md)`>?` |
| [msg](msg.md) | `val msg: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

