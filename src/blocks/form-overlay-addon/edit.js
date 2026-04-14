import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import {  TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		formId,
		buttonLabel,
		panelTitle,
		panelIntro,
		closeOnBackdrop,
		closeOnEscape,
		showCloseButton,
	} = attributes;

	const blockProps = useBlockProps({
		className: "ud-form-overlay-addon-editor",
	});

	return (
		<>
			{/* ----------------------------------
			   Block UI (Content!)
			---------------------------------- */}
			<div {...blockProps}>


				{/* Panel Preview */}
				<div className="ud-form-overlay-addon-editor__panel">
					<TextControl
						label="Überschrift"
						value={panelTitle}
						onChange={(value) =>
							setAttributes({ panelTitle: value })
						}
						placeholder="optional"
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>

					<TextControl
						label="Einleitung"
						value={panelIntro}
						onChange={(value) =>
							setAttributes({ panelIntro: value })
						}
						placeholder="optional"
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>

					<TextControl
						label="Formular-ID"
						value={formId}
						onChange={(value) => setAttributes({ formId: value })}
						placeholder="z. B. 12"
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</div>
				{/* Trigger Button Preview */}
				<div className="ud-form-overlay-addon-editor__trigger">
					<div className="ud-form-overlay-addon-editor__button-preview">
						<RichText
							tagName="div"
							className="ud-form-overlay-addon-editor__button"
							value={buttonLabel}
							onChange={(value) =>
								setAttributes({ buttonLabel: value })
							}
							placeholder="Formular öffnen"
							allowedFormats={[]}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
