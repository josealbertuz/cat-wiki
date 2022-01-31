import { ReactElement } from 'react';
import AppLayout from '../../layouts/AppLayout';
import { getAllCatBreeds, getCatBreedByName } from '../../api/services/cat-service';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

const CatBreedDetailsPage = ({ catBreed }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <pre>
                {
                    JSON.stringify(catBreed, undefined, 1)
                }
            </pre>
        </>
    )
}

CatBreedDetailsPage.getLayout = function (page: ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

type BreedDetailsPageParams = ParsedUrlQuery & {
    breedId: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: breeds } = await getAllCatBreeds();

    return {
        paths: breeds.map(breed => ({
            params: {
                breedId: breed.id
            }
        })),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async (context) => {

    const { breedId } = context.params as BreedDetailsPageParams;

    const { data: catBreed } = await getCatBreedByName(breedId);

    return {
        props: {
            catBreed: catBreed.shift()
        }
    }
}

export default CatBreedDetailsPage;