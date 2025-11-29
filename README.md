# Psi.app (Beta)

## 📂 Ubicación del Proyecto
El proyecto se encuentra en:
`C:\Users\lagie\.gemini\antigravity\scratch\psi_app`

## 🚀 Cómo ejecutarlo localmente

1.  **Instala las dependencias:**
    ```bash
    npm install
    ```

2.  **Configura Firebase:**
    - Copia el archivo `.env.example` a `.env.local`
    - Completa las variables con tus credenciales de Firebase
    - Si no tienes Firebase configurado, la app funcionará pero sin guardar leads

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abre el navegador** en la URL que te muestre (usualmente `http://localhost:5173`).

## ☁️ Despliegue en Vercel

1.  Sube este código a un repositorio de GitHub.
2.  Ve a [Vercel](https://vercel.com) e importa el repositorio.
3.  Vercel detectará automáticamente que es un proyecto **Vite**.
4.  Configura las variables de entorno en Vercel (Settings → Environment Variables).
5.  Dale a "Deploy". ¡Listo!

## 🛠️ Estado Actual
- [x] Estructura de carpetas modular
- [x] Configuración de Vite + Tailwind + Framer Motion
- [x] Datos Maestros (`decisionTree.js`, `interventions.js`)
- [x] Lógica de Diagnóstico (DiagnosticContext)
- [x] Componentes UI (QuizCard, ResultCard, LockOverlay, WaitlistCard)
- [x] Páginas (Landing, Quiz, Result)
- [x] Routing con React Router
- [x] Integración con Firebase (Firestore para leads)

## 📁 Estructura del Proyecto
```
src/
├── components/
│   └── layout/
│       └── Layout.jsx          # Header y estructura base
├── data/
│   ├── decisionTree.js         # Árbol de preguntas
│   └── interventions.js        # 15 perfiles psicológicos
├── features/
│   ├── diagnostic/
│   │   └── QuizCard.jsx        # Tarjeta de preguntas
│   └── results/
│       ├── ResultCard.jsx      # Visualización de perfil
│       ├── LockOverlay.jsx     # Lead gating
│       └── WaitlistCard.jsx    # Lista VIP
├── hooks/
│   └── useDiagnostic.jsx       # Context para estado del quiz
├── pages/
│   ├── LandingPage.jsx         # Página inicial
│   ├── QuizPage.jsx            # Flujo de preguntas
│   └── ResultPage.jsx          # Resultados
├── services/
│   └── firebase.js             # Configuración de Firebase
├── App.jsx                     # Router principal
└── main.jsx                    # Entry point
```


## ☁️ Despliegue en Vercel

1.  Sube este código a un repositorio de GitHub.
2.  Ve a [Vercel](https://vercel.com) e importa el repositorio.
3.  Vercel detectará automáticamente que es un proyecto **Vite**.
4.  Dale a "Deploy". ¡Listo!

## 🛠️ Estado Actual
- [x] Estructura de carpetas
- [x] Configuración de Vite + Tailwind
- [x] Datos Maestros (`decisionTree.js`, `interventions.js`)
- [ ] Lógica de Diagnóstico (Hooks)
- [ ] Interfaz de Usuario (Componentes)
