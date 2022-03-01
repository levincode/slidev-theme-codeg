---
theme: ./
info: |
  ## Codeg
  My first [Slidev](http://sli.dev/) presentations!
title: Codeg Theme
hideInToc: true
colorSchema: 'dark'
fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  mono: 'Fira Code'
---

# \<Codeg\> slidev theme

Presentations slides for developers

<br />

<Toc />

---
layout: quote
titleHeader: deep thought
---

Nostrud do tempor sit deserunt cillum ullamco velit. Nulla aliqua veniam proident sint enim non est Lorem. Nostrud non exercitation minim nulla excepteur eiusmod sint. Quis qui et nostrud proident fugiat aliqua officia deserunt velit cillum. Ullamco sunt culpa minim velit minim. Est labore amet amet anim esse non ipsum cupidatat dolore dolor aliquip ullamco voluptate. --- Lewis V.

---
layout: section
hideInToc: true
---

# Layout `section`

Consequat esse aute cillum tempor.

---
title: Title 01
titleHeader: Title 01
---

# What is Slidev?

## Heading 2: The large title in the slide

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---
title: Title 02
titleHeader: Title 02
layout: image
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
overlayClass: bg-[rgba(0,0,0,0.5)]
---

## Image Layout

You can set your own background overlay with the `overlayClass` property.

```html
<template>
  <div class="slidev-layout w-full h-full" :style="style">
    <div
      :class="['fixed inset-0 w-full h-full', props.overlayClass ? props.overlayClass : 'bg-[rgba(0,0,0,0.5)]']"
    />
    <layout-header :titleHeader="props.titleHeader" />
    <div class="relative z-4">
      <slot />
    </div>
  </div>
</template>
```

---
title: Title 03
titleHeader: Title 03
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
titleHeader: Title 03
---

## Sub-section

Esse ea fugiat anim aliqua Lorem sit. Cupidatat occaecat veniam non nisi dolore dolore ullamco. Occaecat ad nulla duis veniam consectetur cillum fugiat commodo. Proident in Lorem ad ea. Et amet voluptate culpa in cillum. Labore fugiat sit esse cupidatat magna proident aliqua anim.

---
title: Title 04
titleHeader: Title 04
layout: image-left
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
title: Title 05
titleHeader: Title 05
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
title: Title 06
titleHeader: Title 06
layout: two-cols
---

## Left
Laboris quis mollit exercitation tempor dolor pariatur. Ad voluptate velit deserunt enim ipsum in do ex eiusmod tempor. Velit nisi minim labore nulla fugiat quis est ea voluptate non adipisicing tempor. Sint reprehenderit nisi consectetur ipsum aute cupidatat elit ad aute commodo eiusmod. Eiusmod dolor voluptate elit do incididunt amet commodo.

::right::

## Right
![image](https://source.unsplash.com/collection/94734566/1920x1080)

---
title: Title 07
titleHeader: Title 07
layout: center
class: text-center
---

# Learn more of slidev, thanks

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
