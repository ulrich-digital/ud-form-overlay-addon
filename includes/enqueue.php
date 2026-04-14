
<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * Zusätzliche Enqueues bei Bedarf hier ergänzen.
 * Standard-Assets werden über block.json geladen.
 */

add_action( 'wp_enqueue_scripts', function () {
	$script_path = plugin_dir_path( __DIR__ ) . 'build/form-overlay-addon-frontend-script.js';
	$script_url  = plugin_dir_url( __DIR__ ) . 'build/form-overlay-addon-frontend-script.js';

	if ( file_exists( $script_path ) ) {
		wp_enqueue_script(
			'ud-form-overlay-addon-frontend',
			$script_url,
			[],
			filemtime( $script_path ),
			true
		);
	}
} );