<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ilyaas Carab</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">

  <header class="top">
    <div class="dots">
      <i class="red"></i>
      <i class="yellow"></i>
      <i class="green"></i>
    </div>

    <div class="tab">
      <span class="github">●</span>
      <strong>Ilyaas Carab</strong>
      <span class="x">×</span>
    </div>

    <span class="plus">+</span>
  </header>

  <div class="address">
    <button>‹</button>
    <button>›</button>
    <button>⟳</button>

    <div class="url">
      🔒 github.com/Ilyaas-Carab/welcome
    </div>

    <span class="search">⌕</span>
    <span class="three">⋮</span>

    <div class="user">IC</div>
  </div>

  <div class="main">

    <aside class="sidebar">

      <div class="logo">●</div>

      <div class="side active">‹/›</div>
      <div class="side">⑂</div>
      <div class="side">▷</div>
      <div class="side">⚙</div>

      <div class="repo">

        <div class="repo-title">
          <span>●</span>
          <b>Ilyaas Carab</b>
        </div>

        <div class="branch">
          ⑂ &nbsp; main
          <span>⌄</span>
        </div>

        <div class="files">
          <div class="file">› 📁 .github</div>
          <div class="file">› 📁 src</div>
          <div class="file">› 📁 assets</div>

          <div class="file selected">
            ▤ &nbsp; README.md
          </div>

          <div class="file">
            ▤ &nbsp; package.json
          </div>

          <div class="file">
            ▤ &nbsp; .gitignore
          </div>
        </div>

      </div>

      <div class="bottom">
        <span></span> main
      </div>

    </aside>


    <main class="content">

      <div class="breadcrumb">
        <span>Ilyaas Carab</span>
        <b>/</b>
        <strong>README.md</strong>
        <button id="copy">▣</button>
      </div>


      <div class="commit">

        <div class="avatar">IC</div>

        <div class="commit-text">
          <b>Ilyaas Carab</b>
          <span>Ku soo dhawoow ❤️</span>
        </div>

        <div class="details">
          ◷ &nbsp; 2 lines · 1 loc · 24 Bytes
        </div>

      </div>


      <section class="code">

        <div class="tabs">
          <button>Preview</button>
          <button class="active">Code</button>
          <button>Blame</button>
        </div>

        <div class="editor">

          <div class="numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>

          <pre><code><span class="hash">#</span> <span class="blue">Ku soo dhawoow</span>
<span class="heart">♥</span> <span class="white">Ilyaas Carab</span>
<span class="comment">Welcome to my project ✨</span></code></pre>

        </div>

      </section>

    </main>

  </div>

</div>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: #020713;
  color: #dcecff;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.app {
  width: 100%;
  height: 100vh;
  background: #050c19;
  border: 1px solid #17365c;
  box-shadow: 0 0 60px rgba(0, 110, 255, .15);
}

/* TOP */

.top {
  height: 62px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #071325, #0b1d35);
  border-bottom: 1px solid #18385e;
}

.dots {
  width: 130px;
  display: flex;
  gap: 12px;
  padding-left: 24px;
}

.dots i {
  width: 19px;
  height: 19px;
  border-radius: 50%;
}

.red {
  background: #ff4d4d;
}

.yellow {
  background: #ffbd22;
}

.green {
  background: #14d86c;
}

.tab {
  width: 330px;
  height: 46px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 13px;
  background: #10294b;
  border: 1px solid #1b4d86;
  color: white;
  font-size: 17px;
}

.github {
  font-size: 22px;
}

.x {
  margin-left: auto;
  font-size: 25px;
  color: #82a7d5;
}

.plus {
  margin-left: 25px;
  font-size: 31px;
  color: #8db6e5;
}

/* ADDRESS */

.address {
  height: 78px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 20px;
  background: #071426;
  border-bottom: 1px solid #18385e;
}

.address button {
  border: 0;
  background: none;
  color: #83a9d7;
  font-size: 32px;
  cursor: pointer;
}

.url {
  flex: 1;
  height: 49px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 25px;
  background: #0b2039;
  border: 1px solid #183e68;
  color: #8fb6df;
  font-size: 15px;
}

.search,
.three {
  font-size: 28px;
  color: #91b9e8;
}

.user {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #168dff, #0753d1);
  color: white;
  font-weight: bold;
}

/* MAIN */

.main {
  height: calc(100vh - 140px);
  display: flex;
}

/* SIDEBAR */

