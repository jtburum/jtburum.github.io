---
  title: "Rails random date generator"
  description: "Learn how to generate random dates in Rails"
  slug: 'learn-how-to-generate-random-dates-in-rails'
  tags: ["rails"]
  pubDate: "2022-04-20"
  layout: "../layouts/BlogPostLayout.astro"
---

To generate random dates in Rails you can use the DateTime object and a random value to subtract from it. The following code byte will produce a random date in the last 4 weeks:

```ruby
DateTime.now - (rand * 28)
```

So then to generate a random date within the last year you can use:

```ruby
DateTime.now - (rand * 365)
```

Further reading:
- [Creating a table with non id primary key in Rails](https://www.devdecks.io/2021-creating-a-table-with-different-primary-key-rails)
- [Migrating behavior from instance based to class based](https://www.devdecks.io/2021-ruby-instance-based-to-classed-based-behavior)


