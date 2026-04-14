<?php
/**
 * Plugin Name:     UD Block: Form Overlay Addon
 * Description:     Blendet ein Formular als Overlay über einen Trigger-Button ein.
 * Version:         1.0.0
 * Author:          ulrich.digital gmbh
 * Author URI:      https://ulrich.digital/
 * License:         GPL v2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     form-overlay-addon-ud
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/helpers.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/render.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/enqueue.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/block-register.php';
