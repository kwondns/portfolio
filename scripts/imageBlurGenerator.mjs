import { getPlaiceholder } from 'plaiceholder';
import {readFile,readdir, writeFile} from 'node:fs/promises'

const generateBlur = async () => {
  const files = await readdir(`public/images`, { recursive: true });
  const blurObject = {}
  for (const filePath of files) {
    if (filePath.endsWith(".png")) {
      const fullPath = `public/images/${filePath}`
      const buffer = await readFile(fullPath)
      const { ...plaiceholder } = await getPlaiceholder(buffer)
      blurObject[`/images/${filePath}`] = plaiceholder.base64
    }
  }
  await writeFile('src/app/_constants/blur.ts', `const blurObject:{[key:string]:string}=${JSON.stringify(blurObject)};export default blurObject`)
}

generateBlur()
