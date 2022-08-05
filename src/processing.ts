import sharp from 'sharp'
import  fs  from 'fs'



//resize function
const imageExist = (imagePath: unknown): boolean => {
  if (fs.existsSync(`images/${imagePath}.jpg` as string)) {
    return true
  }
  return false
}
const resizeImage = async (filename: unknown, width: number, height: number) => {
  try {
  
     await sharp(`images/${filename}.jpg`)
        .resize(width, height)
        .toFile(`thumb/${filename}+${width}X${height}output.jpg`);
      
    
} catch (err) {
    console.log(err)
}
}

export default {resizeImage,imageExist} 