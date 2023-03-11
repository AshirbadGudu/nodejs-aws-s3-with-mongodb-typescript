# NodeJS AWS S3 API With MongoDB & TypeScript

## Step By Step Process For Creating

### Create Project With `yarn`

```sh
yarn init -y
```

### Create a `.gitignore` file

```sh
touch .gitignore
```

### Add following content to `.gitignore`

```gitignore
# Node.js
node_modules/
npm-debug.log
yarn-error.log
*.env

# TypeScript
*.js.map
*.tsbuildinfo
dist/
```

### Add the `typescript` dependencies

```sh
yarn add -D typescript ts-node @types/node
```

### Create `tsconfig.json` file

```sh
touch tsconfig.json
```

### Add the following to `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "sourceMap": true
  },
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Add the scripts to the `package.json` file

```json
{
  "scripts": {
    "start": "node ./dist/index.js",
    "dev": "nodemon --exec ts-node ./src/index.ts",
    "build": "tsc"
  }
}
```

### Create a proper folder structure

> Create Folders

```sh
mkdir -p src/{configs,controllers,helpers,middleware,models,routes,types,validations}
```

> Create `index.ts` files

```sh
touch  src/index.ts
touch  src/configs/index.ts
touch  src/controllers/index.ts
touch  src/helpers/index.ts
touch  src/middleware/index.ts
touch  src/models/index.ts
touch  src/types/index.ts
touch  src/validations/index.ts
```

### Add required dependencies and dev dependencies

```sh
yarn add @aws-sdk/client-s3 @aws-sdk/s3-request-presigner cors dotenv express express-validator mongoose multer
yarn add -D @types/cors @types/express @types/multer
```
