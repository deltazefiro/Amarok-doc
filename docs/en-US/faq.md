# FAQ

## Why do hiding and unhiding apps cause their icons to reorder on the launcher?

Amarok implements hiding by disabling apps. From the perspective of the launcher, it appears as if the hidden app has been uninstalled. Unless we hack the launcher, there is not much we can do about it.  

Hooking the launcher would be a significant undertaking, as there are hundreds of launchers available in the market, and moreover it would also require root.  

## Why I can still see hidden files or images in some apps?

That may be due to the file cache of that app.  
Restarting the app or your phone should do the trick.

## I accidentally uninstalled Amarok with things still hidden. How can I get them back?

1. Install the latest version of Amarok. [Get Amarok](/en-US/download.md)  
2. Set the app-hiding mode and file-hiding mode **identical to** the modes you used to hide.
3. Add back all the folders and apps you hid in `Set Hidden Files` and `Set Hidden Apps`.
4. `More Settings` > `Misc.` > `Force unhide`. If you're lucky, your things will be restored.

## I massed up everything. How can I restore them manually?

You need to have access to a computer with [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/).

### Unhide apps manually

```bash
# Get all hidden pkgs
$ fgrep -v -f <(adb shell pm list packages |sort) <(adb shell pm list packages -u|sort)
package:first.hidden.pkgname
package:second.hidden.pkgname
...

# Unhide pkgs
$ adb shell su -c "pm unhide first.hidden.pkgname & pm enable first.hidden.pkgname "
$ adb shell su -c "pm unhide second.hidden.pkgname & pm enable second.hidden.pkgname "
...
```

### Unhide files manually

If you hid with *Chmod* mode:

```
$ adb shell su -c "chmod 755 /path/to/hidden/file"
```
Or if you hid with *Obfuscation* mode, please refer to the Github issue [here](https://github.com/deltazefiro/Amarok-Hider/issues/20#issuecomment-1386721641).
