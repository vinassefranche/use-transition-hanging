This is the reproduction of an issue with server actions when using `router.refresh()` in some condition

## To have the issue

- build the application as the issue only occurs on the built version: `pnpm run build`
- serve the application: `pnpm run start`
- go to http://localhost:3000/ in a browser
- click on the "trigger action" button
- see the button being stuck in `loading...` state and the render date not being updated

If the button is not stuck, click on it a few times. If still not, re-start the application and try again. If not, add more `<BigBlock />` in the page as it seems like the more blocks we add, the more likely the issue is to occur


## Things to make the issue disappear
- remove the `loading.tsx `file
- downgrade `next` to the version 15.4.7 (works even when specifying --turbopack to the build command)
- keep only one `<BigBlock />` in the page
- stop awaiting `fakeDataRetrieval()`