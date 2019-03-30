import React from 'react';
import styled from 'styled-components';
import { MdClose as CloseIcon } from 'react-icons/md';
import GralleryNext from './GralleryNext';
import GralleryPrev from './GralleryPrev';
import GralleryMedia from './GralleryMedia';
import GralleryActive from './GralleryActive';

const GalleryViewerOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.8);
`;

const GalleryViewerBlock = styled.div`
  display: block;
  position: fixed;
  overflow: auto;
  overflow-y: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3000;
  text-align: center;
  ::before {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    content: '';
  }
  .contents {
    display: inline-block;
    position: relative;
    width: 768px;
    min-width: 592px;
    min-height: 945px;
    background-color: rgb(64, 60, 35);
    border-radius: 7px;
    .close {
      cursor: pointer;
      position: fixed;
      right: 20px;
      top: 8px;
      height: 20px;
      line-height: 0;
      padding: 0;
      border: 0;
      color: white;
      background: transparent;
      background-color: transparent;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

interface GalleryViewerProps {
  images: string[];
}

const { useState, useCallback } = React;

const GalleryViewer: React.SFC<GalleryViewerProps> = ({ images }) => {
  const [location, setLocation] = useState(0);

  const onNext = useCallback(() => {
    if (location === images.length - 1) {
      return setLocation(0);
    }
    let result = location + 1;
    return setLocation(result);
  }, [location, images]);

  const onPrev = useCallback(() => {
    let result: number = 0;
    if (location <= 0) {
      result = images.length - 1;
      return setLocation(result);
    }
    result = location - 1;
    return setLocation(result);
  }, [location, images]);

  return (
    <React.Fragment>
      <GalleryViewerOverlay />
      <GalleryViewerBlock>
        <div className="contents">
          <button className="close">
            <CloseIcon />
          </button>
          {images.map((image, index) =>
            location === index ? (
              <GralleryMedia visible={true} image={image} />
            ) : (
              <GralleryMedia visible={false} image={image} />
            ),
          )}
          <GralleryPrev onClick={onPrev}/>
          <GralleryNext onClick={onNext}/>
          <GralleryActive images={images} location={location} />
        </div>
      </GalleryViewerBlock>
    </React.Fragment>
  );
};

export default GalleryViewer;
