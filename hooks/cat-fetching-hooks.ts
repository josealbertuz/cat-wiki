import { useQuery } from "react-query"
import { getCatBreedByName } from "../api/services/cat-service"

export const useCatBreedsByName = (breed: string) => {

    return useQuery(['cat-breed', breed], () => getCatBreedByName(breed), {
        enabled: false,
        select: (data) => data.data.map(breed => ({
            id: breed.id,
            breed: breed.name
        }))
    });

}