# jdchian.github.io

Duen-Chian Jheng 的個人作品集網站：https://jdchian.github.io

## 結構

```
index.html          首頁（Projects、Experience、Education、Skills、Contact）
project.html        專案詳細頁，網址為 project.html?id=<專案 id>
assets/data.js      ← 所有內容都在這裡
assets/style.css    樣式（淺色 / 深色兩組配色）
assets/theme.js     深淺色切換與共用元件
```

## 如何更新

- **新增或修改專案**：編輯 `assets/data.js` 裡的 `PROJECTS`。每個專案的 `id` 會變成它的網址
- **截圖**：放到 `images/` 資料夾，在專案的 `image` 欄位填路徑（例如 `images/smpl.png`）
- **經歷、學歷、技能、自我介紹**：分別在 `EXPERIENCE`、`EDUCATION`、`SKILLS`、`PROFILE`

預設是淺色模式，訪客可以用右上角的按鈕切換，選擇會被記住。

推送到 `main` 後，GitHub Pages 會在一兩分鐘內自動更新。
