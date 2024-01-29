# web - forms good practices

## articles

[Form Validation UX And Best Practices - `userpeek.com`](https://userpeek.com/blog/form-validation-ux-and-best-practices/)

> **Types of form validation**
>
> 1. After submit validation
> 2. Inline validation
>
> **Form validation best practices**
>
> - Form validations provide information just in time (telling users the right time)
> - Form validations select the most appropriate place for displaying messages and error messages (keep it very close to the field being validated)
> - Form validations inform in plain and straightforward language for non-technical users to understand
>
> **Before submission (inline validation)**
>
> *The pros :*
>
> - Sense of accomplishment
> - Step-by-step
> - Success in numbers (reduces completion times and errors by 22%)
>
> *The cons :*
>
> - Breaks the flow (switch between two mental modes: form filling and error-correcting)
> - Frustration from early detection (when you are typing, and then an error appears -> frustration)
> - Increase in errors (inline validation that can cause users to make more mistakes)
> - Confusing (some data cannot be validated on the client-side since this will depend on the database, lead to several inconsistencies, where inline validation on a specific field is okay and when validated by the server turned out to be incorrect)
>
> **After submission (classic form validation)**
>
> *The pros :*
>
> - Easy going with the flow
> - Fewer mistakes
> - Consistency
>
> *The cons :*
>
> - Overwhelming frustration (can be overwhelming for users to receive all errors in one go)
> - Reduces the completion rate (can lead to a higher dropout rate)
>
> **The mix and match method**
>
> Every form validation method has its ups and downs.
>
> A well-designed form validation is a mix and match validation strategies.
>
> If the inline form validation, when implemented first, might cause an increase in user errors, then do not implement this first.
>
> Apply the following technique for a well design form validation:
>
> - First time with the form: Apply the classic after submission form validation. This respects the customer’s flow and reduces friction.
> - Second time with the form: If input errors are sent back to the customer with all the highlighted mistakes. You can move from a clean form to a form with errors, which then prevents a quick switch of mental mode. This is where inline validation comes to play. The users can feel guided and can quickly identify all errors when they type the corrections.

[Error Handling in Forms - `medium.com/@erica13chai` - 20191002](https://medium.com/@erica13chai/error-handling-in-forms-2eb0c9e14b94)

[Don't disable buttons - `gomakethings.com` - 20231030](https://gomakethings.com/dont-disable-buttons/)
