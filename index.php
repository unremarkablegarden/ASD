<?php

/*
 * Making sure Wordless plugin is enabled
 */

if (!class_exists("Wordless")) {
  echo "Error. Wordless plugin must be enabled.";
  die();
}

global $post;

function if_post_type($type) {
  return get_post_type() == $type;
}

// render_view( arg1 = view, arg2 = layout(default) )

if ( is_404() ) {
  render_view("pages/404");
}
else {

  if ( is_front_page() ) {
    render_view("pages/homepage");
  } else if ( is_post_type_archive('kompetenzen') ) {
    render_view("pages/kompetenzen-index");
  } else if ( if_post_type('kompetenzen') ) {
    render_view("pages/kompetenzen-single");
  } else if ( is_page('karriere') ) {
    render_view("pages/karriere-index");
  } else if ( is_post_type_archive('jobs') ) {
    render_view("pages/jobs-index");
  } else if ( if_post_type('jobs') ) {
    render_view("pages/karriere-single");
  } else if ( is_post_type_archive('news') ) {
    render_view("pages/news-index");
  } else if ( if_post_type('news') ) {
    render_view("pages/news-single");
  } else if ( is_post_type_archive('anwalte') ) {
    render_view("pages/anwalte-index");
  } else if ( is_post_type('anwalte') ) {
    render_view("pages/anwalt-single");
  } else if ( is_post_type_archive('publikationen') ) {
    render_view("pages/publikationen-index");
  } else if ( is_post_type('publikationen') ) {
    render_view("pages/publikation-single");
  } else if ( if_post_type('standorte') ) {
    render_view("pages/standort-single");
  } else if ( is_page('newsletter') ) {
    render_view("pages/newsletter-form");
  } else if ( is_search() || is_page('search') ) {
    render_view("pages/search");
  } else {
    render_view("pages/post-page");
  }

}
