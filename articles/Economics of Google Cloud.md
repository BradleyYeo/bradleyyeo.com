---
title: Economics of Google Cloud
description: "My experience with Google Photos"
slug: Economics of Google Cloud
date: "2021-08-12"
---

## Hello BRAD
More than a trend, dark mode is emerging as a common user preference. While we’ve been busy working a lot of other important improvements ([there are seven updates to our changelog in July!](https://workos.com/changelog)), we decided to make dark mode available for WorkOS.

Designing a dark mode version of your app comes with its own challenges. In this post, we will share some of the lessons we learned during the implementation of dark mode at WorkOS. If you want to see the end result, you can [try WorkOS in dark mode here](https://dashboard.workos.com/signup?utm_source=blog&utm_medium=blog+post&utm_campaign=launch-hdmof).

## 1. Measure the contrast ratio

![Measure the contrast ratio](/static/img/posts/5-lessons-we-learned-adding-dark-mode-to-our-platform-a.png)

The biggest challenge of any dark theme is meeting the accessibility requirements to ensure users with all ranges of vision can access information.

Thankfully, you can mathematically know if two colors have enough contrast by adhering to the Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/TR/WCAG20/)). To get a passing grade (AA), the contrast ratio needs to be at least 4.5:1.

Let's take the WorkOS environment badge as an example. Achieving a good contrast ratio is very difficult when using white text on a colored background. Using dark-colored text on a soft-colored background is much easier to read.

By applying these changes, we learned another lesson: adding a dark theme can improve the light theme.

## 2. Stay away from pure black

![Stay away from pure black](/static/img/posts/5-lessons-we-learned-adding-dark-mode-to-our-platform-b.png)

One of the first things we did as we embarked on this dark mode journey was to invert all colors. Everything that was pure white (aka #FFF) became pure black (aka #000).

The problem is that white has 100% color brightness, and black has 0% color brightness, creating the highest contrast possible. Such a disparity generates intense light levels that overstimulate the eyes.

Have you noticed how book publishers don't use pure white paper because the contrast with black ink is too severe? Books printed on cream paper don't cause eye strain. That's why publishers have been using this technique for hundreds of years.

The same goes for digital devices. Good dark mode applications use shades of grey instead of pure black. Our solution was to come up with different tones of grey for both light and dark mode.

## 3. Re-evaluate your color palette

![Re-evaluate your color palette](/static/img/posts/5-lessons-we-learned-adding-dark-mode-to-our-platform-c.png)

You’ll often need to tweak colors in a dark theme to evoke the same response in a light theme.

The blue color we used for links, for example, read differently on black than on white. The same thing happened with status pills.

When adding dark mode, lighter and desaturated colors like pastels are easier on the eyes than vibrant colors. That’s because saturated colors produce optical vibrations against a dark background, which can induce eye strain.

Lighter tones ensure that your elements are still accessible and have a proper contrast ratio against the dark background.