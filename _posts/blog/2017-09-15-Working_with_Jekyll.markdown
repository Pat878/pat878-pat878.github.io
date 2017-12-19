---
layout: individual_post
date: 2017-12-18
category: blog
title: Working with Jekyll

---

When I first built my site I used WordPress. Once my hosting plan was up, though, I decided to look for some free options. Since I use WordPress every day at work, I also thought it would be fun to try something different. I went with Jekyll because it’s written in Ruby; it’s simple to use, and you can host your site for free on GitHub.

There are tons of free themes out there, but I settled on the Freelancer theme, which is a great portfolio theme. However, the one problem with Freelancer is that it doesn’t have a blog page. Below are the steps I took to add a blog page to the Freelancer page.

*For your reference here is the <a href="https://github.com/jeromelachaud/freelancer-theme" style="color:#FF0000;">Freelancer repo</a>, and here is my site’s <a href="https://github.com/Pat878/pat878.github.io" style="color:#FF0000;">repo</a>.*

----
#### 1. In the root directory of the theme, add `blog.html` with the following code:

```
---
layout: blog
---

```

This tells the blog page which layout to use when it’s displayed to users who visit the site.

----

#### 2. Next create another `blog.html` file inside of the `_layouts` folder. In this doc you add the following code:

```
{% raw %}
<!DOCTYPE html>
<html>
{% include head.html %}
<body id="page-top" class="index">
{% include blognav.html %}
{% include blog.html %}
{% include footer.html %}
{% include js.html %}
{% if jekyll.environment == 'production' %}
{% include analytics.html %}
{% endif %}
</body>
</html>
{% endraw %}
```

The above code lists the various files I want to include from the `_includes` folder. `blognav.html` and `blog.html` are especially important to display the blog.

----

#### 3. Create `blognav.html` and place it in the `_includes` folder.

The Freelancer theme is designed to be one page, so I can’t use `nav.html`. The links in `nav.html` are designed to scroll to sections on the front page only. `Blognav.html` features the same look as the front page, but the links point to the appropriate sections on the front page.

----

#### 4. Create `blog.html` in the `_includes` folder.
Here’s the blog! The important code is below:

```
{% raw %}
{% for post in site.posts %}

  {% if post.categories contains 'blog' %}
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    <div class="col-lg-8 col-lg-offset-2">
    <h3><a href="{{ post.url }}" style="color:#FF0000;">{{ post.title }}</a></h3>
    <p class="meta">{{ post.date | date: date_format }}</p>
    <hr>
    </div>
  {% endif %}

{% endfor %}
{% endraw %}
```

The Freelancer theme comes with a `_posts` folder where all of the projects in your portfolio live. This is also where we’ll keep our blog posts. When I write a post, I add the “blog” category instead of the “Web Development” category. The above code ensures that all of my “blog” posts will appear on the blog page. (In order to ensure that only “Web Development” projects appear on the front page, I add the opposite logic in `portfolio_grid.html`.)

----

That’s pretty much it for adding a blog page. I also added a blog folder within the `_posts` folder to make things more organized for myself. But that’s it!

You can use the above steps to add extra pages as well:

1. Add a doc to the root folder that calls your layout.
2. Add your layout that calls the files to include.
3. Add the necessary files in the `_includes` folder.

These are the steps I took to add the “My Story” page. (I call it `learn_more` throughout the repo.)
