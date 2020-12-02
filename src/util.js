// Media Resize

export const smallImage = (imagePath, size) => {
  // If the path to the image (that we take from the arguemtns) contains /media\/screenshots/ then replace it with a lower size, if not then replace the other link with the lower size image.
  // At last we return the image.

  // We do this because we have two types of images => game images, screenshots

  const image = imagePath.match(/media\/screenshots/)
    ? // This is for resizing screenshots
      imagePath.replace(
        "media/screenhots",
        `media/resize/${size}/-/screenshots`
      )
    : // This is for resizing game images
      imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);

  return image;
};
