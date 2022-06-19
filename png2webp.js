import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

(async ()=>{
    const files = await imagemin(['sources/*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [
            // imageminJpegtran(),
            // imageminPngquant({
            // 	quality: [0.6, 0.8]
            // })
            imageminWebp()
        ]
    });
})();


