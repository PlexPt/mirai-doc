[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [SystemDeviceInfo](./index.md)

# SystemDeviceInfo

`open class SystemDeviceInfo : `[`DeviceInfo`](../-device-info/index.md)

通过本机信息来获取设备信息.

Android: 获取手机信息, 与 QQ 官方相同.
JVM: 部分为常量, 部分为随机

### Types

| [Version](-version/index.md) | `object Version : Version` |

### Constructors

| [&lt;init&gt;](-init-.md) | `SystemDeviceInfo()`<br>`SystemDeviceInfo(context: `[`Context`](../-context/index.md)`)` |

### Properties

| [androidId](android-id.md) | `open val androidId: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [apn](apn.md) | `open val apn: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [baseBand](base-band.md) | `open val baseBand: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [board](board.md) | `open val board: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [bootId](boot-id.md) | `open val bootId: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [bootloader](bootloader.md) | `open val bootloader: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [brand](brand.md) | `open val brand: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [context](context.md) | `lateinit var context: `[`Context`](../-context/index.md) |
| [device](device.md) | `open val device: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [display](display.md) | `open val display: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [fingerprint](fingerprint.md) | `open val fingerprint: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [imei](imei.md) | `open val imei: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [imsiMd5](imsi-md5.md) | `open val imsiMd5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [macAddress](mac-address.md) | `open val macAddress: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [model](model.md) | `open val model: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [osType](os-type.md) | `open val osType: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [procVersion](proc-version.md) | `open val procVersion: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [product](product.md) | `open val product: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [simInfo](sim-info.md) | `open val simInfo: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [version](version.md) | `open val version: Version` |
| [wifiBSSID](wifi-b-s-s-i-d.md) | `open val wifiBSSID: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`?` |
| [wifiSSID](wifi-s-s-i-d.md) | `open val wifiSSID: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`?` |

