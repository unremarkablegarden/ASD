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
