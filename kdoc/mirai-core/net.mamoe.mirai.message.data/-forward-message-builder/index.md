[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [ForwardMessageBuilder](./index.md)

# ForwardMessageBuilder

`@SinceMirai("0.39.0") class ForwardMessageBuilder : `[`MutableList`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html)`<INode>`

转发消息 DSL 构建器.

# 总览

使用 DSL 构造一个转发:

```
buildForwardMessage {
    123456789 named "鸽子 A" says "咕" // 意为 名为 "鸽子 A" 的用户 123456789 发送了一条内容为 "咕" 的消息
    100200300 named "鸽子 C" at 1582315452 says "咕咕咕" // at 设置时间 (在 PC 端显示, 在手机端不影响顺序)
    987654321 named "鸽子 B" says "咕" // 未指定时间, 则自动顺序安排时间
    myFriend says "咕" // User.says
    bot says { // 构造消息链, 同 `buildMessageChain`
        +"发个图片试试"
        +Image("{90CCED1C-2D64-313B-5D66-46625CAB31D7}.jpg")
    }
    val member: Member = ...
    member says "我是幸运群员" // 使用 `User says` 则会同时设置发送人名称
}
```

# 语法

下文中 `S` 代表消息发送人. 可接受: 发送人账号 id([Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) 或 [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) 或 [User](../../net.mamoe.mirai.contact/-user/index.md)
下文中 `M` 代表消息内容. 可接受: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [Message](../-message/index.md), 或 [构造消息链](../-message-chain-builder/index.md) 的 DSL 代码块

## 陈述一条消息

使用 [`infix fun S.says(M)`](says.md)

语句 `123456789 named "鸽子 A" says "咕"` 创建并添加了一条名为 "鸽子 A" 的用户 123456789 发送的内容为 "咕" 的消息

### 陈述

一条 '陈述' 必须包含以下属性:

* 发送人. 只可以作为 infix 函数的接收者 (receiver) 设置, 如 `sender says M`, `sender named "xxx"`, `sender at 123`
* 消息内容. 只可以通过 `says` 函数的参数设置, 即 `says M`.

### 组合陈述

现支持的可选属性为 `named`, `at`

最基础的陈述为 `S says M`. 可在 `says` 前按任意顺序添加组合属性:

`S named "xxx" says M`;

`S at 123456 says M`; 其中 `123456` 为发信时间

属性的顺序并不重要. 如下两句陈述效果相同.

`S named "xxx" at 123456 says M`;

`S at 123456 named "xxx" says M`;

### 重复属性

若属性有重复, **新属性会替换旧属性**.

`S named "name1" named "name2" says M` 最终的发送人名称为 `"name2"`

### Types

| [BuilderNode](-builder-node/index.md) | `inner class BuilderNode : INode` |

### Constructors

| [&lt;init&gt;](-init-.md) | `ForwardMessageBuilder(context: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`)`<br>`ForwardMessageBuilder(context: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`, initialSize: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`)` |

### Properties

| [context](context.md) | 消息语境. 可为 [Group](../../net.mamoe.mirai.contact/-group/index.md) 或 [User](../../net.mamoe.mirai.contact/-user/index.md)`val context: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md) |
| [currentTime](current-time.md) | 当前时间. 在使用 [says](says.md) 时若不指定时间, 则会使用 [currentTime](current-time.md) 自增 1 的时间.`var currentTime: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [displayStrategy](display-strategy.md) | `var displayStrategy: DisplayStrategy` |

### Functions

| [at](at.md) | 为一条消息指定时间.`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.at(time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): BuilderNode`<br>`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.at(time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): BuilderNode`<br>为一条消息指定时间和发送人名称.`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.at(time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): BuilderNode` |
| [build](build.md) | 构造 [ForwardMessage](../-forward-message/index.md)`fun build(): `[`ForwardMessage`](../-forward-message/index.md) |
| [named](named.md) | 为一条消息指定发送人名称.`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.named(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): BuilderNode`<br>`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.named(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): BuilderNode`<br>`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.named(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): BuilderNode` |
| [says](says.md) | 添加一条消息, 自动按顺序调整时间`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](./index.md)<br>构造并添加一个 [MessageChain](../-message-chain/index.md), 自动按顺序调整时间`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](./index.md)<br>`infix fun `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](./index.md) |

