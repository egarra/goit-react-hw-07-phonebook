import styled from 'styled-components';

export const Preloader = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 1000;
`
export const PreloaderLoader = styled.div`
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const LoaderWrapper = styled.div`
    width: 120px;
    margin: 0 auto;
    margin-top: 200px;
    text-align: center;
`