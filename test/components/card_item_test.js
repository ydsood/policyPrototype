import {expect, renderComponent} from '../test_helper';
import CardItem from '../../src/components/card_item';

describe('card item',()=>{
    let component;

    beforeEach(()=>{
        const state = { name:'BilldingMode', value:'Annually'};
        component = renderComponent(CardItem,null,state);
    })

    it('has correct item name', ()=>{
        expect(component.find('li').find('span')).to.have.value('BillingMode');
    });

    it('has correct item value',()=>{
        expect(component.find('li')).to.have.value('Annually');
    });

})