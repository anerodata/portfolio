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

1. Comment in ```.gitignore``` the ```/dist``` folder line.

2. Run the command ```npm run build```

3. Don't commit ```.gitignore``` changes

4. Echo CNAME for point web to domain ```echo 'anerodata.com' > dist/CNAME```

5. ```git add dist/```

6. ```git commit -m "Building for production"```

7. ```git subtree push --prefix dist origin gh-pages```

8. Comment in ```.gitignore``` the ```/dist``` folder.

```
npm run build
echo 'anerodata.com' > dist/CNAME
git add dist/
git commit -m "Building for production"
git subtree push --prefix dist origin gh-pages
```