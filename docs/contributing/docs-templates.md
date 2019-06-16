---
title: Docs Templates
---

1.  [Why use templates?](#why-use-templates)
2.  [Reference guides](#reference-guides)
    - [Reference guide template](#reference-guide-template)
    - [Reference guide overview template](#reference-guide-overview-template)
3.  [Recipes](#recipes)
    - [Recipe template](#recipe-template)
4.  [Tutorials](#tutorials)
    - [Tutorial template](#tutorial-template)
5.  [Plugin README template](#plugin-readme-template)
6.  [Starter README template](#starter-readme-template)

## The Gatsby way of writing learning materials

Docs reference guides, recipes, and tutorials teach Gatsby concepts to users with a variety of learning styles and skill-sets.

Here are some things to keep in mind when deciding where to contribute to Gatsby:

- [Blog posts](/contributing/docs-contributions#contributing-to-the-blog) are primarily made for case studies and time-sensitive storytelling.
- [Reference guides](#reference-guides), in contrast, are evergreen -- or continually relevant -- and discoverable documentation articles that go beyond any one case study or situation.
- [Recipes](#recipes) add concise, discoverable, and easy-to-follow instructions for common Gatsby tasks. They are smaller units than tutorials.
- [Tutorials](#tutorials) should provide step-by-step guidance for Gatsby workflows, listing all pre-requisites and not assuming knowledge or skipping steps.

### Why use templates?

Here are templates (models) to follow when contributing to Gatsby docs to ensure that the docs accomplish their purpose. If you have a good reason to deviate from the following template structures, mention those reasons in the PR so others can give proper feedback.

## Reference guides

### What are reference guide articles?

Reference guide articles cover discrete topics as documentation with links to other resources. A reference guide explains a Gatsby concept or technique without the step-by-step context provided by a tutorial or recipe.

Reference guide sections provide canonical information on how and why to build things with Gatsby for a variety of scenarios.

### What should a reference guide be about?

We need guide articles to describe every concept and task you can accomplish with Gatsby.

Each guide article should explain exactly one concept and that concept should be apparent from the article's title. [Overview guides](#reference-guide-overview) can list child pages to present multiple ways of getting a job done while limiting the scope of each individual article (e.g. Styling Your Site, Using Layout Components, Standard Global CSS Files, etc.)

### Near-perfect example of a reference guide

[Linking Between Pages](/docs/linking-between-pages/)

### What if I want to include multiple tasks and concepts in a reference guide?

If you find yourself wanting to include multiple related topics in one article, consider splitting each into its own individual guide and referencing the other topics under sections called “Prerequisites” and/or "Other Resources" sections in the related guide articles.

It’s more ideal to have many articles that cover a broad range of technical topics rather than smashing too many topics into one article.

If you find yourself wanting to teach the reader how to accomplish a series of related tasks, you might want to write a tutorial. For short and super common how-to instructions for a single task, a recipe may work best.

### When to write a reference guide vs. a tutorial, vs. a recipe?

[Reference guide articles](#reference-guide-template) cover discrete topics as documentation while linking to other resources and guides. A reference guide explains a task or concept without the step-by-step context provided by a tutorial or recipe.

[Tutorials](#tutorial-template) guide users through a series of related tasks they can string together successfully. Listing prerequisites up front and limiting distractions or links away from the instructions can make a focused tutorial.

[Recipes](#recipe-template) are a happy medium between step-by-step tutorials and crawling the full reference guides, by providing step-by-step guidance for short, common Gatsby tasks.

### How to choose a reference guide topic?

Guide topics should be chosen based on these priorities:

1.  [Stub articles](/contributing/stub-list/) (docs that already exist on the site but don't have content in them yet)
2.  Articles with the [help wanted and type:documentation](https://github.com/gatsbyjs/gatsby/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22+label%3A%22type%3A+documentation%22) labels on GitHub
3.  Articles related to improving [key learning workflows](https://github.com/gatsbyjs/gatsby/issues/13708)
4.  Articles listed in the "Backlog" or "To prioritize" sections of the [Learning / Devrel Roadmap](https://github.com/gatsbyjs/gatsby/projects/10) on GitHub
5.  Articles that you or other community members would like to see

### Length of a reference guide

Ideally, a guide's table of contents would fit above the fold on a desktop computer screen. This means the outline is easily consumable, so the person can quickly determine if that section of the docs contains the information they need to complete a task.

The content of a reference guide should provide just enough information to be actionable. Linking out to other materials and guides outside of Gatsby's core concepts is recommended to limit the scope to critical and unique parts of Gatsby development.

### Reference guide template

You can copy and paste the markdown text below and fill it in with your own information

```markdown
---
title: Querying Data with GraphQL
---

## Introductory paragraph

The introductory paragraph should be a 1-2 sentence explanation of the main
topic and answer the following question:

What is the purpose of this guide?

## Prerequisites (if any)

If applicable, list any prerequisites to reading and understanding your article. Does the reader need to read another document first, install a particular plugin, or already know a certain skill? List those things here.

## The facts

What are the facts you know about the topic of this guide?

Keep paragraphs short (around 1-4 sentences). People are more likely to read
several short paragraphs instead of a huge block of text.

## Example

Readers will likely use doc articles as a quick reference to look up syntax.
Articles should have a basic, real-world example that shows common use cases of its syntax.

Provide at least one example of how the task gets accomplished. A code snippet is ideal, in this format:

    code snippet

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples

## Gatsby advantages

Does Gatsby address this topic uniquely in some way? If so, state the unique advantages Gatsby provides to the user.

If there are disadvantages Gatsby has, state those here as well and any known bugs or issues the Gatsby community is working on.

## Other resources

If there are other resources you think readers would benefit from or next steps they might want to take after reading your article, add them at the bottom in an "Other Resources" section. You can also mention here any resources that helped you write the article (blog posts, outside tutorials, etc.).

- Link to a blog post
- Link to a YouTube tutorial
- Link to an example site
- Link to source code for a live site
- Links to relevant plugins
- Links to starters
```

## Reference guide overview

### Near-perfect example of a guide overview

[Deploying and Hosting](/docs/deploying-and-hosting/)

### What should a reference guide overview be about?

Each overview should give a short introduction of its section of the guides and list the relevant subtopics.

### Length of a reference guide overview

Ideally, a guide overview fits above the fold on a desktop computer screen. This means the outline is easily consumable, so the person can quickly determine if that section of the docs contains the information they need to complete a task.

### When should I create a new reference guide overview?

Guide overview articles are essentially new parent categories that help organize all the reference guides. Here’s how to decide if you should create a new reference guide overview:

1.  [Stub articles](/contributing/stub-list/) (docs that already exist on the site but don't have content in them yet)
2.  Article sections with the [help wanted and type:documentation](https://github.com/gatsbyjs/gatsby/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22+label%3A%22type%3A+documentation%22) labels on GitHub
3.  Article sections related to improving [key learning workflows](https://github.com/gatsbyjs/gatsby/issues/13708), like "e-commerce"
4.  Article sections listed in the "Backlog" or "To prioritize" sections of the [Learning / Devrel Roadmap](https://github.com/gatsbyjs/gatsby/projects/10) on GitHub
5.  Article sections that you or other community members would like to see

## Reference guide overview template

You can copy and paste the markdown text below and fill it in with your own information

```markdown
---
title: Testing
---

## Section overview

The section overview should be a 2-5 sentence explanation of the category and answer the following questions:

- What is the main purpose of this section in the docs?

## Prerequisites (if any)

Assume the reader has basic programming knowledge like the command line, code editors, and beginning familiarity with React and GraphQL concepts. Beyond that assumed knowledge, list any other prerequisites to reading and understanding your article. Does the reader need to read another document first, install a particular plugin, or already know a certain skill? List those things here.

## Reference guides in this section

<GuideList slug={props.slug} />

## Other resources

- Link to a blog post
- Link to a YouTube tutorial
- Link to an example site
- Link to source code for a live site
- Links to relevant plugins
- Links to starters
```

---

## Recipes

[Docs Recipes](/docs/recipes/) should act as discoverable, concise instructions for completing common Gatsby tasks without having to navigate elsewhere. A recipe should include requirements and a few short steps to complete a task, listing actionable instructions inline, and omitting everything else.

Recipes are smaller units than tutorials, each limited to a single feature or task. Multiple recipes could be linked from a reference guide or tutorial, however the content should be consolidated in the Recipes section for discoverability. If a recipe is recorded as a video, it should be less than five or ten minutes long.

The components of a recipe are:

- The name of the recipe, which should describe a single task
- Requirements and prerequisites
- Step-by-step directions
- A link to a working example

Recipes should be short. If you're finding a recipe is becoming too long to fit on the Docs Recipes page due to including many prerequisites or steps, consider writing a tutorial instead.

### Recipe categories

Grouping recipes by topic will allow users to navigate and learn by subject matter. As recipes following the new format are introduced, you might find a section needs an h2 heading added for the group. The older-style recipes should be gradually replaced with actionable recipes following the template below.

Recipes should fall into these categories to start (suggest your idea in a GitHub issue!):

- Pages/Layouts
- Styling
- Starters
- Themes
- Sourcing
- Querying
- Images
- Transforming
- Deploying

Here's a template for a recipe category:

```markdown:title=docs/docs/recipes.md
## Category name
```

### Recipe template

When writing a recipe, try to include each of the below items wherever relevant.

````markdown:title=docs/docs/recipes.md
### Recipe name

#### Requirements

- A Gatsby site with two page components: `index.js` and `contact.js`
- The Gatsby <Link /> component
- The Gatsby CLI method `gatsby develop`

#### Directions

1. Open the index page component (src/pages/index.js), import the <Link />
   component from Gatsby, add a <Link /> component above the header, and give
   it a `to` property with the value of "/contact/" for the pathname:

```jsx:title=src/pages/index.js
import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <p>What a world.</p>
  </div>
)
```

2. Run `gatsby develop` and navigate to the index page. You should have a link
   that takes you to the contact page when clicked!

#### Related links

- Any live demos
- Other materials to check out
````

## Tutorials

In contrast to recipes and reference guides, tutorials are step-by-step instructions for a series of related Gatsby tasks. Tutorials are grouped into Gatsby Fundamentals and Intermediate Tutorials ("The Gatsby Tutorial"), as well as Advanced Tutorials which can be explored individually as needed.

### Near perfect example of a tutorial

[Main Gatsby tutorial](https://www.gatsbyjs.org/tutorial/)

### What should a tutorial be about?

We need tutorials to guide users of all skill levels through performing a series of related tasks with Gatsby.

### How to choose a tutorial topic?

Topics should be chosen based on these priorities:

1.  Tutorials related to improving [key learning workflows](https://github.com/gatsbyjs/gatsby/issues/13708)
2.  Tutorials listed in the "Backlog" or "To prioritize" sections of the [Learning / Devrel Roadmap](https://github.com/gatsbyjs/gatsby/projects/10) on GitHub
3.  Tutorials with the [help wanted and type:documentation](https://github.com/gatsbyjs/gatsby/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22+label%3A%22type%3A+documentation%22) labels on GitHub
4.  Tutorials that you or other community members would like to see

## Length of a tutorial

If a tutorial is longer than 3 8.5x11” pages or has more than about 5 headers and you’re finding yourself creating a Table of Contents at the top, it will probably be easier to read and easier for readers to complete if you turn it into a multi-page tutorial, like the [main Gatsby tutorial](https://www.gatsbyjs.org/tutorial/).

If you have a tutorial that falls into this category, it is likely a big enough project that you’ll benefit from the feedback process provided by creating an [RFC (Request for Comments) document](https://github.com/gatsbyjs/rfcs).

## Tutorial template

You can copy and paste the markdown text below and fill it in with your own information.

```markdown
---
title: How to Create a Decoupled Drupal Site with Gatsby
---

## What’s contained in this tutorial?

By the end of this tutorial, you’ll have done the following:

- learned how to **\_\_**
- built a \***\*\_\*\***
- used a **\_\_\_** with Gatsby

## Prerequisites (if any)

If applicable, list any prerequisites to reading and understanding your tutorial. Does the reader need to read another document first, install a particular plugin, or already know a certain skill? List those things here.

## Step 1

Keep paragraphs short (around 1-4 sentences). People are more likely to read
several short paragraphs instead of a huge block of text.

Readers will likely use doc articles as a quick reference to look up syntax.
Articles should have a basic, real-world example that shows common use cases of its syntax.

    code example

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples

## Step 2

Repeat the pattern found in step 1

## Step 3

Repeat the pattern found in other steps the other steps

## Step _n_

Include as many steps as you need. If there are more than 5-10 steps, it might be worth considering a multi-page tutorial to make it easier for the people to finish chunks of the tutorial.

## What did you just do?

In this tutorial, you did the following:

- learned how to **\_\_**
- built a \***\*\_\*\***
- used a **\_\_\_** with Gatsby

## What’s next

If there are more parts to the tutorial, link to the next step here.

## Other resources

If there are other resources you think readers would benefit from or next steps they might want to take after reading your article, add
them at the bottom in an "Other Resources" section. You can also mention here any resources that helped you write the article (blog posts, outside tutorials, etc.).

- Link to a blog post
- Link to a YouTube tutorial
- Link to an example site
- Link to source code for a live site
- Links to relevant plugins
- Links to starters
```

---

## Plugin README template

### Near-perfect example of a plugin README

`[gatsby-source-filesystem]`(/packages/gatsby-source-filesystem/)

```markdown
## Description

Include a summary of what this plugin accomplishes. Is there a demo site that shows how this plugin operates? If so, include a link to the deployed demo site and/or its src code here.

### Dependencies (optional)

Are there any plugins that must be installed in order to make this plugin work, please include a list of those plugins and links to their pages here.

### Learning Resources (optional)

If there are other tutorials, docs, and learning resources that are necessary or helpful to someone using this plugin, please link to those here.

## How to install

Please include installation instructions here.

## Available options (if any)

## When do I use this plugin?

Include stories about when this plugin is helpful and/or necessary.

## Examples of usage

This usually shows a code example showing how to include this plugin in a site's `config.js` file.

    code example

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples.

This section could also include before-and-after examples of data when the plugin is enabled, if applicable.

## How to query for data (source plugins only)

If this is a source plugin README, source plugins ought to allow people to query for data within their Gatsby site. Please include code examples to show how to query for data using your source plugin.

## How to run tests

## How to develop locally

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, it is nice to include instructions for people who want to contribute to your plugin.
```

---

## Starter README template

### Near-perfect example of a starter README

[Default Starter README](https://github.com/gatsbyjs/gatsby-starter-default)

```markdown
## Name of starter

## Quick start

Give instructions on how to install this starter

## Features

Tell features comes with this starter. This is a chance to give users a brief tour of how to use this starter effectively.

## Next steps

Any tips on how to deploy this starter? What CMS to use? Other fun ways to build on top of the starter? Say those here!
```
