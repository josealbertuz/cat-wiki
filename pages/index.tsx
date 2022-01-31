import { ReactElement } from 'react';
import CatSearchSection from '../components/home/BreedSearchSection';
import WhyShouldYouHaveACatSection from '../components/home/WhyShouldYouHaveACatSection';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <>
      <CatSearchSection />
      <WhyShouldYouHaveACatSection />
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
