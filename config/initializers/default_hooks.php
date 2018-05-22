<?php

// git test...

// This function include screen.css in wp_head() function

function enqueue_stylesheets() {
  wp_register_style("screen", stylesheet_url("screen"), false, false);
  wp_enqueue_style("screen");
}
add_action('wp_enqueue_scripts', 'enqueue_stylesheets');

// This function include jquery and application.js in wp_footer() function

function enqueue_javascripts() {

  wp_deregister_script('jquery');
  wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, '3.3.1');
  wp_enqueue_script('jquery');

  wp_register_script("application", javascript_url("application"), '', '1.0', true);
  wp_enqueue_script("application");

  wp_register_script('font-awesome', 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', false, '5.0.6');
  wp_enqueue_script('font-awesome');

  wp_register_script('polyfillio', 'https://cdn.polyfill.io/v2/polyfill.min.js', false, '2');
  wp_enqueue_script('polyfillio');

}
if (!is_admin()) {
  add_action('wp_enqueue_scripts', 'enqueue_javascripts');
}
