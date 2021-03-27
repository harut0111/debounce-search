export interface resultType {
  message: string;
  status: string;
}

export default class Api {
  static fetchRandomDogs = async (): Promise<resultType> => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (response.ok) return await response.json();
    throw new Error(`An arror has occurrd' ${response.status}`);
  };
}
