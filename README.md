<!--
# Freelancer for Pico v2.0.7 (https://github.com/mayamcdougall/freelancer-pico)
# Ported by Maya McDougall (https://github.com/mayamcdougall)
# Based on upstream Freelancer v7.0.4 by Start Bootstrap (https://startbootstrap.com/theme/freelancer)
# Licensed under MIT (https://github.com/mayamcdougall/freelancer-pico/blob/main/LICENSE)
-->

# Freelancer Theme for Pico
This Theme is a port of the wonderful [Freelancer][] Theme from [Start Bootstrap][], optimized for [PicoCMS][].

> Freelancer is a one page, freelancer portfolio theme built with [Bootstrap][] created by [Start Bootstrap][]. This theme features several content sections, a responsive portfolio grid, modal windows for each portfolio item, and a contact form.

A [Live Demo][] of the original theme is available from [Start Bootstrap][] themselves.

## Getting Started

To use this theme:

1. Download the [Latest Release][] on GitHub (*or* clone the repo directly into your Pico `themes` folder).
2. Extract all files to `themes/freelancer-pico` folder within your Pico installation.
3. Set your `theme` to `freelancer-pico` in Pico's `config.yml`.
4. Configure your website using `index.md` and the YAML options described in [Index Configuration](#index-configuration) below.
    - There's an optional starter template you can use if you want.  Simply copy `index-sample.md` to your `content` folder and rename it `index.md`.  It comes with every possible config option, with the proper YAML indentation, but starts commented out.
    - Simply uncomment (remove the `#`) the lines you need and their respective parents.
4. Add items to your portfolio by adding `.md` files. Portfolio items have a few configuration options, so see [Page Configuration](#page-configuration) below for more details.

## Configuration Details

Freelancer for Pico builds you a one-page site with a portfolio gallery made from your markdown `.md` pages.

Your pages will each show up as a thumbnail tile in the portfolio section, and they'll showcase their content in a modal popup dialog.

Configuration of Freelancer is done entirely through the YAML metadata of your `index.md`.  This metadata also contains all the content for the main page besides the portfolio items.

Please note that the *`content`* of your `index.md` (that is to say, the part *after* the YAML metadata) isn't actually used for anything in this theme, so if you write something there, you won't see it displayed anywhere.

We'll go into more details about the *many* configuration options below.

### Standalone Pages

This Pico port also adds limited support for having *additional*, standalone pages.  Any Pico page can be visited (gallery items included) and will be rendered as the full page instead of the usual Heading, Portfolio, About, and Contact sections. These pages won't be exposed as links anywhere however, you'll have to link to them yourself.  They are mostly intended for semi-hidden pages, such as linking to a more in-depth page about one of your portfolio items. You can use them however you see fit.  And if you add `hidden: true` to your page, it'll also be hidden from the gallery.

### Page Order

Pico has several choices when it comes to ordering your pages (alphabetically, by date, or using a page meta property).  With Freelancer, page order is used to determine the order of your portfolio items.  You can change it in Pico's `config.yml` by changing the `pages_order_by` property.

```yaml
# Example of Alphabetical order:
pages_order_by: alpha
pages_order: asc
```

Optionally, if you'd like your portfolio items to instead display in a *specific*, static order, you can set `pages_order_by` to `meta`, change `pages_order_by_meta` to `index`, and then give each page an `index` value in its metadata (eg `index: 0`, `index: 1` and so on).  You'll probably also want to set your `pages_order` to ascending (`asc`) if it's not already.

```yaml
# Example of a Static order, using an `index` metadata value
pages_order_by_meta: index
pages_order_by: meta
pages_order: asc
```

### Index Configuration

The bulk of Freelancer's configuration is done through your `index.md`, through a series of nested sections.

Indentation is important in your YAML header, so make sure each item is nested properly!  They should also be in lower case.

Most items are optional and have default values.

There's an `index-sample.md` template available for you to copy if you'd like the indentation taken care of for you.  Just be sure that your editor doesn't try to mess up the indentation when you uncomment each line.

#### Root Section

The following items are root-level, don't need to be indented, and don't have subsections.

- **title** - This is the standard Pico title header.  If a title is given on your index page, it will be used *instead* of Pico's `site_title` config option, and will be displayed on your Navbar and under your avatar image.

- **og_image** - The path to an "Open Graph" standard image (eg `og_image: "%assets_url%/og_image.png"`).  This is the little preview image that displays when someone shares your URL via most modern messaging apps.

- **robots** - PicoCMS's default handling of the `robots` meta option. Whatever you enter here (eg `noindex, nofollow`) will be put in the `content` attribute of the meta robots tag.

- **css** - The path to a custom `.css` file (eg `"%assets_url%/styles.css"`) that you can use to override and augment this theme's css styles.  You can also specify multiple files by using the relevant YAML notation.  See [Color Customization](#color-customization) for additional information on styling.

```yaml
# Example with multiple files.
css:
  - "%assets_url%/styles1.css"
  - "%assets_url%/styles2.css"
```

- **fonts** - The url or path to a custom font via a CSS stylesheet.  You can provide your own, or use a Google Fonts API url to easily add more fonts.  You can also specify multiple files by using the relevant YAML notation.

```yaml
# Example with multiple files.
fonts:
  - https://fonts.googleapis.com/css?family=Roboto
  - https://fonts.googleapis.com/css?family=Ubuntu
```

#### header Section

The `header` section contains configuration related to Freelancer's masthead (the big header at the top of the page containing your avatar).

- **avatar** - The path to your avatar image (eg, `"%assets_url%/avatar.png"`).

- **avatar_alt** - Accessibility `alt` text for your avatar image.  Optional, and probably not necessary unless your image conveys extra information that needs an accessibility explanation.

- **divider** - The [Font Awesome][] icon to use in the divider underneath this section's header.  You can search [Font Awesome][]'s website or browse the [FontAwesome v5 Cheatsheet](https://fontawesome.com/v5/cheatsheet) for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

- **skills** - A list of your personal skills (or anything other text) you'd like displayed under the divider in your masthead.

- **disabled** - Set this to `true` if you'd like to disable this section of the page.

```yaml
# Example Header Section
header:
  avatar: "%assets_url%/avatar.png"
  divider: pen
  skills: Writer, Blogger, Journalist.
```

#### nav Section

The `nav` section contains configuration related to the navigation bar.

- **portfolio** - An override for the title of the `portfolio` section. If not supplied, the navbar will default to using the title of the section.

- **about** - An override for the title of the `about` section. If not supplied, the navbar will default to using the title of the section.

- **contact** - An override for the title of the `contact` section. If not supplied, the navbar will default to using the title of the section.

- **disabled** - Set this to `true` if you'd like to disable the navbar.

```yaml
# Example Nav Section
nav:
  portfolio: Projects
  about: About
  contact: Contact Us
```

#### portfolio:

The `portfolio` section contains configuration related to the portfolio gallery.

- **title** - The heading of the `portfolio` section.

- **divider** - The [Font Awesome][] icon to use in the divider underneath this section's header.  You can search [Font Awesome][]'s website for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

- **disabled** - Set this to `true` if you'd like to disable the `portfolio` section.

- **disable_close_buttons** - Set this to `true` if you don't want your portfolio modal popups to have the `Close Window` button at the bottom (they will still have an `X` at the top of the window).

```yaml
# Example Portfolio Section
portfolio:
  title: Recent Projects
  divider: clock
  disable_close_buttons: true
```

#### about Section

The `about` section contains configuration related to the about section of the page, no surprise there.  This section contains a few blocks worth of text, with optional button "actions" at the bottom.

- **title** - The heading of the `about` section.

- **divider** - The [Font Awesome][] icon to use in the divider underneath this section's header.  You can search [Font Awesome][]'s website for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

- **content** - The `content` for the about section.  This block of text supports inline markdown elements (links, emphasis, etc).  Text will be split into paragraphs based on line breaks, and this section fits about two to three paragraphs (It's designed for two, but will fit up to three before they start to wrap onto another row.)  You can write multiple paragraphs easily using `|` (vertical pipe) to indicate a text block

- **disabled** - Set this to `true` if you'd like to disable the `about` section.

```yaml
# Example Config
about:
  title: About Me
  divider: question
  content: |
    According to the earlier example, I suppose I'm a writer, blogger and journalist.
    You should check out my work, because I'm very important and successful.
```

- **actions** - Add buttons to the bottom of your `about` section.  See the [Actions section](#actions) below for details.

#### contact Section

The `contact` section lets you configure and display your contact information, either as buttons or an email form.

**Please note** that having the contact form send email requires additional setup which is unfortunately out-of-scope of this theme.  Sending email is a complicated process with security implications and should only be attempted if you're well versed in the subject.  Please also check out the [Contact Form Disclaimer](#contact-form-disclaimer) below.

- **title** - The heading of the `contact` section.

- **divider** - The [Font Awesome][] icon to use in the divider underneath this section's header.  You can search [Font Awesome][]'s website for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

- **subtitle** - A secondary heading, displayed between the contact *form* and contact *icons* if using both.

- **subdivider** - A secondary divider, displayed between the contact *form* and contact *icons* if using both.

- **disabled** - Set this to `true` if you'd like to disable the `contact` section.

- **form** - Use the following subsections to configure your contact form, if you'd like one. ([Please read above!](#contact-section))

  - **enabled** - Set this to `true` if you'd like to have a contact *form*, either on its own or in addition to contact *icons*.

  - **action** - The `action` attribute of your contact form.  This is the HTTP address to send it to for processing.

  - **method** - The `method` attribute of your contact form, usually `GET` or `POST` depending on your backend.

```yaml
# Example of a contact section using a contact form.
contact:
  title: Get in Touch
  divider: envelope
  form:
    enabled: true
    action: "%assets_url%/email.php"
    method: POST
```

- **items** - A YAML array of contact methods to render as icons in the contact section.  The start of each item should be indented with a `-` dash.

  - **title** - The name of the contact method.  This is displayed in smaller print above its `content`.

  - **icon** - The [Font Awesome][] icon to use for this contact method.  You can search [Font Awesome][]'s website for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

  - **brands** - Set this to `true` if you're using an icon from the [Font Awesome][] "Brands" collection (eg, `twitter`, `facebook`, `github`, etc.)  Without it, the icon will fail to display.  Likewise, enabling `brands` on a non-brand icon will cause it to fail as well, since they are in separate icon sets.

  - **content** - The content text of this contact method.  Typically the short version of your address or handle (eg @my_name).  This will be a clickable link if you include the `link` property below.

  - **link** - The destination URL for your contact method.  Turns the `content` into a link.

```yaml
# Example of a contact section using icons
contact:
  items:
  - title: Twitter
    icon: twitter
    brands: true
    content: "@my_name_1234"
    link: https://twitter.com/my_name_1234
  - title: Email
    icon: envelope
    content: name@example.com
    link: mailto:name@example.com
```

#### location Section

The `location` section is located at the far left of the footer.  It can hold a small blurb such as an address.

- **title** - The heading of the `location` section.

- **content** - The `content` for the location section.  This block of text supports inline markdown elements (links, emphasis, etc).  Text will be split into paragraphs based on line breaks.  You can write multiple paragraphs easily using `|` (vertical pipe) to indicate a text block

- **disabled** - Set this to `true` if you'd like to disable the `location` section.

```yaml
# Example Location Section
location:
  title: Address
  content: |
    123 Example Ave
    Someplace, CA, 01234
```

#### social Section

The `social` section is located in the middle of the footer.  It can generate several social icon buttons with links.

- **title** - The heading of the `social` section.

- **disabled** - Set this to `true` if you'd like to disable the `social` section.

- **items** - A YAML array of items to render as social icons in the `social` section.  The start of each item should be indented with a `-` dash.

  - **icon** - The [Font Awesome][] icon to use for this social icon.  You can search [Font Awesome][]'s website for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

  - **brands** - Set this to `true` if you're using an icon from the [Font Awesome][] "Brands" collection (eg, `twitter`, `facebook`, `github`, etc.)  Without it, the icon will fail to display.  Likewise, enabling `brands` on a non-brand icon will cause it to fail as well, since they are in separate icon sets.

  - **link** - The destination URL for your social icon.

```yaml
# Example Social Section
social:
  title: Find Me On
  items:
  - icon: github
    brands: true
    link: https://github.com/octocat
  - icon: twitter
    brands: true
    link: https://twitter.com/my_name_1234
  - icon: envelope
    link: mailto:me@example.com
```

#### footer Section

The `footer` section is the "About" section located on the far right of the footer.  It can hold a small blurb of text.

- **title** - The heading of the `footer` section.

- **content** - The `content` for the "About" section of the footer.  This block of text supports inline markdown elements (links, emphasis, etc).  Text will be split into paragraphs based on line breaks.  You can write multiple paragraphs easily using `|` (vertical pipe) to indicate a text block

- **disabled** - Set this to `true` if you'd like to disable the `footer` section.

```yaml
# Example Footer Section
footer:
  title:
  content: |
     Writer, Blogger, Journalist.
     Very Important Person.
     Super Skillful.
```

#### copyright Section

The `copyright` section is the copyright block located at the very bottom of the page.

- **content** - The `content` text for the copyright.  This block of text supports inline markdown elements (links, emphasis, etc).  Text will be split into paragraphs based on line breaks.  You can write multiple paragraphs easily using `|` (vertical pipe) to indicate a text block.
  - You can also specify `auto` to have your copyright text filled in automatically using your `site_title` or index `title` and the current year (eg `Copyright © Your Website 2021`).

- **disabled** - Set this to `true` if you'd like to disable the `copyright` section.

```yaml
# Example Single-Line Copyright
copyright: 
  content: Copyright &copy; Myself 2021
```

```yaml
# Example Multi-Line Copyright
copyright: 
  content: |
    Copyright &copy; Myself 2021.
    All Rights Reserved.
    And some other legal print.
```

### Page Configuration

Portfolio items and standalone pages share the same configuration options (since they're technically one in the same).  Standalone pages (that are hidden from the gallery) don't require images, but you can include one if you'd like.  It'll be displayed at the top just like in the modal view.

The `content` of your pages (below the YAML header) will be used for the main body of its modal view and/or page.

- **title** - This is the standard Pico title header.  This is used for the `h1` heading at the top of your portfolio item or page.

- **date** - This is the standard Pico date header.  You can specify a date if you'd like to organize your portfolio by date.  Be sure to also set the `pages_order_by` property in Pico's `config.yml` if you want this.  `date` is optional, and doesn't affect anything if you're not ordering your pages by date.

- **hidden** - The standard Pico `hidden` header. Set this to `true` to hide this page from your portfolio.
  - The page will still be viewable as a standalone page if navigated to, or linked to, manually.  This can be a good way to have standalone pages that aren't a part of the gallery!

- **image** - An optional image to use for your portfolio item or standalone page.  This image is displayed at the top of the modal view or page, just under the `h1` heading.  If a dedicated `thumbnail` is not specified for a portfolio item, this image will be used instead for convenience.

- **thumbnail** - The thumbnail image for your portfolio item.  If not specified, your `image` will be used instead.  If neither are available, a random thumbnail image will be chosen from the theme's demo data as a temporary placeholder.  This goes unused on `hidden` pages.
  -  The included thumbnail images are sized at `900x650` pixels.  You'll want to stick to a similar size or aspect ratio for your own.

- **image_alt** - Accessibility `alt` text for your image in the modal view or standalone page.  Optional, depending on whether your image needs an accessibility explanation.

- **thumbnail_alt** - Accessibility `alt` text for your thumbnail in the portfolio gallery.  Optional, and defaults to using your `title` if not provided.

- **video** - An optional video to use for your modal or standalone page.  This video is displayed at the top of the modal view or page, just under the `h1` heading.
  - This video offers controls and does not autoplay itself.
  - If an `image` is also specified, it will be used as the `poster` for the video.
  - The video's MIME type will attempt to be identified using its file extension, by checking whatever comes after the last `.` in the file path provided, against a list of common types.  If this fails, the video tag's `type` attribute will be omitted to give the browser a chance to identify the video itself.  If you'd like to provide a MIME type, you can do so using array YAML notation.  Just wrap the file path in brackets `[]` and add the MIME type, separated by a comma.  Any provided MIME type will override an autodetected one.
  - `video` also supports multiple sources (with or without MIME types as well.)  You can specify each source on a new line with an indented dash `-`.  The browser will play the first supported source it can find.

```yaml
# Example Video
video: "%assets_url%/video.mp4"
```

```yaml
# Example Video with MIME Type
video: ["%assets_url%/video.mp4", "video/mp4"]
```

```yaml
# Example Video with Multiple Sources
video:
  - "%assets_url%/video.mp4"
  - "%assets_url%/video.mov"
```

- **thumbnail_video** - A thumbnail video to use for your portfolio item instead of a thumbnail image.  A short looping video will work best for this.
  - This video will autoplay, be muted, have no controls, and automatically loop when it's finished.
  - Unlike with images, `thumbnail_video` and `video` are completely separate items and won't be substituted in for one another.
  - If a `thumbnail` is also specified, it will be used as the `poster` for the video.
  -  You'll want to stick to a similar size or aspect ratio as the `thumbnail` images (`900x650` pixels) for the best looking result.
  - The video's MIME type will attempt to be identified using its file extension, by checking whatever comes after the last `.` in the file path provided, against a list of common types.  If this fails, the video tag's `type` attribute will be omitted to give the browser a chance to identify the video itself.  If you'd like to provide a MIME type, you can do so using array YAML notation.  Just wrap the file path in brackets `[]` and add the MIME type, separated by a comma.  Any provided MIME type will override an autodetected one.
  - `thumbnail_video` also supports multiple sources (with or without MIME types as well.)  You can specify each source on a new line with an indented dash `-`.  The browser will play the first supported source it can find.

```yaml
# Example Thumbnail Video
thumbnail_video: "%assets_url%/thumbnail.mp4"
```

```yaml
# Example Thumbnail Video with Multiple Sources
thumbnail_video:
  - "%assets_url%/thumbnail.mp4"
  - "%assets_url%/thumbnail.mov"
```

- **actions** - Add buttons to the bottom of your portfolio modal or standalone page.  See the [Actions section](#actions) below for details.

```yaml
---
# Example Gallery Item / Standalone Page
Title: Awesome Thing
image: assets/images/awesome.png
Date: 2021/03/20
actions:
  - icon: external-link-alt
    content: Learn More
    link: http://example.com
---

Here's where I tell you about my super awesome thing!

```

### Actions

The About section and standalone pages both support having button links at the bottom of their content.  These "actions" are configured the same in either section, so I've condensed their descriptions here for simplicity.

Don't forget to apply the proper indentation no matter where you're using them!

- **actions** - Add buttons to the bottom of your `about` section or standalone page by defining actions.  These should be a YAML array, with the start of each item being indented with a `-` dash.

  - **icon** - The [Font Awesome][] icon to use for this button.  Icons are displayed at the far left of the button.  You can search [Font Awesome][]'s website for available icon names.  You should only enter the name of the icon, without its `fa-` prefix. Please note, only free icons are supported in this theme.

  - **content** - The text to display on the button.

  - **link** - The destination URL for the button.  For privacy reasons, if you set your button to `disabled` (below), this URL will **not** be included in the HTML of the page.

  - **outline** - Set this to `false` to have a solid color button instead of the default outline-only style.

  - **size** - Change the size of the button.  Choices are `small`, `medium`, `large`, and `xlarge` (the default).
  
  - **color** - The Bootstrap color name this button should use.  Choices are `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`.  These can be customized with CSS (see [Color Customization](#color-customization)).


  - **disabled** - Set this to `true` if you'd like to disable this button.  For privacy reasons, if you disable a button, the URL of its `link` property will **not** be included in the HTML of the page.

```yaml
# Example Actions
actions:
  - icon: download
    content: Free Download!
    link: "%assets_url%/download.zip"
  - icon: external-link-alt
    content: Learn More
    link: http://example.com
    disabled: true
```

## Contact Form Disclaimer

The original Freelancer contact form used Proprietary Start Bootstrap javascript to tie into their paid contact-form service.  This unfortunately meant that all the styles and theming around the contact form and its validation was essentially broken unless using their solution.

I've included a *very* basic script to allow users to instead utilize browser-based validation, as well as have a ajax-based form submission that way you can submit the form without leaving the page.

However, and I can't stress this enough, **I am NOT a Javascript Developer**!  I don't know even a shred about Javascript, and this whole effort was done by following and tweaking a few tutorials.

The code *works*, in that, it doesn't throw any errors, and it successfully submits the form for post-processing.  But I have absolutely no idea if it is secure or follows best coding practices in any way!

I felt that leaving the contact form "incomplete" just wasn't a good solution, so I did my best to bridge that gap.

**If you are a Javascript Developer**, and you see a flaw with this, or you think you can measurably improve it, please submit an [Issue][] or a [Pull Request][] with your suggestions.  Thank you.

## Color Customization

Since Freelancer is based on Bootstrap, there are a lot of built-in color variables that can be used for customization.  By default in the original Freelancer code, these are configured using SCSS.

Since this port is only based on the final compiled version of Freelancer, most of these variables were unused and hard-coded to their compiled values.

As a workaround, I've gone through and find-and-replace'd most of them with their variable names for ease of customization using an [additional CSS Stylesheet](#root-section).  This does mean that there could be a few instances of the *wrong* variable being used for the same color.  If you find any instances where this is the case, please make a new [Issue] to let me know.

I've also added a few "Extra" CSS Variables for colors that were originally SCSS mixes of other colors.  There's no way to accomplish mixing colors with regular CSS, so these extra variables can be used instead to manually replace said colors.

These... are a mess, and I apologize for that.  I hate them too, but I haven't come up with a better solution that doesn't involve simply crushing all the color variations down to their primary color and pretending it's not different.

If you have any ideas for how to improve this while keeping faithful to the original source theme, feel free to open a new [Issue][] with your suggestion.

### Using Color Variables

The following color variables are available for use in your own CSS Stylesheet.  There are also plenty more Bootstrap color variables available, however they go mostly unused out-of-the-box.

```css
:root {
  /* Default Bootstrap Colors */
  --bs-primary: #1abc9c; /* Primary Color */
  --bs-primary-rgb: 26, 188, 156; /* Primary Color as RGB */
  --bs-secondary: #2c3e50; /* Secondary Color */
  --bs-secondary-rgb: 44, 62, 80; /* Secondary Color as RGB */

  /* Pico Additions */
  --bs-copyright: #1a252f; /* Darker Secondary Color used for Copyright background (Approx. RGB values times 0.6) */
  --bs-primary-dark: #16a085; /* Primary RGB * 0.85 */
  --bs-primary-darker: #15967d; /* Primary RGB * 0.80 */
  --bs-primary-darkest: #148d75; /* Primary RGB * 0.75 */
  --bs-primary-lighter-rgb: 60, 198, 171; /* Lighter, faded Primary Color used for the button Focus Highlight. */

  --bs-primary-lightest: #8ddece; /* Even lighter, faded Primary Color. Used as a Focus Highlight on the Contact Form */
  --bs-secondary-dark: #253544; /* Secondary RGB * 0.85 */
  --bs-secondary-darker: #233240; /*  Secondary RGB * 0.8 */
  --bs-secondary-darkest: #212f3c; /*  Secondary RGB * 0.75 */
  --bs-secondary-lighter-rgb: 76, 91, 106; /* Lighter, faded Secondary Color used for the button Focus Highlight. */
}
```


### Using Original SCSS

Optionally, you *may* be able to generate new CSS using the original theme's SCSS, but this is out of the scope of this readme.  There's also a small block of Pico additions at the end of `styles.css` you'll likely want to preserve if you do this.

## Updating from `1.0`

This `2.0` release is a *complete rewrite* from my [older `1.0` port](https://github.com/mayamcdougall/startbootstrap-freelancer-pico).  The original `1.0` version was based on an out-of-date Jekyll port of Freelancer and not the upstream code.

The new `2.0` version should essentially be treated as a new theme.

While it shouldn't be too hard to "migrate" from the old version, just be mindful of the different header configuration values, since it's not intended to be a drop-in replacement.

## Issues and Feature Requests

If you have any issues with this port, or would like to request a feature, please create a new [Issue][] on GitHub.

[Freelancer]: https://startbootstrap.com/theme/freelancer/
[Start Bootstrap]: https://startbootstrap.com/
[Bootstrap]: https://getbootstrap.com/
[PicoCMS]: http://picocms.org/
[Live Demo]: https://startbootstrap.github.io/startbootstrap-freelancer/
[Font Awesome]: https://fontawesome.com
[Latest Release]: https://github.com/mayamcdougall/freelancer-pico/releases
[Issue]: https://github.com/mayamcdougall/freelancer-pico/issues
[Pull Request]: https://github.com/mayamcdougall/freelancer-pico/pulls
