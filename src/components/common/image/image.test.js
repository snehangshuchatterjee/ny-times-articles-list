import React from 'react';
import { shallow } from 'enzyme';

import ImageComponent from './'

describe("Image Component", () => {
    let imageData, imageIndex, wrapper;

    beforeEach(() => {
        imageIndex = 0
        imageData = {
            'copyright': "test copyright",
            'media-metadata': [
                {
                    url: "testURL",
                    width: 1280,
                    height: 720
                }
            ]
        }
    });

    it("should render the component properly without crashing", () => {
        wrapper = shallow(<ImageComponent imageData={imageData} imageIndex={imageIndex} />);
        expect(wrapper.find("figure").length).toEqual(1);
    });

    it("should print unknown if copyright info is unavailable", () => {
        imageData.copyright = undefined;
        wrapper = shallow(<ImageComponent imageData={imageData} imageIndex={imageIndex} />);
        expect(wrapper.find("figcaption").text()).toEqual("Photo By: Unknown");
    });
});