.sidebar {
  width: 390px;
  min-width: 290px;
  position: relative;
  background: #06101f;
  border-right: 1px solid #18385e;
}

.logo,
.side {
  width: 68px;
  height: 58px;
  margin: 13px auto;
  display: grid;
  place-items: center;
  border-radius: 13px;
  color: #aac9ec;
  font-size: 27px;
}

.logo {
  height: 65px;
  background: #10294b;
  color: white;
}

.side {
  cursor: pointer;
}

.side:hover {
  background: #102541;
}

.side.active {
  background: linear-gradient(135deg, #126eff, #0750d1);
  color: white;
  box-shadow: 0 8px 25px rgba(0, 91, 255, .25);
}

.repo {
  position: absolute;
  top: 0;
  left: 90px;
  right: 0;
  height: 100%;
  border-left: 1px solid #112e50;
}

.repo-title {
  height: 78px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0 25px;
  font-size: 20px;
  border-bottom: 1px solid #112e50;
}

.repo-title span {
  color: #1c91ff;
  font-size: 25px;
}

.branch {
  height: 70px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 28px;
  font-size: 18px;
  border-bottom: 1px solid #112e50;
}

.branch span {
  margin-left: auto;
}

.files {
  padding: 13px;
}

.file {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 10px;
  color: #aac7eb;
  font-size: 17px;
  margin-bottom: 3px;
  cursor: pointer;
}

.file:hover {
  background: #0d213a;
}

.file.selected {
  color: white;
  background: linear-gradient(90deg, #0759dc, #123f8f);
  border-left: 3px solid #24a9ff;
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 25px;
  border-top: 1px solid #112e50;
  font-size: 18px;
}

.bottom span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #00e879;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 38px 32px;
  overflow: auto;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 28px;
  font-size: 23px;
}

.breadcrumb span {
  color: #1592ff;
  font-weight: bold;
}

.breadcrumb b {
  color: #6684a8;
}

.breadcrumb strong {
  color: #f1f6ff;
}

#copy {
  border: 0;
  background: none;
  color: #9fc2e8;
  font-size: 24px;
  cursor: pointer;
}

/* COMMIT */

.commit {
  min-height: 73px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 13px;
  border: 1px solid #18385e;
  background: linear-gradient(90deg, #091a30, #081526);
}

.avatar {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  margin-right: 15px;
  border-radius: 50%;
  background: linear-gradient(135deg, #168dff, #063e9e);
  color: white;
  font-weight: bold;
}

.commit-text {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
}

.commit-text span {
  color: #70a4db;
}

.details {
  margin-left: auto;
  color: #7e9fc6;
  font-size: 14px;
}

/* CODE */

.code {
  margin-top: 22px;
  min-height: 520px;
  border: 1px solid #18385e;
  border-radius: 13px;
  overflow: hidden;
  background: #030a17;
}

.tabs {
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 4px;
  border-bottom: 1px solid #18385e;
}

.tabs button {
  height: 48px;
  padding: 0 28px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #a9c5e6;
  font-size: 17px;
  cursor: pointer;
}

.tabs button:hover {
  background: #102641;
}

.tabs button.active {
  background: linear-gradient(135deg, #1686ff, #075bd9);
  color: white;
  font-weight: bold;
  box-shadow: 0 5px 20px rgba(0, 100, 255, .25);
}

/* EDITOR */

.editor {
  min-height: 450px;
  display: flex;
  font-family: Consolas, Monaco, monospace;
  font-size: 18px;
}

.numbers {
  width: 70px;
  padding-top: 25px;
  text-align: center;
  line-height: 38px;
  color: #58769b;
  border-right: 1px solid #122f50;
}

.editor pre {
  flex: 1;
  padding: 27px 30px;
  line-height: 38px;
}

.hash {
  color: #20a8ff;
  font-weight: bold;
}

.blue {
  color: #18baff;
  font-weight: bold;
}

.heart {
  color: #ff4e76;
}

.white {
  color: #f1f6ff;
  font-weight: bold;
}

.comment {
  color: #7192b7;
}

/* MOBILE */

@media (max-width: 800px) {

  .sidebar {
    width: 270px;
  }

  .repo {
    left: 65px;
  }

  .details {
    display: none;
  }

  .content {
    padding: 25px 15px;
  }

  .url {
    font-size: 11px;
  }

  .commit-text {
    font-size: 14px;
  }
}

<script src="script.js"></script>
</body>
</html>
