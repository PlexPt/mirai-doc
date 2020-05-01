[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [DeviceInfo](./index.md)

# DeviceInfo

`abstract class DeviceInfo`

设备信息. 可通过继承 [SystemDeviceInfo](../-system-device-info/index.md) 来在默认的基础上修改

### Types

| [Version](-version/index.md) | `interface Version` |

### Constructors

| [&lt;init&gt;](-init-.md) | 设备信息. 可通过继承 [SystemDeviceInfo](../-system-device-info/index.md) 来在默认的基础上修改`DeviceInfo()` |

### Properties

| [androidId](android-id.md) | `abstract val androidId: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [apn](apn.md) | `abstract val apn: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [baseBand](base-band.md) | `abstract val baseBand: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [board](board.md) | `abstract val board: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [bootId](boot-id.md) | `abstract val bootId: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [bootloader](bootloader.md) | `abstract val bootloader: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [brand](brand.md) | `abstract val brand: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [context](context.md) | `abstract val context: `[`Context`](../-context/index.md) |
| [device](device.md) | `abstract val device: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [display](display.md) | `abstract val display: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [fingerprint](fingerprint.md) | `abstract val fingerprint: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [imei](imei.md) | `abstract val imei: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [imsiMd5](imsi-md5.md) | `abstract val imsiMd5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [ipAddress](ip-address.md) | `val ipAddress: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [macAddress](mac-address.md) | `abstract val macAddress: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [model](model.md) | `abstract val model: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [osType](os-type.md) | `abstract val osType: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [procVersion](proc-version.md) | `abstract val procVersion: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [product](product.md) | `abstract val product: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [simInfo](sim-info.md) | `abstract val simInfo: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [version](version.md) | `abstract val version: Version` |
| [wifiBSSID](wifi-b-s-s-i-d.md) | `abstract val wifiBSSID: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`?` |
| [wifiSSID](wifi-s-s-i-d.md) | `abstract val wifiSSID: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`?` |

### Functions

| [generateDeviceInfoData](generate-device-info-data.md) | `fun generateDeviceInfoData(): `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |

### Inheritors

| [DeviceInfoData](../-device-info-data/index.md) | `class DeviceInfoData : `[`DeviceInfo`](./index.md) |
| [SystemDeviceInfo](../-system-device-info/index.md) | 通过本机信息来获取设备信息.`open class SystemDeviceInfo : `[`DeviceInfo`](./index.md) |

