// Reference: https://github.com/souporserious/bundling-typescript-with-esbuild-for-npm

const { build } = require('esbuild')
const { dependencies } = require('./package.json')

const entryFile = 'src/index.ts'
const shared = {
    bundle: true,
    entryPoints: [entryFile],
    external: Object.keys(dependencies),
    logLevel: 'info',
    minify: true,
    sourcemap: true,
}

build({
    ...shared,
    format: 'esm',
    outfile: './dist/esm/index.js',
    target: ['esnext'],
})

build({
    ...shared,
    format: 'cjs',
    outfile: './dist/cjs/index.js',
    target: ['esnext'],
})

build({
    bundle: true,
    entryPoints: ['src/styles/index.css'],
    outfile: './dist/index.css',
    minify: true,
    sourcemap: true,
})
