[mirai-core](../index.md) / [net.mamoe.mirai.contact](index.md) / [checkBotPermissionOperator](./check-bot-permission-operator.md)

# checkBotPermissionOperator

`inline fun `[`Group`](-group/index.md)`.checkBotPermissionOperator(crossinline lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = {
        "Permission denied: required ${MemberPermission.ADMINISTRATOR} or ${MemberPermission.OWNER}, got actual $botPermission for $bot in group $id"
    }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

要求 [Bot](../net.mamoe.mirai/-bot/index.md) 在这个群里的权限为 [管理员或群主](is-operator.md), 否则抛出异常 [PermissionDeniedException](-permission-denied-exception/index.md)

### Exceptions

`PermissionDeniedException` - 