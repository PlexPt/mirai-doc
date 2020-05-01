[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [GroupSettings](index.md) / [entranceAnnouncement](./entrance-announcement.md)

# entranceAnnouncement

`abstract var entranceAnnouncement: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

入群公告, 没有时为空字符串.

在修改时将会异步上传至服务器.

### Exceptions

`PermissionDeniedException` - 无权限修改时将会抛出异常

**See Also**

[GroupEntranceAnnouncementChangeEvent](../../net.mamoe.mirai.event.events/-group-entrance-announcement-change-event/index.md)

