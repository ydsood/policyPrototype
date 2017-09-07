import { renderComponent , expect } from '../test_helper';
import Card from '../../src/components/card';

describe('Card Component', () => {
    let component;

    beforeEach(() => {
        const props = {
            title: 'Foo',
            items: []
        };
        component = renderComponent(Card, props, undefined);
    });

    it('should render', () => {
        expect(component).to.exist;
    })
});