"use server";

export async function handleForm(prevState: any,formData: FormData){
  console.log(prevState);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      error: "wront password",
    }
  }