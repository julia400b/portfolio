# Лендинги для GitHub Pages

Проект уже подготовлен так, чтобы его можно было опубликовать на GitHub Pages без сборки и без фреймворков.

## Что будет доступно по ссылкам

Твой GitHub-логин: `julia400b`

Если создать репозиторий, например, с именем `portfolio-landings`, то ссылки будут такими:

- Главный лендинг: `https://julia400b.github.io/portfolio-landings/`
- `nova-tech`: `https://julia400b.github.io/portfolio-landings/nova-tech/`
- `casa-marea`: `https://julia400b.github.io/portfolio-landings/casa-marea/`
- `volt-rush`: `https://julia400b.github.io/portfolio-landings/volt-rush/`
- `atelier-noir`: `https://julia400b.github.io/portfolio-landings/atelier-noir/`

Если нужны более короткие и аккуратные ссылки, можно назвать репозиторий так же, как ваш GitHub Pages user site:

`julia400b.github.io`

Тогда ссылки будут такими:

- Главный лендинг: `https://julia400b.github.io/`
- `nova-tech`: `https://julia400b.github.io/nova-tech/`
- `casa-marea`: `https://julia400b.github.io/casa-marea/`
- `volt-rush`: `https://julia400b.github.io/volt-rush/`
- `atelier-noir`: `https://julia400b.github.io/atelier-noir/`

## Как опубликовать

### 1. Создайте пустой репозиторий на GitHub

Рекомендуемое имя для коротких ссылок: `julia400b.github.io`

Альтернатива: `portfolio-landings`

### 2. Подключите удаленный репозиторий

```powershell
git remote add origin https://github.com/julia400b/julia400b.github.io.git
```

### 3. Загрузите проект

```powershell
git add .
git commit -m "Add landing pages"
git push -u origin main
```

### 4. Включите GitHub Pages

На GitHub откройте:

`Settings` -> `Pages`

Далее выберите:

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/ (root)`

После сохранения GitHub Pages выдаст публичную ссылку.

## Важно

- Файл `.nojekyll` уже добавлен, чтобы GitHub Pages отдавал сайт как обычный статический проект.
- Все пути внутри проекта относительные, поэтому папки лендингов будут открываться корректно.
- Папка `output/` и служебные файлы Playwright в git не попадут.
