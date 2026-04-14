<?php
/**
 * Render callback for UD Form Overlay Addon block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ud_form_overlay_addon_render( $attributes ) {
	$attributes = wp_parse_args(
		$attributes,
		[
			'formId'         => '',
			'buttonLabel'    => 'Formular öffnen',
			'buttonPosition' => 'right-center',
			'panelTitle'     => '',
			'panelIntro'     => '',
		]
	);

	$form_id         = sanitize_text_field( $attributes['formId'] );
	$button_label    = esc_html( $attributes['buttonLabel'] );
	$button_position = sanitize_html_class( $attributes['buttonPosition'] );
	$panel_title     = esc_html( $attributes['panelTitle'] );
	$panel_intro     = esc_html( $attributes['panelIntro'] );

	$unique_id = uniqid( 'ud-form-overlay-addon-' );

	ob_start();
	?>

	<div
		class="wp-block-ud-form-overlay-addon layout-modal position-<?php echo esc_attr( $button_position ); ?>"
		data-close-backdrop="true"
		data-close-escape="true"
		data-instance="<?php echo esc_attr( $unique_id ); ?>"
	>
		<button
			type="button"
			class="ud-form-overlay-addon__trigger"
			aria-expanded="false"
			aria-controls="<?php echo esc_attr( $unique_id ); ?>-panel"
		>
			<?php echo $button_label; ?>
		</button>

		<div class="ud-form-overlay-addon__overlay" hidden>
			<div class="ud-form-overlay-addon__backdrop"></div>

			<div
				id="<?php echo esc_attr( $unique_id ); ?>-panel"
				class="ud-form-overlay-addon__panel"
				role="dialog"
				aria-modal="true"
				<?php if ( $panel_title ) : ?>
					aria-labelledby="<?php echo esc_attr( $unique_id ); ?>-title"
				<?php endif; ?>
			>
<button
	type="button"
	class="ud-form-overlay-addon__close"
	aria-label="<?php esc_attr_e( 'Schliessen', 'ud-form-overlay-addon-ud' ); ?>"
>
	<span class="ud-form-overlay-addon__close-icon" aria-hidden="true">
		<svg viewBox="0 0 24 24" width="24" height="24">
			<path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
		</svg>
	</span>
</button>

				<div class="ud-form-overlay-addon__inner">
					<?php if ( $panel_title ) : ?>
						<h3 id="<?php echo esc_attr( $unique_id ); ?>-title">
							<?php echo $panel_title; ?>
						</h3>
					<?php endif; ?>

					<?php if ( $panel_intro ) : ?>
						<p class="ud-form-overlay-addon__intro">
							<?php echo $panel_intro; ?>
						</p>
					<?php endif; ?>

					<div class="ud-form-overlay-addon__form">
						<?php
						if ( ! empty( $form_id ) ) {
							echo do_shortcode( '[fluentform id="' . intval( $form_id ) . '"]' );
						} else {
							echo '<p>' . esc_html__( 'Keine Formular-ID definiert.', 'ud-form-overlay-addon-ud' ) . '</p>';
						}
						?>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php
	return ob_get_clean();
}