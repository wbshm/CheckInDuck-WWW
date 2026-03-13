# Apple Review Notes

Use the following text as a starting point for App Store Connect Review Notes or
for the Family Controls entitlement request form.

## Review Notes Draft

CheckIn Duck is a self-management and daily habit reminder app for independent
users on their own device. It is not a parental control or surveillance app.

The app lets a user create a task tied to one or more user-selected apps. The
user chooses the apps through Apple's authorization flow and sets a daily
deadline. If a selected app reaches the configured daily usage threshold of at
least 3 minutes, the task is marked as completed for that day.

Why the entitlement is needed:

- The app uses Apple's Screen Time APIs, including Family Controls and Device
  Activity, to evaluate whether a user-selected app has reached a daily usage
  threshold.
- The entitlement is only used so the user can authorize monitoring for their
  own selected apps on their own device.

Privacy boundaries:

- The app only works after explicit user permission is granted.
- The user explicitly selects which apps are included.
- The app does not read content inside third-party apps.
- The app does not inspect messages, text input, taps, buttons, or screen
  content.
- The app only uses usage threshold information to determine task completion
  and reminder status.

Support and privacy information:

- Support URL: publish `support.html`
- Privacy Policy URL: publish `privacy.html`
- Contact email: `wrq142857@gmail.com`
