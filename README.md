# Siobhan Schenk Personal Website

This repository contains the source code for [Siobhan Schenk's personal website](https://siobhanschenk.github.io/).  
It is a lightweight, responsive personal site built using **HTML**, **CSS**, and **JavaScript**, hosted on **GitHub Pages**.

---

## 🚀 Features
- **Responsive design:** Looks great on mobile, tablet, and desktop.
- **Hamburger menu:** Automatically collapses for smaller screens.
- **Hero section:** Clean header with your name, title, and photo.
- **Photo carousel:** Auto-scrolling image gallery that loops seamlessly.
- **Pause on hover:** Stops animation when hovered for easier viewing.
- **Swipe on mobile:** Users can drag/swipe the carousel with their finger.
- **Tabbed layout:** Simple navigation between 'About', 'Science', and other sections.

---

## 🧩 Structure
```
/
├── index.html    # Main HTML structure
├── style.css     # Site styling and layout
├── script.js     # Tab logic, carousel animation, and mobile interactivity
└── images/       # Folder for all photos used on the website
```

---

## 🛠️ How to Update Your Website

1. **Edit Content**
   - Modify `index.html` to update your text and section content.
   - You can add or remove photos inside the `<div class="carousel-track">` element.

2. **Style Changes**
   - Open `style.css` to adjust colors, fonts, spacing, or layout.
   - Recommended accent color: `#66c2ff` (soft ocean blue).

3. **JavaScript Logic**
   - `script.js` handles tab switching, the hamburger menu, and swipe gestures.
   - You can change animation speed or sensitivity by editing:
     ```js
     const walk = (x - startX) * 0.5; // smaller = slower swipe
     ```

4. **Add New Images**
   - Place your new image files in the `/images` folder.
   - Reference them in HTML, for example:
     ```html
     <img src="images/new_photo.jpg" alt="Description" />
     ```

5. **Publish Updates**
   - Commit and push your changes to the `main` branch.
   - GitHub Pages automatically rebuilds your site in a few seconds.

---

## 🌍 Live Preview
To view your site locally before committing:
1. Download this repo as a ZIP or clone it.
2. Open `index.html` in your browser.

---

## 🧠 Credits
Designed and customized by **ChatGPT + Siobhan Schenk**, 2025.

---

## 🪶 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
