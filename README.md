# Laboratorio 3 - Criptografía y Seguridad en Redes

Este repositorio contiene el desarrollo del Laboratorio 3, enfocado en el análisis de hashing de contraseñas del lado del cliente y la evaluación de un posible ataque Pass the Hash.

## Repositorio base utilizado

La aplicación analizada fue entregada por el profesor:

https://github.com/mrcl-ynz/client-side-hashing

## Objetivo

Auditar la implementación de hashing de contraseñas en el cliente, identificando el algoritmo utilizado, generando el hash desde la consola del navegador, interceptando el tráfico con BurpSuite y probando la reutilización del hash en un intento de login.

## Herramientas utilizadas

- Git
- GitHub
- Docker
- Docker Compose
- Navegador web
- Consola del navegador
- BurpSuite
- LaTeX

## Estructura del repositorio

- `informe/`: informe final en LaTeX y PDF.
- `imagenes/`: capturas utilizadas como evidencia.
- `codigo/`: comandos y scripts usados durante el laboratorio.
- `evidencias/`: bitácora del proceso realizado.

## Actividades principales

1. Clonación del repositorio entregado por el profesor.
2. Ejecución de la aplicación en entorno local.
3. Registro de un usuario de prueba.
4. Identificación del algoritmo de hash utilizado.
5. Generación del hash desde consola.
6. Interceptación del login con BurpSuite.
7. Modificación del hash en la solicitud interceptada.
8. Análisis de la vulnerabilidad Pass the Hash.
9. Elaboración del informe final.
