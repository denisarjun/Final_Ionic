# Ionic 6 - Photo Gallery Application

To run this simple application, you just need to run the commands below

$ npm install --> to restore all needed node_modules

$ ionic serve --> run the application to browser.

## Deploying to iOS and Android
$ ionic build

$ ionic cap add ios
$ ionic cap add android

Every time you perform a build (e.g. ionic build) that updates your web directory (default: build), you'll need to copy those changes into your native projects:
$ ionic cap copy

Note: After making updates to the native portion of the code (such as adding a new plugin), use the sync command:
$ ionic cap sync

#### Open native application using respective IDEs: Android Studio or xCode
$ ionic cap open ios

$ ionic cap open android
