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
    [mode]="view"
    [instance]="instance"
    [template]="template"
  ></cedar-form> 
```

using parameters:
1. instance - The CEDAR JSON-LD instance to view
2. template - the CEDAR Template, Template-element or Template-field to be used
