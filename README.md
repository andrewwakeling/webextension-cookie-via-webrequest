# webextension-cookie-via-webrequest

A simple webextension to demo how you can still see cookies on any hosts listed in host permissions, without the 'cookies' privilege.

This is misleading because [the documentation](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) states:

"The ability to access cookies for that host using the cookies API, as long as the "cookies" API permission is also included."

This is concerning as this enables you to view cookies that have been marked [httpOnly](https://en.wikipedia.org/wiki/HTTP_cookie#HttpOnly_cookie) and [Secure](https://en.wikipedia.org/wiki/HTTP_cookie#Secure_cookie).
Once you have such cookies, you may be able to easily impersonate another user without their username/password.

### Demo

Install the webextension.
Open the debugger for the background page. Verify that you're seeing cookies, including httpOnly/secure cookies. 

### Why is this concerning?

Currently, I believe that browsers do a terrible job of communicating what permissions an extension is asking for and the impact of installing them.
There are many popular extensions (e.g. Ad-blockers) which are asking for these permissions and have the capability to do steal these cookies.

### Possible solution...

It's vital that httpOnly/secure cookies aren't so easily accessible by webextensions. Access to these cookies should be explicitly asked for.
Perhaps the introduction of a "cookiesHttpOnly" permission would be helpful.

Additionally, without "cookies", reading/writing the "Cookie" header shouldn't be possible via webRequests.