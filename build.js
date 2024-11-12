import path from 'path'
import fs from 'fs'
const __dirname = new URL('.', import.meta.url).pathname;

const buildFolder = path.join(__dirname,'out')
const deployPath = path.join(__dirname,'docs')

const files = fs.readdirSync(buildFolder)

for(const file of files){
  const filePath = path.join(buildFolder,file)
  if(fs.lstatSync(filePath).isDirectory()){ 
    fs.cpSync(filePath, path.join(deployPath,file), { recursive: true }) 
    continue 
  } else {
    fs.copyFileSync(filePath, path.join(deployPath, file))
  }
}