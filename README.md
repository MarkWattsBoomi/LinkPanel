# Columnar Links Panel

A component that displays a columnised list of links.

The columns displayed and their items are set in the component's datasource.

Each column header and child link can have a "Link" property set to add a Uri to and it becomes clickable.

Columns are spread evenly across the container and link items are stacked vertically below their parent then aligned to the left.

The component can be styled using classes on the parent container.


## Setup

- Grab the files from the /dist folder and import into your tenant.

- Add the files to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/LinksPanel.css',
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/LinksPanel.js'
                ],


- Add a component to your page, any type, save it then change it's "componentType" to "ColumnarLinksPanel" in the metadata editor and save it.
e.g. 
            "componentType": "ColumnarLinksPanel",

- Create a new type called "LinkItem" which has two string properties "Caption" & "Link" and a numeric property called "Display Order".

- Create a new type called "LinkItemGroup" which string properties called "Caption" and "Link", a numeric property called "Display Order" and a list of LinkItem property called "Children".

- Create a new value of type List of type LinkGroupItem and populate it with your link groups and items. 

- Set the component's "DataSource" to a the new Value. 


## Extra Configuration

You can add attributes to the component to control it's appearance: -
