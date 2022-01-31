import axiosInstance from '../axios-instance';
import { CatBreedsResponse } from '../../types/cat-types';

export const getCatBreedByName = (breed: string) => {
    return axiosInstance.get<CatBreedsResponse[]>(`/breeds/search?q=${breed}`);
}

export const getAllCatBreeds = () => {
    return axiosInstance.get<CatBreedsResponse[]>('/breeds');
}