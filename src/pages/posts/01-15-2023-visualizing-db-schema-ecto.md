---
  title: "Visualizing Database Schema using Ecto"
  pubDate: "2023-01-15"
  slug: "visualizing-database-schema-using-ecto"
  description: "print schema in ecto"
  tags: [ecto]
  layout: "../../layouts/BlogPostLayout.astro"
---

It was hard for me find a way to create a db schema to visualize my apps tables and fields in Ecto. I was looking for something similar to rails `schema.rb`, but everything that came up discussed `Ecto.Schema`. If somehow you ended up here looking for an answer to the problem just mentioned you can use the mix task `ecto.dump` to accomplish this.

```
mix ecto.dump
```

This will generate a `structure.sql` file containing the structure of your database in `priv/repo`

Similar posts:
- [How to handle Ecto associations with UUIDs](https://devdecks.io/2023-ecto-associations-with-uuids)
