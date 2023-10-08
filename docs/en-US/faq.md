# FAQ

## Why do hiding and unhiding apps cause their icons to reorder on the launcher?

Amarok implements hiding by disabling apps. From the perspective of the launcher, it appears as if the hidden app has been uninstalled. Unless we hack the launcher, there is not much we can do about it.  

However, hooking the launcher would be a significant undertaking, as there are hundreds of launchers available in the market, and moreover it would also require root.  

## I can still see hidden folders/images/... in xxx (an app)!

That may be due to the file cache of that app.  
Restarting the app or your phone should do the trick.

## I accidentally uninstalled Amarok with things still hidden. How can I get them back?

Uh... well.

1. Install the latest version of Amarok. [Get Amarok](/en-US/download.md)  
2. Set the app-hiding mode and file-hiding mode **identical to** the modes you used to hide.
3. Add back all the folders and apps you hid in `Set Hidden Files` and `Set Hidden Apps`.
4. `More Settings` > `Misc.` > `Force unhide`. If you're lucky, your things will be restored.

## I broke my phone / lost my files due to Amarok!

Sorry for the convenience.  
We have tested through several devices before a new version release, but there are always unforeseen circumstances that can cause issues. If you encounter any issues or have any concerns, please reach out to us on GitHub.