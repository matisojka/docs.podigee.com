---
title: Custom template documentation
layout: en
permalink: custom_template_attribute_reference/
wip: true
---

## layout.html

#### Available attributes:

Podcast attributes

    podcast.title
    podcast.subtitle

Blog attributes

    blog.header_image
    blog.links.home
    blog.links.archive (not yet)

Page content

    page_content

## index.html

List of episodes

    episodes

Episode attributes

    episode.url
    episode.title
    episode.subtitle
    episode.description
    episode.show_notes

## show.html

Episode attributes

    episode.url
    episode.title
    episode.subtitle
    episode.description
    episode.show_notes
    episode.published_at

Format the date

    {{episode.published_at | date: "%d.%m.%Y"}}

Social

    social_links
    flattr

Web player for episode

    player

Comments

    comments
    comment_form

Comment attributes

    comment.name
    comment.text
    comment.created_at
    comment.image

## sidebar.html

Podcast attributes

    podcast.description
    podcast.authors

Feed attributes

    podcast.feeds.mp3
    podcast.feeds.aac
    podcast.feeds.vorbis
    podcast.feeds.opus
