import {renderComponent, expect} from '../test_helper';
import ResultList from '../../src/components/result_list';

describe('Result List', () => {

    let component;    

    beforeEach(()=>{
        const props = {
                policies : [
                    {
                        _Self : "/resources/Policy/Conv_WL_Values_TC01",
                        policyNumber : "Conv_TL_Values_TC01",
                        name : "Jimmy  Myi_Conv1",
                        status : "Active",
                        issueAge : "65",
                        dateOfBirth : "1947-01-07T00:00:00",
                        governmentId : "414287567",
                        lineOfBusiness : "Traditional Life",
                        applicationReceivedDate : "1900-01-01T00:00:00"
                    },
                    {
                        _Self : "/resources/Policy/Conv_WL_Values_TC02",
                        policyNumber : "Conv_WL_Values_TC02",
                        name : "Jimmy  Myi_Conv2",
                        status : "Pending",
                        issueAge : "65",
                        dateOfBirth : "1947-01-07T00:00:00",
                        governmentId : "414287567",
                        lineOfBusiness : "Whole Life",
                        applicationReceivedDate : "1900-01-01T00:00:00"
                    },
                    {
                        _Self : "/resources/Policy/Conv_WL_Values_TC03",
                        policyNumber : "Conv_TL_Values_TC01",
                        name : "Jimmy  Myi_Conv3",
                        status : "Active",
                        issueAge : "65",
                        dateOfBirth : "1947-01-07T00:00:00",
                        governmentId : "414287567",
                        lineOfBusiness : "Traditional Life",
                        applicationReceivedDate : "1900-01-01T00:00:00"
                    }
                ]
            };
        component = renderComponent(ResultList, props, undefined);
    });


    it('is rendered', ()=>{
        expect(component).to.exist;
    });

    it('has correct class', ()=>{
        expect(component).to.have.class('result-list');
    });

    it('has all items', ()=>{
        expect(component.find('.card')).to.have.length(3);
    });
});