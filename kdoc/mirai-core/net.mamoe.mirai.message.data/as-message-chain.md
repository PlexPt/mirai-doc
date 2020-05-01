[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [asMessageChain](./as-message-chain.md)

# asMessageChain

`@JvmName("newChain") fun `[`Message`](-message/index.md)`.asMessageChain(): `[`MessageChain`](-message-chain/index.md)

得到包含 [this](as-message-chain/-this-.md) 的 [MessageChain](-message-chain/index.md).

若 [this](as-message-chain/-this-.md) 为 [MessageChain](-message-chain/index.md) 将直接返回 this,
若 [this](as-message-chain/-this-.md) 为 [CombinedMessage](#) 将 [扁平化](kotlin.collections.-iterable/flatten.md) 后委托为 [MessageChain](-message-chain/index.md),
否则将调用 [asMessageChain](./as-message-chain.md)

`fun `[`SingleMessage`](-single-message/index.md)`.asMessageChain(): `[`MessageChain`](-message-chain/index.md)

直接将 [this](as-message-chain/-this-.md) 委托为一个 [MessageChain](-message-chain/index.md)

`fun `[`MessageChain`](-message-chain/index.md)`.asMessageChain(): `[`MessageChain`](-message-chain/index.md)