---
layout: "../../layouts/BlogPost.astro"
title: "I built a website like the “good old” days."
description: "Ever since I started building websites, all of them were API based. This is the first time I build an server rendered website with PHP, Laravel & Blade"
pubDate: "Sep 22, 2022"
url: "good-old-days-of-web"
tags: "programming, experience"
heroImage: "/blogs/good-old-days-of-web.png"
---

I started learning we Dev back in 2018 and till now all projects I have worked on were API based.

So I never had the experience/felt the need of building projects in the “good old” days. Like when that was used to render everything on the server, the era of MVC, LAMP stack, jQuery, Ajax, etc. So whenever I heard senior developers explaining the pros & cons of serving clients from the server, I kinda got the theories, but never truly resonated with them.

Until recently, thanks to my DBMS course project, I built [indiehacks.link](http://indiehacks.link) with Laravel and Blade template engine following MVC pattern.

<br />

BTW I’m happy to announce that now I finally understand why people says NextJS routing is inspired by PHP. 😬

Ok, Let's discuss some of my positive and negative experiences.

<br />
<br />

## Positives:

<br />

👉 It just felt “chill”.
I just wrote codes for each page and it just worked. I didn’t have to stress about building multiple APIs and how the front end will pass the required parameters or consume the response.

Also, there was no headache of frontend state management either! So overall it’s much easier, at least on the frontend side.
<br />

👉 I loved Laravel!
It has a built-in solution for all basic needs. Tired of building auth solutions over and over? Building CRUD routes? Integrating payments solution? Just run a few Laravel commands and it’s Done!!

Normally I don’t like heavy frameworks but IDK why but Laravel felt “organized” and easy to adopt.
<br />
<br />

## Negatives:

<br />

👉 Everything felt “slow”.
I’m sure this is primarily because of my lack of knowledge on how to improve server-rendered sites!

Like here in this case I need to search for projects by my name. I had no idea how I can pass this data to the server! So guess what I did? I pushed the search query to the URL params, which resulted in a full page load!!

<img src="/blogs/good-old-days-of-web.png" alt="search ss" class="h-100 my-6 mx-auto">
IDK if this could be improved my AJAX or something or if I’m just doing it wrong. But this does feel I need to use different solutions to improve the performance, which we get out of the box in modern tech stacks.
<br />

👉 Felt less reusable.
As someone who prefers JSX over plain HTML, I’m used to thinking of UI as different components. Though this can be done with Laravel Blade to some extent, But I found it very hard to make this reusable compared to the modern frontend frameworks.