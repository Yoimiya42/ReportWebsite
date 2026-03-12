# Project Report Website

This repository contains the source code for our **project report website**.

The website is built using **Docusaurus**, a static site generator that converts Markdown documentation into a structured website.

Instead of manually writing HTML pages, we write documentation in Markdown and the framework automatically generates the final website.

---

# Tech Stack

* Static Site Generator: Docusaurus
* Runtime: Node.js
* Framework: React
* Language: JavaScript
* Documentation: Markdown

---

# Prerequisites

Before running the website locally, make sure the following software is installed.

## 1 Install Node.js

Download Node.js (LTS version):

https://nodejs.org

After installation, check if it works:

```
node -v
```

You should see a version number such as:

```
v20.x.x
```

---

# Running the Website Locally

Follow these steps to preview the website on your computer.

## 1 Clone the Repository

```
git clone https://github.com/Team9-FunShapes-FunBreathing/ReportWebsite.git
```

Enter the project folder:

```
cd ReportWebsite
```
---

## 2 Install Dependencies

Install the required packages:

```
npm install
```

This step only needs to be done once.

---

## 3 Start the Local Development Server

Run:

```
npm start
```

This will start a development server.

Open your browser and go to:

```
http://localhost:3000
```

The website will automatically reload whenever files are edited.

Also, you’ll find a few official tutorials at here. They only take about 10 minutes to go through, and they will give you a basic idea of how to build the website.


# Edit
You only need to write the text using **Markdown syntax** in the corresponding Markdown files for each module under the `\docs` path.  
Docusaurus will automatically render it.

---
