import { rimraf } from 'rimraf';

import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const JPEGImages = 'src/img/*.jpg';
const PNGImages = 'src/img/*.png';
const output = 'dist/img';

(async () => {
  try {
    await rimraf(output);

    await imagemin([JPEGImages], {
      destination: output,
      plugins: [
        imageminMozjpeg({ quality: 70 }),
      ]
    });

    await imagemin([PNGImages], {
      destination: output,
      plugins: [
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });

    console.log('Images optimized successfully!');
  } catch (error) {
    console.error('Image optimization failed:', error);
  }
})();
