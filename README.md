# DDC Vue – Projektkezelő alkalmazás

Egyszerű Vue 3 alapú projektkezelő SPA, amely lehetővé teszi projektek létrehozását, szerkesztését, szűrését és törlését. Az adatok a böngésző `localStorage`-ában tárolódnak, nincs szükség backendre.

---

## Technológiák

| Csomag | Szerepe |
|---|---|
| Vue 3 | UI keretrendszer (Composition API, `<script setup>`) |
| Vue Router 5 | Kliensoldali routing |
| Pinia 3 | Globális állapotkezelés (toast, confirm modal) |
| Bootstrap 5 | CSS keretrendszer |
| Vite 8 | Fejlesztői szerver és build tool |
| Vitest | Egységtesztek futtatása |
| Docker / nginx | Konténerizált fejlesztés és produkciós kiszolgálás |

---

## Indítás

### Docker-rel (ajánlott)

```bash
docker compose up
```

Az alkalmazás elérhető: **http://localhost:5173**

### Lokálisan

```bash
npm install
npm run dev
```

### Produkciós build

```bash
npm run build       # dist/ könyvtárba buildel
npm run preview     # a build előnézete lokálisan
```

#### Produkciós Docker image (nginx)

```bash
docker build --target prod -t ddc-vue .
docker run -p 80:80 ddc-vue
```

---

## Projekt struktúra

```
ddc-vue/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── main.js                    # Alkalmazás belépési pontja
│   ├── App.vue                    # Gyökér komponens (Navbar, Toast, ConfirmModal)
│   ├── style.css                  # Globális stílusok
│   │
│   ├── router/
│   │   └── index.js               # Útvonalak definíciója
│   │
│   ├── stores/                    # Pinia store-ok
│   │   ├── modal.js               # Confirm modal állapot + Promise-alapú open/close
│   │   └── toast.js               # Toast értesítések állapota
│   │
│   ├── composables/               # Újrafelhasználható logika
│   │   ├── useProjects.js         # CRUD műveletek a projekteken
│   │   ├── useProjectStorage.js   # localStorage olvasás/írás
│   │   ├── useValidation.js       # Projekt form validáció
│   │   ├── useFilters.js          # Lista szűrés logikája
│   │   └── __tests__/
│   │       ├── useProjects.test.js
│   │       └── useValidation.test.js
│   │
│   ├── views/                     # Oldalszintű komponensek (router-hez)
│   │   ├── ProjectsView.vue       # Projektek lista + szűrés + törlés
│   │   ├── ProjectCreateView.vue  # Új projekt létrehozása
│   │   ├── ProjectEditView.vue    # Meglévő projekt szerkesztése
│   │   └── NotFoundView.vue       # 404-es oldal
│   │
│   ├── models/
│   │   └── project.js             # Project factory függvény (createProject)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.vue         # Navigációs sáv
│   │   │   └── FormLayout.vue     # Form oldalak közös elrendezése
│   │   │
│   │   ├── project/
│   │   │   ├── ProjectList.vue    # Lista wrapper (ProjectTable-t renderel)
│   │   │   └── ProjectForm.vue    # Projekt adatbeviteli form
│   │   │
│   │   └── common/
│   │       ├── Filter.vue         # Keresőmező (v-model)
│   │       ├── Toast.vue          # Értesítés megjelenítő
│   │       ├── ConfirmModal.vue   # Megerősítő párbeszédablak
│   │       ├── ProjectTable.vue   # Projektek táblázata (újrafelhasználható)
│   │       └── inputs/
│   │           ├── TextInput.vue
│   │           ├── NumberInput.vue
│   │           ├── DateInput.vue
│   │           ├── Textarea.vue
│   │           └── Button.vue
│   │
│   └── utils/
│       ├── formatCurrency.js      # Pénznem formázás (hu-HU)
│       ├── formatDate.js          # Dátum formázás
│       ├── isValidBudget.js       # Budget validáció (0–100 000 000, egész szám)
│       └── nextProjectId.js       # Következő ID generálás
│
├── Dockerfile                     # Többlépéses build (deps / dev / build / prod)
├── docker-compose.yml             # Fejlesztői konténer hot-reload-dal
├── nginx.conf                     # Nginx konfig a produkciós image-hez
├── vite.config.js
└── package.json
```

---

## Útvonalak

| URL | Nézet | Leírás |
|---|---|---|
| `/` | — | Átirányít `/projects`-re |
| `/projects` | `ProjectsView` | Projektek listája, szűrés, törlés |
| `/projects/new` | `ProjectCreateView` | Új projekt felvitele |
| `/projects/:id/edit` | `ProjectEditView` | Projekt szerkesztése |
| `/*` | `NotFoundView` | 404-es oldal |

---

## Adatkezelés

Az adatok **kizárólag a böngésző `localStorage`-ában** tárolódnak a `projects` kulcs alatt. Szerver vagy adatbázis nem szükséges.

```
localStorage["projects"] = JSON tömb a projekt objektumokkal
```

A `useProjects` composable singleton-szerűen működik: a `load/save` hívásokat a `useProjectStorage` végzi, a CRUD logika (`addProject`, `updateProject`, `removeProject`, `getProject`) pedig erre épül.

---

## Állapotkezelés (Pinia)

| Store | Felelősség |
|---|---|
| `modal` | `open(title, message)` → Promise, `close(ok)` feloldja |
| `toast` | Rövid időre megjelenő értesítések |

---

## Tesztek

```bash
npm test           # egyszeri futtatás
npm run test:watch # watch mód (fejlesztés közben)
```

| Tesztfájl | Mit fed le |
|---|---|
| `useValidation.test.js` | Form validáció: kötelező mezők, budget szabályok, hibaüzenetek |
| `useProjects.test.js` | CRUD műveletek: add, update, remove, getProject, storage hívások |
