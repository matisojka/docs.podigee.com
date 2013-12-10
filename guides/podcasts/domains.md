---
title: Domains
layout: en
permalink: domains/
wip: false
sitemap:
  lastmod: 2013-12-10
---

<p class="lead">
  Here we will show you how to configure a Podigee subdomain or your own domain name for your blog.
</p>

## Use a subdomain of podigee.io

To get started quickly or if you don't want to register your own domain name you can use a subdomain provided by us which looks something like this:

    http://awesome.podigee.io

The part between _http://_ and  _.podigee.io_ can be configured by you in the podcast settings.

To do this go to <a href="https://www.podigee.com/podcasts" target="_blank">https://www.podigee.com/podcasts</a> and click on the name of the podcast you want to edit.

Then go to the Blog-Tab and select all the text in the **Name (subdomain)** field and enter your desired subdomain name. Just click outside of the field to save the setting.

![image](/images/guides/podcast-domain-1.jpg)

This can be any combination of letters, numbers and dashes. Any other kind of special characters will not be allowed. So ```my-awesome-podcast``` is OK while ```my.awesome.podcast``` is **not** because it contains dots. When you're finished, click **Save** and enjoy your new (sub)domain.

## Use an own domain

If you would like to use your own domain name you can also do that.

### Domain types

There are two possible domain configurations available to your podcast including:

* A subdomain like ```www.example.com```
* A root domain like ```example.com```

To add them you need to follow a simple two step process:

1. Tell Podigee which domain you would like to use
2. Configure your domain's DNS to point to Podigee

Find specific instructions for each domain configuration below.

To get started go to <a href="https://www.podigee.com/podcasts" target="_blank">https://www.podigee.com/podcasts</a> and click on the name of the podcast you want to edit.

Then go to the Blog-Tab and enter your domain name into the **Domain** field. Just click outside of the field to save the setting.

![image](/images/guides/podcast-domain-2.jpg)

### Adding a subdomain of your domain

If you entered a subdomain (like ```www.example.com```) you need to go to the provider where you registered your domain (or your DNS provider) and create a CNAME record for that domain pointing to your subdomain. For example, if your domain name is ```www.example.com``` and your Podigee subdomain is ```example.podigee.io``` this is how the record should look like:

<table class="table table-bordered table-striped">
<tbody>
<tr>
	<th>Record</th>
	<th>Name</th>
	<th>Target</th>
</tr>
<tr>
	<td><code>CNAME</code></td>
    <td><code>www</code></td>
    <td><code>example.podigee.com.</code></td>
</tr>
</tbody>
</table>

### Adding a root domain

Adding a root domain like ```example.com``` is unfortunately not possible with every Domain/DNS provider. Here are two providers that support it:

* [DNSimple (ALIAS record)](http://support.dnsimple.com/articles/alias-record)
* [DNS Made Easy (ANAME record)](http://www.dnsmadeeasy.com/technology/aname-records/)

<table class="table table-bordered table-striped">
<tbody>
<tr>
	<th>Record</th>
    <th>Name</th>
    <th>Target</th>
</tr>
<tr>
	<td><code>ALIAS</code> or <code>ANAME</code></td>
    <td>&lt;empty&gt; or <code>@</code></td>
    <td><code>example.podigee.com.</code></td>
</tr>
</tbody>
</table>

If your provider does not support this you need to use a subdomain instead (like ```www.example.com```). Our recommendation in that case would be to redirect your root domain to the subdomain you decide to use.

## Need help?

If you need any help setting up your domains, please write us an email to [hello@podigee.com](mailto:hello@podigee.com) with the name of your domain-provider and we'll try to help you as soon as we can.
