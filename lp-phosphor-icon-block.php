<?php

/**
 * Plugin Name:       Phosphor Icon Block
 * Description:       Add icons using Phosphor icon library.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.12
 * Author:            Longpress
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lp-phosphor-icon
 *
 * @package           lp-block
 */

 namespace Longpress\PhosphorIconBlock;

 /**
  * Registers the block using the metadata loaded from the `block.json` file.
  * Behind the scenes, it registers also all assets so they can be enqueued
  * through the block editor in the corresponding context.
  *
  * @see https://developer.wordpress.org/reference/functions/register_block_type/
  */
 function block_init()
 {
	 register_block_type(__DIR__ . '/build');
 }
 add_action('init', __NAMESPACE__ . '\block_init');
 
 /**
  * Enqueues block assets for both frontend and editor if the block is present on the current page.
  */
 function enqueue_block_assets()
 {	 
	 wp_enqueue_script('phosphor-icons', 'https://unpkg.com/@phosphor-icons/web', array(), '2.1.1');
 }
 add_action('enqueue_block_assets', __NAMESPACE__ . '\enqueue_block_assets');
