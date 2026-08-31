<?php
/**
 * RelayOS Headless Theme functions and definitions
 */

// Register custom post types and taxonomies
function relayos_register_post_types() {
    // Products custom post type
    register_post_type('product', [
        'labels' => [
            'name' => 'Products',
            'singular_name' => 'Product',
        ],
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'rewrite' => ['slug' => 'products'],
    ]);
    
    // Solutions custom post type
    register_post_type('solution', [
        'labels' => [
            'name' => 'Solutions',
            'singular_name' => 'Solution',
        ],
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'rewrite' => ['slug' => 'solutions'],
    ]);
    
    // Testimonials custom post type
    register_post_type('testimonial', [
        'labels' => [
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
        ],
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'rewrite' => ['slug' => 'testimonials'],
    ]);
}
add_action('init', 'relayos_register_post_types');

// Register custom taxonomies
function relayos_register_taxonomies() {
    // Product Type taxonomy
    register_taxonomy('product_type', ['product'], [
        'labels' => [
            'name' => 'Product Types',
            'singular_name' => 'Product Type',
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'product-types'],
    ]);
    
    // Solution Category taxonomy
    register_taxonomy('solution_category', ['solution'], [
        'labels' => [
            'name' => 'Solution Categories',
            'singular_name' => 'Solution Category',
        ],
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'solution-categories'],
    ]);
}
add_action('init', 'relayos_register_taxonomies');

// Custom REST API endpoints
function relayos_register_rest_routes() {
    // Signup endpoint
    register_rest_route('relayos/v1', '/signup', [
        'methods' => 'POST',
        'callback' => 'relayos_handle_signup',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'relayos_register_rest_routes');

// Signup handler
function relayos_handle_signup($request) {
    $params = $request->get_params();
    
    $username = sanitize_user($params['username'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $password = $params['password'] ?? '';
    
    if (empty($username) || empty($email) || empty($password)) {
        return new WP_Error('missing_fields', 'Please fill in all required fields', ['status' => 400]);
    }
    
    $user_id = wp_create_user($username, $password, $email);
    
    if (is_wp_error($user_id)) {
        return new WP_Error('user_creation_failed', $user_id->get_error_message(), ['status' => 400]);
    }
    
    // Add additional user meta
    if (isset($params['company'])) {
        update_user_meta($user_id, 'company', sanitize_text_field($params['company']));
    }
    
    return [
        'success' => true,
        'message' => 'Your account has been created successfully.',
        'user_id' => $user_id,
    ];
}

// Optionally disable the front-end for headless setup
if (!is_admin() && !wp_doing_ajax() && !wp_doing_cron()) {
    // Uncomment to redirect all front-end WordPress requests to the headless frontend
    // wp_redirect('https://getrelayos.com');
    // exit;
}
