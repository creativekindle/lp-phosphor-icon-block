# Phosphor Icon Block
A simple icon block that uses the [Phosphor](https://phosphoricons.com/) icon library.

## Options

__Supports__: spacing (margin, padding), color (text, background), __experimentalBorder (width, color, style, radius)

__Attributes__: iconName, iconSize, iconWeight, iconRotate, scaleX, scaleY

|Name|Type|Description|
|---|---|---|
|iconName|String|Icon name, e.g. `address-book`. Phosphor icon names/slugs manually stored in `phosphor-icons.js`.|
|iconSize|Number|Icon size in pixels (steps of 4 from 12-200), e.g. `36`.|
|iconWeight|String|Icon weight, e.g. `regular`, `thin`, `light`, `fill`, `bold`, `duotone`|
|iconRotate|Number|Icon rotation in degrees, e.g. `0`, `90`, `180`, `270`|
|scaleX|Number|Icon horizontal flip transform scale value (`1`, `-1`).|
|scaleY|Number|Icon vertical flip transform scale value (`1`, `-1`).|