---
title: Useful lessons learnt in 2021
description: "Designing a dark mode version of your app comes with its own challenges. In this post, we will share some of the lessons we learned during the implementation of dark mode at WorkOS."
slug: Useful lessons learnt in 2021
date: "2021-08-12"
---

## 1. Perception is key
The biggest challenge of any dark theme is meeting the accessibility requirements to ensure users with all ranges of vision can access information.

Thankfully, you can mathematically know if two colors have enough contrast by adhering to the Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/TR/WCAG20/)). To get a passing grade (AA), the contrast ratio needs to be at least 4.5:1.

Let's take the WorkOS environment badge as an example. Achieving a good contrast ratio is very difficult when using white text on a colored background. Using dark-colored text on a soft-colored background is much easier to read.

By applying these changes, we learned another lesson: adding a dark theme can improve the light theme.

## 2. Treat Ego as a Tool

One of the first things we did as we embarked on this dark mode journey was to invert all colors. Everything that was pure white (aka #FFF) became pure black (aka #000).

The problem is that white has 100% color brightness, and black has 0% color brightness, creating the highest contrast possible. Such a disparity generates intense light levels that overstimulate the eyes.

Have you noticed how book publishers don't use pure white paper because the contrast with black ink is too severe? Books printed on cream paper don't cause eye strain. That's why publishers have been using this technique for hundreds of years.

The same goes for digital devices. Good dark mode applications use shades of grey instead of pure black. Our solution was to come up with different tones of grey for both light and dark mode.

## 3. Music and Long Walks

You’ll often need to tweak colors in a dark theme to evoke the same response in a light theme.

The blue color we used for links, for example, read differently on black than on white. The same thing happened with status pills.

When adding dark mode, lighter and desaturated colors like pastels are easier on the eyes than vibrant colors. That’s because saturated colors produce optical vibrations against a dark background, which can induce eye strain.

Lighter tones ensure that your elements are still accessible and have a proper contrast ratio against the dark background.