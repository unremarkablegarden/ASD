<?php
class Helpers {

    function l($link) {
      if (ICL_LANGUAGE_CODE == 'en') {
        $link = rtrim($link, '/');
        return $link."/?lang=en";
      } else {
        return $link;
      }
    }

    function get_hero_by_type_and_slug($type, $pagename) {

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $wp_query = new WP_Query(array(
            "posts_per_page" => 1,
            "post_type" => $type,
            "pagename" => $pagename
        ));
        $post = $wp_query->post;
        $content = $post->post_content;
        $shorted_content = do_shortcode($content);
        return $shorted_content;
    }

    function get_id_by_slug($page_slug) {
        $page = get_page_by_path($page_slug);
        if ($page) {
            return $page->ID;
        } else {
            return null;
        }
    }

    function bg_boxy($ID, $size = 'retina-thumb'){
        $thumb = get_the_post_thumbnail_url($ID, $size);
        if( ! $thumb) {
            $thumb = get_field('hero_image', $ID);
            $thumb = $thumb['url'];
        }
        $html = "<div class='bg-boxy aspect-inner' style='background-image: url($thumb);'></div>";
        echo $html;
    }

    function acf_option_label($field, $id) {
      $option = get_field($field, $id);
      $arr = get_field_object($field, $id, false, true);
      $label = $arr['choices'][$option];
      return $label;
    }


    function fetch_page_children($pagename, $per_page = -1) {

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $pageID = get_id_by_slug($pagename);
        $wp_query = new WP_Query(array(
            'post_type'      => 'page',
            'posts_per_page' => $per_page,
            'post_parent' => $pageID,
            'order' => 'ASC',
            'orderby' => 'menu_order'
        ));
        return $wp_query;
    }


    function fetch_current_children() {

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $parent = wp_get_post_parent_id(get_the_ID());
        if (!$parent) {
          $parent = get_the_ID();
        }

        $parent_query = new WP_Query(array(
            'post_type'   => get_post_type(),
            'post_parent' => $parent,
            'order' => 'ASC',
            'orderby' => 'menu_order'
        ));

        return $parent_query;
    }


    function get_field_by_slug($field, $slug, $post_type) {
        $post = get_page_by_path($slug, OBJECT, $post_type);
        $field_data = get_field($field, $post->ID);
        return $field_data;
    }


    function list_custom_posts($type, $links = true, $wrap = 'li', $per_page = -1) {
        global $post;
        $current_post = $post->post_name;

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $wp_query = new WP_Query(array(
            'post_type'      => $type,
            'posts_per_page' => $per_page,
            'order' => 'ASC',
            // 'orderby' => 'title',
            'orderby' => 'menu_order',
            'post_parent' => 0 // top level only
        ));

        foreach($wp_query->posts as $p):
            $htmlStart = '';
            $htmlEnd = '';
            if ($wrap === 'li') {
                if ($current_post == $p->post_name) {
                    $htmlStart .= '<li class="is-active">';
                } else {
                    $htmlStart .= '<li>';
                }
                $htmlEnd .= '</li>';
            } else if($wrap === 'column') {
              if ($current_post == $p->post_name) {
                  $htmlStart .= '<div class="column is-4 is-active">';
              } else {
                  $htmlStart .= '<div class="column is-4">';
              }
              $htmlEnd .= '</div>';
            } else {
                // $wrap = '.column.is-one-third.filter-item ';
                // process pug classes in $wrap, to a div, with a span inside
                $classesArray = explode('.', $wrap);
                $classes = join(' ', $classesArray);
                $htmlStart = '<div class="'.$classes.'"><span>';
                $htmlEnd = '</span></div>';
            }
            if($links) {
                $link = get_the_permalink($p->ID);
                $htmlStart .= '<a href="'.$link.'">';
                $htmlEnd .= '</a>';
            }
            $html = $htmlStart.$p->post_title.$htmlEnd;
            echo $html;
        endforeach;
    }

