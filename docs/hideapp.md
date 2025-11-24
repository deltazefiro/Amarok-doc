# 应用隐藏指南

:::tip
Unfold the sidebar and click the `Languages` to switch languages.
:::

Amarok 目前提供 4 种应用隐藏模式:

- `Shizuku` 模式
- `Dhizuku` 模式
- `Root` 模式
- `DSM` 模式

以上模式仅需激活一种即可。  

您可以在 `更多设置 > 应用隐藏模式` 中切换应用隐藏模式。

## 我应该选择哪种模式？

:::tip TL;DR  

- **未 Root 设备**：推荐使用 **`Dhizuku` 模式**。
- **已 Root 设备**：推荐使用 **`Root` 模式**。
:::  

- **`Root`（已 Root 设备）**：配置最简单，但**需要设备已 Root**。
- **`Dhizuku`（未 Root 设备）**：配置较为复杂，但**重启后依然生效**，无需重新激活。
- **`Shizuku`（未 Root 设备）**：配置较为简单，但**每次重启设备后都需要重新激活**。
- **`DSM`（未 Root 设备，已弃用）**：依赖 IceBox / 小黑屋。开发已停止，建议使用 `Dhizuku` 模式替代。

## Root模式

> 直接通过自动执行 `su` 命令进行隐藏，**需要设备已 Root**。

1. 确定您的设备已 Root。
2. 在 `更多设置 > 应用隐藏模式` 中选择 `Root` 模式。
3. 您的Root管理器（如 [Magisk](https://github.com/topjohnwu/Magisk) ）可能会弹出权限请求提示，请允许 Amarok 使用 Root 权限。

## Shizuku模式

> [Shizuku](https://shizuku.rikka.app/) 是一款分享 ADB 权限给其他应用的工具。它需要**每次设备重启后都需要重新激活**。

1. 在您的设备上安装 [Shizuku](https://shizuku.rikka.app/download/)。
2. 参考 [Shizuku 设置指南](https://shizuku.rikka.app/guide/setup/) 激活 Shizuku。
3. 在 Amarok 的 `更多设置 > 应用隐藏模式` 中选择 `Shizuku` 模式。
4. 您的 Shizuku 可能会弹出权限请求提示，请允许 Amarok 使用此权限。

## Dhizuku模式

> [Dhizuku](https://github.com/iamr0s/Dhizuku) 是一款分享 DeviceOwner (设备所有者) 权限给其余应用的工具。不需要 Root 设备，也不需要每次重启重新激活。

1. 在您的设备上安装 [Dhizuku](https://github.com/iamr0s/Dhizuku/releases)。
2. 参考 [Dhizuku 激活教程](https://github.com/iamr0s/Dhizuku/discussions/19) 激活 Dhizuku。您可能需要一台已安装 [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) 的电脑，并且需要登出设备上的所有账号。
3. 在 Amarok 的 `更多设置 > 应用隐藏模式` 中选择 `Dhizuku` 模式。
4. 您的 Dhizuku 可能会弹出权限请求提示，请允许 Amarok 使用此权限。

## DSM模式

> 通过 [Delegated-Scopes-Manager](https://github.com/heruoxin/Delegated-Scopes-Manager) 进行隐藏。不需要 Root，但是需要在您的设备上安装 [冰箱 IceBox](https://www.coolapk.com/apk/com.catchingnow.icebox) 或 [小黑屋](https://www.coolapk.com/apk/web1n.stopapp)，并使用 **设备管理员** 模式将其激活  

:::warning
DSM 原项目已长期未维护，可能出现未知错误。  
建议使用 Dhizuku 代替。
:::

1. 在您的设备上安装 [冰箱 IceBox](https://www.coolapk.com/apk/com.catchingnow.icebox) 或 [小黑屋](https://www.coolapk.com/apk/web1n.stopapp) （二选一即可，其他可以作为 DSM 管理员的应用也可）。
2. 连接电脑使用 **设备管理员模式** 激活冰箱或小黑屋
    - [冰箱激活指南](https://iceboxdoc.catchingnow.cn/Device%20Owner%20(Non%20Root)%20Setup)
    - [小黑屋激活指南](https://stopapp.https.gs/nonroot.html)
    :::warning
    请确保您使用的是 **设备管理员模式** 激活冰箱或小黑屋，其他模式激活（如 Adb、麦克斯韦妖模式）不可用。
    :::
3. 在 Amarok 的 `更多设置 > 应用隐藏模式` 中选择 `DSM` 模式。
4. 您的冰箱或小黑屋可能会弹出权限请求提示，请允许 Amarok 使用此权限。

## 常见错误

:::tip
Unfold the sidebar and click the `Languages` to switch languages.
:::

### Root 模式

- “无法获取root权限”
  - 请确认您的设备是否已root / 是否在Root管理器中授予 Amarok 权限。

### DSM 模式

- “隐藏应用失败：DSM管理员未激活”
  - 请检查您的冰箱或小黑屋是否已经激活，且使用的是**设备管理员模式**。
- “DSM 服务不可用”
  - 您的设备未安装 冰箱或小黑屋，或其版本过低。

### Shizuku 模式

- "Shizuku 版本过低"
  - 请升级您的 Shizuku 到 `v11` 或以上。
- “Shizuku: 权限请求被拒绝”
  - 请允许 Amarok 使用 Shizuku 权限。
- “Shizuku 服务无效”
  - 请在您的设备上安装 Shizuku 或 Sui。
- “隐藏应用失败: 无法获取 IPackageManager 接口”
  - 您的设备可能受到厂家魔改，请在 [Github](https://github.com/deltazefiro/Amarok-Hider/issues) 上提交 issue 告知开发者进行适配。
- “Shizuku 服务未运行”
  - 请确认您的 Shizuku 处于正常运行状态。可能是设备重启后 Shizuku 未重新激活。

### Dhizuku 模式

- Amarok 偶尔在启动时崩溃
  - 请将 Amarok 升级到 `v0.10.0-beta1` 或更高版本。
