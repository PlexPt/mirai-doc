[mirai-core](../index.md) / [net.mamoe.mirai.contact](index.md) / [checkBotPermission](./check-bot-permission.md)

# checkBotPermission

`inline fun `[`Group`](-group/index.md)`.checkBotPermission(required: `[`MemberPermission`](-member-permission/index.md)`, crossinline lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = {
        "Permission denied: required $required, got actual $botPermission for $bot in group $id"
    }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

要求 [Bot](../net.mamoe.mirai/-bot/index.md) 在这个群里的权限为 [required](check-bot-permission.md#net.mamoe.mirai.contact$checkBotPermission(net.mamoe.mirai.contact.Group, net.mamoe.mirai.contact.MemberPermission, kotlin.Function0((kotlin.String)))/required), 否则抛出异常 [PermissionDeniedException](-permission-denied-exception/index.md)

### Exceptions

`PermissionDeniedException` - 