    function get_posts_by_custom_field($type, $key, $value, $number = -1) {

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $args = array(
            'posts_per_page'  => $number,
            'post_type'    => $type,
            'meta_key'    => $key,
            'meta_value'  => $value
        );
        $wp_query = new WP_Query( $args );
        return $wp_query->posts;
    }

    function fetch_custom_posts($type = 'post', $per_page = -1, $orderby = 'title', $return = 'array', $order = 'ASC') {

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $wp_query = new WP_Query(array(
            'post_type'      => $type,
            'posts_per_page' => $per_page,
            'order' => $order,
            'orderby' => $orderby, // menu_order
            'post_parent' => 0 // top level only
        ));
        if ($return == 'object') return $wp_query;
        else return $wp_query->posts;
    }


    function get_publikationen($authorID, $lim) {
        $pubs = fetch_custom_posts('publikationen');
        $matches = array();
        $i = 0;
        foreach($pubs as $pub) {
            $pub_author = get_field('author', $pub->ID);
            if(in_array($authorID, $pub_author)) {
              $matches[] = $pub;
            }
            if($i > $lim) break;
            $i++;
        }
        return $matches;
    }

    function get_publikationen2($authorID, $lim = 0) {

      global $sitepress;
      $lang = ICL_LANGUAGE_CODE;
      $sitepress->switch_lang($lang);

      $pubs = new WP_Query(array(
        'post_type'      => 'publikationen',
        'posts_per_page' => -1,
        'meta_key' => 'year',
        'orderby' => 'meta_value',
        'oder' => 'DESC'
      ));

      $pubs_arr = $pubs->posts;
      $matches = array();
      $i = 0;

      foreach ($pubs_arr as $pub) {
        $pub_authors = get_field('author', $pub->ID);
        $pub_authors_RAW = get_field('autor_raw', $pub->ID);
        $author_name = get_the_title($authorID);
        $pub_authors_RAW_arr = explode('/', $pub_authors_RAW);
        $pub_authors_RAW = implode(' ', $pub_authors_RAW_arr);

        // check for both proper relational ACF tag and if the raw-text-authors acf field of the publication contains the title of the page of the anwalte
        if ( in_array($authorID, $pub_authors) || (strpos($pub_authors_RAW, $author_name) !== false) ) {
          $matches[] = $pub;
          $i++;
        }
        if($lim !== 0 && $i == $lim) break;
      }
      return $matches;
    }



    function slugs_string_from_ID_array($IDs_array) {
        $slugs_string = '';
        foreach($IDs_array as $ID) {
            $slug = get_post_field( 'post_name', $ID );
            $slugs_string .= $slug.' ';
        }
        return $slugs_string;
    }


    function add_single_quotes($str) {
        return sprintf("'%s'", $str);
    }
    function add_double_quotes($str) {
        return sprintf('"%s"', $str);
    }


    function gfx($file) {
        return "/app/themes/asdlaw-wl/theme/assets/gfx/".$file;
    }

    function social($brand, $type = '', $link = 'default', $target='_blank') {
        if($type !== '') {
            $type = '_'.$type;
            $img = '/social/'.$brand.$type.'.svg';
        } else {
            $img = '/social/'.$brand.'.svg';
        }
        $img = gfx($img);

        $links[linkedin] = 'https://www.linkedin.com/company/arnecke-sibeth/';
        $links[facebook] = 'https://www.facebook.com/pages/Arnecke-Sibeth/528421304174745?rf=1023596797662260';
        $links[xing] = 'https://www.xing.com/companies/arneckesibeth?sc_o=da980_e';

        $link = $links[$brand];

        $html = "<div class='social-icon'>\n\t<a href='".$link."' target='".$target."'>\n\t\t<img src='".$img."'>\n\t</a>\n</div>";

        echo $html;
    }


    function get_post_type_slug($post_type) {
        if ($post_type) {
            $post_type_data = get_post_type_object($post_type);
            $post_type_slug = $post_type_data->rewrite['slug'];
            return $post_type_slug;
        }
    }


