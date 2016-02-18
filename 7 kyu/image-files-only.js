// http://www.codewars.com/kata/image-files-only/solutions/javascript/me

const imageFilter = a => a.map(s => s.match(/(.+?)\.(gif|png|jpg|tiff|svg|bmp)$/i));