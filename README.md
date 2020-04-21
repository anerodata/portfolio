# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### To Build for production ([source](https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd)):

1. Uncomment in ```.gitignore``` the ```/dist``` folder.

2. Run the command ```npm run build```

3. Don't commit ```.gitignore``` changes

4. Run thid command:
``` git subtree push --prefix dist origin gh-pages```

5. Comment in ```.gitignore``` the ```/dist``` folder.