    function getPrevNext($id, $type) {
        global $post;

        global $sitepress;
        $lang = ICL_LANGUAGE_CODE;
        $sitepress->switch_lang($lang);

        $wp_query = new WP_Query(array(
            'post_type'      => $type,
            'posts_per_page' => -1,
            'order' => 'ASC',
            'orderby' => 'menu_order',
            'post_parent' => 0 // top level only
        ));

        $pages = array();
        foreach ($wp_query->posts as $p) {
            $pages[] += $p->ID;
        }

      $current = array_search($id, $pages);
      $prevID = $pages[$current-1];
      $nextID = $pages[$current+1];

        $prevTitle = get_the_title($prevID);
        $nextTitle = get_the_title($nextID);

        $prevArrow = '<img src="'.gfx('/icons/control_left.svg').'" class="icon"> <span class="text">'.$prevTitle.'</span>';
        $nextArrow = '<span class="text">'.$nextTitle.'</span> <img src="'.gfx('/icons/control_right.svg').'" class="icon">';

        echo '<div class="next-prev">';
          if (!empty($prevID)) echo '<div><a href="'.get_permalink($prevID).'">'.$prevArrow.'</a></div>';
            else echo "<div>&nbsp;</div>";
          if (!empty($nextID)) echo '<div><a href="'.get_permalink($nextID).'">'.$nextArrow.'</a></div>';
            else echo "<div>&nbsp;</div>";
        echo '</div>';
    }

    function is_old_post($postID, $days = 7) {
      $days = (int) $days;
      $offset = $days*60*60*24;
      if ( get_post_time('U', false, $postID) < date('U') - $offset ) {
        return true;
      } else {
        return false;
      }
    }

    function hasBreaking() {
      $breaking = get_posts_by_custom_field('news', 'breaking', true, 1);
      if($breaking) {
        $breaking = $breaking[0];
        if ( ! is_old_post($breaking->ID)) {
          // still fresh
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }

    }

    function latestBreaking() {
      $breaking = get_posts_by_custom_field('news', 'breaking', true, 1);
      return $breaking[0];
    }

    function get_trans_page_ID($id) {
      // $page_data = get_page($post_id);
      $page = get_page(icl_object_id($id, 'page', true, ICL_LANGUAGE_CODE));
      return $page->ID;
    }

    function get_the_content_by_id($post_id) {
      $page_data = get_page($post_id);
      // $pt_slug = get_post_type_slug(get_post_type())
      // $page = get_page_by_path($pt_slug)

      $page = get_page(icl_object_id($page_data->ID, 'page', true, ICL_LANGUAGE_CODE));

      if ($page) {
        return $page->post_content;
      }
      else return false;
    }

    function t($de, $en) {
      if(ICL_LANGUAGE_CODE == 'en') {
        return $en;
      } else {
        return $de;
      }
    }

    function get_gallery_attachments(){
      global $post;

      $post_content = $post->post_content;
      preg_match('/\[gallery.*ids=.(.*).\]/', $post_content, $ids);
      $images_id = explode(",", $ids[1]);

      return $images_id;
    }

    function sort_objects($a, $b, $field = 'menu_order') {
      if($a->$field == $b->$field){ return 0 ; }
      return ($a->$field < $b->$field) ? -1 : 1;
    }

    function language_selector(){
      $languages = icl_get_languages('skip_missing=0&orderby=code');
      if(!empty($languages)){
        foreach($languages as $l){
          if(!$l['active']){
            echo '<a class="button is-outlined is-inverted is-small" href="'.$l['url'].'">';
            echo $l['language_code'];
            echo '</a>';
          }
          if($l['active']){
            echo '<a class="button is-outlined is-inverted is-small is-selected" href="'.$l['url'].'">';
            echo $l['language_code'];
            echo '</a>';
          }
        }
      }
    }

}

Wordless::register_helper("Helpers");
?>
