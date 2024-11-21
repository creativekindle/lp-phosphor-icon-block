import './editor.scss';

import phosphor from './phosphor-icons.js';

import {
	flipHorizontal,
	flipVertical,
	rotateRight,
} from '@wordpress/icons';

import {
	InspectorControls,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	Button,
	ButtonGroup,
	SearchControl,
	RangeControl,
	SelectControl,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {

	const {
		iconWeight,
		iconSize,
		iconName,
		iconRotate,		
	} = attributes;

	
	const [selectedRotate, setSelectedRotate] = useState(iconRotate) || 0;
	const [scaleX, setScaleX] = useState(attributes.scaleX || 1);
    const [scaleY, setScaleY] = useState(attributes.scaleY || 1);

	const [selectedWeight, setSelectedWeight] = useState(iconWeight || 'regular');

	const [selectedSize, setSelectedSize] = useState(iconSize) || 36;

	const [selectedIcon, setSelectedIcon] = useState(iconName || 'book-open');

	const [filteredIcons, setFilteredIcons] = useState(phosphor);

	const [searchTerm, setSearchTerm] = useState('');
	useEffect(() => {
		setFilteredIcons(phosphor.filter(icon =>
			icon.toLowerCase().includes(searchTerm.toLowerCase())
		));
	}, [searchTerm]);

	const rotateDegrees = [0, 90, 180, 270];
	let currentRotationIndex = rotateDegrees.indexOf(iconRotate) || 0;

	const onChangeRotate = () => {
		currentRotationIndex = (currentRotationIndex + 1) % rotateDegrees.length;
		const newRotation = rotateDegrees[currentRotationIndex];
		setSelectedRotate(newRotation);
		setAttributes({ iconRotate: newRotation });
	};

	const onChangeFlipHorizontal = () => {
        setScaleX(scaleX === 1 ? -1 : 1);
        setAttributes({ scaleX: scaleX === 1 ? -1 : 1 }); 
    };

    const onChangeFlipVertical = () => {
        setScaleY(scaleY === 1 ? -1 : 1);
        setAttributes({ scaleY: scaleY === 1 ? -1 : 1 });
    };

	const onChangeWeight = (value) => {
		setSelectedWeight(value);
		setAttributes({ iconWeight: value });
	}

	const onChangeSize = (value) => {
		setSelectedSize(value);
		setAttributes({ iconSize: value });
	}

	const onChangeIcon = (value) => {
		setSelectedIcon(value);
		setAttributes({ iconName: value });
	}

	const blockControls = (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={flipHorizontal}
						label="Flip Icon Horizontal"
						onClick={onChangeFlipHorizontal}
						isActive={scaleX === -1}
					/>
					<ToolbarButton
						icon={flipVertical}
						label="Flip Icon Vertical"
						onClick={onChangeFlipVertical}
						isActive={scaleY === -1}
					/>
					<ToolbarButton
						icon={rotateRight}
						label={'Rotate Icon'}
						onClick={onChangeRotate}
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<Panel>

						<SelectControl
							label="Weight"
							value={selectedWeight}
							onChange={onChangeWeight}
							options={[
								{
									label: 'Regular',
									value: 'regular'
								},
								{
									label: 'Thin',
									value: 'thin'
								},
								{
									label: 'Light',
									value: 'light'
								},
								{
									label: 'Bold',
									value: 'bold'
								},
								{
									label: 'Fill',
									value: 'fill'
								},
								{
									label: 'Duotone',
									value: 'duotone'
								}
							]}
						/>

						<RangeControl
							initialPosition={36}
							label="Size"
							max={200}
							min={12}
							step={4}
							value={selectedSize}
							onChange={onChangeSize}
						/>

						<label className='lp-phosphor'>Icons</label>
						<SearchControl
							value={searchTerm}
							onChange={setSearchTerm}
						/>

						<ButtonGroup className="phosphor-icon-name">
							{filteredIcons.map((iconName, index) => (
								<Button
									key={index}
									icon={<i className={`ph ph-${iconName}`}></i>}
									onClick={() => onChangeIcon(iconName)}
									label={iconName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
								/>
							))}
						</ButtonGroup>

					</Panel>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const blockProps = useBlockProps();

	const blockMarkup = (
		<div {...blockProps}>
			<i 
				className={`ph ph-${selectedIcon} ph-${selectedWeight}`}
				style={{
					fontSize: `${selectedSize}px`,
					transform: `rotate(${selectedRotate}deg)` + `scaleX(${scaleX})` + `scaleY(${scaleY})`,
				}}
			></i>
		</div>
	);

	return (

		<>

			{blockControls}

			{inspectorControls}

			<div className='wp-block-lp-block-phosphor-icon__wrapper'>
				{blockMarkup}
			</div>

		</>
	);
}
