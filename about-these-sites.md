DRAAAFT

# About These Sites

Hey it’s the redesigned Abler, Adaptation + Ability Group, and Sara Hendren sites...!

## Why?

- History of the site
- Writing one’s way into a field over many years
- The long and strange arc of life and work that doesn’t stop here, etc.
- Can these sites actually enact the approaches to accessibility that Abler has been mapping? 

## Website as home

- Conceptualish intro? Can a website do a whole lot of things?
- Expanding in both directions: more organized/quicker access to important information, and also more getlostability.
- Not being able to be everywhere all the time, but wanting an online presence and resource that’s not an afterthought

## Three new (unified) channels

- After doing an audit of 7 years of Abler posts, realized there’s a lot crammed in here: a long-running blog, a lab that’s establishing its own identity, and...a person.
- Finally a publishing effort, across three fronts. But more like a collage than a magazine.
- Less me, me, me. By separating things out, distinguishing between and highlighting other people’s work better, and pointing in even more directions. Broader umbrella?
- Spent a bunch of time coming up with an intention and reader for each site and tuning to what they might be looking for.

# Design

## Principles

### Widely accessible

- For real, this time.
- Passed automatic accessibility tests and checklists X, Y, and Z.
- Compliant with standards and guidelines X, Y, and Z. WCAG, etc.
- Using semantic markup and ARIA roles, etc.
- Engaged Person/Group X to do actual accessibility QA testing of the final site.

### Beyond compliance: Access as a site of expression
- Could screen reader compatibility, and other points of access, be sites of expression, not just compliance? As we draw out some expressive and playful qualities of accessible design, can we bring or translate that to all readers?

### Designing from audio-first
- The standard approach to web design in 2016 is to start “mobile-first” (e.g. iPhone) and progressively enhance for larger and more powerful devices (e.g. iMac). For these sites we wanted to start from audio-first.
- How do these sites sound, for non-sighted readers? 
- Can we do better than the default in terms of functionality and expressiveness of these sites’ audible interface?
- Starting with the Welcome message at the top of every top-level page, but extending through the way the navigation sounds, considering inviting narration of posts, verse-by-voice style.

### Supporting uncommon inputs
- It’s standard to do device testing, but oftentimes only across a range of expensive Apple devices on a high speed Fiber Optic network connection. We sought to make these sites work across a range of devices, including Android and open-source operating systems, and including full keyboard navigation, verified compatibility with major screen reading software such as Jaws and Voiceover, and consideration of additional reader input devices like eye-tracking navigation (any other inputs/outputs that come to mind? or is this too ambitious, even??).

### Destigmatizing access
- The problem with minimalism.
  - Trendy Silicon Valley minimalism (or whatever you wanna call it) hides user customization options, consequently excluding broad swaths of people. 
- Foregrounding customization for all readers.
  - These sites provide all readers, front and center, with a considered but highly customizable set of options for type, color, emphasis, and complexity. On your first visit we’ll encourage you to set your customizations, and store them using a browser cookie. You can edit your customizations at any time.
-Defamiliarizing aesthetics of access.
  - No default colors, here! We sought to design a set of options that’s broadly useful and inclusive, and also pleasing to explore. These options shouldn’t be something tucked in a drawer or slapped on as an afterthought.

### Open source, open license

- All aspects of the site — content, design, and code — are freely downloadable, open source, well documented in plain language, and permissively licensed through Creative Commons (except where otherwise noted).

### Soliciting your feedback and variations

- Does this work for you? We’re listening for how we can improve it.
- You’re invited to improve this site too, if you please. We’d love to link to or reincorporate your edits, transcriptions, translations, alternative formats, or other adaptations back into these sites, and give thanks to you for your contributions.

# Technology

## Tools

- Siteleaf, for content management.
- Jekyll, for site generation.
- Github, for hosting and collaborating on code and content.

## Atomic design

The site’s design is a system based on the principles of “Atomic Design,” popularized by Brad Frost. It consists of small-to-large-sized building blocks that make the design and code easy to maintain, contribute to, and repurpose. It also provides consistency across the three sites. The style guide below breaks down the composition of this site’s Atomic elements, and provides sample visuals, code, and annotations.

## Code styles

Consistent and methodical code styles help make it easy to organize a project, jump into it as a newcomer, and return to its logic many months or years later.

- Atomic SASS, Robin Rendle
- BEM CSS, Nicolas Gallagher
- Object-Oriented CSS, Nicole Sullivan
