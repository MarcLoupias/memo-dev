# web - login forms good practices

## articles

### MDN doc

[`<form>`: The Form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

[HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)

### web.dev checklist

[Sign-in form best practices - web.dev](https://web.dev/articles/sign-in-form-best-practices?hl=en)

Checklist:

- Use meaningful HTML elements: `<form>`, `<input>`, `<label>`, and `<button>`.
- Label each input with a `<label>`.
- Use element attributes to access built-in browser features: `type`, `name`, `autocomplete`, `required`.
- Give input `name` and `id` attributes stable values that don't change between page loads or website deployments.
- Put sign-in in its own `<form>` element.
- Ensure successful form submission.
- Use `autocomplete="new-password"` and `id="new-password"` for the password input in a sign-up form, and for the new password in a reset-password form.
- Use `autocomplete="current-password"` and `id="current-password"` for a sign-in password input.
- Provide Show password functionality.
- Use `aria-label` and `aria-describedby` for password inputs.
- Don't double-up inputs.
- Design forms so the mobile keyboard doesn't obscure inputs or buttons.
- Ensure forms are usable on mobile: use legible text, and make sure inputs and buttons are large enough to work as touch targets.
- Maintain branding and style on your sign-up and sign-in pages.
- Test in the field as well as the lab: build page analytics, interaction analytics, and user-centric performance measurement into your sign-up and sign-in flow.
- Test across browsers and devices: form behaviour varies significantly across platforms.

### chromium.org

#### [Create Amazing Password Forms](https://www.chromium.org/developers/design-documents/create-amazing-password-forms/)

- Group related fields in a single form
- Use autocomplete attributes
- Make sure form submission is clear
- Use hidden fields for implicit information
- Don’t try to fool the browser
- Follow existing conventions
- Follow HTML guidelines

#### [Password Form Styles that Chromium Understands](https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands/)

##### Sign-in form

```html
<form id="login" action="/login" method="post">
  <label for="username">Username</label>
  <input
    id="username"
    type="text"
    name="username"
    autocomplete="username"
    required
  >
  <label for="password">Password</label>
  <input
    id="password"
    type="password"
    name="password"
    autocomplete="current-password"
    required
  >

  <button type="submit">Sign In</button>
</form>
```

##### Email First Sign-in Flow

Collect the email:

```html
<form id="login" action="/login" method="post">
  <label for="username">Username</label>
  <input
    id="username"
    type="email"
    name="username"
    autocomplete="username"
    required
  >
  <button type="submit">Next</button>
</form>
```

Then collect the password, but include the email as the value of a hidden form field

```html
<style>
  #username {
    display: none;
  }
</style>
<form id="login" action="login.php" method="post">
  <!-- user invisible -->
  <input id="username" type="email" value="user@example.com">

  <label for="password">Password</label>
  <input
    id="password"
    type="password"
    name="password"
    autocomplete="current-password"
    required
  >
  <button type="submit">Sign In</button>
</form>
```

##### Sign-up Form

```html
<form id="signup" action="/signup" method="post">
  <label for="username">Username</label>
  <input
    id="username"
    type="text"
    name="username"
    autocomplete="username"
    required
  >
  <label for="password">New password</label>
  <input
    id="password"
    type="password"
    name="password"
    autocomplete="new-password"
    required
  >
  <button type="submit">Sign In</button>
</form>
```

Or

```html
<form id="signup" action="/signup" method="post">
  <label for="username">Username</label>
  <input
    id="username"
    type="text"
    name="username"
    autocomplete="username"
    required
  >
  <label for="password">New password</label>
  <input
    id="password"
    type="password"
    name="password"
    autocomplete="new-password"
    required
  >
  <label for="password">Confirm new password</label>
  <input
    id="password"
    type="password"
    name="password"
    autocomplete="new-password"
    required
  >
  <button type="submit">Sign In</button>
</form>
```
