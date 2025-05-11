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
    // Contact form endpoint
    register_rest_route('relayos/v1', '/contact', [
        'methods' => 'POST',
        'callback' => 'relayos_handle_contact_form',
        'permission_callback' => '__return_true',
    ]);
    
    // Signup endpoint
    register_rest_route('relayos/v1', '/signup', [
        'methods' => 'POST',
        'callback' => 'relayos_handle_signup',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'relayos_register_rest_routes');

// Contact form handler
function relayos_handle_contact_form($request) {
    $params = $request->get_params();
    
    $name = sanitize_text_field($params['name'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $phone = sanitize_text_field($params['phone'] ?? '');
    $company = sanitize_text_field($params['company'] ?? '');
    $message = sanitize_textarea_field($params['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        return new WP_Error('missing_fields', 'Please fill in all required fields', ['status' => 400]);
    }
    
    // Send email notification
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    if (!empty($phone)) $body .= "Phone: $phone\n";
    if (!empty($company)) $body .= "Company: $company\n";
    $body .= "Message: $message\n";
    
    $sent = wp_mail($to, $subject, $body);
    
    if (!$sent) {
        return new WP_Error('mail_failed', 'Failed to send your message. Please try again.', ['status' => 500]);
    }
    
    // Store in database (optional)
    $contact_data = [
        'post_title' => 'Contact from ' . $name,
        'post_type' => 'contact',
        'post_status' => 'private',
        'meta_input' => [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'company' => $company,
            'message' => $message,
        ],
    ];
    
    wp_insert_post($contact_data);
    
    return [
        'success' => true,
        'message' => 'Your message has been sent successfully.',
    ];
}

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

// Add CORS support for headless usage
function relayos_add_cors_headers() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
add_action('init', 'relayos_add_cors_headers');

// Optionally disable the front-end for headless setup
if (!is_admin() && !wp_doing_ajax() && !wp_doing_cron()) {
    // Uncomment to redirect all front-end WordPress requests to the headless frontend
    // wp_redirect('https://getrelayos.com');
    // exit;
}