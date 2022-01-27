import axiosInstance from '../axios-instance';
import { CatBreedsResponse } from '../../types/cat-types';

export const getCatBreeds = (breed: string) => {
    return axiosInstance.get<CatBreedsResponse[]>(`/breeds/search?q=${breed}`);
}