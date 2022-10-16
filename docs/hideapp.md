# 应用隐藏指南

Amarok 目前提供3种应用隐藏模式:

- `Root` 模式
- `DSM` 模式
- `Shizuku/Sui` 模式

以上三种模式仅需激活一种即可。  

您可以在 `更多设置 > 应用隐藏模式` 中切换应用隐藏模式。

:::tip  
- 如果您的设备使用 **Android 11 或以上**，或已Root**且安装了 `Magisk`**，推荐选择 `Shizuku/Sui`模式。
- 如果您的设备已 Root，可选择 `Root` 模式。此模式**性能相对较差**。
- 如果您的设备使用的是 **Android 10 或以下** 且**未 root**，可选择DSM。此模式兼容性相对较差。  
:::  

## Root模式

- 直接通过自动执行 `su` 命令进行隐藏，**需要设备已 Root**

### 启用方式

1. 确定您使用的设备已 Root。
2. 在 `更多设置 > 应用隐藏模式` 中选择 `Root` 模式。
3. 您的Root管理器（如 [Magisk](https://github.com/topjohnwu/Magisk) ）可能会弹出权限请求提示，请允许 Amarok 使用 Root 权限。

4. 若 `应用隐藏模式` 显示当前模式为 `Root` ，则启用成功。

### 常见错误

- “无法获取root权限”
  - 请确认您的设备是否已root / 是否在Root管理器中授予 Amarok 权限。

## DSM模式

> Android 系统中，设备管理员可以在免 root 状态下提供相当广泛的权限。但是系统限制一台设备上仅能设置一个 App 为设备管理员。DSM的作用是让一台设备上的诸多 App 能共享权限。

- 通过 [Delegated-Scopes-Manager](https://github.com/heruoxin/Delegated-Scopes-Manager) 进行隐藏
- 不需要 Root，但是需要在您的设备上安装 [冰箱 IceBox](https://www.coolapk.com/apk/com.catchingnow.icebox) 或 [小黑屋](https://www.coolapk.com/apk/web1n.stopapp)，并使用 `设备管理员` 模式将其激活

### 启用方式

1. 在您的设备上安装 [冰箱 IceBox](https://www.coolapk.com/apk/com.catchingnow.icebox) 或 [小黑屋](https://www.coolapk.com/apk/web1n.stopapp) （二选一即可，其他可以作为DSM管理员的应用也可）。

2. 连接电脑使用 **设备管理员模式** 激活冰箱或小黑屋（参考 [冰箱激活指南](https://adb.http.gs/icebox.html)、[小黑屋在线激活器](https://adb.http.gs/stopapp.html)）。

3. 在 Amarok 的 `更多设置 > 应用隐藏模式` 中选择 `DSM` 模式。

4. 您的 冰箱或小黑屋 可能会弹出权限请求提示，请允许 Amarok 使用此权限。

5. 若 `应用隐藏模式` 显示当前模式为 `DSM` ，则启用成功。

### 常见错误

- “隐藏应用失败：DSM管理员未激活”
  - 请检查您的冰箱或小黑屋是否已经激活，且使用的是**设备管理员模式**。
- “DSM 服务不可用”
  - 您的设备未安装 冰箱或小黑屋，或其版本过低。

## Shizuku模式

- Shizuku模式可以使用Root运行，亦可免Root运行
- 需要在您的设备上安装 [Shizuku](https://shizuku.rikka.app/zh-hans/introduction/)(无root/有root无Magisk) 或 [Sui](https://github.com/RikkaApps/Sui)(有Magisk)

### 启用方式

1. 在您的设备上安装 [Shizuku](https://shizuku.rikka.app/zh-hans/download/) 或 [Sui](https://github.com/RikkaApps/Sui/releases)。
2. 若您使用的 Shizuku，参考 [教程](https://shizuku.rikka.app/zh-hans/guide/setup/) 用任意模式激活 Shizuku；若您使用的是 Sui，将其刷入 Magisk 即可。
3. 在 Amarok 的 `更多设置 > 应用隐藏模式` 中选择 `Shizuku/Sui` 模式。
4. 您的 Shizuku 可能会弹出权限请求提示，请允许 Amarok 使用此权限。

5. 若 `应用隐藏模式` 显示当前模式为 `Shizuku` ，则启用成功。

### 常见错误

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
