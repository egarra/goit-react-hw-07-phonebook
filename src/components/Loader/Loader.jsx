import { Watch } from 'react-loader-spinner';
import { LoaderWrapper, Preloader, PreloaderLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <Preloader>
      <PreloaderLoader>
          <LoaderWrapper>
            <Watch
              height="120"
              width="120"
              radius="48"
              color="rgb(27 180 139)"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </LoaderWrapper>
      </PreloaderLoader>
    </Preloader>
  );
};

