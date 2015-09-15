# Ember-bootstrap-nav

This addon provides a simple dropdown nav for bootstrap and Ember.js.

## Installation

* Run `ebmer install ember-bootstrap`
* Run `ember install ember-bootstrap-nav`

## Use

To use this addon, create a `bs-navbar` component with your project links:

```hbs
{{#bs-navbar class='navbar-default navbar-fixed-top' name='Ember Bootstrap'}}
  {{!-- This nested link to allows the active state to work on your menu items --}}
  {{#link-to 'navbar' tagName='li'}}
    {{link-to 'Navbar' 'navbar'}}
  {{/link-to}}
{{/bs-navbar}}
```

The `name` property allows you specify the name that is used for you app and placed in the `.navbar-brand` link in your navbar.

## Customization

You can customize your navbar a bit more with the following properties on your `bs-navbar`:

* `homeRoute` - Allows you to specify what route to link to when a user clicks on your logo/brand name.
* `logoImg` - Allows you to specify an image to use in your `.navbar-brand` instead of plain text
