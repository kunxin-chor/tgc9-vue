# tgc9-vue

## Install dependencies
```
npm install -g @vue/cli
```

## Create project
```
vue create project-name
```

## Disable host check
Create the file `vue.config.js` in the project folder
```
module.exports = {
    devServer: {
        disableHostCheck:true
    }
}
```