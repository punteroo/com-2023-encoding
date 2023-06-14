# Portador de Tabla de Codificación 8B6T

Los valores de voltaje para los elementos de señal del esquema de codificación **8B6T** salen de una tabla pre-definida. Este pequeño sub-proyecto de Node se encarga de portar un CSV con estos valores para cada byte en números decimales con su representación en términos de voltaje (positivo, nulo, negativo) para ser utilizado en el proyecto principal luego.

## Uso
1. Instalar dependencias
```bash
# si no se tiene yarn, instalarlo.
$ npm i --global yarn

# instalar dependencias
$ yarn install
```

2. Correr el script de portación
```bash
$ yarn run convert
```

3. Copiar el output en la línea de [`encoder.js`](https://github.com/punteroo/com-2023-encoding/blob/main/script/encoder.js#L8) para el parseo automático luego.
4. Probar

