<?php

// git test...

// This function include screen.css in wp_head() function

function enqueue_stylesheets() {
  wp_register_style("fonts", stylesheet_url("fonts"), false, false, 'all');
  wp_enqueue_style("fonts");

  wp_register_style("screen", stylesheet_url("screen"), 'fonts', false, 'all');
  wp_enqueue_style("screen");

  wp_register_style("print", stylesheet_url("print"), false, false, 'print');
  wp_enqueue_style("print");
}
add_action('wp_enqueue_scripts', 'enqueue_stylesheets');

// This function include jquery and application.js in wp_footer() function

function enqueue_javascripts() {

  wp_deregister_script('jquery');
  wp_register_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', false, '3.4.1', true);
  wp_enqueue_script('jquery');

  // wp_register_script("vuejs-dev", "https://cdn.jsdelivr.net/npm/vue/dist/vue.js", '', false, false); wp_enqueue_script("vuejs-dev");

  wp_register_script('vendors', javascript_url('vendors~main.bundle'), ['jquery'], false, true);
  wp_enqueue_script('vendors');

  wp_register_script('main', javascript_url('main.bundle'), ['jquery', 'vendors'], false, true);
  wp_enqueue_script('main');

  // wp_register_script( $handle, $src, $deps, $ver = false, $in_footer)

  // wp_register_script("application", javascript_url("application"), 'jquery', '1.0', true);
  // wp_enqueue_script("application");

  // wp_register_script('font-awesome', 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', false, '5.0.6', true);
  // wp_enqueue_script('font-awesome');

  // wp_register_script('polyfillio', 'https://cdn.polyfill.io/v2/polyfill.min.js', false, '2', true);
  // wp_enqueue_script('polyfillio');

}
if (!is_admin()) {
  add_action('wp_enqueue_scripts', 'enqueue_javascripts');
}
