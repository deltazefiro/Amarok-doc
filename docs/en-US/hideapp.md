# AppHider Setup Tutorial

Amarok currently offers 4 app hiding modes:

- `Shizuku/Sui` mode
- `Dhizuku` mode
- `Root` mode
- `DSM` mode

You may select the desired app hiding mode in `More Settings > Switch AppHider Workmode`. 

## Which mode should I use?

:::tip TL;DR  
- If your device is rooted, it is recommended to choose the `Shizuku/Sui` mode.
- If your device is not rooted, it is recommended to choose the `Dhizuku` mode.  
:::

- **`Shizuku/Sui`**: Works on both **rooted and non-rooted** devices.
  - Non-rooted devices (Shizuku): Requires reactivation after each device restart.
  - Rooted devices (Shizuku/Sui): No reactivation is necessary after device restart. If your device has Magisk installed, install Sui instead of Shizuku for a better experience.
- **`Dhizuku`**: Works on **non-rooted** devices. Only requires activation once, no need to reactivate after device restart.
- **`Root`**: Works on **rooted** devices. This mode has relatively poor performance. It is recommended to use the `Shizuku/Sui` mode instead.
- **`DSM`**: Works on **non-rooted** devices. Same functionality as `Dhizuku`. Development has been discontinued, so there may be unknown issues. It is recommended to use the `Dhizuku` mode instead.

## Shizuku / Shi Mode

> Shizuku mode can works both with or without root.  
> You need to install [Shizuku](https://shizuku.rikka.app/zh-hans/introduction/)(non-root/root without Magisk) or [Sui](https://github.com/RikkaApps/Sui)(with Magisk).

1. Install [Shizuku](https://shizuku.rikka.app/zh-hans/download/) or [Sui](https://github.com/RikkaApps/Sui/releases) on your device.

2. If you are using Shizuku, refer to [Tutorial](https://shizuku.rikka.app/zh-hans/guide/setup/) to activate Shizuku; If you are using Sui, just install it into Magisk. 

3. Select `Shizuku/Sui` mode in Amarok. 

4. Your Shizuku may pop up with a permission request, please allow Amarok to use this permission.

## Dhizuku Mode

> [Dhizuku](https://github.com/iamr0s/Dhizuku) is a tool that shares DeviceOwner permissions with other applications, inspired by the design principles of Shizuku. It does not require rooting the device and does not need to be reactivated after each reboot.


1. Install [Dhizuku](https://github.com/iamr0s/Dhizuku/releases) on your device.

2. Follow the [tutorial](https://github.com/iamr0s/Dhizuku/discussions/19) to activate Dhizuku using any method.

3. Select `Dhizuku` mode in Amarok's `More Settings > App Hide Mode`.

4. Your Dhizuku may prompt for permission requests, please allow Amarok to use this permission.

## Root mode

> Hide directly by executing the `su` command, **requires device to be Root**.

1. Make sure your device is Root. 

2. Select `Root` mode in `More Settings > Application hiding mode`. 

3. Your Root Manager (e.g. [Magisk](https://github.com/topjohnwu/Magisk)) may pop up a permission request, please allow Amarok to use Root permissions.

## DSM mode

> Hide via [Delegated-Scopes-Manager](https://github.com/heruoxin/Delegated-Scopes-Manager). Root is not required, but you need to install either [IceBox](https://play.google.com/store/apps/details?id=com.catchingnow.icebox) or [Stopapp](https://play.google.com/store/apps/details?id=web1n.stopapp) and activate it using **Device Owner** mode

1. Install [IceBox](https://play.google.com/store/apps/details?id=com.catchingnow.icebox) or [Stopapp](https://play.google.com/store/apps/details?id=web1n.stopapp) on your device (either one is sufficient, other DSM Administrator applications are also acceptable).

2. Connect your phone to the computer and activate the Icebox (or Stopapp) using **Device Owner Mode** (please refer to [Icebox Activation Guide](https://iceboxdoc.catchingnow.cn/Device%20Owner%20(Non%20Root)%20Setup), [Stopapp Activation Guide](https://stopapp.https.gs/nonroot.html)).

:::warning  
Icebox or Stopapp should be activated in **Device Owner Mode**.  
Otherwise the DSM will not function properly.  
:::

3. Select `DSM` mode in `More Settings > Switch AppHider Workmode` in Amarok. 

4. Your Icebox or Hideapp may pop up with a permission request, please allow Amarok to use this permission.

## Common errors

### Root mode

- "Unable to get root access"
  - Please check whether your device is rooted / whether Amarok privileges are granted in Root Manager.

### DSM mode

- "Failed to hide app: DSM administrator not activated"
  - Please check that your fridge or hacks are activated and that **Device Administrator Mode** is used.
- "DSM service is not available"
  - Your device does not have a refrigerator or shizuku installed, or its version is too low.

### Shizuku mode

- "Shizuku version is too low"
  - Please upgrade your Shizuku to `v11` or above.
- "Shizuku: Permission request denied"
  - Please allow Amarok to use Shizuku permissions.
- "Shizuku service is invalid"
  - Please install Shizuku or Sui on your device.
- "Failed to hide application: Unable to get IPackageManager interface"
  - Your device may have been tampered with by the manufacturer, please submit an issue on [Github](https://github.com/deltazefiro/Amarok-Hider/issues) to inform the developer for adaptation.
- "Shizuku service is not running"
  - Please make sure your Shizuku is running properly. It is possible that Shizuku was not reactivated after the device was rebooted.