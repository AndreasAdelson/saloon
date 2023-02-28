<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'salon');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'SKB2022');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Ck]bHAgH#^R)i~J?[-r1bCiklcc%V}2|B_W@tv {O9eO1[;[`mYOIhcjOAgZ(oxc');
define('SECURE_AUTH_KEY',  'M_I3uI &K#a62SzIg<8A&k9WbQ#6Is]}6C#26<#B{zy]l(v~!Q.UWLA$Zo70ruI(');
define('LOGGED_IN_KEY',    '14~Gdd@qFdym3JRj|Zg2+:z-nWd%[Bo1tE^)A1MO@8Pz2o2y{6r?LMk#=4!|E>:Y');
define('NONCE_KEY',        '$SHylr1?Q[D?[/6`uaS> jFoYS!O09LPe~Q}rj+tQHO}/yJ2Ew6[P4M 2{6Nf)@l');
define('AUTH_SALT',        'k5.;vU&AlL{s18SRi JFA5mpN>: lYhQKuJr2tJ:sldD{XO_EsTr2meyzDQUGOp(');
define('SECURE_AUTH_SALT', 'SH ;6D0G{H=/ER=2^y:L~91D]O:lBX&s8:.DZ9-Y!@q~^q_zBBI8z^.TS/)ov((S');
define('LOGGED_IN_SALT',   '@26Wbk$R!s~scE=RUV).]nOmI_jHjfrdTPR%;4a$e-}$:YR*;9iM#bQ)mUsW%WA1');
define('NONCE_SALT',       '7=@TjXkx|.nz1$jJP?O5C5@z-)dVL1j;sa<a& ]`B#tkU_<Px@+uJF&z>LlqwlM5');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
