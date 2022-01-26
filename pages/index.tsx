import { ReactElement } from 'react';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <div>
      cat-wiki home page
    </div>
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
