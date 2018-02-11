module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "jest",
    "class-property"
  ],
  "env": {
    "jest/globals": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/no-danger": 0,
    "react/prefer-stateless-function": 0,
    "no-return-assign": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        paths: [`${__dirname}/example`, `${__dirname}/src`]
      }
    }
  }
}