<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', function () {
	$block_json = plugin_dir_path( __DIR__ ) . 'build/blocks/form-overlay-addon/block.json';

	if ( ! file_exists( $block_json ) ) {
		return;
	}

	register_block_type(
		$block_json,
		array(
			'render_callback' => 'ud_form_overlay_addon_render',
		)
	);
} );