import { useQuery } from "react-query"
import { getCatBreeds } from "../api/services/cat-service"

export const useCatBreeds = (breed: string) => {

    return useQuery(['cat-breed', breed], () => getCatBreeds(breed), {
        enabled: Boolean(breed),
        select: (data) => data.data.map(breed => ({
            id: breed.id,
            breed: breed.name
        }))
    });

}