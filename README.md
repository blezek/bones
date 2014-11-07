bones
=====

Node module for sharable build systems.

## The problem

Node build systems tend non-portability.  When a team builds up a grunt or gulp based workflow, it becomes very difficult to deploy to other projects.

## What bones is designed to do

Bones is an attempt to make modular build systems.  Taking a page from Rails, a bones build system (a skeleton) will have certain conventions that will be followed.  As the skeleton is updated, changes can be pulled in without disturbing the projects.

## Challenges

Of course this is an ambitious project, and success is not guaranteed, nor likely.  First many a project have crashed on the rock of build systems, and secondly, the balance of "convention over configuration" vs customizability is a razor's edge.

## How bones should work

Hypothetically, a new project could be started like this:

```bash
npm install -D bones skeleton-nac
cat >> bones.json
{ "skeleton": "nac" }

bones gulp build
bones gulp test
bones gulp watch
```

Bones will read the ```bones.json``` configuration file and look for the appropriate skeleton package.  A command to bones will look for configuration inside ```skeleton-nac``` but execute in the current directory.
