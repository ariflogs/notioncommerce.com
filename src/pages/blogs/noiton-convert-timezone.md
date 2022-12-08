---
layout: "../../layouts/BlogPost.astro"
title: "How To Convert Time Zones With Notion"
description: "Use notin formula to convert timezones. In this article I gave an example of converting from UTC to Tokyo, Japan and also from New York, USA to Tokyo, Japan."
pubDate: "Aug 18, 2022"
url: "noiton-convert-timezone"
tags: "notion, notioncommerce"
heroImage: "/blogs/notion/notion-new-york-tokyo.png"
---

If you use a tool like <a href="https://notioncommerce.com" target="_blank">NotonCommerce</a> to get product orders from your customers around the 🌏 or part of an international team, You may get the times in **UTC** format.

But to get a better understanding of time, we sometiems need to convert the time to our local timezone. Lucily we can easliy achive this with Notion formulas! 😌

(If you don't have the basics of Notion formulas, watching this 👇🏼 video first will be very helpful.)

<br />

<iframe class="w-full md:w-3/4 h-52 md:h-80" src="https://www.youtube.com/embed/e_jAOh7JO_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />
<br />

## Convert from UTC

· First visit <a href="https://www.timeanddate.com/time/zone/japan/tokyo" target="_blank">timeanddate</a> get the timezone offset of your location. For example, If you live in Tokyo, Japan your timezone is GMT **+9.00**.

· Create a sperate formula column to store you local time.

· Use 👉 **_dateAdd(prop("OG Time"), X, "hours")_** formula to convert the UTC time to your timezone. (Replace **_X_** with your timezone.)

<br />

![Notion UTC To Tokyo](/blogs/notion/notion-utc-tokyo.png)

<br />

## Convert One Timezone to Another

(Be prepared to do some basic math 😜)

If you source time is not in UTC, then only extra thing you need to do is find the hour difference between the source and your own timezone.

Let's see and exmaple,
Here my source is from New York, USA and I need to convert it to Tokyo, Japan

· The Timezone of New York is GMT **-4.00** and Tokyo is GMT **+9.00**. So my hour difference is **+13.00**.

· Now your formula will me **_dateAdd(prop("OG Time"), 13, "hours")_**.

<br />

![Notion New York To Tokyo](/blogs/notion/notion-new-york-tokyo.png)

<br />
