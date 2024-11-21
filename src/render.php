<?php

$iconName   = $attributes["iconName"];
$iconSize   = $attributes["iconSize"];
$iconWeight = $attributes["iconWeight"];
$iconRotate = $attributes["iconRotate"];
$scaleX     = $attributes["scaleX"];
$scaleY     = $attributes["scaleY"];

$iconAria = ucwords(str_replace("-", " ", $attributes["iconName"])) . " Icon";

$html = "<div class='wp-block-lp-block-phosphor-icon__wrapper'>";
$html .= "<div " . get_block_wrapper_attributes() . ">";
$html .= "<i class='ph ph-" . $iconName . " ph-" . $iconWeight . "' style='transform: rotate(" . $iconRotate . "deg) scaleX(" . $scaleX  . ") scaleY(" . $scaleY  . "); font-size: " . $iconSize . "px' aria-hidden='true'></i>";
$html .= "<span class='screen-reader-text'>" . $iconAria . "</span>";
$html .= "</div>";
$html .= "</div>";

echo $html;
