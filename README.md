# ghoul.cloud 🌙

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
</div>

## About 📄

This is the source code for [ghoul.cloud](https://ghoul.cloud), my personal website.

### Prerequisites

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

## Building 🏗️

### Docker 🐳

```sh
$ docker compose up -d --build
```

### Local 👷

```sh
$ bun install
$ bun run dev
```

## Project Structure 📁

```
ghoul.cloud/
├── public/
│   ├── audio/          # Music Files
│   ├── covers/         # Album Artwork
│   └── gojo.mp4        # Background Video
├── src/
│   ├── components/     
│   │   ├── Audio.astro 
│   │   ├── Background.astro
│   │   └── Home.astro
│   ├── layouts/        # Page Layouts
│   ├── pages/          # Route Pages
│   └── styles/         # Global Styles
├── docker-compose.yml
├── Dockerfile
└── package.json
```

## Roadmap 🚚

- [x] Improved UI
- [x] More Widgets

## Contributing 👥

> Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## Bug Reports 🐛

If you encounter any bugs, please [open an issue](https://github.com/xFGhoul/ghoul.cloud/issues) with:
- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable


## License 📝 

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Commands 🧞 

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

---

## Stats 📊 

![GitHub stars](https://img.shields.io/github/stars/xFGhoul/ghoul.cloud?style=social)
![GitHub forks](https://img.shields.io/github/forks/xFGhoul/ghoul.cloud?style=social)
![GitHub issues](https://img.shields.io/github/issues/xFGhoul/ghoul.cloud)
![GitHub license](https://img.shields.io/github/license/xFGhoul/ghoul.cloud)


<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/xFGhoul">Ghoul</a></p>
  <p>
    <a href="https://ghoul.cloud">Website</a> •
    <a href="https://blog.ghoul.cloud">Blog</a> •
    <a href="https://github.com/xFGhoul">GitHub</a>
  </p>
</div>