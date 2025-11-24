# AppHider Setup Tutorial

Amarok currently offers 4 app hiding modes:

- `Shizuku` mode
- `Dhizuku` mode
- `Root` mode
- `DSM` mode

You may select the desired app hiding mode in `More Settings > Switch AppHider Workmode`.

## Which mode should I use?

:::tip TL;DR  

- **Non-Rooted** Devices: Use **Dhizuku mode**.
- **Rooted** Devices: Use **Root mode**.
:::

- **`Root` (Rooted)**: Easiest setup; requires a rooted device.
- **`Dhizuku` (Non-Rooted)**: Complex setup; survives reboots.
- **`Shizuku` (Non-Rooted)**: Easy setup; requires reactivation after every reboot.
- **`DSM` (Non-Rooted, Deprecated)**: Requires IceBox/StopApp. Development has ended; use Dhizuku instead.

## Root mode

> Hides apps by executing `su` commands. Requires a rooted device.

1. Ensure your device is rooted.
2. In Amarok, select **Root** mode.
3. Grant root access via your Root Manager (e.g., Magisk) when prompted.

## Dhizuku Mode

> [Dhizuku](https://github.com/iamr0s/Dhizuku) shares Device Owner permissions. It does not require root and **survives reboots**.

1. Install [Dhizuku](https://github.com/iamr0s/Dhizuku/releases) on your device.
2. Follow the [Dhizuku Setup Guide](https://github.com/iamr0s/Dhizuku/discussions/19) to activate it. You may need a computer with [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) installed, and you must log out of all accounts on your device.
3. In Amarok, select **Dhizuku** mode.
4. When prompted, authorize Amarok to use Dhizuku permissions.

## Shizuku Mode

> [Shizuku](https://shizuku.rikka.app/) shares ADB permissions with other apps. It must be **reactivated after every device restart**.

1. Install [Shizuku](https://shizuku.rikka.app/download/).
2. Follow the [Shizuku Setup Guide](https://shizuku.rikka.app/guide/setup/) to activate Shizuku.
3. In Amarok, select **Shizuku** mode.
4. When prompted, authorize Amarok to use Shizuku permissions.
5. After every device restart, you need to reactivate Shizuku.

## DSM mode

> Hide via [Delegated-Scopes-Manager](https://github.com/heruoxin/Delegated-Scopes-Manager). Root is not required, but you need to install either [IceBox](https://play.google.com/store/apps/details?id=com.catchingnow.icebox) or [Stopapp](https://play.google.com/store/apps/details?id=web1n.stopapp) and activate it using **Device Owner** mode

1. Install [IceBox](https://play.google.com/store/apps/details?id=com.catchingnow.icebox) or [Stopapp](https://play.google.com/store/apps/details?id=web1n.stopapp) (or any other DSM Administrator app).
2. Connect your phone to a computer and activate the app using **Device Owner Mode**
    - [Icebox Activation Guide](https://iceboxdoc.catchingnow.cn/Device%20Owner%20(Non%20Root)%20Setup)
    - [Stopapp Activation Guide](https://stopapp.https.gs/nonroot.html)
    :::warning  
    Icebox or StopApp must be activated in **Device Owner Mode**, or DSM will not function.
    :::
3. In Amarok, select **DSM** mode.
4. When prompted, authorize Amarok to use DSM permissions.

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

### Dhizuku mode

- Amarok occasionally crashes on startup
  - Please upgrade Amarok to v0.10.0-beta1 or above.
