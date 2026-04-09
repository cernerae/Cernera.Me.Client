# customer_demos (Client repo)

React source code for customer demo sites hosted under `*.init1.biz`
(e.g. `neptune.init1.biz`, `poppys.init1.biz`).

Companion repo: [Cernera.Me.Deploy `customer_demos/`](../../Cernera.Me.Deploy/customer_demos/README.md) —
that's where the nginx container, compose file, and TLS certs live.

## Layout

```
customer_demos/
├── Dockerfile          # Parameterized by APP_NAME build-arg; builds any <app>/dist
├── shared/             # Shared JS/package deps installed before the app build
├── example_app/        # Template — copy this to start a new demo
├── neptune_app/        # → neptune.init1.biz
└── poppys_app/         # → poppys.init1.biz
```

The single `Dockerfile` is reused for every app. It installs `shared/`,
then installs and builds `${APP_NAME}/`, producing `/usr/src/app/${APP_NAME}/dist`.

## Creating a new demo app

Below, replace `foo_app` / `foo` with your new app name.

1. **Copy the template**
   ```bash
   cp -r customer_demos/example_app customer_demos/foo_app
   ```
   Update `customer_demos/foo_app/package.json` `name` field.

2. **Build it out** — edit source under `customer_demos/foo_app/src/`.
   Run locally with `cd customer_demos/foo_app && npm install && npm run dev`.

3. **Add the GitHub Actions workflow**
   Copy `.github/workflows/deploy-neptune-app.yml` to
   `.github/workflows/deploy-foo-app.yml` and replace every occurrence of
   `neptune_app` → `foo_app` and `neptune` → `foo`. This workflow:
   - Builds `cernerae/foo_app:latest` on Docker Hub via `customer_demos/Dockerfile`
     with `APP_NAME=foo_app`.
   - SSHes to the demos server and rebuilds/restarts the nginx container.
   - Triggers on pushes to `develop` touching `customer_demos/foo_app/**`,
     `customer_demos/shared/**`, or `customer_demos/Dockerfile`.

4. **Wire it into the nginx container** — see the deploy repo's
   [customer_demos README](../../Cernera.Me.Deploy/customer_demos/README.md)
   for the Dockerfile / docker-compose / nginx vhost changes.

5. **DNS** — add an A record `foo.init1.biz` → demos server IP.
   The `*.init1.biz` wildcard cert already covers any new subdomain, so no
   cert work is needed.

6. **Ship it** — merge both repos to `develop`. The client workflow builds
   & pushes the image, then rebuilds the nginx container on the server
   (which `git pull`s the deploy repo first to pick up compose/vhost changes).

## Deploy flow (recap)

```
push to develop (client repo, customer_demos/foo_app/**)
        │
        ▼
GitHub Actions: build cernerae/foo_app:latest  ──►  Docker Hub
        │
        ▼
SSH to demos server:
  git pull (client repo)
  docker compose -f customer_demos/docker/docker-compose.yml build --pull nginx
  docker compose -f customer_demos/docker/docker-compose.yml up -d nginx
        │
        ▼
nginx container pulls cernerae/foo_app:latest, copies dist/ into
/usr/share/nginx/foo_app, serves foo.init1.biz with the wildcard cert
```

> ⚠️ The compose file and nginx vhost live in **Cernera.Me.Deploy**, not here.
> A new demo is only live once *both* repos are merged to `develop` and the
> server has pulled the deploy repo. See the deploy README.
