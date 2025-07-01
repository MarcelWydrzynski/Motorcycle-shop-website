const generateSlug = (brand: string, model: string) => {
  return `${brand}-${model}`.toLowerCase().replace(/\s+/g, "-");
};

export default generateSlug;
