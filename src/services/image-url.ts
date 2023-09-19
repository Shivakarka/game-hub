const getCroppedImageUrl = (url: string) => {
  if (!url) return url;
  const croppedUrl = url.replace("/media/games/", "/media/crop/600/400/games/");
  return croppedUrl;
};

export default getCroppedImageUrl;
