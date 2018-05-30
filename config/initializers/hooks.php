<?php

/*
 * Place here all your WordPress add_filter() and add_action() calls.
 */

function asd_to_ASD($content) {
	$content = str_replace('Arnecke Sibeth Dabelstein','ARNECKE SIBETH DABELSTEIN', $content);
	return $content;
}
add_filter ('the_content', 'asd_to_ASD');
add_filter ('get_the_content', 'asd_to_ASD');

add_filter('jpeg_quality', function($arg){ return 90; });

// function override_404() {
//     if (isset($_GET['search']) || isset($_GET['s'])) {
//       $squery = true;
//     }
//     if ( is_search() ) { // && $squery
//         global $wp_query;
//         $wp_query->is_404 = false;
//     }
// }
// add_action('init', 'override_404');
