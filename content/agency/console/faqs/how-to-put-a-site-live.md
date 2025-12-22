---
title: 'How do I put a site live?'
description: 'Information and links about putting a site live'

---

With Blutui your site remains in staging mode until you publish it. If you publish a site without first configuring a custom domain the site will go live on the Blutui domain. For example if your site is called `EXAMPLE` your site will be hosted at `example`.blutui.com.

You can add as many custom domains to a site as you like the process is as follows:
- Ensure you have a paid account to add custom domains
- Add your domain to the site settings in the Agency Console
- Point your DNS at our servers using a CNAME or ALIAS record
- Verify your domain by adding a txt record to your DNS
- Check the domain is connected via the Blutui Agency Console
- Publish your site

You can also add secondary domains to your site and they will be automatically redirected to your primary domain and secured.

Once the domain is in place, Blutui will automatically source a SSL certificate for your site and add it to the domain in preparation for go live. When you publish your site will be instantly secured using the Let's Encrypt service.
