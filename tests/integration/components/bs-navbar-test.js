import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-navbar', 'Integration | Component | bs-navbar', {
    integration: true
});

test('navbar will open collapse', function(assert) {
    this.render(hbs`{{#bs-navbar homeRoute='digidoo.index' class='navbar-default navbar-fixed-top' name='Ember Bootstrap'}}{{#link-to 'navbar' tagName='li'}}{{link-to 'Navbar' 'navbar'}}{{/link-to}}{{/bs-navbar}}`);

    assert.ok(!this.$().find('.navbar-collapse').is(":visible"), 'Navbar collapse should hide on small screens');

    this.$().find('.navbar-toggle').click();

    assert.ok(this.$().find('.navbar-collapse').is(":visible"), 'Navbar collapse should show after toggle click');
});
