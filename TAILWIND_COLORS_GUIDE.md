# 🎨 Guía de Colores Tailwind + Variables CSS

## ✅ Configuración Actualizada

Se ha configurado `tailwind.config.ts` para vincular las clases Tailwind con las variables CSS definidas en `globals.css`. Ahora puedes usar clases como:

### Colores Disponibles

| Clase Tailwind              | Variable CSS             | Uso                   |
| --------------------------- | ------------------------ | --------------------- |
| `bg-background`             | `--background`           | Fondo principal       |
| `text-foreground`           | `--foreground`           | Texto principal       |
| `border-border`             | `--border`               | Bordes                |
| `bg-card`                   | `--card`                 | Fondo de tarjetas     |
| `text-card-foreground`      | `--card-foreground`      | Texto en tarjetas     |
| `bg-primary`                | `--primary`              | Botones primarios     |
| `text-primary-foreground`   | `--primary-foreground`   | Texto en primario     |
| `bg-secondary`              | `--secondary`            | Elementos secundarios |
| `text-secondary-foreground` | `--secondary-foreground` | Texto secundario      |
| `bg-muted`                  | `--muted`                | Fondos atenuados      |
| `text-muted-foreground`     | `--muted-foreground`     | Texto atenuado        |
| `bg-accent`                 | `--accent`               | Acentos               |
| `text-accent-foreground`    | `--accent-foreground`    | Texto en acentos      |
| `ring-ring`                 | `--ring`                 | Outline/ring          |

### Colores Vivi Custom

| Clase Tailwind            | Color     |
| ------------------------- | --------- |
| `bg-vivi-dark`            | `#424658` |
| `bg-vivi-blue`            | `#6C739C` |
| `bg-vivi-green`           | `#678973` |
| `bg-vivi-beige`           | `#BABBB1` |
| `bg-vivi-pink`            | `#F0DAD5` |
| `bg-vivi-terracota-light` | `#DEA785` |
| `bg-vivi-terracota`       | `#C79576` |
| `bg-vivi-rose`            | `#D9A69F` |
| `bg-vivi-coral`           | `#C56B62` |

## 💡 Ejemplos de Uso

### Componente con Tema Automático

```jsx
// Fondo y texto cambian automáticamente según el modo oscuro/claro
<div className="bg-background text-foreground">
  <h1 className="text-2xl font-bold">Título</h1>
  <p className="text-muted-foreground">Subtítulo atenuado</p>
</div>
```

### Tarjeta con Estilo

```jsx
<div className="bg-card text-card-foreground p-4 rounded-lg border border-border">
  <h2>Título de Tarjeta</h2>
  <p className="text-muted-foreground">Contenido</p>
</div>
```

### Botón Primario

```jsx
<button className="bg-primary text-primary-foreground px-4 py-2 rounded">
  Botón Principal
</button>
```

### Usando Colores Vivi

```jsx
<div className="bg-vivi-pink text-vivi-dark p-4">Contenido con paleta Vivi</div>
```

## 🔄 Soporte Opacity

Todos los colores soportan opacidad:

```jsx
<div className="bg-background/50">Fondo con 50% opacidad</div>
<div className="text-foreground/75">Texto con 75% opacidad</div>
```

## 📱 Dark Mode

El cambio de modo oscuro se hace automáticamente gracias a las variables CSS en `.dark`:

```jsx
<html className="dark">{/* Los colores cambiarán automáticamente */}</html>
```

## 🎯 Ventajas

✅ **Sincronización Automática**: Los colores en componentes y en CSS están sincronizados  
✅ **Modo Oscuro**: Soporte completo sin cambiar clases  
✅ **Opacidad**: Todas las clases soportan `/` para transparencia  
✅ **Variables CSS**: Fáciles de personalizar en un solo lugar  
✅ **Compatibilidad**: Funciona con Tailwind v4, PostCSS y Vite
