[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [MemberPermission](./index.md)

# MemberPermission

`enum class MemberPermission : `[`Comparable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-comparable/index.html)`<`[`MemberPermission`](./index.md)`>`

群成员的权限.

可通过 [compareTo](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/compare-to.html) 判断是否有更高的权限.

### Enum Values

| [MEMBER](-m-e-m-b-e-r.md) | 一般群成员 |
| [ADMINISTRATOR](-a-d-m-i-n-i-s-t-r-a-t-o-r.md) | 管理员 |
| [OWNER](-o-w-n-e-r.md) | 群主 |

### Properties

| [level](level.md) | 权限等级. [OWNER](-o-w-n-e-r.md) 为 2, [ADMINISTRATOR](-a-d-m-i-n-i-s-t-r-a-t-o-r.md) 为 1, [MEMBER](-m-e-m-b-e-r.md) 为 0`val level: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Extension Functions

| [isAdministrator](../is-administrator.md) | 判断权限是否为管理员`fun `[`MemberPermission`](./index.md)`.isAdministrator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isOperator](../is-operator.md) | 判断权限是否为管理员或群主`fun `[`MemberPermission`](./index.md)`.isOperator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isOwner](../is-owner.md) | 判断权限是否为群主`fun `[`MemberPermission`](./index.md)`.isOwner(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

