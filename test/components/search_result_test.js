import {renderComponent, expect} from '../test_helper';
import SearchResult from '../../src/components/search_result';

describe('Search Result Component', ()=>{
    let component;

    beforeEach(()=>{
        const props = {
            data : {
                _Self : "/resources/Policy/Conv_WL_Values_TC01",
                policyNumber : "Conv_WL_Values_TC01",
                name : "Jimmy  Myi_Conv",
                status : "Active",
                issueAge : 65,
                dateOfBirth : "1947-01-07T00:00:00",
                governmentId : "414287567",
                lineOfBusiness : "Traditional Life",
                applicationReceivedDate : "1900-01-01T00:00:00"
            }
        };
        component = renderComponent(SearchResult, props);
    });

    it('is rendered', ()=>{
        expect(component).to.exist;
    });
    
    it('renders all properties',()=>{
        expect(component.find('li')).to.have.length(9);
    });

    describe('has line items', ()=>{
        it('has policy number', () => {
            expect(component.find('ul')).to.contain('policyNumber');
        });
        it('has name', () => {
            expect(component.find('ul')).to.contain('name');
        });
        it('has status', () => {
            expect(component.find('ul')).to.contain('status');
        });
        it('has issueAge', () => {
            expect(component.find('ul')).to.contain('issueAge');
        });
        it('has dateOfBirth', () => {
            expect(component.find('ul')).to.contain('dateOfBirth');
        });
        it('has governmentId', () => {
            expect(component.find('ul')).to.contain('governmentId');
        });
        it('has lineOfBusiness', () => {
            expect(component.find('ul')).to.contain('lineOfBusiness');
        });
        it('has applicationReceivedDate', () => {
            expect(component.find('ul')).to.contain('applicationReceivedDate');
        });
    });
});