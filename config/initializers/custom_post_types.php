<?php

function add_custom_post_types() {

}


function add_custom_taxonomies() {

  // new_taxonomy("news_type", "news");

}

add_action('init', 'add_custom_post_types');
add_action('init', 'add_custom_taxonomies');
