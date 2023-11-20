import { API_URL } from "../utils/api";

export const getBase64FromUrl = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

export const base64ImageToBlob = (str) => {
  var pos = str.indexOf(";base64,");
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);
  var imageContent = atob(b64);
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  for (var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  var blob = new Blob([buffer], { type: type });

  Object.assign(blob, {
    preview: URL.createObjectURL(blob),
  });

  return blob;
};

export const convertImgToBlob = async (imgArr, moduleName) => {
  let images = [];

  for (let index = 0; index < imgArr.length; index++) {
    const image = `${API_URL}/static/${moduleName}/${imgArr[index].filename}`;
    const base64 = await getBase64FromUrl(image);
    const convertedFile = base64ImageToBlob(base64);
    const filename = imgArr[index]?.filename?.split("_");
    filename?.splice(0, 1);
    const oldName = filename.join("_");
    Object.assign(convertedFile, {
      name: oldName,
      path: oldName,
    });
    images.push(convertedFile);
  }

  return images;
};
