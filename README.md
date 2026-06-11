# 😏 SarcastiBot — AI Chat App

> *Helpful. But on its own terms. / Útil. Pero a su manera.*

**[Live Demo →](https://ai-chat-app-navy-chi.vercel.app/)**

![SarcastiBot Screenshot](./docs/screenshot.png)

---

## 🇺🇸 English

### What is this?

SarcastiBot is an AI-powered chat application with a sarcastic and witty personality. It gives you real, useful answers — just with a healthy dose of irony and humor on the side.

Built as a personal AI engineering project to explore LLM integration, streaming responses, and secure API key management in a modern web stack.

### Features

- 💬 Real-time streaming responses (token by token)
- 😏 Sarcastic personality powered by a custom system prompt
- 🔒 Secure API key handling via Vercel serverless functions
- 🌙 Clean dark UI built with Tailwind CSS
- ⌨️ Send messages with Enter key or button click
- 📜 Full conversation history sent on each request

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 + React + TypeScript |
| Styling | Tailwind CSS |
| AI Model | Llama 3.3 70B via Groq API |
| Backend | Next.js API Routes (serverless) |
| Deployment | Vercel |

### How it works

```
User (Browser)
      ↓
   page.tsx        → React UI, manages state and streaming
      ↓
  /api/chat        → Serverless function (API key lives here, never exposed)
      ↓
   Groq API        → Llama 3.3 70B generates the response
```

The API key is stored as a Vercel environment variable and never reaches the client browser.

### Run locally

```bash
# Clone the repo
git clone https://github.com/FranJimenezQ/AI-chat-app.git
cd AI-chat-app/frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Add your Groq API key → https://console.groq.com

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your free API key at [console.groq.com](https://console.groq.com)

---

## 🇪🇸 Español

### ¿Qué es esto?

SarcastiBot es una aplicación de chat con inteligencia artificial y personalidad sarcástica. Te da respuestas reales y útiles — solo que con una buena dosis de ironía y humor incluida.

Desarrollado como proyecto personal de AI Engineering para explorar integración con LLMs, respuestas en streaming y manejo seguro de API keys en un stack web moderno.

### Características

- 💬 Respuestas en tiempo real con streaming (token por token)
- 😏 Personalidad sarcástica definida mediante un system prompt personalizado
- 🔒 API key segura gestionada desde funciones serverless de Vercel
- 🌙 Interfaz oscura y limpia construida con Tailwind CSS
- ⌨️ Envío de mensajes con Enter o botón
- 📜 Historial completo de conversación enviado en cada petición

### Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 15 + React + TypeScript |
| Estilos | Tailwind CSS |
| Modelo IA | Llama 3.3 70B vía Groq API |
| Backend | API Routes de Next.js (serverless) |
| Deploy | Vercel |

### Cómo funciona

```
Usuario (Browser)
      ↓
   page.tsx        → UI en React, maneja estado y streaming
      ↓
  /api/chat        → Función serverless (la API key vive aquí, nunca se expone)
      ↓
   Groq API        → Llama 3.3 70B genera la respuesta
```

La API key se almacena como variable de entorno en Vercel y nunca llega al browser del usuario.

### Correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/FranJimenezQ/AI-chat-app.git
cd AI-chat-app/frontend

# Instalar dependencias
npm install

# Crear archivo de variables de entorno
cp .env.example .env.local
# Agregar tu Groq API key → https://console.groq.com

# Iniciar servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

### Variables de Entorno

```env
GROQ_API_KEY=tu_groq_api_key_aqui
```

Obtené tu API key gratis en [console.groq.com](https://console.groq.com)

---

## Author / Autor

**Francisco Jiménez** — [GitHub](https://github.com/FranJimenezQ)

---

*Made with sarcasm and surprisingly little patience. / Hecho con sarcasmo y sorprendentemente poca paciencia.*
