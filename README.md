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

## Resources

The embedding application should place the language files under `/assets/i18n-cav`.


## To use the cedar-form web component in your app

Here is an example of how you would call it from your Angular app to display a CEDAR field, element or template:

```       
  <cedar-artifact-viewer
    [config]="cavConfig"
    [templateObject]="template"
  ></cedar-artifact-viewer>
```

If you want to show an instance, you need to pass in both the template and the instance:

```       
    <cedar-artifact-viewer
      [config]="cavConfig"
      [templateObject]="template"
      [instanceObject]="instance"
    ></cedar-artifact-viewer>
```

using parameters:

1. instance - The CEDAR JSON-LD instance to view
2. template - the CEDAR Template, Template-element or Template-field to be used
3. cavConfig - config object. Possible values are:

| Name                           | Type    | Default Value | Description                                                                                                                          |
|--------------------------------|---------|---------------|--------------------------------------------------------------------------------------------------------------------------------------|
| showTemplateData               | boolean | false         | Show template JSON below the form                                                                                                    |
| showInstanceData               | boolean | false         | Show instance JSON below the form                                                                                                    |
| defaultLanguage                | str     | en            | Default language code for UI labels                                                                                                  | 
| fallbackLanguage               | str     | en            | Fallback language code for UI labels                                                                                                 | 
| sampleTemplateLocationPrefix   | URL     | None          | URL to the sample templates. One possible value is http://localhost:4240/cedar-embeddable-editor-sample-templates/                   |
| loadSampleTemplateName         | str     | None          | Which sample template should be loaded                                                                                               |
| showSampleTemplateLinks        | boolean | false         | Show sample template chooser in header and below the form                                                                            |
| expandedSampleTemplateLinks    | boolean | false         | Expand sample template chooser below the form                                                                                        |
| showHeader                     | boolean | false         | Show app header                                                                                                                      |
| showFooter                     | boolean | false         | Show app footer                                                                                                                      |
| terminologyIntegratedSearchUrl | URL     | None          | URL for CEDAR integrated search endpoint. One possible value is: https://terminology.metadatacenter.orgx/bioportal/integrated-search | |

