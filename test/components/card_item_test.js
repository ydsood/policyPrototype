import {expect, renderComponent} from '../test_helper';
import CardItem from '../../src/components/card_item';

describe('card item',()=>{
    let component;

    beforeEach(()=>{
        const props = { name:'BilldingMode', value:'Annually'};
        component = renderComponent(CardItem,props,undefined);
    })

    it('has component',()=>{
        expect(component).to.exist;
    })


    it('has correct item name', ()=>{
        
        console.log("TODO find better way to test");
        expect(component).to.exist;
    });

    it('has correct item value',()=>{
        console.log("TODO find better way to test");
        expect(component).to.exist;
    });

})