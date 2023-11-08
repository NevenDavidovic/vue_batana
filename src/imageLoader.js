const images = require.context(
  "@/assets/gallery/",
  true,
  /\.(png|jpe?g|gif|svg)$/
);

const imagePaths = images.keys().map(images);

export default imagePaths;
