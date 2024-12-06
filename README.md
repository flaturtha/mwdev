# MURDERWIKI

The blog and wiki site/sub-site for talesofmurder.com. Hosted at `murderwiki.talesofmurder.com` and redirected to from `murderwiki.com`.

Built using Remix.run and using the Sanity CMS as its content store. It uses the talesofmurder-ui private npm package to manage styles and branding.

Takes the current (as of 06.12.24) `remixdev` branch on the cc_nos repo and tweaks it.

2024-11-30

- git reset hard to #9349ed8 in order to kill the (badly motivated) attempts to move all storefront components to a common area for use across both storefront and the remix site. It occurred to me that that was massive overkill and complication because storefront ALREADY manages the pages I was building in the remix app.
    - See ChatGPT chat: https://chatgpt.com/c/674b06aa-cef8-8002-bc8c-bd737c51011f for specifics and the plan moving forward.

1. clean up storefront to fit my branding and content
2. build content ... aim for 5 by 2024.12.09 and 50 by end of year
3. get ads running by Monday with an lp for the 5 bundle



