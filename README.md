# Cedar Artifact Viewer

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4420/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## To build as web component and push to cedar-component-distribution

    cedarcli build this

or

    ng build --configuration=production
    cat dist/cedar-artifact-viewer/{runtime,polyfills,main}.js > \
    {$CEDAR_HOME}/cedar-component-distribution/cedar-artifact-viewer/cedar-artifact-viewer-{$CEDAR_VERSION}.js

## To load in your app as web component 

```       
<script src="https://component.metadatacenter.org/cedar-artifact-viewer/cedar-artifact-viewer-{$CEDAR_VERSION}.js" type="text/javascript"></script>   
```
 
Follow the instructions for using web components for your environment.

## To use the cedar-form web component in your app 

Here is an example of how you would call it from your Angular app:

```       
  <cedar-form
    [mode]="mode"
    [instance]="instance"
    [template]="template"
    (autocomplete)="onAutocomplete($event)"
    [autocompleteResults]="allPosts"
    (formChange)="onFormChange($event)"
  ></cedar-form> 
```

using parameters:
1. mode 
    1. "edit" for full editing capability
    2. "view" for view only
2. instance - The CEDAR JSON-LD instance to view or edit.  
3. template - the CEDAR Template, Template-element or Template-field to be used
4. autocomplete - event triggered when user requests autocomplete of a controlled term dropdown
5. autocompleteResults - after the autocomplete event, caller should fill the autocompleteResult array to populate the dropdown
6. formChange - event triggered when the value of the form has changed. 
