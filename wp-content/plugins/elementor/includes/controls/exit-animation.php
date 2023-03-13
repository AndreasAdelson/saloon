<?php

namespace Elementor;

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor exit animation control.
 *
 * A control for creating exit animation. Displays a select box
 * with the available exit animation effects @see Control_Exit_Animation::get_animations() .
 *
 * @since 2.5.0
 */
class Control_Exit_Animation extends Control_Animation
{

	/**
	 * Get control type.
	 *
	 * Retrieve the animation control type.
	 *
	 * @since 2.5.0
	 * @access public
	 *
	 * @return string Control type.
	 */
	public function get_type()
	{
		return 'exit_animation';
	}

	/**
	 * Get animations list.
	 *
	 * Retrieve the list of all the available animations.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @return array Control type.
	 */
	public static function get_animations()
	{
		$animations = [
			'Fading' => [
				'fadeOut' => 'Fade Out',
				'fadeOutDown' => 'Fade Out Up',
				'fadeOutLeft' => 'Fade Out Left',
				'fadeOutRight' => 'Fade Out Right',
				'fadeOutUp' => 'Fade Out Down',
			],
			'Zooming' => [
				'zoomOut' => 'Zoom Out',
				'zoomOutDown' => 'Zoom Out Up',
				'zoomOutLeft' => 'Zoom Out Left',
				'zoomOutRight' => 'Zoom Out Right',
				'zoomOutUp' => 'Zoom Out Down',
			],
			'Sliding' => [
				'slideOutDown' => 'Slide Out Up',
				'slideOutLeft' => 'Slide Out Left',
				'slideOutRight' => 'Slide Out Right',
				'slideOutUp' => 'Slide Out Down',
			],
			'Rotating' => [
				'rotateOut' => 'Rotate Out',
				'rotateOutDownLeft' => 'Rotate Out Up Left',
				'rotateOutDownRight' => 'Rotate Out Up Right',
				'rotateOutUpRight' => 'Rotate Out Down Left',
				'rotateOutUpLeft' => 'Rotate Out Down Right',
			],
			'Light Speed' => [
				'lightSpeedOut' => 'Light Speed Out',
			],
			'Specials' => [
				'rollOut' => 'Roll Out',
			],
		];

		$additional_animations = [];

		/**
		 * Exit animations.
		 *
		 * Filters the animations list displayed in the exit animations control.
		 *
		 * This hook can be used to register new animations in addition to the
		 * basic Elementor exit animations.
		 *
		 * @since 2.5.0
		 *
		 * @param array $additional_animations Additional animations array.
		 */
		$additional_animations = apply_filters('elementor/controls/exit-animations/additional_animations', $additional_animations);

		return array_merge($animations, $additional_animations);
	}

	public static function get_assets($setting)
	{
		if (!$setting || 'none' === $setting) {
			return [];
		}

		return [
			'styles' => ['e-animations'],
		];
	}
}
