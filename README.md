# CoderDojoDC.github.io

Welcome to the CoderDojoDC website source code.

## Creating a new post

So you want to create a new post? This probably happens a lot... The easiest way is probably to copy the content from an existing file in the `_posts` directory and create a new file with an appropriate `YYYY-MM-DD-url-to-page-usually-post-title.md` name. 

Here are the [jekyll instructions](http://jekyllrb.com/docs/posts/).

## How it works?

*Github does this automatically when someone commits a change to the `master` branch of the `CoderDojoDC/CoderDojoDC.github.io` repository.*

Jekyll generates static pages based on the markdown and html template code of all files with supported extensions (typically .md, .markdown, or .html) that have [YAML front-matter](http://jekyllrb.com/docs/frontmatter/). You can do this manually, [see below](#running-the-source-code-locally-for-testing----mac-osx-advanced).

Jekyll uses the [liquid](http://docs.shopify.com/themes/liquid-basics) templating language, and github pages gives us some  stuff out of the box, along with limited plugin support, see here for github's pages documentation: 

* [Using Jekyll with github pages](https://help.github.com/articles/using-jekyll-with-pages)
* [Github pages basics](https://help.github.com/categories/20/articles)

## Editing/creating templates

You'll want to look at the `_layouts` directory for the `default.html` template (used in most pages). Files with an `.html` extension likely also include some templating.

## Running the source code locally for testing -- Mac OSX (advanced)

1. Install [rvm](https://rvm.io/rvm/install)
2. Install ruby 2.1.1 with: `rvm install 2.1.1`
3. Install bundler (probably as root): `sudo gem install bundler`
4. Run bundle install: `bundle install`
5. Run jekyll serve: `bundle exec jekyll serve`
6. Assuming everything worked properly, open your browser to [http://localhost:4000/](http://localhost:4000/)
