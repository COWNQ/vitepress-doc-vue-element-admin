---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "omo-vitepress"
  text: "知味来"
  tagline: "逐步代码之vue—elemment-admin"
  image: "/assets/logo.png"
  actions: 
    - theme: brand
      text: 查看文档
      link: /use_scope
    - theme: alt
      text: 前往github
      link: /api-examples

features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon:
      src: /cool-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
---


<style>
  :root{
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg,#bd34fe,#41d1ff)
  }
</style>