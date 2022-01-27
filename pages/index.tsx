import { ReactElement } from 'react';
import CatSearchSection from '../components/home/BreedSearchSection';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <>
      <CatSearchSection />
    </>
  )
}

Home.getLayout = function(page: ReactElement) {
  return (
    <AppLayout>
      { page }
    </AppLayout>
  )
}

export default Home
