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
    });

    it('should have class', () => {
        expect(component).to.have.class('card');
    });

    it('should have title', () => {
        expect(component.find('h4')).to.have.text('Foo');
    });
});