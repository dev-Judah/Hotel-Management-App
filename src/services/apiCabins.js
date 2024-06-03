import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Error loading cabins");
  }

  return cabins;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`Error deleting cabin id:${id}`);
  }

  return data;
};

export const createEditCabin = async (newCabin, id) => {
  //check if image is same as one in db (contains supabase.com url) or if its a new image.
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  //https://tqtznuzbydyymqiedxir.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg\

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1. create cabin
  let query = supabase.from("cabins");
  if (!id)
    //A) CREATE
    query = query.insert([{ ...newCabin, image: imagePath }]);

  //B) UPDATE

  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error(`Error adding new cabin`);
  }
  //2. upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      `Cabin Image could not be uplaoded, and the cabin was not created try again later`,
    );
  }
  return data;
};
