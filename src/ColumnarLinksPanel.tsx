
declare var manywho: any;

import * as React from 'react';
import './LinksPanel.css';

class ColumnarLinksPanel extends React.Component<any, any> 
{   
    componentId: string = "";
    flowKey: string ="";    
    attributes : any = {};
    selectedItem: string = null;

    text : string = "";

    constructor(props : any)
	{
        super(props);
        
        this.componentId = props.id;
        this.flowKey = props.flowKey;

        //push attributes into keyed map 
		var flowModel = manywho.model.getComponent(this.props.id,   this.props.flowKey);
		if(flowModel.attributes)
		{
			for(var key in flowModel.attributes)
			{
				this.attributes[key] = flowModel.attributes[key];
			}
        }
    }

    
    componentDidMount() 
    {
        this.forceUpdate();
    }

    componentDidUpdate()
    {

    }

	getAttribute(attributeName : string)
	{
		if(this.attributes[attributeName])
		{
			return this.attributes[attributeName];
		}
		else
		{
			return null;
		}
	}

       
    render()
    {
        const flowModel = manywho.model.getComponent(this.componentId,   this.flowKey);
        const flowState = manywho.state.getComponent(this.componentId,   this.flowKey);

        var cols : any = [];
        //get the data
        var groups = flowModel.objectData;

        if(groups && groups.length > 0)
        {
            for(var gpos = 0 ; gpos < groups.length ; gpos++ )
            {
                var group = groups[gpos];
                var displayOrder = manywho.utils.getObjectDataProperty(group.properties,"Display Order").contentValue;
                var caption = manywho.utils.getObjectDataProperty(group.properties,"Caption").contentValue;
                var items = manywho.utils.getObjectDataProperty(group.properties,"Children").objectData;
                var link = manywho.utils.getObjectDataProperty(group.properties,"Link").contentValue;

                var colContent = null;
                if(link)
                {
                    colContent = <div>
                                        <a href={link} target="_blank" className="columnar-links-panel-column-link">
                                            <span>{caption}</span>
                                        </a>
                                </div>
                }
                else
                {
                    colContent = <div>
                                    <span>{caption}</span>
                                </div>
                }

                var links : any = [];
                if(items && items.length > 0)
                {
                    for (var ipos = 0 ; ipos < items.length ; ipos++)
                    {
                        var item = items[ipos];
                        var idisplayOrder = manywho.utils.getObjectDataProperty(item.properties,"Display Order").contentValue;
                        var icaption = manywho.utils.getObjectDataProperty(item.properties,"Caption").contentValue;
                        var ilink = manywho.utils.getObjectDataProperty(item.properties,"Link").contentValue;
                        links[idisplayOrder] = <div className="columnar-links-panel-column-item">
                                                    <a href={ilink} target="_blank" className="columnar-links-panel-column-item-link">
                                                        <span>{icaption}</span>
                                                    </a>
                                                </div>
                    }
                }
                cols[displayOrder] = <div className="columnar-links-panel-column">
                                        {colContent}
                                        {links}
                                    </div>;
            }
        }


        return <div className="columnar-links-panel">
                    {cols}
                </div>
    }

}

manywho.component.register('ColumnarLinksPanel', ColumnarLinksPanel);

export default ColumnarLinksPanel;